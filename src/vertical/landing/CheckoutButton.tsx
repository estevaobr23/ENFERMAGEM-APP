"use client";

import { useEffect, type ReactNode } from "react";

const UTM_STORAGE_KEY = "revisao_utm_params";
/** IDs de clique dos anúncios e parâmetros que a Cakto/UTMify usam (além de todo utm_*). */
export const TRACKED_PARAMS = ["fbclid", "gclid", "gbraid", "wbraid", "ttclid", "msclkid", "sck", "src", "xcod"] as const;

const isTracked = (key: string) => key.startsWith("utm_") || (TRACKED_PARAMS as readonly string[]).includes(key);

function pick(search: string) {
  const found = new URLSearchParams();
  new URLSearchParams(search).forEach((value, key) => { if (value && isTracked(key)) found.set(key, value); });
  return found;
}

function readStored() {
  try {
    return new URLSearchParams(window.localStorage.getItem(UTM_STORAGE_KEY) ?? window.sessionStorage.getItem(UTM_STORAGE_KEY) ?? "");
  } catch {
    return new URLSearchParams();
  }
}

/** Guarda as UTMs da entrada (a visita pode navegar e voltar sem a query string). */
export function captureUtm(search: string) {
  if (typeof window === "undefined") return;
  const found = pick(search);
  if (!found.size) return;
  const merged = readStored();
  found.forEach((value, key) => merged.set(key, value));
  try {
    window.localStorage.setItem(UTM_STORAGE_KEY, merged.toString());
    window.sessionStorage.setItem(UTM_STORAGE_KEY, merged.toString());
  } catch { /* storage pode estar bloqueado */ }
}

/**
 * A Cakto só grava UTM/fbclid no pedido se vierem na URL do clique.
 * Junta as guardadas com as da URL atual (a atual vence) e anexa ao checkout.
 */
export function withUtm(baseUrl: string, currentSearch?: string): string {
  if (!baseUrl) return baseUrl;
  const search = currentSearch ?? (typeof window !== "undefined" ? window.location.search : "");
  const tracked = typeof window !== "undefined" && currentSearch === undefined ? readStored() : new URLSearchParams();
  pick(search).forEach((value, key) => tracked.set(key, value));
  if (!tracked.size) return baseUrl;
  const url = new URL(baseUrl);
  tracked.forEach((value, key) => url.searchParams.set(key, value));
  return url.toString();
}

/** Captura as UTMs assim que a página abre. */
export function UtmCapture() {
  useEffect(() => { captureUtm(window.location.search); }, []);
  return null;
}

export function goToCheckout(url: string) {
  window.location.assign(withUtm(url));
}

export function CheckoutButton({ url, children, className = "" }: { url: string; children: ReactNode; className?: string }) {
  useEffect(() => { captureUtm(window.location.search); }, []);
  if (!url) return <span className={`${className} cursor-not-allowed opacity-65`} aria-disabled="true" title="Checkout aguardando configuração">Checkout em configuração</span>;
  return <a href={url} className={className} onClick={(event) => { event.preventDefault(); goToCheckout(url); }}>{children}</a>;
}

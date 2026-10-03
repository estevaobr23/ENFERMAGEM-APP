"use client";

import { useEffect, type ReactNode } from "react";

const UTM_STORAGE_KEY = "revisao_utm_params";
export const TRACKED_PARAMS = ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term", "utm_id", "fbclid", "gclid", "sck", "src"] as const;

export function captureUtm(search: string) {
  if (typeof window === "undefined") return;
  const incoming = new URLSearchParams(search);
  const found = new URLSearchParams();
  for (const key of TRACKED_PARAMS) {
    const value = incoming.get(key);
    if (value) found.set(key, value);
  }
  if (!found.size) return;
  try { window.sessionStorage.setItem(UTM_STORAGE_KEY, found.toString()); } catch { /* storage pode estar bloqueado */ }
}

export function withUtm(baseUrl: string, currentSearch?: string): string {
  if (!baseUrl) return baseUrl;
  const search = currentSearch ?? (typeof window !== "undefined" ? window.location.search : "");
  const incoming = new URLSearchParams(search);
  const tracked = new URLSearchParams();
  for (const key of TRACKED_PARAMS) {
    const value = incoming.get(key);
    if (value) tracked.set(key, value);
  }
  if (!tracked.size && typeof window !== "undefined") {
    try {
      const stored = new URLSearchParams(window.sessionStorage.getItem(UTM_STORAGE_KEY) ?? "");
      for (const key of TRACKED_PARAMS) { const value = stored.get(key); if (value) tracked.set(key, value); }
    } catch { /* segue sem atribuição se storage estiver indisponível */ }
  }
  if (!tracked.size) return baseUrl;
  const url = new URL(baseUrl);
  tracked.forEach((value, key) => url.searchParams.set(key, value));
  return url.toString();
}

export function CheckoutButton({ url, children, className = "" }: { url: string; children: ReactNode; className?: string }) {
  useEffect(() => { captureUtm(window.location.search); }, []);
  if (!url) return <span className={`${className} cursor-not-allowed opacity-65`} aria-disabled="true" title="Checkout aguardando configuração">Checkout em configuração</span>;
  return <a href={url} className={className} onClick={(event) => { event.preventDefault(); window.location.assign(withUtm(url)); }}>{children}</a>;
}


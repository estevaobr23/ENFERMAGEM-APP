"use client";

import { useEffect } from "react";

/**
 * Scroll-reveal: os blocos .reveal começam visíveis no HTML (sem JS a página
 * funciona). Só quando o JS roda é que o <html> ganha .lt-js e os blocos fora
 * da tela esperam o scroll para aparecer.
 */
export function Reveal() {
  useEffect(() => {
    const root = document.documentElement;
    const els = Array.from(document.querySelectorAll<HTMLElement>(".reveal"));
    if (!("IntersectionObserver" in window) || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    // o que já está na tela fica visível desde o início
    els.forEach((el) => { if (el.getBoundingClientRect().top < window.innerHeight) el.classList.add("in"); });
    root.classList.add("lt-js");
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) { entry.target.classList.add("in"); io.unobserve(entry.target); }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -6% 0px" });
    els.forEach((el) => { if (!el.classList.contains("in")) io.observe(el); });
    return () => { io.disconnect(); root.classList.remove("lt-js"); };
  }, []);
  return null;
}

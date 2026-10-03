import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // O E2E usa 127.0.0.1 para evitar resolução IPv6 de localhost no Windows.
  allowedDevOrigins: ["127.0.0.1"],
};

export default nextConfig;

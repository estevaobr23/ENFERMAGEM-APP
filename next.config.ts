import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // O E2E usa 127.0.0.1 para evitar resolução IPv6 de localhost no Windows.
  allowedDevOrigins: ["127.0.0.1"],
  // rotas do login antigo (senha): e-mails da Cakto já enviados ainda apontam para elas
  async redirects() {
    return ["/cadastro", "/recuperar-senha", "/nova-senha"].map((source) => ({ source, destination: "/login", permanent: false }));
  },
};

export default nextConfig;

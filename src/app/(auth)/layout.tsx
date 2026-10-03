import type { ReactNode } from "react";
import { Logo } from "@/vertical/brand";
import { vertical } from "@/vertical/config";

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <main className="ruled flex min-h-dvh flex-col items-center px-4 py-8 sm:justify-center">
      <Logo className="mb-7" />
      <div className="card w-full max-w-md p-6 sm:p-8">{children}</div>
      <p className="mt-6 max-w-md text-center text-xs leading-relaxed text-body">{vertical.disclaimer}</p>
    </main>
  );
}


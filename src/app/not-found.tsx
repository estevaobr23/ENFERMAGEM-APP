import Link from "next/link";
export default function NotFound() { return <main className="grid min-h-dvh place-items-center bg-paper px-4"><div className="card max-w-md p-8 text-center"><p className="text-5xl font-black text-brand">404</p><h1 className="mt-3 text-2xl font-black">Página não encontrada</h1><p className="mt-2 text-sm text-body">Este endereço não existe ou o conteúdo não está publicado.</p><Link className="btn btn-primary mt-5" href="/">Voltar ao início</Link></div></main>; }


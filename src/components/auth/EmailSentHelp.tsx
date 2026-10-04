import { Icon } from "@/components/ui/Icon";

/**
 * Aparece assim que um e-mail de confirmação/recuperação é enviado.
 * O e-mail de teste do Supabase cai em spam com frequência — este bloco
 * ensina o passo que resolve isso sem exigir mudança de infraestrutura.
 */
export function EmailSentHelp({ email }: { email: string }) {
  return (
    <div className="mt-4 space-y-3 rounded-2xl border-2 border-brand/25 bg-hl-soft p-4">
      <div className="flex items-start gap-2.5">
        <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand text-white"><Icon name="mail" size={15} /></span>
        <div>
          <p className="text-sm font-extrabold">Enviamos para {email}</p>
          <p className="mt-0.5 text-xs leading-relaxed text-body">O e-mail pode levar alguns minutos — e, muitas vezes, cai direto no spam.</p>
        </div>
      </div>
      <ol className="space-y-2 border-t border-brand/15 pt-3 text-sm">
        <li className="flex items-start gap-2.5">
          <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white text-[11px] font-extrabold text-brand">1</span>
          <span>Abra sua caixa de entrada e espere 1 ou 2 minutos.</span>
        </li>
        <li className="flex items-start gap-2.5">
          <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white text-[11px] font-extrabold text-brand">2</span>
          <span className="flex-1">
            Não achou? Olhe a pasta <Icon name="folder" size={13} className="inline -mt-0.5 text-brand" /> <b>Spam / Lixo eletrônico</b>.
          </span>
        </li>
        <li className="flex items-start gap-2.5">
          <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white text-[11px] font-extrabold text-brand">3</span>
          <span>Achou lá? Marque como <b>&ldquo;Não é spam&rdquo;</b> — assim o próximo e-mail já chega direto.</span>
        </li>
      </ol>
    </div>
  );
}

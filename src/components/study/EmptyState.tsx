import Link from "next/link";
import { Icon, type IconName } from "@/components/ui/Icon";

export function EmptyState({ icon = "check", title, text, href, action }: { icon?: IconName; title: string; text: string; href?: string; action?: string }) {
  return (
    <div className="empty">
      <span className="empty__icon" aria-hidden><Icon name={icon} size={24} /></span>
      <h2 className="empty__title">{title}</h2>
      <p className="empty__text">{text}</p>
      {href && action && <Link href={href} className="btn btn-primary mt-5">{action} <Icon name="arrowRight" size={18} /></Link>}
    </div>
  );
}

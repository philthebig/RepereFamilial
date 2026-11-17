import type { ReactNode } from "react";
import { tx, type Locale } from "@/lib/locale";
import { ui } from "@/content/ui";

export function ExternalLink({
  href,
  locale,
  className,
  children,
}: {
  href: string;
  locale: Locale;
  className?: string;
  children: ReactNode;
}) {
  return (
    <a className={className} href={href} target="_blank" rel="noopener noreferrer">
      {children}
      <span className="visually-hidden"> {tx(locale, ui.home.newTab)}</span>
    </a>
  );
}

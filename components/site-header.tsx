"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ui } from "@/content/ui";
import { localePath, tx, type Locale } from "@/lib/locale";

const links = [
  { key: "home", href: "" },
  { key: "services", href: "/services" },
  { key: "calendar", href: "/calendrier" },
  { key: "about", href: "/a-propos" },
  { key: "contact", href: "/nous-joindre" },
] as const;

export function SiteHeader({ locale }: { locale: Locale }) {
  const pathname = usePathname();
  return <HeaderMenu key={pathname} locale={locale} pathname={pathname} />;
}

function HeaderMenu({ locale, pathname }: { locale: Locale; pathname: string }) {
  const [open, setOpen] = useState(false);
  const home = `/${locale}`;

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  function current(href: string) {
    if (href === home) return pathname === home;
    return pathname === href || pathname.startsWith(`${href}/`);
  }

  return (
    <header className="site-header">
      <div className="wrap top">
        <Link href={home} className="logo-link">
          <Image
            className="logo"
            src="/brand/logo.png"
            alt="Repère familial, Vallée-de-la-Gatineau"
            width={480}
            height={151}
            priority
          />
        </Link>
        <div className="top-tools">
          <Link className="btn donate-compact" href={`/${locale}/don`}>
            {tx(locale, ui.nav.donate)}
          </Link>
          <button
            type="button"
            className="menu-toggle"
            aria-expanded={open}
            aria-controls="nav-principale"
            onClick={() => setOpen((value) => !value)}
          >
            <span className="visually-hidden">{open ? tx(locale, ui.nav.close) : tx(locale, ui.nav.open)}</span>
            <span className="burger" aria-hidden="true" />
          </button>
        </div>
        <nav id="nav-principale" className={open ? "main is-open" : "main"} aria-label={tx(locale, ui.nav.main)}>
          {links.map((link) => {
            const href = `${home}${link.href}`;
            const label = ui.nav[link.key];
            return (
              <Link key={link.key} href={href} aria-current={current(href) ? "page" : undefined}>
                {tx(locale, label)}
              </Link>
            );
          })}
          <div className="lang" aria-label={tx(locale, ui.nav.language)}>
            {locale === "fr" ? (
              <span aria-current="true" lang="fr">
                FR
              </span>
            ) : (
              <Link href={localePath(pathname, "fr")} hrefLang="fr-CA" lang="fr">
                FR
              </Link>
            )}
            {locale === "en" ? (
              <span aria-current="true" lang="en">
                EN
              </span>
            ) : (
              <Link href={localePath(pathname, "en")} hrefLang="en-CA" lang="en">
                EN
              </Link>
            )}
          </div>
          <Link
            className="btn nav-donate"
            href={`/${locale}/don`}
            aria-current={current(`/${locale}/don`) ? "page" : undefined}
          >
            {tx(locale, ui.nav.donate)}
          </Link>
        </nav>
      </div>
    </header>
  );
}

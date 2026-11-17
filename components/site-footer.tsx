import Image from "next/image";
import Link from "next/link";
import { org } from "@/content/site";
import { ui } from "@/content/ui";
import { tx, type Locale } from "@/lib/locale";

export function SiteFooter({ locale }: { locale: Locale }) {
  const home = `/${locale}`;
  return (
    <footer className="site-footer">
      <div className="wrap foot">
        <div>
          <Image className="logo" src="/brand/logo.png" alt="" width={480} height={151} />
          <p>{tx(locale, ui.footer.tagline)}</p>
          <nav className="foot-nav" aria-label={tx(locale, ui.nav.main)}>
            <Link href={home}>{tx(locale, ui.nav.home)}</Link>
            <Link href={`${home}/services`}>{tx(locale, ui.nav.services)}</Link>
            <Link href={`${home}/calendrier`}>{tx(locale, ui.nav.calendar)}</Link>
            <Link href={`${home}/a-propos`}>{tx(locale, ui.nav.about)}</Link>
            <Link href={`${home}/nouvelles`}>{tx(locale, ui.nav.news)}</Link>
            <Link href={`${home}/don`}>{tx(locale, ui.nav.donate)}</Link>
            <Link href={`${home}/nous-joindre`}>{tx(locale, ui.nav.contact)}</Link>
          </nav>
        </div>
        <div>
          <p>
            {org.maniwaki.line}
            <br />
            {org.gracefield.line}
            <br />
            <a href={`tel:${org.phoneTel}`}>{org.phoneDisplay}</a>
            {" · "}
            <a href={`mailto:${org.email}`}>{org.email}</a>
          </p>
          <p className="foot-note">{tx(locale, ui.footer.rights)}</p>
        </div>
      </div>
    </footer>
  );
}

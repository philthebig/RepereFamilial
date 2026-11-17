import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ExternalLink } from "@/components/external-link";
import { org } from "@/content/site";
import { ui } from "@/content/ui";
import { isLocale, tx, type Locale } from "@/lib/locale";
import { pageMeta } from "@/lib/meta";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: raw } = await params;
  const locale: Locale = raw === "en" ? "en" : "fr";
  return pageMeta(locale, "/don", tx(locale, ui.donate.title), tx(locale, ui.donate.lead));
}

export default async function DonatePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale = raw;
  const copy = ui.donate;

  return (
    <main id="contenu" className="page editorial">
      <div className="wrap washi-wrap prose-block">
        <div className="don-tape" aria-hidden="true" />
        <p className="chapter">{tx(locale, copy.chapter)}</p>
        <h1>{tx(locale, copy.title)}</h1>
        <p className="stand">{tx(locale, copy.lead)}</p>
        <div className="ways">
          {copy.ways.map((way, index) => {
            const href = "href" in way ? (way.href === "once" ? org.zeffyOnce : org.zeffyMonthly) : undefined;
            return (
              <article className="way" key={tx("fr", way.title)}>
                <p className="num">{String(index + 1).padStart(2, "0")}</p>
                <div>
                  <h2>{tx(locale, way.title)}</h2>
                  <p>{tx(locale, way.body)}</p>
                  {href ? <p className="quiet">{tx(locale, copy.formNote)}</p> : null}
                </div>
                {href && "action" in way ? (
                  <div className="act">
                    <ExternalLink
                      href={href}
                      locale={locale}
                      className={way.style === "line" ? "btn btn-line" : "btn"}
                    >
                      {tx(locale, way.action)}
                    </ExternalLink>
                  </div>
                ) : null}
              </article>
            );
          })}
        </div>
        <p className="more">{tx(locale, copy.more)}</p>
        <h2>{tx(locale, copy.inKindTitle)}</h2>
        <p>{tx(locale, copy.inKind)}</p>
        <h2>{tx(locale, copy.otherTitle)}</h2>
        {copy.others.map((item) => (
          <article className="activity" key={tx("fr", item.title)}>
            <h3>{tx(locale, item.title)}</h3>
            <p>{tx(locale, item.body)}</p>
          </article>
        ))}
        <p>
          <Link className="btn" href={`/${locale}/nous-joindre`}>
            {tx(locale, copy.contact)}
          </Link>
        </p>
      </div>
    </main>
  );
}

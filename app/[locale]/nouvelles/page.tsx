import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ui } from "@/content/ui";
import { formatLongDate } from "@/lib/dates";
import { isLocale, tx, type Locale } from "@/lib/locale";
import { pageMeta } from "@/lib/meta";
import { getNews } from "@/lib/news";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: raw } = await params;
  const locale: Locale = raw === "en" ? "en" : "fr";
  return pageMeta(locale, "/nouvelles", tx(locale, ui.news.title), tx(locale, ui.news.lead));
}

export default async function NewsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale = raw;
  const items = getNews();

  return (
    <main id="contenu" className="page">
      <div className="wrap prose-block">
        <p className="anno" aria-hidden="true">
          {tx(locale, ui.news.annotation)}
        </p>
        <h1>{tx(locale, ui.news.title)}</h1>
        <p className="lead">{tx(locale, ui.news.lead)}</p>
        {items.length === 0 ? <p>{tx(locale, ui.news.empty)}</p> : null}
        <div className="cards" style={{ gridTemplateColumns: "1fr" }}>
          {items.map((item) => (
            <article className="card" key={item.slug}>
              <p className="kicker">
                <time dateTime={item.date}>{formatLongDate(item.date, locale)}</time>
              </p>
              <h2>
                <Link href={`/${locale}/nouvelles/${item.slug}`}>{tx(locale, item.title)}</Link>
              </h2>
              <p>{tx(locale, item.summary)}</p>
              <Link href={`/${locale}/nouvelles/${item.slug}`}>{tx(locale, ui.news.read)}</Link>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}

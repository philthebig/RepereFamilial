import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ExternalLink } from "@/components/external-link";
import { ui } from "@/content/ui";
import { formatLongDate } from "@/lib/dates";
import { isLocale, locales, tx, type Locale } from "@/lib/locale";
import { pageMeta } from "@/lib/meta";
import { getNews, getNewsItem } from "@/lib/news";

export function generateStaticParams() {
  return locales.flatMap((locale) => getNews().map((item) => ({ locale, slug: item.slug })));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale: raw, slug } = await params;
  const locale: Locale = raw === "en" ? "en" : "fr";
  const item = getNewsItem(slug);
  if (!item) return {};
  return pageMeta(locale, `/nouvelles/${slug}`, tx(locale, item.title), tx(locale, item.summary));
}

export default async function NewsArticlePage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale: raw, slug } = await params;
  if (!isLocale(raw)) notFound();
  const item = getNewsItem(slug);
  if (!item) notFound();
  const locale = raw;

  return (
    <main id="contenu" className="page">
      <div className="wrap prose-block">
        <p className="kicker">
          <time dateTime={item.date}>{formatLongDate(item.date, locale)}</time>
        </p>
        <h1>{tx(locale, item.title)}</h1>
        <p className="lead">{tx(locale, item.summary)}</p>
        <p>
          <ExternalLink href={item.sourceUrl} locale={locale}>
            {tx(locale, ui.news.source)}
          </ExternalLink>
        </p>
        <p>
          <Link href={`/${locale}/nouvelles`}>{tx(locale, ui.news.back)}</Link>
        </p>
      </div>
    </main>
  );
}

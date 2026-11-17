import rawNews from "@/content/news.json";
import type { Localized } from "@/lib/locale";

export type NewsItem = {
  slug: string;
  date: string;
  title: Localized;
  summary: Localized;
  sourceUrl: string;
};

export function getNews(): NewsItem[] {
  const items = rawNews as NewsItem[];
  const slugs = new Set<string>();
  for (const item of items) {
    if (!item.slug || !/^\d{4}-\d{2}-\d{2}$/.test(item.date)) {
      throw new Error(`Invalid news item ${item.slug || "(missing slug)"}`);
    }
    if (!item.title.fr || !item.title.en || !item.summary.fr || !item.summary.en) {
      throw new Error(`News item ${item.slug} needs French and English text`);
    }
    if (slugs.has(item.slug)) throw new Error(`Duplicate news slug ${item.slug}`);
    slugs.add(item.slug);
  }
  return [...items].sort((a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : 0));
}

export function getNewsItem(slug: string): NewsItem | undefined {
  return getNews().find((item) => item.slug === slug);
}

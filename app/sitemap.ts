import type { MetadataRoute } from "next";
import { services } from "@/content/services";
import { locales } from "@/lib/locale";
import { siteUrl } from "@/lib/meta";
import { getNews } from "@/lib/news";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteUrl().origin;
  const paths = [
    "",
    "/services",
    "/calendrier",
    "/a-propos",
    "/don",
    "/nous-joindre",
    "/nouvelles",
    ...services.map((service) => `/services/${service.slug}`),
    ...getNews().map((item) => `/nouvelles/${item.slug}`),
  ];
  return locales.flatMap((locale) =>
    paths.map((path) => ({
      url: `${base}/${locale}${path}`,
      lastModified: new Date("2026-11-17"),
      alternates: {
        languages: {
          "fr-CA": `${base}/fr${path}`,
          "en-CA": `${base}/en${path}`,
        },
      },
    })),
  );
}

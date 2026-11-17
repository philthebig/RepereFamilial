import type { Metadata } from "next";
import type { Locale } from "@/lib/locale";

export function siteUrl(): URL {
  const configured = process.env.NEXT_PUBLIC_SITE_URL;
  if (configured) return new URL(configured);
  return new URL("http://localhost:3000");
}

export function pageMeta(
  locale: Locale,
  path: string,
  title: string,
  description: string,
): Metadata {
  const suffix = path.startsWith("/") ? path : path ? `/${path}` : "";
  const fr = `/fr${suffix}`;
  const en = `/en${suffix}`;
  const canonical = locale === "fr" ? fr : en;
  return {
    title,
    description,
    alternates: {
      canonical,
      languages: {
        "fr-CA": fr,
        "en-CA": en,
      },
    },
    openGraph: {
      title,
      description,
      locale: locale === "fr" ? "fr_CA" : "en_CA",
      alternateLocale: locale === "fr" ? ["en_CA"] : ["fr_CA"],
      url: canonical,
      siteName: "Repère familial",
      type: "website",
    },
  };
}

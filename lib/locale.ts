export const locales = ["fr", "en"] as const;

export type Locale = (typeof locales)[number];

export function isLocale(value: string): value is Locale {
  return value === "fr" || value === "en";
}

export function htmlLang(locale: Locale): "fr-CA" | "en-CA" {
  return locale === "fr" ? "fr-CA" : "en-CA";
}

export function otherLocale(locale: Locale): Locale {
  return locale === "fr" ? "en" : "fr";
}

export type Localized = { fr: string; en: string };

export function tx(locale: Locale, value: Localized): string {
  return value[locale];
}

/** Swap /fr/... and /en/... while keeping the rest of the path and hash. */
export function localePath(pathname: string, locale: Locale): string {
  const hashIndex = pathname.indexOf("#");
  const hash = hashIndex >= 0 ? pathname.slice(hashIndex) : "";
  const path = hashIndex >= 0 ? pathname.slice(0, hashIndex) : pathname;
  const parts = path.split("/");
  if (parts[1] === "fr" || parts[1] === "en") {
    parts[1] = locale;
    return `${parts.join("/") || `/${locale}`}${hash}`;
  }
  return `/${locale}${hash}`;
}

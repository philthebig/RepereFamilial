import type { Metadata, Viewport } from "next";
import { IBM_Plex_Sans, Kalam, Newsreader, Nunito, Source_Serif_4 } from "next/font/google";
import { notFound } from "next/navigation";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { ui } from "@/content/ui";
import { htmlLang, isLocale, locales, tx, type Locale } from "@/lib/locale";
import { siteUrl } from "@/lib/meta";
import "../globals.css";

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "700", "800"],
  variable: "--font-nunito",
  display: "swap",
});

const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  weight: ["500", "600"],
  variable: "--font-serif",
  display: "swap",
});

const kalam = Kalam({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-hand",
  display: "swap",
});

const newsreader = Newsreader({
  subsets: ["latin"],
  weight: ["500", "600"],
  variable: "--font-news",
  display: "swap",
});

const plex = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-plex",
  display: "swap",
});

export const revalidate = 86400;
export const dynamicParams = false;

export const viewport: Viewport = {
  themeColor: "#fbf4eb",
  width: "device-width",
  initialScale: 1,
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: raw } = await params;
  const locale: Locale = raw === "en" ? "en" : "fr";
  return {
    metadataBase: siteUrl(),
    title: {
      default: locale === "fr" ? "Repère familial, Vallée-de-la-Gatineau" : "Repère familial, Vallée-de-la-Gatineau",
      template: "%s · Repère familial",
    },
    description: tx(locale, ui.about.lead),
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale = raw;

  return (
    <html
      lang={htmlLang(locale)}
      className={`${nunito.variable} ${sourceSerif.variable} ${kalam.variable} ${newsreader.variable} ${plex.variable}`}
    >
      <body>
        <a className="skip" href="#contenu">
          {tx(locale, ui.skip)}
        </a>
        <p className="note-demo">{tx(locale, ui.demo)}</p>
        <SiteHeader locale={locale} />
        {children}
        <SiteFooter locale={locale} />
      </body>
    </html>
  );
}

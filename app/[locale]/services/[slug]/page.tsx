import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ServiceView } from "@/components/service-view";
import { getService, services } from "@/content/services";
import { isLocale, locales, tx, type Locale } from "@/lib/locale";
import { pageMeta } from "@/lib/meta";

export function generateStaticParams() {
  return locales.flatMap((locale) => services.map((service) => ({ locale, slug: service.slug })));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale: raw, slug } = await params;
  const locale: Locale = raw === "en" ? "en" : "fr";
  const service = getService(slug);
  if (!service) return {};
  return pageMeta(locale, `/services/${slug}`, tx(locale, service.title), tx(locale, service.mission));
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale: raw, slug } = await params;
  if (!isLocale(raw)) notFound();
  const service = getService(slug);
  if (!service) notFound();
  return <ServiceView locale={raw} service={service} />;
}

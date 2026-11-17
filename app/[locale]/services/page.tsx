import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ui } from "@/content/ui";
import { doorSlugs, getService } from "@/content/services";
import { isLocale, tx, type Locale } from "@/lib/locale";
import { pageMeta } from "@/lib/meta";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: raw } = await params;
  const locale: Locale = raw === "en" ? "en" : "fr";
  return pageMeta(locale, "/services", tx(locale, ui.servicesIndex.title), tx(locale, ui.servicesIndex.lead));
}

export default async function ServicesPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale = raw;
  const doors = doorSlugs.map((slug) => getService(slug)).filter((service) => service !== undefined);

  return (
    <main id="contenu" className="page">
      <div className="wrap">
        <p className="anno" aria-hidden="true">
          {tx(locale, ui.servicesIndex.annotation)}
        </p>
        <h1>{tx(locale, ui.servicesIndex.title)}</h1>
        <p className="lead">{tx(locale, ui.servicesIndex.lead)}</p>
        <div className="cards">
          {doors.map((service) => (
            <Link className="card" href={`/${locale}/services/${service.slug}`} key={service.slug}>
              <div className={`stripe ${service.tone}`} />
              <h2>{tx(locale, service.title)}</h2>
              <p>{tx(locale, service.mission)}</p>
            </Link>
          ))}
        </div>
        <h2 style={{ marginTop: "2rem" }}>{tx(locale, ui.servicesIndex.moreTitle)}</h2>
        <div className="cards two">
          <Link className="card" href={`/${locale}/services/halte-garderie`}>
            <div className="stripe halte" />
            <h3>{tx(locale, ui.servicesIndex.halteTitle)}</h3>
            <p>{tx(locale, ui.servicesIndex.halteBody)}</p>
          </Link>
          <Link className="card" href={`/${locale}/services/services-generaux`}>
            <div className="stripe general" />
            <h3>{tx(locale, ui.servicesIndex.generalTitle)}</h3>
            <p>{tx(locale, ui.servicesIndex.generalBody)}</p>
          </Link>
        </div>
      </div>
    </main>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { ArrowSketch, HeartSketch, HouseSketch, PeopleSketch } from "@/components/sketch-icons";
import { WeekView } from "@/components/week-view";
import { org } from "@/content/site";
import { ui } from "@/content/ui";
import { todayISO } from "@/lib/dates";
import { getEvents } from "@/lib/events";
import { isLocale, tx, type Locale } from "@/lib/locale";
import { pageMeta } from "@/lib/meta";
import { notFound } from "next/navigation";

const icons = [HeartSketch, HouseSketch, PeopleSketch];
const tones = ["#f7c9b0", "#f6e08a", "#cfe6f2"];
const iconNames = {
  fr: ["Cœur", "Maison", "Personnes"],
  en: ["Heart", "House", "People"],
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: raw } = await params;
  const locale: Locale = raw === "en" ? "en" : "fr";
  const title =
    locale === "fr"
      ? "Accueil · Repère familial, Vallée-de-la-Gatineau"
      : "Home · Repère familial, Vallée-de-la-Gatineau";
  return {
    ...pageMeta(locale, "", title, tx(locale, ui.about.lead)),
    title: { absolute: title },
  };
}

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale = raw;
  const today = todayISO();
  const events = getEvents();
  const copy = ui.home;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "NonprofitOrganization",
    name: "Repère familial, Vallée-de-la-Gatineau",
    email: org.email,
    telephone: org.phoneTel,
    areaServed: org.region,
    address: [org.maniwaki, org.gracefield].map((place) => ({
      "@type": "PostalAddress",
      streetAddress: place.street,
      addressLocality: place.locality,
      addressRegion: place.region,
      postalCode: place.postal,
      addressCountry: "CA",
    })),
  };

  return (
    <main id="contenu">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <section className="hero">
        <div className="blob blob-a" aria-hidden="true" />
        <div className="blob blob-b" aria-hidden="true" />
        <div className="blob blob-c" aria-hidden="true" />
        <div className="wrap hero-inner">
          <p className="kicker">{tx(locale, copy.kicker)}</p>
          <h1>{tx(locale, copy.title)}</h1>
          <p className="lead">{tx(locale, copy.lead)}</p>
          <div className="hero-actions">
            <a className="btn" href="#calendrier">
              {tx(locale, copy.seeCalendar)}
            </a>
            <a className="btn btn-ghost" href="#lieux">
              {tx(locale, copy.contact)}
            </a>
          </div>
          <div className="illustrations">
            {icons.map((Icon, index) => (
              <div className="illo" style={{ background: tones[index] }} key={iconNames.fr[index]}>
                <Icon />
                <span className="visually-hidden">{iconNames[locale][index]}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="services">
        <div className="wrap">
          <div className="section-head">
            <h2>{tx(locale, copy.servicesTitle)}</h2>
            <p>{tx(locale, copy.servicesLead)}</p>
          </div>
          <div className="cards">
            {copy.cards.map((card) => (
              <Link className="card" href={`/${locale}/services/${card.slug}`} key={card.slug}>
                <div className={`stripe ${card.tone}`} />
                <h3>{tx(locale, card.title)}</h3>
                <p>{tx(locale, card.body)}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="calendrier">
        <div className="wrap">
          <div className="cal-head">
            <div className="section-head">
              <h2>{tx(locale, copy.weekTitle)}</h2>
            </div>
            <div className="anno-wrap">
              <span className="anno" aria-hidden="true">
                <ArrowSketch />
                {tx(locale, copy.annotation)}
              </span>
              <Link className="month-link" href={`/${locale}/calendrier`}>
                {tx(locale, copy.seeMonth)}
              </Link>
            </div>
          </div>
          <div className="cal-box">
            <span className="badge-ex">{tx(locale, copy.sample)}</span>
            <p className="cal-note">
              {locale === "fr" ? (
                <>
                  La programmation réelle n’est plus à jour sur le site actuel. Voici comment un calendrier simple
                  pourrait apparaître ici — chaque activité ci-dessous est un <strong>exemple</strong>, pas une date
                  officielle.
                </>
              ) : (
                <>
                  The real schedule on the current site is out of date. Here is how a simple calendar could look —
                  every activity below is an <strong>example</strong>, not an official date.
                </>
              )}
            </p>
            <WeekView locale={locale} today={today} events={events} />
          </div>
        </div>
      </section>

      <section className="section" id="lieux">
        <div className="wrap">
          <div className="section-head">
            <h2>{tx(locale, copy.placesTitle)}</h2>
            <p>{tx(locale, copy.placesLead)}</p>
          </div>
          <div className="places-grid">
            <article className="place">
              <h3>{tx(locale, copy.inManiwaki)}</h3>
              <p>{org.maniwaki.line}</p>
              <p>
                <a href={`tel:${org.phoneTel}`}>{org.phoneDisplay}</a>
              </p>
              <p>
                <a href={`mailto:${org.email}`}>{org.email}</a>
              </p>
            </article>
            <article className="place">
              <h3>{tx(locale, copy.inGracefield)}</h3>
              <p>{org.gracefield.line}</p>
              <p>
                {tx(locale, copy.samePhone)} <a href={`tel:${org.phoneTel}`}>{org.phoneDisplay}</a> (Maniwaki)
              </p>
              <p>{tx(locale, copy.gracefieldHalte)}</p>
            </article>
          </div>
        </div>
      </section>

      <section className="section" id="don">
        <div className="wrap">
          <div className="don-box">
            <div className="don-tape" aria-hidden="true" />
            <h2>{tx(locale, copy.giveTitle)}</h2>
            <p>
              {locale === "fr" ? (
                <>
                  Vous pouvez faire un don en ligne avec Zeffy (don unique, ou don mensuel avec Les alliés du Repère
                  familial). Vous pouvez aussi envoyer un virement Interac à <strong>{org.email}</strong> — indiquez
                  votre nom et votre adresse dans le message pour le reçu d’impôt. Les dépôts sont automatiques, sans
                  question de sécurité. <Link href={`/${locale}/don`}>{tx(locale, copy.allWays)}</Link>.
                </>
              ) : (
                <>
                  You can give online with Zeffy (a one-time gift, or a monthly gift with Les alliés du Repère
                  familial). You can also send an Interac e-transfer to <strong>{org.email}</strong> — put your name
                  and address in the message so a tax receipt can be issued. Deposits are automatic, with no security
                  question. <Link href={`/${locale}/don`}>{tx(locale, copy.allWays)}</Link>.
                </>
              )}
            </p>
            <div className="don-actions">
              <a className="btn" href={org.zeffyOnce} target="_blank" rel="noopener noreferrer">
                {tx(locale, copy.giveZeffy)}
                <span className="visually-hidden"> {tx(locale, copy.newTab)}</span>
              </a>
              <a className="btn btn-light" href={org.zeffyMonthly} target="_blank" rel="noopener noreferrer">
                {tx(locale, copy.becomeAlly)}
                <span className="visually-hidden"> {tx(locale, copy.newTab)}</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

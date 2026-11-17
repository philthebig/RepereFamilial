import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ConfirmNote } from "@/components/confirm-note";
import { ContactForm } from "@/components/contact-form";
import { org } from "@/content/site";
import { ui } from "@/content/ui";
import { isLocale, tx, type Locale } from "@/lib/locale";
import { pageMeta } from "@/lib/meta";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: raw } = await params;
  const locale: Locale = raw === "en" ? "en" : "fr";
  return pageMeta(locale, "/nous-joindre", tx(locale, ui.contact.title), tx(locale, ui.contact.lead));
}

export default async function ContactPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale = raw;

  return (
    <main id="contenu" className="page">
      <div className="wrap">
        <p className="anno" aria-hidden="true">
          {tx(locale, ui.contact.annotation)}
        </p>
        <h1>{tx(locale, ui.contact.title)}</h1>
        <p className="lead">{tx(locale, ui.contact.lead)}</p>
        <ConfirmNote locale={locale}>{tx(locale, ui.contact.hours)}</ConfirmNote>
        <div className="places-grid">
          <article className="place">
            <h2>{tx(locale, ui.home.inManiwaki)}</h2>
            <p>{org.maniwaki.line}</p>
            <p>
              <a href={`tel:${org.phoneTel}`}>{org.phoneDisplay}</a>
            </p>
            <p>
              <a href={`mailto:${org.email}`}>{org.email}</a>
            </p>
          </article>
          <article className="place">
            <h2>{tx(locale, ui.home.inGracefield)}</h2>
            <p>{org.gracefield.line}</p>
            <p>
              {tx(locale, ui.home.samePhone)} <a href={`tel:${org.phoneTel}`}>{org.phoneDisplay}</a>
            </p>
            <p>{tx(locale, ui.home.gracefieldHalte)}</p>
          </article>
        </div>
        <h2 style={{ marginTop: "2rem" }}>{tx(locale, ui.contact.formTitle)}</h2>
        <p>{tx(locale, ui.contact.formIntro)}</p>
        <ContactForm locale={locale} />
        <p>
          <a href={`mailto:${org.privacyEmail}`}>{tx(locale, ui.contact.privacy)}</a>
        </p>
      </div>
    </main>
  );
}

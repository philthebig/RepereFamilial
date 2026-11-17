import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ConfirmNote } from "@/components/confirm-note";
import { ExternalLink } from "@/components/external-link";
import { board, member, partners, reports, team, teamGroups, volunteer } from "@/content/about";
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
  return pageMeta(locale, "/a-propos", tx(locale, ui.about.title), tx(locale, ui.about.lead));
}

export default async function AboutPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale = raw;

  return (
    <main id="contenu" className="page editorial">
      <div className="wrap prose-block">
        <p className="anno" aria-hidden="true">
          {tx(locale, ui.about.annotation)}
        </p>
        <p className="chapter">{tx(locale, ui.about.chapter)}</p>
        <h1>{tx(locale, ui.about.title)}</h1>
        <p className="stand">{tx(locale, ui.about.lead)}</p>

        <section className="anchor" id="equipe">
          <h2>{tx(locale, ui.about.team)}</h2>
          {teamGroups.map((group) => {
            const people = team.filter((person) => person.group === group.id);
            if (!people.length) return null;
            return (
              <div key={group.id}>
                <h3>{tx(locale, group.title)}</h3>
                <div className="people">
                  {people.map((person) => (
                    <article className="person" key={person.name}>
                      <p className="who">{person.name}</p>
                      <p className="role">{tx(locale, person.role)}</p>
                      {person.email ? (
                        <p>
                          <a href={`mailto:${person.email}`}>{person.email}</a>
                        </p>
                      ) : null}
                      {person.confirmEmail ? (
                        <ConfirmNote locale={locale}>{tx(locale, ui.about.emailDuplicate)}</ConfirmNote>
                      ) : null}
                    </article>
                  ))}
                </div>
              </div>
            );
          })}
        </section>

        <section className="anchor" id="conseil">
          <h2>{tx(locale, ui.about.board)}</h2>
          <div className="people">
            {board.map((person) => (
              <article className="person" key={person.name}>
                <h3>{person.name}</h3>
                <p className="role">{tx(locale, person.role)}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="anchor" id="partenaires">
          <h2>{tx(locale, ui.about.partners)}</h2>
          <p>{tx(locale, partners.thanks)}</p>
          <p>{tx(locale, partners.invite)}</p>
          <ConfirmNote locale={locale}>{tx(locale, partners.coming)}</ConfirmNote>
          <p>
            <Link href={`/${locale}/nous-joindre`}>{tx(locale, ui.donate.contact)}</Link>
          </p>
        </section>

        <section className="anchor" id="membre">
          <h2>{tx(locale, ui.about.member)}</h2>
          <ConfirmNote locale={locale}>{tx(locale, member)}</ConfirmNote>
        </section>

        <section className="anchor" id="bilans">
          <h2>{tx(locale, ui.about.reports)}</h2>
          <ul className="report-list">
            {reports.map((report) => (
              <li key={report.href}>
                <ExternalLink href={report.href} locale={locale}>
                  {tx(locale, report.label)}
                </ExternalLink>
              </li>
            ))}
          </ul>
          <p className="quiet">{tx(locale, ui.about.reportsNote)}</p>
        </section>

        <section className="anchor" id="simpliquer">
          <h2>{tx(locale, ui.about.involve)}</h2>
          <h3>{tx(locale, volunteer.title)}</h3>
          <p>{tx(locale, volunteer.body)}</p>
          <p>
            <ExternalLink className="btn" href={volunteer.href} locale={locale}>
              {tx(locale, volunteer.action)}
            </ExternalLink>
          </p>
        </section>
      </div>
    </main>
  );
}

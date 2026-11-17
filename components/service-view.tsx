import Link from "next/link";
import { ui } from "@/content/ui";
import type { ServiceContent } from "@/content/services";
import { org } from "@/content/site";
import { tx, type Locale } from "@/lib/locale";

export function ServiceView({ locale, service }: { locale: Locale; service: ServiceContent }) {
  const activities = service.activities;
  const stories = service.stories ?? [];
  return (
    <main id="contenu" className="page">
      <div className="wrap prose-block">
        <p className="anno" aria-hidden="true">
          {tx(locale, ui.servicePage.annotation)}
        </p>
        <p className="kicker">{tx(locale, ui.nav.services)}</p>
        <h1>{tx(locale, service.title)}</h1>
        <div className={`stripe ${service.tone}`} />
        <h2>{tx(locale, ui.servicePage.mission)}</h2>
        <p className="lead">{tx(locale, service.mission)}</p>
        {service.quote ? (
          <blockquote className="quote">
            <p>{tx(locale, service.quote.text)}</p>
            <footer>{tx(locale, service.quote.by)}</footer>
          </blockquote>
        ) : null}
        {service.objectives?.length ? (
          <>
            <h2>{tx(locale, ui.servicePage.objectives)}</h2>
            <ul className="ink-list">
              {service.objectives.map((item) => (
                <li key={tx("fr", item)}>{tx(locale, item)}</li>
              ))}
            </ul>
          </>
        ) : null}
        {service.model ? (
          <>
            <h2>{tx(locale, service.model.title)}</h2>
            <p>{tx(locale, service.model.body)}</p>
          </>
        ) : null}
        {service.principles?.length ? (
          <>
            <h2>{tx(locale, ui.servicePage.storiesTitle)}</h2>
            <ul className="ink-list">
              {service.principles.map((item) => (
                <li key={tx("fr", item)}>{tx(locale, item)}</li>
              ))}
            </ul>
          </>
        ) : null}
        {activities.length ? (
          <>
            <h2>{tx(locale, ui.servicePage.activities)}</h2>
            <ul className="toc">
              {activities.map((activity) => (
                <li key={activity.id}>
                  <a href={`#${activity.id}`}>{tx(locale, activity.title)}</a>
                </li>
              ))}
            </ul>
            {activities.map((activity) => (
              <article className="activity anchor" id={activity.id} key={activity.id}>
                <h3>{tx(locale, activity.title)}</h3>
                <p>{tx(locale, activity.body)}</p>
              </article>
            ))}
          </>
        ) : null}
        {stories.length ? (
          <>
            {service.storiesIntro ? <p>{tx(locale, service.storiesIntro)}</p> : null}
            {stories.map((story) => (
              <article className="activity" key={story.id}>
                <h3>{tx(locale, story.title)}</h3>
                <p>{tx(locale, story.body)}</p>
              </article>
            ))}
          </>
        ) : null}
        <p>
          <a href={`tel:${org.phoneTel}`}>{org.phoneDisplay}</a>
          {" · "}
          <a href={`mailto:${org.email}`}>{org.email}</a>
        </p>
        <p>
          <Link href={`/${locale}/services`}>{tx(locale, ui.nav.services)}</Link>
        </p>
      </div>
    </main>
  );
}

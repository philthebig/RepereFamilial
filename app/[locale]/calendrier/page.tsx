import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MonthCalendar } from "@/components/month-calendar";
import { ui } from "@/content/ui";
import { formatMonthTitle, monthOf, todayISO } from "@/lib/dates";
import { getEvents } from "@/lib/events";
import { isLocale, tx, type Locale } from "@/lib/locale";
import { pageMeta } from "@/lib/meta";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: raw } = await params;
  const locale: Locale = raw === "en" ? "en" : "fr";
  return pageMeta(locale, "/calendrier", tx(locale, ui.calendar.title), tx(locale, ui.calendar.lead));
}

export default async function CalendarPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale = raw;
  const today = todayISO();
  const { year, month } = monthOf(today);
  const events = getEvents().filter((event) => event.date.startsWith(`${year}-${String(month).padStart(2, "0")}`));

  return (
    <main id="contenu" className="page">
      <div className="wrap">
        <h1>{tx(locale, ui.calendar.title)}</h1>
        <p className="lead">{tx(locale, ui.calendar.lead)}</p>
        <div className="cal-box">
          <div className="cal-top">
            <h2>{formatMonthTitle(year, month, locale)}</h2>
            <span className="badge-ex">{tx(locale, ui.calendar.sample)}</span>
          </div>
          <p className="cal-note">
            {locale === "fr" ? (
              <>
                La programmation réelle n’est plus à jour sur le site actuel (elle s’arrête à février 2025). Toutes les
                activités inscrites ci-dessous sont des <strong>exemples</strong>, pas des dates officielles.
              </>
            ) : (
              <>
                The real schedule on the current site is no longer up to date (it stops at February 2025). Every
                activity below is an <strong>example</strong>, not an official date.
              </>
            )}
          </p>
          <p className="anno" aria-hidden="true">
            {tx(locale, ui.calendar.annotation)}
          </p>
          <MonthCalendar locale={locale} year={year} month={month} today={today} events={events} />
        </div>
      </div>
    </main>
  );
}

"use client";

import { useMemo, useState } from "react";
import { locationLabels, serviceLabels } from "@/content/site";
import { filterCount, ui } from "@/content/ui";
import { daysInMonth, formatShortDate, formatTime, isoDate, leadingBlanks } from "@/lib/dates";
import { eventsOn, type CalendarEvent, type LocationId, type ServiceId } from "@/lib/events";
import { tx, type Locale } from "@/lib/locale";

export function MonthCalendar({
  locale,
  year,
  month,
  today,
  events,
}: {
  locale: Locale;
  year: number;
  month: number;
  today: string;
  events: CalendarEvent[];
}) {
  const [service, setService] = useState<ServiceId | "all">("all");
  const [place, setPlace] = useState<LocationId | "all">("all");
  const blanks = leadingBlanks(year, month);
  const total = daysInMonth(year, month);
  const dow = ui.calendar.dow[locale];

  const visible = useMemo(
    () =>
      events.filter((event) => {
        const serviceOk = service === "all" || event.service === service;
        const placeOk = place === "all" || event.location === place;
        return serviceOk && placeOk;
      }),
    [events, service, place],
  );

  const filtering = service !== "all" || place !== "all";
  const count = visible.length;

  function chipLabel(event: CalendarEvent) {
    const title = tx(locale, event.title);
    return event.time ? `${title}, ${formatTime(event.time, locale)}` : title;
  }

  return (
    <div>
      <form className="filters">
        <fieldset>
          <legend>{tx(locale, ui.calendar.service)}</legend>
          <div className="chips">
            <FilterButton pressed={service === "all"} onClick={() => setService("all")}>
              {tx(locale, ui.calendar.all)}
            </FilterButton>
            {(["maison", "peri", "pedo", "halte"] as const).map((id) => (
              <FilterButton key={id} pressed={service === id} onClick={() => setService(id)}>
                {tx(locale, serviceLabels[id])}
              </FilterButton>
            ))}
          </div>
        </fieldset>
        <fieldset>
          <legend>{tx(locale, ui.calendar.place)}</legend>
          <div className="chips">
            <FilterButton pressed={place === "all"} onClick={() => setPlace("all")}>
              {tx(locale, ui.calendar.all)}
            </FilterButton>
            {(["maniwaki", "gracefield"] as const).map((id) => (
              <FilterButton key={id} pressed={place === id} onClick={() => setPlace(id)}>
                {tx(locale, locationLabels[id])}
              </FilterButton>
            ))}
          </div>
        </fieldset>
      </form>

      <p className="legend">
        {(["maison", "peri", "pedo", "halte"] as const).map((id) => (
          <span key={id}>
            <i className={`dot tone-${id}`} />
            {tx(locale, serviceLabels[id])}
          </span>
        ))}
      </p>

      <div className="month" role="region" aria-label={tx(locale, ui.calendar.gridLabel)}>
        {dow.map((label) => (
          <div className="dow" key={label}>
            {label}
          </div>
        ))}
        {Array.from({ length: blanks }, (_, index) => (
          <div className="cell empty" key={`blank-${index}`} />
        ))}
        {Array.from({ length: total }, (_, index) => {
          const day = index + 1;
          const date = isoDate(year, month, day);
          const all = eventsOn(events, date);
          const shown = eventsOn(visible, date);
          const tone = shown[0]?.service;
          const isToday = date === today;
          return (
            <div
              key={date}
              className={`cell${isToday ? " today" : ""}${all.length && !shown.length ? " is-empty-filter" : ""}`}
              data-tone={tone}
            >
              <span className="n">{day}</span>
              {shown.map((event) => (
                <span className={`chip tone-${event.service}`} key={event.id}>
                  {chipLabel(event)}
                  <span className="ex">
                    {tx(locale, ui.calendar.example)} · {tx(locale, locationLabels[event.location])}
                  </span>
                </span>
              ))}
            </div>
          );
        })}
      </div>

      <div className="event-list">
        <h3>{tx(locale, ui.calendar.listTitle)}</h3>
        <ul>
          {visible.map((event) => {
            const time = event.time ? `, ${formatTime(event.time, locale)}` : "";
            const title = tx(locale, event.title);
            const serviceName = tx(locale, serviceLabels[event.service]);
            const extra = event.detail
              ? `, ${tx(locale, event.detail)}`
              : title === serviceName
                ? ""
                : `, ${serviceName}`;
            return (
              <li key={event.id} data-volet={event.service}>
                {formatShortDate(event.date, locale)}
                {time}
                {" — "}
                {title}
                {extra}
                {" · "}
                {tx(locale, locationLabels[event.location])}
                {" — "}
                <strong>{tx(locale, ui.calendar.example)}</strong>
              </li>
            );
          })}
        </ul>
      </div>
      <p className="status" aria-live="polite">
        {filtering ? filterCount(locale, count) : ""}
      </p>
    </div>
  );
}

function FilterButton({
  pressed,
  onClick,
  children,
}: {
  pressed: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button type="button" className="filt" aria-pressed={pressed} onClick={onClick}>
      {children}
    </button>
  );
}

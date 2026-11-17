import { locationLabels, serviceLabels } from "@/content/site";
import { ui } from "@/content/ui";
import { formatTime, formatWeekday, weekdayDates } from "@/lib/dates";
import { eventsOn, type CalendarEvent } from "@/lib/events";
import { tx, type Locale } from "@/lib/locale";

export function WeekView({
  locale,
  today,
  events,
}: {
  locale: Locale;
  today: string;
  events: CalendarEvent[];
}) {
  const days = weekdayDates(today);
  return (
    <div className="days">
      {days.map((date) => {
        const dayEvents = eventsOn(events, date);
        const isToday = date === today;
        return (
          <div className={isToday ? "day sticky" : "day"} key={date}>
            {isToday ? <span className="today-label">{tx(locale, ui.home.today)}</span> : null}
            <strong>{formatWeekday(date, locale)}</strong>
            {dayEvents.map((event) => {
              const time = event.time ? formatTime(event.time, locale) : null;
              const title = tx(locale, event.title);
              const place = tx(locale, locationLabels[event.location]);
              const detail = event.detail
                ? `${tx(locale, event.detail)}, ${place}`
                : event.service === "halte"
                  ? place
                  : tx(locale, serviceLabels[event.service]);
              return (
                <p className={`evt ${event.service}`} key={event.id}>
                  {time ? `${time} · ${title}` : title}
                  <br />
                  {detail}
                  {event.example ? <span className="ex">{tx(locale, ui.home.example)}</span> : null}
                </p>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}

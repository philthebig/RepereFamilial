import type { Locale } from "@/lib/locale";

/** Calendar dates are civil dates in Quebec, stored as YYYY-MM-DD. */
export function todayISO(now = new Date()): string {
  return new Intl.DateTimeFormat("en-CA", {
    timeZone: "America/Toronto",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(now);
}

export function parseISODate(iso: string): Date {
  const [year, month, day] = iso.split("-").map(Number);
  return new Date(Date.UTC(year, month - 1, day));
}

export function addDays(iso: string, days: number): string {
  const date = parseISODate(iso);
  date.setUTCDate(date.getUTCDate() + days);
  return date.toISOString().slice(0, 10);
}

export function mondayOf(iso: string): string {
  const weekday = parseISODate(iso).getUTCDay();
  const delta = weekday === 0 ? -6 : 1 - weekday;
  return addDays(iso, delta);
}

/** Monday to Friday of the week that contains `iso`. */
export function weekdayDates(iso: string): string[] {
  const monday = mondayOf(iso);
  return [0, 1, 2, 3, 4].map((offset) => addDays(monday, offset));
}

export function monthOf(iso: string): { year: number; month: number } {
  const [year, month] = iso.split("-").map(Number);
  return { year, month };
}

export function daysInMonth(year: number, month: number): number {
  return new Date(Date.UTC(year, month, 0)).getUTCDate();
}

/** Blank cells before day 1 when weeks start on Monday. */
export function leadingBlanks(year: number, month: number): number {
  const weekday = new Date(Date.UTC(year, month - 1, 1)).getUTCDay();
  return weekday === 0 ? 6 : weekday - 1;
}

export function isoDate(year: number, month: number, day: number): string {
  return `${year}-${String(month).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
}

function capitalize(locale: Locale, value: string): string {
  return value.charAt(0).toLocaleUpperCase(locale === "fr" ? "fr-CA" : "en-CA") + value.slice(1);
}

export function formatWeekday(iso: string, locale: Locale): string {
  const label = new Intl.DateTimeFormat(locale === "fr" ? "fr-CA" : "en-CA", {
    weekday: "long",
    timeZone: "UTC",
  }).format(parseISODate(iso));
  return capitalize(locale, label);
}

export function formatMonthTitle(year: number, month: number, locale: Locale): string {
  const label = new Intl.DateTimeFormat(locale === "fr" ? "fr-CA" : "en-CA", {
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(Date.UTC(year, month - 1, 1)));
  return capitalize(locale, label);
}

export function formatShortDate(iso: string, locale: Locale): string {
  return new Intl.DateTimeFormat(locale === "fr" ? "fr-CA" : "en-CA", {
    day: "numeric",
    month: "short",
    timeZone: "UTC",
  }).format(parseISODate(iso));
}

export function formatLongDate(iso: string, locale: Locale): string {
  const label = new Intl.DateTimeFormat(locale === "fr" ? "fr-CA" : "en-CA", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  }).format(parseISODate(iso));
  return capitalize(locale, label);
}

/** French clock style from the mockup: "10 h", "13 h 30", "9 h 30". */
export function formatTime(time: string, locale: Locale): string {
  const [hourRaw, minuteRaw] = time.split(":");
  const hour = Number(hourRaw);
  const minute = Number(minuteRaw);
  if (locale === "fr") {
    return minute ? `${hour} h ${String(minute).padStart(2, "0")}` : `${hour} h`;
  }
  const suffix = hour >= 12 ? "p.m." : "a.m.";
  const hour12 = hour % 12 || 12;
  return minute ? `${hour12}:${String(minute).padStart(2, "0")} ${suffix}` : `${hour12} ${suffix}`;
}

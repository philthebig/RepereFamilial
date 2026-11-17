import rawEvents from "@/content/events.json";
import type { Localized } from "@/lib/locale";

export const serviceIds = ["maison", "peri", "pedo", "halte"] as const;
export const locationIds = ["maniwaki", "gracefield"] as const;

export type ServiceId = (typeof serviceIds)[number];
export type LocationId = (typeof locationIds)[number];

export type CalendarEvent = {
  id: string;
  date: string;
  time?: string;
  service: ServiceId;
  location: LocationId;
  title: Localized;
  detail?: Localized;
  example: boolean;
};

function assertEvent(value: CalendarEvent): void {
  if (!value.id || !/^\d{4}-\d{2}-\d{2}$/.test(value.date)) {
    throw new Error(`Invalid event date for ${value.id || "unknown event"}`);
  }
  if (!serviceIds.includes(value.service) || !locationIds.includes(value.location)) {
    throw new Error(`Invalid service or location on ${value.id}`);
  }
  if (!value.title?.fr || !value.title?.en) {
    throw new Error(`Event ${value.id} needs a French and an English title`);
  }
  if (value.time && !/^\d{2}:\d{2}$/.test(value.time)) {
    throw new Error(`Event ${value.id} has a time that is not HH:MM`);
  }
}

export function getEvents(): CalendarEvent[] {
  const events = rawEvents as CalendarEvent[];
  const ids = new Set<string>();
  for (const event of events) {
    assertEvent(event);
    if (ids.has(event.id)) throw new Error(`Duplicate event id ${event.id}`);
    ids.add(event.id);
  }
  return events;
}

export function eventsOn(events: CalendarEvent[], date: string): CalendarEvent[] {
  return events.filter((event) => event.date === date);
}

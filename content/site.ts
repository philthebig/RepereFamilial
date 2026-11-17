import type { Localized } from "@/lib/locale";

export const org = {
  name: "Repère familial",
  legalName: "Repère familial - Vallée-de-la-Gatineau",
  region: "Vallée-de-la-Gatineau",
  phoneDisplay: "819-441-0282",
  phoneTel: "+18194410282",
  email: "info@reperefamilial.com",
  privacyEmail: "rprp@reperefamilial.com",
  currentSite: "https://reperefamilial.com/index.php/fr/",
  zeffyOnce:
    "https://www.zeffy.com/fr-CA/donation-form/donner-pour-appuyer-la-mission-du-centre-de-pediatrie-sociale",
  zeffyMonthly: "https://www.zeffy.com/fr-CA/donation-form/les-allies-du-repere-familial-2",
  volunteerForm:
    "https://docs.google.com/forms/d/e/1FAIpQLSdvWOjM5p-lPlOwEao70c-H-FArzGgsGK6LR_M5XhyJGfY-XA/viewform",
  maniwaki: {
    street: "251 rue Cartier",
    locality: "Maniwaki",
    region: "QC",
    postal: "J9E 1R4",
    line: "251 rue Cartier, Maniwaki, QC, J9E 1R4",
  },
  gracefield: {
    street: "42 rue St-Joseph",
    locality: "Gracefield",
    region: "QC",
    postal: "J0X 1W0",
    line: "42 rue St-Joseph, Gracefield, QC, J0X 1W0",
  },
} as const;

export const serviceLabels: Record<"maison" | "peri" | "pedo" | "halte", Localized> = {
  maison: { fr: "Maison de la famille", en: "Family house" },
  peri: { fr: "Périnatalité", en: "Perinatal" },
  pedo: { fr: "Pédiatrie sociale", en: "Social pediatrics" },
  halte: { fr: "Halte-garderie", en: "Drop-in daycare" },
};

export const locationLabels: Record<"maniwaki" | "gracefield", Localized> = {
  maniwaki: { fr: "Maniwaki", en: "Maniwaki" },
  gracefield: { fr: "Gracefield", en: "Gracefield" },
};

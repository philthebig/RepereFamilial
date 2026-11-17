import type { Localized } from "@/lib/locale";
import { org } from "@/content/site";

export type TeamGroup = "direction" | "pedo" | "maison" | "halte" | "entretien" | "ecrire";

export type Person = {
  name: string;
  role: Localized;
  email?: string;
  group: TeamGroup;
  confirmEmail?: boolean;
};

export const teamGroups: { id: TeamGroup; title: Localized }[] = [
  { id: "direction", title: { fr: "Direction et accueil", en: "Direction and reception" } },
  { id: "pedo", title: { fr: "Pédiatrie sociale", en: "Social pediatrics" } },
  {
    id: "maison",
    title: { fr: "Maison de la famille et périnatalité", en: "Family house and perinatal" },
  },
  { id: "halte", title: { fr: "Halte-garderie", en: "Drop-in daycare" } },
  { id: "entretien", title: { fr: "Entretien", en: "Housekeeping" } },
  { id: "ecrire", title: { fr: "Pour nous écrire", en: "Writing to us" } },
];

export const team: Person[] = [
  {
    name: "Jessica Lamoureux",
    role: { fr: "Directrice générale", en: "Executive director" },
    email: "jlamoureux@reperefamilial.com",
    group: "direction",
  },
  {
    name: "Nadia Guertin",
    role: { fr: "Directrice adjointe", en: "Assistant director" },
    email: "nguertin@reperefamilial.com",
    group: "direction",
  },
  {
    name: "Nathalie Coulombe",
    role: { fr: "Adjointe administrative", en: "Administrative assistant" },
    email: "ncoulombe@reperefamilial.com",
    group: "direction",
  },
  {
    name: "Marie-Claude Ménard",
    role: { fr: "Adjointe administrative", en: "Administrative assistant" },
    email: "mcmenard@reperefamilial.com",
    group: "direction",
  },
  {
    name: "Mélanie Renaud",
    role: { fr: "Préposée à l’accueil", en: "Reception" },
    email: "mrenaud@reperefamilial.com",
    group: "direction",
  },
  {
    name: "Dre Jacinthe Paradis",
    role: { fr: "Directrice clinique, volet pédiatrie sociale", en: "Clinical director, social pediatrics" },
    group: "pedo",
  },
  {
    name: "Dre Pascale Monfette",
    role: { fr: "Docteure, volet pédiatrie sociale", en: "Physician, social pediatrics" },
    group: "pedo",
  },
  {
    name: "Dre Annie Ouellette",
    role: { fr: "Médecin, volet pédiatrie sociale", en: "Physician, social pediatrics" },
    group: "pedo",
  },
  {
    name: "Madeleine Vincent",
    role: { fr: "Coordonnatrice, volet pédiatrie sociale", en: "Coordinator, social pediatrics" },
    email: "mvincent@reperefamilial.com",
    group: "pedo",
  },
  {
    name: "Maryse Carle Fortin",
    role: {
      fr: "Responsable des suivis cliniques, psychoéducatrice, volet pédiatrie sociale",
      en: "Clinical follow-up lead, psychoeducator, social pediatrics",
    },
    email: "mcfortin@reperefamilial.com",
    group: "pedo",
  },
  {
    name: "Sophie Tremblay",
    role: { fr: "Intervenante, volet pédiatrie sociale", en: "Practitioner, social pediatrics" },
    email: "stremblay@reperefamilial.com",
    group: "pedo",
  },
  {
    name: "Rebecca Lafontaine",
    role: {
      fr: "Responsable de suivis de clinique, travailleuse sociale, volet pédiatrie sociale",
      en: "Clinical follow-up lead, social worker, social pediatrics",
    },
    email: "rlafontaine@reperefamilial.com",
    group: "pedo",
  },
  {
    name: "Isabelle Roy Bruyère",
    role: {
      fr: "Responsable de suivis cliniques, technicienne en éducation spécialisée, volet pédiatrie sociale",
      en: "Clinical follow-up lead, special education technician, social pediatrics",
    },
    email: "iroybruyere@reperefamilial.com",
    group: "pedo",
  },
  {
    name: "Cynthia Lyrette",
    role: { fr: "Accompagnatrice familiale, volet pédiatrie sociale", en: "Family support worker, social pediatrics" },
    email: "clyrette@reperefamilial.com",
    group: "pedo",
  },
  {
    name: "Molly Carle-Duquette",
    role: { fr: "Animatrice, volet pédiatrie sociale", en: "Facilitator, social pediatrics" },
    email: "mcduquette@reperefamilial.com",
    group: "pedo",
  },
  {
    name: "Rosalie Guérette",
    role: { fr: "Animatrice, volet pédiatrie sociale", en: "Facilitator, social pediatrics" },
    email: "iroybruyere@reperefamilial.com",
    group: "pedo",
    confirmEmail: true,
  },
  {
    name: "Yannie Lafontaine",
    role: {
      fr: "Animatrice et responsable du programme PACE, volet Maison de la famille",
      en: "Facilitator and PACE program lead, Maison de la famille",
    },
    email: "ylafontaine@reperefamilial.com",
    group: "maison",
  },
  {
    name: "Marianne Marois Vachon",
    role: {
      fr: "Animatrice en périnatalité, volet Maison de la famille et Centre de ressources périnatales",
      en: "Perinatal facilitator, Maison de la famille and perinatal resource centre",
    },
    email: "mmvachon@reperefamilial.com",
    group: "maison",
  },
  {
    name: "Marie-Claude Chénard",
    role: { fr: "Animatrice, volet Maison de la famille", en: "Facilitator, Maison de la famille" },
    email: "mcchenard@reperefamilial.com",
    group: "maison",
  },
  {
    name: "Mélissa Gagnon",
    role: { fr: "Éducatrice, halte-garderie de Maniwaki", en: "Educator, Maniwaki drop-in daycare" },
    email: "mpgagnon@reperefamilial.com",
    group: "halte",
  },
  {
    name: "Roxanne Séguin",
    role: { fr: "Éducatrice, halte-garderie de Gracefield", en: "Educator, Gracefield drop-in daycare" },
    email: "rseguin@reperefamilial.com",
    group: "halte",
  },
  {
    name: "Jacob Raby",
    role: { fr: "Préposé à l’entretien ménager", en: "Housekeeping" },
    email: "jraby@reperefamilial.com",
    group: "entretien",
  },
  {
    name: "Protection des renseignements personnels",
    role: { fr: "Responsable", en: "Privacy officer" },
    email: "rprp@reperefamilial.com",
    group: "ecrire",
  },
  {
    name: "Réception",
    role: { fr: "Pour toute question d’ordre général", en: "For any general question" },
    email: "info@reperefamilial.com",
    group: "ecrire",
  },
];

export const board: { name: string; role: Localized }[] = [
  { name: "Marie-Michèle Blais", role: { fr: "Présidente", en: "President" } },
  { name: "Meggy Courchaine", role: { fr: "Administratrice", en: "Board member" } },
  { name: "Megan Houle", role: { fr: "Administratrice", en: "Board member" } },
  { name: "Nancy Côté", role: { fr: "Administratrice", en: "Board member" } },
  { name: "Jacinthe Paradis", role: { fr: "Secrétaire-trésorière", en: "Secretary-treasurer" } },
  { name: "Frédérik Lafontaine", role: { fr: "Administratrice", en: "Board member" } },
];

export const partners = {
  thanks: {
    fr: "Merci à tous nos précieux partenaires! Nous exprimons notre profonde gratitude à tous nos partenaires pour leur soutien inestimable. Leur contribution permet au Centre de pédiatrie sociale du Repère familial d’accompagner chaque enfant vivant en contexte de vulnérabilité à son rythme et selon ses besoins, en prévenant, réduisant ou éliminant les sources de stress qui peuvent affecter son développement et son bien-être.",
    en: "Thank you to every partner. Their support lets the social pediatrics centre at Le Repère familial walk with each child living in a vulnerable situation, at the child’s pace and according to their needs, by preventing, reducing, or removing sources of stress that can affect development and well-being.",
  } satisfies Localized,
  invite: {
    fr: "Vous souhaitez rejoindre la cause? Nous serions ravis de discuter des différentes options de partenariat.",
    en: "Want to join the cause? We would be glad to talk about ways to partner.",
  } satisfies Localized,
  coming: {
    fr: "La liste des partenaires est marquée « À venir » sur le site actuel. Aucun nom n’y est publié.",
    en: "The partner list is marked “Coming soon” on the current site. No names are published there.",
  } satisfies Localized,
};

export const member = {
  fr: "La page « Fier membre » du site actuel ne contient que la mention « À venir ».",
  en: "The “Proud member” page on the current site only says “Coming soon”.",
} satisfies Localized;

export const reports: { label: Localized; href: string }[] = [
  {
    label: { fr: "Rapport annuel 2024-2025", en: "Annual report 2024–2025" },
    href: "https://reperefamilial.com/images/Rapport_annuel_2024-2025_-_Repe\u0300re_familial_1.pdf",
  },
  {
    label: { fr: "Bilan financier 2024-2025", en: "Financial statements 2024–2025" },
    href: "https://reperefamilial.com/images/Rapport_financier_31_mars_2025-Sign\u00e9.pdf",
  },
  {
    label: { fr: "Rapport annuel 2023-2024", en: "Annual report 2023–2024" },
    href: "https://reperefamilial.com/images/Rapport_annuel_2023-2024_-_Maison_de_la_famille_F.pdf",
  },
  {
    label: { fr: "Rapport annuel 2022-2023", en: "Annual report 2022–2023" },
    href: "https://reperefamilial.com/images/Rapport_annuel_2022-2023_-_Maison_de_la_famille_1.pdf",
  },
  {
    label: { fr: "Rapport annuel 2021-2022", en: "Annual report 2021–2022" },
    href: "https://reperefamilial.com/images/Rapport-annuel-2021-2022.pdf",
  },
];

export const volunteer = {
  title: { fr: "Soutenir et accompagner les familles", en: "Supporting families" },
  body: {
    fr: "Le dévouement des bénévoles est le cœur de l’organisation. Grâce à leur aide, la mission peut se faire concrètement dans la communauté. Le Repère familial est toujours à la recherche de personnes qui veulent offrir de leur temps et mettre leurs compétences à profit.",
    en: "Volunteers are at the heart of the organization. Their help is how the mission shows up in the community. Le Repère familial is always looking for people who want to give time and use what they know.",
  } satisfies Localized,
  action: { fr: "Rejoindre le cercle de protection", en: "Join the circle of care" },
  href: org.volunteerForm,
};

export const ui = {
  skip: { fr: "Aller au contenu", en: "Skip to content" },
  demo: {
    fr: "Aperçu de démonstration — pas encore le site en ligne",
    en: "Demonstration preview — not the live site yet",
  },
  nav: {
    home: { fr: "Accueil", en: "Home" },
    services: { fr: "Services", en: "Services" },
    calendar: { fr: "Calendrier", en: "Calendar" },
    about: { fr: "À propos", en: "About" },
    contact: { fr: "Nous joindre", en: "Contact" },
    news: { fr: "Nouvelles", en: "News" },
    donate: { fr: "Je donne", en: "Donate" },
    main: { fr: "Principale", en: "Main" },
    language: { fr: "Langue", en: "Language" },
    open: { fr: "Ouvrir le menu", en: "Open menu" },
    close: { fr: "Fermer le menu", en: "Close menu" },
    french: { fr: "Français", en: "French" },
    english: { fr: "Anglais", en: "English" },
  },
  home: {
    kicker: { fr: "Maniwaki et Gracefield", en: "Maniwaki and Gracefield" },
    title: {
      fr: "On est là pour votre famille, de la conception à l’âge adulte.",
      en: "We’re here for your family, from conception through adulthood.",
    },
    lead: {
      fr: "Chaque famille est unique, chaque parcours est précieux. Le Repère familial accompagne tous les membres de la famille, ici, dans la Vallée-de-la-Gatineau.",
      en: "Every family is unique, and every path matters. Le Repère familial walks with every member of the family, here in the Vallée-de-la-Gatineau.",
    },
    seeCalendar: { fr: "Voir le calendrier", en: "See the calendar" },
    contact: { fr: "Nous joindre", en: "Contact us" },
    servicesTitle: { fr: "Trois portes d’entrée, une même maison", en: "Three doors, one house" },
    servicesLead: {
      fr: "On rassemble la Maison de la famille, le Centre de ressources périnatales et le Centre de pédiatrie sociale en communauté.",
      en: "We bring together the Maison de la famille, the perinatal resource centre, and the community social pediatrics centre.",
    },
    cards: [
      {
        tone: "maison" as const,
        slug: "maison-de-la-famille",
        title: { fr: "Maison de la famille", en: "Family house" },
        body: {
          fr: "Un espace bienveillant où le partage, l’entraide et l’accès à l’information aident à traverser les défis — et les joies — de la parentalité. Ateliers, rencontres entre parents, moments en famille.",
          en: "A caring place where sharing, mutual help, and clear information make it easier to move through the hard parts — and the joys — of parenting. Workshops, parent meetups, and time together as a family.",
        },
      },
      {
        tone: "peri" as const,
        slug: "perinatalite",
        title: { fr: "Centre de ressources périnatales", en: "Perinatal resource centre" },
        body: {
          fr: "Un accompagnement personnalisé et des ressources pour les étapes de la grossesse, de la naissance et des premiers mois de vie de l’enfant.",
          en: "Personal support and resources for pregnancy, birth, and the first months of a child’s life.",
        },
      },
      {
        tone: "pedo" as const,
        slug: "pediatrie-sociale",
        title: { fr: "Centre de pédiatrie sociale", en: "Social pediatrics centre" },
        body: {
          fr: "En synergie avec les familles et la communauté, on accompagne chaque enfant vivant en contexte de vulnérabilité, à son rythme et selon ses besoins.",
          en: "Alongside families and the community, we support each child living in a vulnerable situation, at their pace and according to their needs.",
        },
      },
    ],
    weekTitle: { fr: "Cette semaine, en un coup d’œil", en: "This week, at a glance" },
    annotation: { fr: "le calendrier, juste à côté", en: "the calendar, right beside this" },
    seeMonth: { fr: "Voir le mois", en: "See the month" },
    sample: { fr: "Aperçu d’exemple", en: "Sample preview" },
    weekNote: {
      fr: "La programmation réelle n’est plus à jour sur le site actuel. Voici comment un calendrier simple pourrait apparaître ici — chaque activité ci-dessous est un exemple, pas une date officielle.",
      en: "The real schedule on the current site is out of date. Here is how a simple calendar could look — every activity below is an example, not an official date.",
    },
    today: { fr: "Aujourd’hui", en: "Today" },
    example: { fr: "Exemple", en: "Example" },
    placesTitle: { fr: "Deux lieux, un même numéro", en: "Two places, one phone number" },
    placesLead: {
      fr: "Les horaires officiels ne sont pas encore affichés sur le site actuel; on les ajoutera dès qu’ils seront confirmés.",
      en: "Official hours are not on the current site yet. We will add them as soon as they are confirmed.",
    },
    inManiwaki: { fr: "À Maniwaki", en: "In Maniwaki" },
    inGracefield: { fr: "À Gracefield", en: "In Gracefield" },
    samePhone: { fr: "Même téléphone :", en: "Same phone:" },
    gracefieldHalte: {
      fr: "Halte-garderie aussi offerte sur place.",
      en: "Drop-in daycare is offered here too.",
    },
    giveTitle: { fr: "Donner, concrètement", en: "Giving, in practical terms" },
    giveBody: {
      fr: "Vous pouvez faire un don en ligne avec Zeffy (don unique, ou don mensuel avec Les alliés du Repère familial). Vous pouvez aussi envoyer un virement Interac à info@reperefamilial.com — indiquez votre nom et votre adresse dans le message pour le reçu d’impôt. Les dépôts sont automatiques, sans question de sécurité.",
      en: "You can give online with Zeffy (a one-time gift, or a monthly gift with Les alliés du Repère familial). You can also send an Interac e-transfer to info@reperefamilial.com — put your name and address in the message so a tax receipt can be issued. Deposits are automatic, with no security question.",
    },
    allWays: { fr: "Toutes les façons de donner", en: "All the ways to give" },
    giveZeffy: { fr: "Donner avec Zeffy", en: "Give with Zeffy" },
    becomeAlly: { fr: "Devenir un Allié (mensuel)", en: "Become an Ally (monthly)" },
    newTab: { fr: "(ouvre un nouvel onglet)", en: "(opens a new tab)" },
  },
  calendar: {
    title: { fr: "Le calendrier du mois", en: "This month’s calendar" },
    lead: {
      fr: "La vue de la semaine est sur l’accueil. Ici, le mois au complet, coloré par volet, à filtrer selon ce que vous cherchez.",
      en: "The week view is on the home page. Here, the whole month, coloured by service, filtered to what you are looking for.",
    },
    sample: { fr: "Aperçu d’exemple", en: "Sample preview" },
    note: {
      fr: "La programmation réelle n’est plus à jour sur le site actuel (elle s’arrête à février 2025). Toutes les activités inscrites ci-dessous sont des exemples, pas des dates officielles.",
      en: "The real schedule on the current site is no longer up to date (it stops at February 2025). Every activity below is an example, not an official date.",
    },
    annotation: { fr: "à remplacer par vos vraies dates", en: "to be replaced with your real dates" },
    service: { fr: "Volet", en: "Service" },
    place: { fr: "Lieu", en: "Place" },
    all: { fr: "Tous", en: "All" },
    example: { fr: "Exemple", en: "Example" },
    listTitle: { fr: "Activités d’exemple, en liste", en: "Sample activities, as a list" },
    gridLabel: { fr: "Calendrier d’exemple", en: "Sample calendar" },
    dow: {
      fr: ["Lun", "Mar", "Mer", "Jeu", "Ven", "Sam", "Dim"],
      en: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    },
    empty: {
      fr: "Aucun exemple ne correspond à ces filtres.",
      en: "No sample activities match these filters.",
    },
  },
  donate: {
    chapter: { fr: "Faire un don", en: "Give" },
    title: { fr: "Un don, plusieurs façons.", en: "One gift, several ways." },
    lead: {
      fr: "Vous pouvez soutenir le Repère familial en ligne, par virement ou par chèque. Un reçu d’impôt est possible dès que votre nom et votre adresse sont indiqués.",
      en: "You can support Le Repère familial online, by e-transfer, or by cheque. A tax receipt is possible as soon as your name and address are included.",
    },
    ways: [
      {
        title: { fr: "Don unique, avec Zeffy", en: "One-time gift, with Zeffy" },
        body: {
          fr: "Un don en ligne, une seule fois, via le formulaire Zeffy du Repère familial. Zeffy est gratuit : 100 % du don va aux services. Vous pouvez, si vous le voulez, ajouter un montant pour soutenir la plateforme.",
          en: "An online gift, once, through Le Repère familial’s Zeffy form. Zeffy is free: 100% of the gift goes to the services. You can add an optional amount to support the platform.",
        },
        action: { fr: "Donner avec Zeffy", en: "Give with Zeffy" },
        href: "once" as const,
        style: "fill" as const,
      },
      {
        title: { fr: "Les alliés du Repère familial", en: "Les alliés du Repère familial" },
        body: {
          fr: "Un don mensuel, aussi via Zeffy, pour soutenir la mission tout au long de l’année. Les versements sont automatiques; vous pouvez les modifier ou les annuler en tout temps. Un seul reçu fiscal est émis pour l’année.",
          en: "A monthly gift, also through Zeffy, to support the mission all year. Payments are automatic; you can change or cancel them at any time. One tax receipt is issued for the year.",
        },
        action: { fr: "Devenir un Allié", en: "Become an Ally" },
        href: "monthly" as const,
        style: "line" as const,
      },
      {
        title: { fr: "Virement Interac", en: "Interac e-transfer" },
        body: {
          fr: "Au courriel info@reperefamilial.com. Inscrivez votre nom et votre adresse dans le message, pour le reçu d’impôt. Pas de question de sécurité; les dépôts sont automatiques.",
          en: "To info@reperefamilial.com. Put your name and address in the message so a tax receipt can be issued. No security question; deposits are automatic.",
        },
      },
      {
        title: { fr: "Par chèque", en: "By cheque" },
        body: {
          fr: "À l’ordre de Repère familial - Vallée-de-la-Gatineau, à poster au 251 rue Cartier, Maniwaki, QC, J9E 1R4. Le chèque peut aussi être remis sur place.",
          en: "Payable to Repère familial - Vallée-de-la-Gatineau, mailed to 251 rue Cartier, Maniwaki, QC, J9E 1R4. A cheque can also be dropped off in person.",
        },
      },
    ],
    more: {
      fr: "On accepte aussi les dons en nature. Le numéro d’organisme de bienfaisance ne figure pas encore sur le site actuel; on l’ajoutera dès qu’il sera confirmé.",
      en: "Gifts in kind are welcome too. The charitable registration number is not on the current site yet; we will add it once it is confirmed.",
    },
    charityLabel: { fr: "À confirmer", en: "To confirm" },
    inKindTitle: { fr: "Dons en nature", en: "Gifts in kind" },
    inKind: {
      fr: "Les dons en nature aident à réduire les dépenses d’opération, ce qui laisse plus de fonds pour les services aux enfants. Exemples publiés sur le site actuel : déneigement, fournitures pour les collations, nettoyage des véhicules, entretien intérieur et extérieur des bâtiments, produits d’entretien, création de matériel de communication (graphisme, photos, vidéos), matériel de bureau (papier, cartouches d’encre).",
      en: "Gifts in kind help lower operating costs, so more of the budget can go to services for children. Examples published on the current site: snow removal, snack supplies, vehicle cleaning, indoor and outdoor building maintenance, cleaning products, communication materials (design, photos, video), and office supplies (paper, ink cartridges).",
    },
    otherTitle: { fr: "D’autres façons de soutenir", en: "Other ways to help" },
    others: [
      {
        title: { fr: "Créer votre propre collecte de fonds", en: "Start your own fundraiser" },
        body: {
          fr: "Un défi sportif, une fête ou une autre occasion peut mobiliser votre entourage. Le site actuel invite à nous contacter pour en parler.",
          en: "A sports challenge, a celebration, or another occasion can bring your circle in. The current site invites you to contact us to talk it through.",
        },
      },
      {
        title: { fr: "Devenir partenaire d’affaires", en: "Become a business partner" },
        body: {
          fr: "Entreprises, fondations et grands donateurs sont invités à s’associer à la mission.",
          en: "Businesses, foundations, and major donors are invited to join the mission.",
        },
      },
      {
        title: { fr: "Don par retenue sur le salaire", en: "Payroll gift" },
        body: {
          fr: "Un prélèvement sur la paie, autorisé par vous, permet une contribution régulière. Le site actuel invite à nous contacter pour le mettre en place.",
          en: "A payroll deduction you authorize can become a regular gift. The current site invites you to contact us to set it up.",
        },
      },
    ],
    contact: { fr: "Nous écrire", en: "Write to us" },
    formNote: {
      fr: "Le formulaire Zeffy est en français.",
      en: "The Zeffy form is in French.",
    },
  },
  contact: {
    title: { fr: "Nous joindre", en: "Contact" },
    lead: {
      fr: "Deux adresses, un même numéro. Pour une question générale, la réception répond à info@reperefamilial.com.",
      en: "Two addresses, one phone number. For a general question, reception answers at info@reperefamilial.com.",
    },
    annotation: { fr: "écrivez-nous", en: "write to us" },
    hours: {
      fr: "Les horaires d’ouverture ne sont pas publiés sur le site actuel. On les affichera ici dès qu’ils seront confirmés.",
      en: "Opening hours are not published on the current site. They will be posted here once they are confirmed.",
    },
    confirm: { fr: "À confirmer", en: "To confirm" },
    formTitle: { fr: "Écrire un message", en: "Send a message" },
    formIntro: {
      fr: "Ce formulaire est une démonstration : il vérifie votre message, puis s’arrête. Aucun courriel n’est envoyé. Pour une réponse maintenant, appelez ou écrivez à info@reperefamilial.com.",
      en: "This form is a demonstration: it checks your message, then stops. No email is sent. For an answer now, call or write to info@reperefamilial.com.",
    },
    required: {
      fr: "Les champs marqués d’une étoile sont obligatoires.",
      en: "Fields marked with a star are required.",
    },
    name: { fr: "Nom", en: "Name" },
    email: { fr: "Courriel", en: "Email" },
    phone: { fr: "Téléphone", en: "Phone" },
    optional: { fr: "facultatif", en: "optional" },
    subject: { fr: "Sujet", en: "Subject" },
    message: { fr: "Message", en: "Message" },
    send: { fr: "Envoyer", en: "Send" },
    sending: { fr: "Envoi…", en: "Sending…" },
    successTitle: { fr: "Message bien reçu", en: "Message received" },
    success: {
      fr: "Merci. Dans cette démonstration, le message s’arrête ici : l’envoi par courriel n’est pas encore branché. Pour nous joindre maintenant, écrivez à info@reperefamilial.com ou appelez au 819-441-0282.",
      en: "Thank you. In this demonstration the message stops here: email delivery is not connected yet. To reach us now, write to info@reperefamilial.com or call 819-441-0282.",
    },
    errors: {
      name: { fr: "Indiquez votre nom.", en: "Please enter your name." },
      email: { fr: "Indiquez un courriel valide.", en: "Please enter a valid email." },
      phone: { fr: "Vérifiez le numéro de téléphone.", en: "Please check the phone number." },
      subject: { fr: "Indiquez un sujet.", en: "Please enter a subject." },
      message: { fr: "Écrivez un message d’au moins quelques mots.", en: "Please write a short message." },
      generic: {
        fr: "Le message n’a pas pu être envoyé. Réessayez, ou appelez-nous.",
        en: "The message could not be sent. Try again, or call us.",
      },
    },
    privacy: {
      fr: "Pour une question sur la protection des renseignements personnels : rprp@reperefamilial.com.",
      en: "For a privacy question: rprp@reperefamilial.com.",
    },
  },
  servicesIndex: {
    title: { fr: "Les services", en: "Services" },
    lead: {
      fr: "Trois volets sous le même toit, plus la halte-garderie et des services qui traversent la maison.",
      en: "Three branches under one roof, plus drop-in daycare and services that run through the house.",
    },
    annotation: { fr: "trois portes, une maison", en: "three doors, one house" },
    moreTitle: { fr: "Aussi dans la maison", en: "Also in the house" },
    halteTitle: { fr: "Halte-garderie", en: "Drop-in daycare" },
    halteBody: {
      fr: "Gratuite pendant un atelier, et aussi offerte aux parents d’enfants de 0 à 5 ans qui n’ont pas besoin d’une place à temps plein. À Maniwaki et à Gracefield.",
      en: "Free while you are in a workshop, and also open to parents of children from 0 to 5 who do not need full-time care. In Maniwaki and in Gracefield.",
    },
    generalTitle: { fr: "Services généraux", en: "General services" },
    generalBody: {
      fr: "Allaitement, portage, peau à peau, habits de neige, croque-livre et aide aux parents à la maison.",
      en: "Breastfeeding, babywearing, skin-to-skin, snowsuits, the book swap, and help for parents at home.",
    },
  },
  servicePage: {
    mission: { fr: "Mission", en: "Mission" },
    objectives: { fr: "Nos objectifs", en: "Our aims" },
    activities: { fr: "Ce qu’on y vit", en: "What happens here" },
    onThisPage: { fr: "Sur cette page", en: "On this page" },
    annotation: { fr: "à votre rythme", en: "at your pace" },
    ask: {
      fr: "Une question ou une inscription? 819-441-0282 ou info@reperefamilial.com.",
      en: "A question, or ready to sign up? 819-441-0282 or info@reperefamilial.com.",
    },
    storiesTitle: {
      fr: "Les 7 grands principes des droits de l’enfant",
      en: "The seven core principles of children’s rights",
    },
  },
  about: {
    chapter: { fr: "À propos", en: "About" },
    title: {
      fr: "Le Repère familial, dans la Vallée-de-la-Gatineau.",
      en: "Le Repère familial, in the Vallée-de-la-Gatineau.",
    },
    lead: {
      fr: "Le Repère familial est là pour accompagner tous les membres de la famille, de la conception à l’âge adulte.",
      en: "Le Repère familial is here to support every member of the family, from conception through adulthood.",
    },
    annotation: { fr: "les gens d’ici", en: "the people here" },
    team: { fr: "L’équipe", en: "The team" },
    board: { fr: "Conseil d’administration", en: "Board" },
    partners: { fr: "Partenaires financiers", en: "Financial partners" },
    member: { fr: "Fier membre", en: "Proud member" },
    reports: { fr: "Bilans", en: "Reports" },
    involve: { fr: "S’impliquer", en: "Get involved" },
    coming: { fr: "À venir", en: "Coming soon" },
    confirm: { fr: "À confirmer", en: "To confirm" },
    emailDuplicate: {
      fr: "Sur le site actuel, ce courriel est le même que celui d’Isabelle Roy Bruyère. À confirmer avant de l’utiliser.",
      en: "On the current site this is the same address as Isabelle Roy Bruyère’s. Confirm it before using it.",
    },
    reportsNote: {
      fr: "Les PDF restent hébergés sur le site actuel, le temps du transfert.",
      en: "The PDFs still live on the current site until they are moved.",
    },
    volunteerAction: { fr: "Remplir le formulaire", en: "Open the form" },
  },
  news: {
    title: { fr: "Nouvelles", en: "News" },
    lead: {
      fr: "La catégorie « Nouvelles et événements » du site actuel est vide. Voici les deux publications encore en ligne, datées de février 2025.",
      en: "The “News and events” category on the current site is empty. These are the two posts still online, both from February 2025.",
    },
    annotation: { fr: "ce qui est publié", en: "what’s published" },
    empty: {
      fr: "Aucune nouvelle pour le moment.",
      en: "No news for the moment.",
    },
    source: { fr: "Voir la publication actuelle", en: "See the current post" },
    read: { fr: "Lire", en: "Read" },
    back: { fr: "Toutes les nouvelles", en: "All news" },
  },
  notFound: {
    title: { fr: "Cette page est introuvable", en: "This page can’t be found" },
    body: {
      fr: "Le lien est peut-être ancien. L’accueil, le calendrier et la page pour nous joindre sont tout près.",
      en: "The link may be an old one. Home, the calendar, and the contact page are close by.",
    },
    annotation: { fr: "revenez vers l’accueil", en: "head back home" },
    home: { fr: "Retour à l’accueil", en: "Back home" },
  },
  footer: {
    tagline: { fr: "Repère familial, Vallée-de-la-Gatineau", en: "Repère familial, Vallée-de-la-Gatineau" },
    rights: {
      fr: "Organisme communautaire. Le site officiel actuel demeure reperefamilial.com.",
      en: "A community organization. The current official site remains reperefamilial.com.",
    },
  },
} as const;

export function filterCount(locale: "fr" | "en", count: number): string {
  if (count === 0) return ui.calendar.empty[locale];
  if (locale === "fr") {
    return count === 1
      ? "1 activité d’exemple affichée."
      : `${count} activités d’exemple affichées.`;
  }
  return count === 1 ? "1 sample activity shown." : `${count} sample activities shown.`;
}

export type HomeCard = (typeof ui.home.cards)[number];

import type { Localized } from "@/lib/locale";

export type Activity = {
  id: string;
  title: Localized;
  body: Localized;
};

export type ServiceTone = "maison" | "peri" | "pedo" | "halte" | "general";

export type ServiceContent = {
  slug: string;
  tone: ServiceTone;
  title: Localized;
  missionLabel?: Localized;
  mission: Localized;
  objectives?: Localized[];
  quote?: { text: Localized; by: Localized };
  model?: { title: Localized; body: Localized };
  principles?: Localized[];
  activities: Activity[];
  storiesIntro?: Localized;
  stories?: Activity[];
};

const halte: Activity = {
  id: "halte-garderie",
  title: { fr: "Halte-garderie", en: "Drop-in daycare" },
  body: {
    fr: "La halte-garderie est offerte gratuitement quand vous participez à un atelier et que vous avez besoin de faire garder un de vos enfants. Elle est aussi offerte aux parents d’enfants de 0 à 5 ans qui n’ont pas besoin d’une garderie à temps plein. Pour quelques heures, une partie de la journée ou la journée entière, le service est là. Les tarifs varient selon le nombre d’heures réservées. Le coût maximal pour une journée complète est de 12 $. Le parent fournit les collations et le repas du dîner. Un reçu d’impôt est émis à la fin de l’année. Une réservation téléphonique est requise, le plus tôt possible. Des éducatrices sont en poste à Maniwaki et à Gracefield.",
    en: "Drop-in daycare is free while you are in a workshop and need someone to look after one of your children. It is also open to parents of children from 0 to 5 who do not need full-time care. A few hours, part of the day, or a full day: the service is there. Fees depend on the hours reserved. A full day costs at most $12. Parents bring snacks and lunch. A tax receipt is issued at the end of the year. Please reserve by phone, as early as you can. Educators work in Maniwaki and in Gracefield.",
  },
};

export const services: ServiceContent[] = [
  {
    slug: "maison-de-la-famille",
    tone: "maison",
    title: { fr: "Maison de la famille", en: "Family house" },
    mission: {
      fr: "Offrir aux familles un espace bienveillant où le partage, l’entraide et l’accès à l’information facilitent la navigation des défis et des joies de la parentalité.",
      en: "Offer families a caring place where sharing, mutual help, and access to information make it easier to move through the challenges and the joys of parenting.",
    },
    objectives: [
      {
        fr: "Favoriser l’adaptation des parents à leur rôle et valoriser leurs contributions uniques.",
        en: "Help parents settle into their role, and value what each of them brings.",
      },
      {
        fr: "Encourager l’apprentissage continu et l’échange de savoirs entre les parents.",
        en: "Encourage parents to keep learning from one another.",
      },
      {
        fr: "Placer le bien-être et l’épanouissement des enfants et des parents au cœur de toutes les interventions.",
        en: "Keep the well-being of children and parents at the centre of every activity.",
      },
      {
        fr: "Favoriser l’inclusion et la reconnaissance de la diversité des structures familiales.",
        en: "Make room for the many shapes a family can take.",
      },
    ],
    activities: [
      {
        id: "cafe-rencontre",
        title: { fr: "Café-rencontre", en: "Coffee meetup" },
        body: {
          fr: "Une nouvelle rencontre, un nouveau thème. Selon les intérêts des parents, l’animatrice propose des sujets qui les touchent et dont ils ont envie de parler.",
          en: "Each gathering has a new theme. The facilitator suggests topics the parents care about and want to talk through.",
        },
      },
      {
        id: "couture",
        title: { fr: "Couture et artisanat", en: "Sewing and crafts" },
        body: {
          fr: "Des projets artistiques sont proposés, par exemple la peinture sur toile, la confection de bijoux ou une décoration d’Halloween. Le matériel de l’activité est fourni. On peut aussi apporter son propre projet. Autour de la table, les familles échangent sur leur quotidien.",
          en: "Art projects are offered — canvas painting, jewellery, a Halloween decoration, and so on. Materials for the activity are provided. You can also bring your own project. Around the table, families talk about ordinary life.",
        },
      },
      {
        id: "cuisine-collective",
        title: { fr: "Cuisine collective", en: "Collective kitchen" },
        body: {
          fr: "Ensemble, les parents mettent en commun du temps, de l’argent et des compétences pour préparer des repas économiques et appétissants. Le groupe choisit les recettes, dresse la liste d’épicerie, fait les achats, puis cuisine.",
          en: "Parents pool time, money, and skills to cook meals that are affordable and good to eat. The group picks the recipes, writes the grocery list, shops, then cooks together.",
        },
      },
      {
        id: "parents-ados",
        title: { fr: "Parents d’ados… une traversée", en: "Parents of teens: the crossing" },
        body: {
          fr: "Un atelier pour les parents d’adolescents de 12 à 17 ans. On y échange des outils pour traverser un passage qui n’est pas toujours de tout repos.",
          en: "A workshop for parents of teenagers from 12 to 17. People share tools for a stretch of life that is not always easy.",
        },
      },
      {
        id: "parler-ecouter",
        title: {
          fr: "Parler pour que les enfants écoutent, écouter pour que les enfants parlent",
          en: "How to talk so kids will listen",
        },
        body: {
          fr: "Cet atelier aide les adultes à mieux comprendre les différentes périodes de l’enfance et de l’adolescence, à réfléchir à leur position et à découvrir des outils de communication pour une relation plus harmonieuse.",
          en: "This workshop helps adults understand the different seasons of childhood and adolescence, look at their own stance, and find ways of talking that make the relationship easier.",
        },
      },
      {
        id: "pedago",
        title: { fr: "Pédago en famille", en: "Family pedagogy day" },
        body: {
          fr: "Avec leurs enfants d’âge scolaire, les familles sont invitées à bricoler, à jouer à des jeux de société, à bouger ou à échanger. Ces ateliers ont lieu durant les journées pédagogiques du calendrier scolaire.",
          en: "Families come with their school-aged children to make things, play board games, move, or simply talk. These workshops are held on pedagogical days in the school calendar.",
        },
      },
      {
        id: "repas-repit",
        title: { fr: "Repas répit", en: "Respite meal" },
        body: {
          fr: "Les familles viennent prendre un repas à coût modique, cuisiné par les animatrices. Le repas est un moment pour sortir, parler et échanger avec d’autres parents.",
          en: "Families come for a low-cost meal cooked by the facilitators. It is a chance to get out, talk, and sit with other parents.",
        },
      },
      {
        id: "estime",
        title: { fr: "Je m’estime, tu m’estimes!", en: "I value myself, you value me" },
        body: {
          fr: "Un moment pour apprendre à reconnaître ses forces et ses limites, et donc avoir une vision réaliste de soi. Une série d’ateliers pour les parents et leurs enfants de 6 à 12 ans.",
          en: "A series for parents and their children from 6 to 12, about naming strengths and limits and seeing oneself clearly.",
        },
      },
      {
        id: "encadrement",
        title: { fr: "L’encadrement, c’est sécurisant", en: "Clear limits feel safe" },
        body: {
          fr: "On échange sur les valeurs et les règles de vie à la maison. Chaque famille est unique : l’expérience de chacun nourrit la discussion. Le but est de pouvoir établir la discipline qui convient à vos convictions.",
          en: "A conversation about values and house rules. Every family is unique, so each person’s experience feeds the discussion. The aim is a kind of discipline that fits what you believe.",
        },
      },
      {
        id: "mini-gigote",
        title: { fr: "Mini-gigote", en: "Mini-gigote" },
        body: {
          fr: "Les familles avec des enfants de 2 à 5 ans viennent bouger ensemble. Sauter, courir, grimper et danser : autant de façons de s’amuser avec l’écureuil Mini-gigote.",
          en: "Families with children from 2 to 5 come to move together. Jumping, running, climbing, and dancing, with the squirrel Mini-gigote.",
        },
      },
      {
        id: "apprentis-cuistots",
        title: { fr: "Apprentis cuistots", en: "Apprentice cooks" },
        body: {
          fr: "Des repas et des collations simples sont proposés aux familles avec des enfants de 3 à 5 ans. On cuisine, on découvre et on goûte des aliments variés.",
          en: "Simple meals and snacks for families with children from 3 to 5. You cook, discover, and taste a range of foods.",
        },
      },
      {
        id: "yapp",
        title: { fr: "Y’a personne de parfait (Y’APP)", en: "Nobody’s Perfect (Y’APP)" },
        body: {
          fr: "Y’a personne de parfait est un programme d’enrichissement de l’expérience parentale, offert en milieu communautaire par une animatrice, pour des parents d’enfants de cinq ans et moins. Il est conçu pour des parents jeunes, monoparentaux, isolés sur le plan social ou géographique, peu scolarisés, ou à faible revenu.",
          en: "Nobody’s Perfect is a community program, led by a facilitator, for parents of children five and under. It was designed for parents who are young, single, socially or geographically isolated, with little formal schooling, or on a low income.",
        },
      },
      {
        id: "coeur-de-pere",
        title: { fr: "Cœur de père", en: "Cœur de père" },
        body: {
          fr: "Une série de rencontres d’entraide et d’échange. Les pères qui le souhaitent s’y retrouvent, partagent ce qu’ils vivent et prennent confiance dans leur rôle.",
          en: "A series of meetings based on mutual help. Fathers who want to can meet, talk about what they are living, and grow more confident in their role.",
        },
      },
      {
        id: "dejeuner-causerie",
        title: { fr: "Déjeuner-causerie", en: "Breakfast conversation" },
        body: {
          fr: "Un buffet, et des discussions sur la parentalité avec des personnes invitées et d’autres parents. Une matinée pour créer des liens.",
          en: "A buffet breakfast and conversations about parenting, with guests and other parents. A morning for making connections.",
        },
      },
      {
        id: "etre-parent",
        title: { fr: "Être parent d’enfant (2-5 ans et 6-12 ans)", en: "Being a parent (ages 2–5 and 6–12)" },
        body: {
          fr: "Une discussion entre parents. L’animatrice propose des sujets selon les besoins et les demandes du groupe.",
          en: "A parent-to-parent discussion. The facilitator brings topics based on what the group needs and asks for.",
        },
      },
      {
        id: "pays-des-mots",
        title: { fr: "Au pays des mots", en: "In the land of words" },
        body: {
          fr: "Avec des enfants de moins de 5 ans, des activités utilisent des stratégies de stimulation du langage. Avoir du plaisir avec les mots est l’objectif.",
          en: "For children under 5, activities that use language-building strategies. The goal is to have fun with words.",
        },
      },
      {
        id: "eveil-lecture",
        title: { fr: "L’éveil à la lecture", en: "Early reading" },
        body: {
          fr: "L’éveil à la lecture, c’est d’abord la découverte du plaisir de lire. Les activités, informelles, permettent à l’enfant de développer ce plaisir naturellement.",
          en: "Early reading starts with the pleasure of books. Informal activities let a child grow into that pleasure.",
        },
      },
      {
        id: "freres-soeurs",
        title: { fr: "Frères et sœurs sans jalousie ni rivalité", en: "Siblings without rivalry" },
        body: {
          fr: "Comprendre d’où vient la rivalité entre frères et sœurs, et comment aider les enfants à soulager les sentiments hostiles qu’ils éprouvent les uns envers les autres.",
          en: "Understanding where sibling rivalry comes from, and how to help children with the hard feelings they have toward one another.",
        },
      },
      {
        id: "papfc",
        title: { fr: "PAPFC", en: "PAPFC" },
        body: {
          fr: "Programme d’aide personnelle, familiale et communautaire pour les familles qui ont des enfants de 12 ans et moins. Offert en collaboration avec le CISSSO. Des groupes de discussion entre parents, sur des sujets qui entourent la vie familiale. Ce programme est offert sous référence seulement.",
          en: "A personal, family, and community support program for families with children 12 and under, offered with the CISSSO. Parent discussion groups on everyday family life. Referral only.",
        },
      },
      {
        id: "parent-confiant",
        title: { fr: "Parent confiant, ado content", en: "Confident parent, content teen" },
        body: {
          fr: "Un groupe de discussion pour les parents d’adolescents. Après des capsules vidéo créées par des adolescents, on échange sur des sujets qui touchent l’adolescence.",
          en: "A discussion group for parents of teenagers. Short videos made by teens open a conversation about adolescence.",
        },
      },
      {
        id: "potager",
        title: { fr: "Du potager à la table", en: "From garden to table" },
        body: {
          fr: "Des activités de jardinage et d’alimentation pour les parents et leurs enfants de 2 à 5 ans. Un atelier pour découvrir le monde alimentaire.",
          en: "Gardening and food activities for parents and their children from 2 to 5. A workshop for discovering the world of food.",
        },
      },
      {
        id: "abecedaire",
        title: {
          fr: "L’abécédaire des tout-petits et De A à Z on s’aide",
          en: "The little ones’ alphabet, and A to Z we help each other",
        },
        body: {
          fr: "Des jeux pour l’éveil à la lecture et à l’écriture. Les parents et leurs enfants de 2 à 5 ans explorent les lettres de l’alphabet en s’amusant.",
          en: "Play-based activities for early reading and writing. Parents and their children from 2 to 5 explore the letters of the alphabet.",
        },
      },
      {
        id: "delima",
        title: { fr: "Délima", en: "Délima" },
        body: {
          fr: "Un programme avec deux visées : accompagner les femmes dans les premiers mois de la maternité pour tisser un lien et des souvenirs avec leur bébé (0 à 1 an), et créer des moments de rencontre entre mères.",
          en: "A program with two aims: to walk with women in the first months of motherhood so they can build a bond and memories with their baby (0 to 1), and to create time for mothers to meet.",
        },
      },
      {
        id: "cesame",
        title: { fr: "Césame", en: "Césame" },
        body: {
          fr: "L’atelier Césame propose des activités liées au développement global des enfants. Il s’adresse aux parents et à leurs enfants de 3 à 5 ans, et stimule les habiletés motrices, langagières et socioaffectives. Un coup de pouce avant l’école.",
          en: "Césame offers activities tied to a child’s overall development, for parents and children from 3 to 5. It works on movement, language, and social-emotional skills. A boost before school.",
        },
      },
    ],
  },
  {
    slug: "perinatalite",
    tone: "peri",
    title: { fr: "Centre de ressources périnatales", en: "Perinatal resource centre" },
    mission: {
      fr: "Offrir aux familles un accompagnement personnalisé et des ressources pour les étapes de la grossesse, de la naissance et des premiers mois de vie de l’enfant.",
      en: "Offer families personal support and resources for pregnancy, birth, and the first months of a child’s life.",
    },
    objectives: [
      {
        fr: "Offrir un accompagnement concret et des ressources pour rendre l’expérience parentale positive et épanouissante.",
        en: "Offer concrete support and resources so the experience of becoming a parent can be a good one.",
      },
      {
        fr: "Contribuer à la santé physique et mentale de tous les membres de la famille.",
        en: "Contribute to the physical and mental health of every member of the family.",
      },
      {
        fr: "Offrir des outils, des formations et des conseils.",
        en: "Offer tools, learning, and advice.",
      },
    ],
    activities: [
      {
        id: "cafe-au-lait",
        title: { fr: "Café au lait", en: "Café au lait" },
        body: {
          fr: "Un temps d’échange sur l’allaitement. Pour en apprendre davantage, poser des questions ou partager une expérience, une marraine d’allaitement est là.",
          en: "Time to talk about breastfeeding. A breastfeeding mentor is there if you want to learn, ask a question, or share what you have lived.",
        },
      },
      {
        id: "momentrelles",
        title: { fr: "Mom’entrelles", en: "Mom’entrelles" },
        body: {
          fr: "Un espace où des mamans peuvent dire, sans filtre, les réalités et les émotions de la maternité — le beau, et aussi les défis. Pendant que la maman prend soin d’elle, le bébé peut passer ce moment avec une éducatrice à la halte-garderie.",
          en: "A place where mothers can say, plainly, what motherhood feels like — the good parts and the hard ones. While a mother takes care of herself, the baby can be with an educator in the drop-in daycare.",
        },
      },
      {
        id: "retour-accouchement",
        title: { fr: "Cercle de parole — retour sur l’accouchement", en: "Sharing circle: looking back on birth" },
        body: {
          fr: "La naissance peut être une expérience pleine de puissance, et aussi teintée de difficulté, d’inquiétude, de perte de confiance ou de traumatisme. Ce cercle permet de raconter, d’être accueillie, d’assimiler son histoire.",
          en: "Birth can be a powerful experience, and it can also carry difficulty, worry, a loss of confidence, or trauma. This circle is a place to tell the story, be received, and make it your own.",
        },
      },
      {
        id: "ivg",
        title: {
          fr: "Atelier à venir — accompagnement à l’interruption volontaire de grossesse",
          en: "Upcoming workshop — support around abortion",
        },
        body: {
          fr: "Lors d’une interruption volontaire de grossesse, plusieurs émotions peuvent coexister. Le site actuel indique qu’un accompagnement empathique et professionnel est essentiel, et que cet atelier est à venir.",
          en: "An abortion can bring several feelings at once. The current site says that empathic, professional support is essential, and that this workshop is still to come.",
        },
      },
      {
        id: "coeur-de-mere",
        title: { fr: "Cœur de mère", en: "Cœur de mère" },
        body: {
          fr: "Un groupe d’accompagnement pour les femmes enceintes ou ayant un enfant de moins d’un an, dans cette transition, et pour prévenir la dépression post-partum. Si l’adaptation à l’arrivée du bébé est difficile, s’il y a de l’anxiété ou des signes avant-coureurs de dépression, c’est un temps pour prendre soin de cette situation.",
          en: "A support group for pregnant women and women with a child under one, through this transition, and to help prevent postpartum depression. If adapting to the baby is hard, or if there is anxiety or early signs of depression, this is time set aside for that.",
        },
      },
      {
        id: "deuil",
        title: {
          fr: "Atelier à venir — accompagnement au deuil périnatal",
          en: "Upcoming workshop — perinatal loss",
        },
        body: {
          fr: "Un espace d’écoute, de soutien et de réconfort pour les parents qui vivent un deuil périnatal. Des rencontres individuelles ou de groupe sont offertes avec une intervenante formée en deuil périnatal. Le site actuel indique que cet atelier est à venir.",
          en: "A place to be heard, supported, and comforted for parents living a perinatal loss. Individual or group meetings are offered with a practitioner trained in perinatal bereavement. The current site lists this workshop as still to come.",
        },
      },
      {
        id: "cardio-poussette",
        title: { fr: "Cardio-poussette et cardio-traîneau", en: "Stroller cardio and sled cardio" },
        body: {
          fr: "Une marche dynamique, avec des arrêts à des stations d’exercices. À chaque station : des mouvements variés, puis un étirement. Les exercices sont adaptés aux nouvelles mamans. L’hiver, la formule devient le cardio-traîneau.",
          en: "A brisk walk with stops at exercise stations. At each station: varied movements, then a stretch. The exercises are adapted for new mothers. In winter, the same idea becomes sled cardio.",
        },
      },
      {
        id: "relevailles",
        title: { fr: "Les relevailles", en: "Relevailles" },
        body: {
          fr: "Le service des relevailles offre un accompagnement à domicile aux femmes enceintes qui ont besoin de repos en période prénatale, ainsi qu’aux familles, aux pères et aux mères durant la première année de vie de l’enfant. Par bloc de 3 heures, une assistante périnatale formée offre du répit. Elle peut écouter, encourager, accompagner à un rendez-vous médical, donner des trucs pour le développement, aider aux tâches domestiques et à la préparation des repas, et informer sur les ressources.",
          en: "Relevailles is home support for pregnant women who need rest before birth, and for families, fathers, and mothers during a child’s first year. In 3-hour blocks, a trained perinatal assistant offers respite. She can listen, encourage, come to a medical appointment, share ideas for a child’s development, help with housework and meals, and point to other resources.",
        },
      },
      {
        id: "jasette-poussette",
        title: { fr: "Jasette-poussette", en: "Stroller chat" },
        body: {
          fr: "Une marche d’environ 60 minutes pour jaser avec d’autres futurs et nouveaux parents. Le point de rencontre est le stationnement du Repère familial.",
          en: "A walk of about 60 minutes to talk with other expectant and new parents. The meeting point is the parking lot at Le Repère familial.",
        },
      },
      {
        id: "portage",
        title: { fr: "Découvre le portage", en: "Discover babywearing" },
        body: {
          fr: "Les notions de sécurité, les principes du positionnement physiologique, et le fonctionnement de différents porte-bébés : écharpe extensible, écharpe tissée, préformé, mei tai et ring sling.",
          en: "Safety, physiological positioning, and how different carriers work: stretchy wrap, woven wrap, soft-structured carrier, mei tai, and ring sling.",
        },
      },
      {
        id: "rcr",
        title: { fr: "RCR bébé, 0 à 2 ans", en: "Infant CPR, 0 to 2" },
        body: {
          fr: "Des ateliers de RCR et de premiers soins pour savoir comment intervenir auprès d’un bébé en cas d’urgence.",
          en: "CPR and first-aid workshops on how to respond if a baby has an emergency.",
        },
      },
      {
        id: "frimousses",
        title: { fr: "Les frimousses (0 à 5 ans)", en: "Les frimousses (0 to 5)" },
        body: {
          fr: "Animé par une éducatrice à la petite enfance. Le parent reçoit des outils et des stratégies à mettre en place à la maison pour le développement global de l’enfant. L’atelier s’adresse aux parents de jeunes enfants, notamment de 0 à 12 mois et de 1 à 2 ans.",
          en: "Led by an early-childhood educator. Parents leave with tools and strategies to use at home for their child’s overall development. It is for parents of young children, including 0 to 12 months and 1 to 2 years.",
        },
      },
      {
        id: "bedaine",
        title: { fr: "Bédaine informé", en: "Informed bump" },
        body: {
          fr: "Un atelier de préparation à la naissance et à l’allaitement : les droits des parents, la gestion naturelle et médicale de la douleur, l’accueil des sensations, des positions et des trucs qui soulagent, le rôle du ou de la partenaire, la première mise au sein.",
          en: "A workshop to prepare for birth and breastfeeding: parents’ rights, natural and medical ways of working with pain, meeting the sensations, positions and tricks that help, the partner’s role, and the first latch.",
        },
      },
      {
        id: "premieres-bouchees",
        title: { fr: "Premières bouchées", en: "First foods" },
        body: {
          fr: "L’introduction des aliments complémentaires amène son lot de questions. On y parle de diversification alimentaire et de confection de purées.",
          en: "Starting complementary foods raises a lot of questions. The workshop covers food diversification and making purées.",
        },
      },
      {
        id: "complicite",
        title: {
          fr: "Devenir parent tout en conservant sa complicité",
          en: "Becoming parents, and staying close",
        },
        body: {
          fr: "Des outils pour le travail d’équipe dans le couple parental : communication, partage des tâches, responsabilité, et intimité dans le tourbillon de la routine.",
          en: "Tools for teamwork between parents: communication, sharing tasks, responsibility, and intimacy in the middle of the daily routine.",
        },
      },
      {
        id: "couches",
        title: { fr: "Initiation aux couches lavables", en: "Introduction to cloth diapers" },
        body: {
          fr: "Pour en apprendre davantage ou parce que l’option vous tente. Notions de base, modèles, tissus, et trucs pour faciliter l’usage. Ouvert aux futurs parents et aux parents.",
          en: "For learning more, or because you are considering the option. The basics, models, fabrics, and tricks that make cloth diapers easier. Open to expectant parents and parents.",
        },
      },
      {
        id: "pilates",
        title: { fr: "Pilates maman-bébé", en: "Mom-and-baby Pilates" },
        body: {
          fr: "Pensé comme un premier cours après l’accouchement. Le pilates combine des mouvements de renforcement. Les bébés restent tout près, et des petits jouets sont à disposition.",
          en: "Meant as a first class after birth. Pilates combines strengthening movements. Babies stay close by, and small toys are on hand.",
        },
      },
      {
        id: "randonnee",
        title: { fr: "Randonnée portage", en: "Babywearing hike" },
        body: {
          fr: "Une monitrice de portage fait découvrir des sentiers de la Vallée-de-la-Gatineau. Un porte-bébé est nécessaire pour chaque enfant de moins de 3 ans. La randonnée dure environ 60 à 90 minutes.",
          en: "A babywearing instructor leads a walk on trails in the Vallée-de-la-Gatineau. A carrier is needed for each child under 3. The hike lasts about 60 to 90 minutes.",
        },
      },
      {
        id: "mille-jours",
        title: { fr: "1000 jours pour savourer la vie", en: "1,000 Days to Savour Life" },
        body: {
          fr: "Un programme créé par la Fondation OLO. Des ateliers de cuisine en groupe, pour prioriser une alimentation saine et économique chez les femmes enceintes ou ayant un bébé de moins de 24 mois. Le thème change à chaque rencontre.",
          en: "A program created by the OLO Foundation. Group cooking workshops for healthy, affordable eating, for pregnant women and women with a baby under 24 months. The theme changes each time.",
        },
      },
    ],
  },
  {
    slug: "pediatrie-sociale",
    tone: "pedo",
    title: { fr: "Centre de pédiatrie sociale", en: "Social pediatrics centre" },
    mission: {
      fr: "En synergie avec les familles et la communauté, nous accompagnons chaque enfant vivant en contexte de vulnérabilité à son rythme et selon ses besoins, en prévenant, réduisant ou éliminant les sources de stress qui peuvent affecter son développement et son bien-être.",
      en: "Alongside families and the community, we support each child living in a vulnerable situation, at their pace and according to their needs, by preventing, reducing, or removing sources of stress that can affect development and well-being.",
    },
    objectives: [
      { fr: "Des enfants heureux, en bonne santé physique et mentale.", en: "Children who are happy, and in good physical and mental health." },
      { fr: "Des enfants entourés d’adultes engagés et bienveillants.", en: "Children surrounded by adults who are committed and kind." },
      {
        fr: "Des enfants qui croient en eux-mêmes et qui réalisent leur plein potentiel.",
        en: "Children who believe in themselves and can reach what they are capable of.",
      },
    ],
    quote: {
      text: {
        fr: "« Voir un enfant en pédiatrie sociale, c’est mettre nos lunettes bienveillantes, nos oreilles syntonisées à la voix des enfants et nos actions centrées sur les forces des enfants, de la famille et de la communauté. Je suis fier de faire partie du cercle protecteur des enfants! »",
        en: "“Seeing a child in social pediatrics means putting on our caring glasses, tuning our ears to children’s voices, and centring what we do on the strengths of the child, the family, and the community. I am proud to be part of the circle that protects children.”",
      },
      by: {
        fr: "Dre Jacinthe Paradis, directrice clinique — citation publiée sur le site actuel",
        en: "Dr. Jacinthe Paradis, clinical director — quotation published on the current site",
      },
    },
    model: {
      title: { fr: "Un modèle de médecine sociale intégrée", en: "A model of integrated social medicine" },
      body: {
        fr: "La pédiatrie sociale en communauté est un modèle développé par le Dr Gilles Julien et Me Hélène (Sioui) Trudel. Il est centré sur les besoins et le respect des droits fondamentaux de l’enfant de 0 à 18 ans. Axé sur les forces du jeune, de sa famille et de sa communauté, ce modèle unit la médecine, le droit et le travail social pour dépister, réduire ou éliminer les stresseurs qui affectent le développement et le bien-être de l’enfant.",
        en: "Community social pediatrics is a model developed by Dr. Gilles Julien and Me Hélène (Sioui) Trudel. It centres the needs and fundamental rights of children from 0 to 18. Built on the strengths of the young person, their family, and their community, it brings medicine, law, and social work together to find, reduce, or remove stressors that affect a child’s development and well-being.",
      },
    },
    principles: [
      { fr: "Les enfants naissent égaux en droits.", en: "Children are born equal in rights." },
      {
        fr: "L’intérêt supérieur de l’enfant gouverne les décisions qui le concernent.",
        en: "The best interests of the child govern decisions that affect them.",
      },
      { fr: "L’enfant jouit de libertés et de droits civils.", en: "A child enjoys freedoms and civil rights." },
      {
        fr: "La communauté entière doit s’impliquer auprès des enfants pour soutenir leur famille.",
        en: "The whole community has a part in supporting a child’s family.",
      },
      { fr: "L’enfant naît et grandit en santé.", en: "A child is born and grows up in health." },
      {
        fr: "L’enfant s’instruit, s’amuse et s’ouvre sur le monde.",
        en: "A child learns, plays, and opens onto the world.",
      },
      { fr: "L’enfant a le droit d’être protégé.", en: "A child has the right to be protected." },
    ],
    activities: [],
    storiesIntro: {
      fr: "Sur la page de don du site actuel, ces principes sont illustrés par des situations publiées par l’organisme. Les prénoms et les rôles sont ceux du texte original.",
      en: "On the current site’s donation page, these principles are illustrated with situations the organization published. The first names and roles are those of the original text.",
    },
    stories: [
      {
        id: "egalite",
        title: { fr: "Les enfants naissent égaux en droits", en: "Children are born equal in rights" },
        body: {
          fr: "Parce que Karine a droit à l’égalité, Isabelle, éducatrice spécialisée, l’accompagne individuellement lorsqu’elle a besoin d’un adulte disponible pour l’aider à s’apaiser. Grâce à ce soutien, Karine peut participer au programme « Sors-dehors », les activités de groupe extérieures et sportives, afin de créer des contacts positifs et de se faire des amis.",
          en: "Because Karine has a right to equality, Isabelle, a special-education educator, stays with her one-to-one when she needs an available adult to help her settle. With that support, Karine can join “Sors-dehors”, the outdoor and sports group activities, make positive contacts, and find friends.",
        },
      },
      {
        id: "interet",
        title: {
          fr: "L’intérêt supérieur des enfants gouverne les décisions",
          en: "The child’s best interests govern decisions",
        },
        body: {
          fr: "Parce que chaque décision doit être prise dans l’intérêt supérieur de l’enfant, Rebecca, travailleuse sociale, invite les adultes significatifs et les partenaires du milieu de vie de l’enfant aux rencontres d’évaluation et d’orientation. Cela permet de s’assurer que tous sont bien informés et que les choix répondent aux besoins de l’enfant.",
          en: "Because every decision should be made in the child’s best interests, Rebecca, a social worker, invites the significant adults and the partners in the child’s daily life to assessment and orientation meetings. The aim is that everyone is well informed and that the choices answer the child’s needs.",
        },
      },
      {
        id: "libertes",
        title: { fr: "Des libertés et des droits civils", en: "Freedoms and civil rights" },
        body: {
          fr: "Parce que Caleb a le droit de s’exprimer et d’être entendu, Maryse, psychoéducatrice, lui propose un suivi basé sur ses intérêts et adapté à sa façon de s’exprimer. C’est à la suite de l’intérêt marqué de Caleb pour la musique que la musicothérapie a été instaurée au centre.",
          en: "Because Caleb has the right to express himself and to be heard, Maryse, a psychoeducator, offers follow-up based on his interests and on the way he expresses himself. It was Caleb’s strong interest in music that led the centre to start music therapy.",
        },
      },
      {
        id: "famille",
        title: { fr: "Grandir dans une famille, avec la communauté", en: "Growing up in a family, with the community" },
        body: {
          fr: "Parce qu’Antoine a le droit de grandir dans une famille qui soutient son épanouissement, Cynthia, accompagnatrice familiale, se rend à domicile pour aider ses parents à organiser la maison et à mettre en place des routines adaptées. Elle applique avec eux le plan d’intervention familial.",
          en: "Because Antoine has the right to grow up in a family that supports him, Cynthia, a family support worker, goes to the home to help his parents organize the house and set up routines that fit. She works through the family intervention plan with them.",
        },
      },
      {
        id: "sante",
        title: { fr: "Naître et grandir en santé", en: "Being born and growing up healthy" },
        body: {
          fr: "Parce que Léo a le droit à une santé et à un développement optimaux, Jacinthe, médecin en pédiatrie sociale, effectue un examen médical à chaque rencontre. Une perte de poids amène à parler d’alimentation et à découvrir que la famille n’a pas toujours suffisamment de nourriture. Dre Paradis et la responsable du suivi clinique impliquent alors une accompagnatrice familiale pour accompagner la famille vers un organisme d’aide alimentaire.",
          en: "Because Léo has a right to health and to the best possible development, Jacinthe, a social-pediatrics physician, does a medical exam at each visit. Weight loss leads to a conversation about food, and to the discovery that the family does not always have enough to eat. Dr. Paradis and the clinical follow-up lead then involve a family support worker to walk the family toward a food-aid organization.",
        },
      },
      {
        id: "instruction",
        title: { fr: "S’instruire, s’amuser, s’ouvrir sur le monde", en: "Learning, playing, opening onto the world" },
        body: {
          fr: "Parce que Camille a droit à une éducation qui s’adapte à ses besoins, Madeleine, intervenante en zoothérapie, met en place avec son école le projet « Apprendre autrement ». Une journée par semaine, les cours sont donnés dans une ferme, et Camille participe à des moments de zoothérapie.",
          en: "Because Camille has a right to an education that adapts to her needs, Madeleine, an animal-assisted practitioner, sets up the “Apprendre autrement” project with her school. One day a week, classes are held on a farm, and Camille takes part in animal-assisted time.",
        },
      },
      {
        id: "protection",
        title: { fr: "Être protégé sur tous les plans", en: "Being protected, in every way" },
        body: {
          fr: "Parce qu’Alex a le droit d’être protégé, Maryse, responsable de suivi clinique, travaille avec la protection de la jeunesse et les autres partenaires pour évaluer les besoins de la famille et déterminer quels services du centre peuvent le mieux soutenir Alex et ses parents.",
          en: "Because Alex has the right to be protected, Maryse, clinical follow-up lead, works with youth protection and other partners to assess the family’s needs and to see which of the centre’s services can best support Alex and his parents.",
        },
      },
    ],
  },
  {
    slug: "halte-garderie",
    tone: "halte",
    title: { fr: "Halte-garderie", en: "Drop-in daycare" },
    mission: halte.body,
    activities: [],
  },
  {
    slug: "services-generaux",
    tone: "general",
    title: { fr: "Services généraux", en: "General services" },
    mission: {
      fr: "Des services qui traversent la maison : la halte-garderie, l’allaitement, le portage, le peau à peau, les habits de neige, le croque-livre et l’aide aux parents à domicile.",
      en: "Services that run through the house: drop-in daycare, breastfeeding, babywearing, skin-to-skin, snowsuits, the book swap, and help for parents at home.",
    },
    activities: [
      halte,
      {
        id: "marraine",
        title: { fr: "Marraine d’allaitement", en: "Breastfeeding mentor" },
        body: {
          fr: "Une marraine d’allaitement écoute et accompagne les mères et les pères qui veulent des informations sur l’allaitement. Elle est elle-même une mère qui a allaité. Pour devenir marraine, il faut avoir allaité pendant au moins six mois, suivre une formation et participer à des réunions. Pour être jumelée ou pour devenir marraine, contactez-nous.",
          en: "A breastfeeding mentor listens to and walks with mothers and fathers who want information about breastfeeding. She is herself a mother who has breastfed. To become a mentor, you need to have breastfed for at least six months, taken the training, and joined the meetings. To be matched, or to become a mentor, contact us.",
        },
      },
      {
        id: "monitrice",
        title: { fr: "Monitrice de portage", en: "Babywearing instructor" },
        body: {
          fr: "Les monitrices de portage sont formées par l’institut national du portage du Québec. Elles enseignent le portage, du nouveau-né jusqu’à l’enfant, et proposent le porte-bébé qui convient à vos besoins.",
          en: "Babywearing instructors are trained by the Institut national du portage du Québec. They teach carrying, from newborn through childhood, and suggest the carrier that fits your needs.",
        },
      },
      {
        id: "peau-a-peau",
        title: { fr: "Conseillère de peau à peau", en: "Skin-to-skin counsellor" },
        body: {
          fr: "Le peau à peau est une pratique reconnue, recommandée par l’Organisation mondiale de la Santé et proposée dans de nombreux hôpitaux. Avec une conseillère, on voit en quoi elle consiste, d’où elle vient, ce que les recherches en disent, et comment l’intégrer à sa routine.",
          en: "Skin-to-skin is a recognized practice, recommended by the World Health Organization and offered in many hospitals. With a counsellor, you look at what it is, where it comes from, what the research says, and how to bring it into your own routine.",
        },
      },
      {
        id: "habits-neige",
        title: { fr: "Habits de neige", en: "Snowsuits" },
        body: {
          fr: "Avec la collaboration financière de partenaires et de donateurs, le projet offre aux familles des habits de neige neufs pour que les enfants soient vêtus convenablement l’hiver. Les familles sont référées par des partenaires (CISSS, CJO, CPE et autres). Une contribution financière par habit est demandée aux parents.",
          en: "With financial help from partners and donors, the project gives families new snowsuits so children are properly dressed for winter. Families are referred by partners (CISSS, CJO, CPEs, and others). Parents are asked for a financial contribution per snowsuit.",
        },
      },
      {
        id: "croque-livre",
        title: { fr: "Croque-livre", en: "Book swap" },
        body: {
          fr: "Un bon livre se dévore plus d’une fois. Le croque-livre permet un échange de livres pour les enfants de 0 à 12 ans. On peut y déposer des livres ou en prendre un gratuitement.",
          en: "A good book can be devoured more than once. The croque-livre is a book exchange for children from 0 to 12. You can leave books or take one, free.",
        },
      },
      {
        id: "aide-parent",
        title: { fr: "Aide parent", en: "Parent help" },
        body: {
          fr: "Des bénévoles et des employées formées se rendent à domicile pour soutenir les familles qui ont au moins un enfant de 0 à 12 ans. Les besoins sont évalués avant les visites. Les visites durent au maximum 3 heures par semaine. Le soutien peut être moral — écoute, valorisation, encouragement — ou pratique : accompagnement dans les tâches quotidiennes, aide pour habiller les enfants et aller au parc. Le soutien se fait sans jugement, et dans le respect de la confidentialité.",
          en: "Trained volunteers and staff visit families who have at least one child from 0 to 12. Needs are assessed before the visits. Visits last at most 3 hours a week. Support can be moral — listening, recognition, encouragement — or practical: help with daily tasks, getting children dressed, going to the park. It is offered without judgment, and in confidence.",
        },
      },
    ],
  },
];

export function getService(slug: string): ServiceContent | undefined {
  return services.find((service) => service.slug === slug);
}

export const doorSlugs = ["maison-de-la-famille", "perinatalite", "pediatrie-sociale"] as const;

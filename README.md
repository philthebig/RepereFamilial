# Repère familial — démonstration V1

Site de démonstration pour **Le Repère familial de la Vallée-de-la-Gatineau** (Maniwaki et Gracefield). Il remplace, pour la présentation au client, le site Joomla actuel : [reperefamilial.com](https://reperefamilial.com/index.php/fr/).

Le site est statique, bilingue (français par défaut), et prêt pour Vercel. Le formulaire de contact et le calendrier sont branchés sur des fichiers du dépôt, pas sur un service externe.

## Pages

| Route | Contenu |
| --- | --- |
| `/` | Redirige vers `/fr` |
| `/fr`, `/en` | Accueil : hero, trois volets, semaine en cours, deux lieux, don |
| `/fr/services`, `/en/services` | Les trois portes, la halte-garderie et les services généraux |
| `…/services/maison-de-la-famille` | Mission, objectifs et ateliers de la Maison de la famille |
| `…/services/perinatalite` | Centre de ressources périnatales |
| `…/services/pediatrie-sociale` | Pédiatrie sociale, citation de Dre Paradis, principes |
| `…/services/halte-garderie` | Halte-garderie (Maniwaki et Gracefield) |
| `…/services/services-generaux` | Marraines, portage, peau à peau, habits de neige, croque-livre, aide parent |
| `/fr/calendrier`, `/en/calendrier` | Mois en cours, couleurs par volet, filtres lieu et service. En mobile, la grille se résume à des pastilles et la liste devient la lecture. |
| `/fr/a-propos`, `/en/a-propos` | Équipe, conseil, partenaires, bilans, bénévolat |
| `/fr/don`, `/en/don` | Zeffy (unique et Alliés), Interac, chèque, dons en nature |
| `/fr/nous-joindre`, `/en/nous-joindre` | Adresses et formulaire |
| `/fr/nouvelles`, `/en/nouvelles` | Les deux publications encore en ligne (février 2025) |
| 404 | Page introuvable, en français, avec un lien vers l’anglais |

Le français est la langue par défaut. Le bouton FR / EN conserve la page en cours.

## Édition par l’équipe

Deux fichiers suffisent pour le quotidien. Les deux sont du JSON, avec un champ `fr` et un champ `en` pour chaque texte.

### Activités — `content/events.json`

Une activité est un objet :

```json
{
  "id": "cafe-rencontre-2026-11-03",
  "date": "2026-11-03",
  "time": "10:00",
  "service": "maison",
  "location": "maniwaki",
  "title": { "fr": "Café-rencontre", "en": "Coffee meetup" },
  "detail": { "fr": "2 à 5 ans", "en": "Ages 2 to 5" },
  "example": true
}
```

- `date` au format `AAAA-MM-JJ`, heure du Québec. `time` est optionnel, au format `HH:MM`.
- `service` : `maison`, `peri`, `pedo` ou `halte`.
- `location` : `maniwaki` ou `gracefield`.
- `example: true` affiche le badge **Exemple / Example**. Quand une date est officielle, mettre `false`.
- `detail` est optionnel. Il s’affiche sous le titre dans la vue semaine.
- L’accueil montre le lundi au vendredi de la semaine qui contient « aujourd’hui » (fuseau `America/Toronto`). La page calendrier montre le mois de cette même date.
- Une date invalide ou un `id` en double fait échouer `npm run build`.

Les activités actuellement dans le fichier sont des **exemples** calqués sur la maquette de novembre 2026. Ce ne sont pas des dates officielles. La programmation publiée sur le site actuel s’arrête à février 2025.

### Nouvelles — `content/news.json`

```json
{
  "slug": "programmation-ateliers-fevrier-2025",
  "date": "2025-02-07",
  "title": { "fr": "…", "en": "…" },
  "summary": { "fr": "…", "en": "…" },
  "sourceUrl": "https://reperefamilial.com/…"
}
```

Le `slug` devient l’adresse `/fr/nouvelles/ce-slug`. Pour retirer une nouvelle, retirer l’objet. Pour en ajouter une, ajouter un objet avec un `slug` inédit.

Les textes de services, l’équipe et les libellés de l’interface sont dans `content/services.ts`, `content/about.ts` et `content/ui.ts`. Ils changent rarement. Les faits (téléphone, adresses, liens Zeffy) sont dans `content/site.ts`.

### Pourquoi pas Keystatic tout de suite

Keystatic est le bon outil pour la suite : les fichiers restent dans Git, l’équipe édite un formulaire, et un commit met le site à jour. Pas de base de données. La forme du JSON (`title.fr` / `title.en`, `service`, `location`, `example`) correspond déjà à une collection Keystatic.

Il n’est pas branché dans cette V1. Le mode GitHub demande une application et des secrets ; le mode local ne fonctionne pas sur Vercel. Monter un éditeur sans authentification exposerait le site public. D’ici là, l’équipe peut modifier les deux JSON dans l’éditeur web de GitHub. Brancher Keystatic plus tard ne demande pas de migrer les données.

## À confirmer avec le client

Rien ici n’a été inventé. Quand le site actuel ne dit pas une chose, la page le marque **À confirmer**.

- **Horaires** d’ouverture : absents du site actuel.
- **Numéro d’organisme de bienfaisance** : absent du site actuel. Les reçus d’impôt sont décrits, le numéro ne l’est pas.
- **Code postal de Maniwaki.** Le texte du site et le pied de page utilisent **J9E 1R4**. La carte Google intégrée au site actuel pointe vers **J9E 3P5** pour la même adresse, 251 rue Cartier. Cette V1 garde **J9E 1R4** et n’embarque pas la carte, pour ne pas afficher l’autre code.
- **Gracefield** : 42 rue St-Joseph, Gracefield, QC, J0X 1W0. La carte du site actuel écrit « 42 Rue St Joseph ».
- **Courriel de Rosalie Guérette.** Le site actuel publie `iroybruyere@reperefamilial.com`, le même que celui d’Isabelle Roy Bruyère. La fiche le signale.
- **Frédérik Lafontaine** est indiqué « Administratrice » sur le site actuel. Le titre est repris tel quel.
- **Partenaires financiers** et **Fier membre** : le site actuel dit seulement « À venir ». Aucun nom ni logo n’a été ajouté.
- **Formulaires Zeffy** : les deux liens officiels sont en français, y compris sur les pages anglaises.
- **Bilans PDF** : ils restent hébergés sur reperefamilial.com tant qu’ils ne sont pas copiés ici.
- **Bénévolat** : le bouton ouvre le formulaire Google déjà utilisé sur le site actuel.
- **Anglais** : traduction des textes français publiés. À relire par l’organisme avant la mise en ligne.
- **Formulaire Nous joindre** : il valide le message puis s’arrête. Aucun courriel n’est envoyé. Le voir dans `app/api/contact/route.ts`.

## Anciennes adresses

`next.config.ts` redirige les principaux chemins Joomla vers les nouvelles pages françaises, par exemple :

- `/index.php/fr` → `/fr`
- `/index.php/fr/nos-services/volet-maison-de-la-famille` → `/fr/services/maison-de-la-famille`
- `/index.php/fr/nos-services/volet-perinatalite` → `/fr/services/perinatalite`
- `/index.php/fr/nos-services/volet-centre-de-pediatrie-sociale` → `/fr/services/pediatrie-sociale`
- `/index.php/fr/nos-services/services-generaux` → `/fr/services/services-generaux`
- `/index.php/fr/nous-joindre` → `/fr/nous-joindre`
- `/index.php/fr/a-propos/lequipe` → `/fr/a-propos#equipe`
- `/index.php/faireundon` et `/index.php/fr/faireundon` → `/fr/don`
- `/index.php/fr/je-mimplique` → `/fr/a-propos#simpliquer`
- `/index.php/fr/nouvelles/programmation` → `/fr/nouvelles`

Les variantes sans `/fr/` qui existent encore sur le site actuel (services, équipe, don, bilan) sont incluses.

## Mise en ligne sur Vercel

1. Importer ce dépôt. Framework : Next.js. La commande de build est `npm run build`. Aucune variable n’est obligatoire pour que le site s’affiche.
2. Définir `NEXT_PUBLIC_SITE_URL` sur l’URL de production (par exemple `https://repere-familial.vercel.app`), sans barre oblique finale. Elle sert de base aux liens canoniques et au sitemap. Sans elle, ces liens pointent vers `http://localhost:3000`.
3. Déployer. Les pages sont pré-rendues. Seul `POST /api/contact` est dynamique.
4. Le formulaire n’envoie pas de courriel. Pour le brancher plus tard, remplacer le corps de `app/api/contact/route.ts` par l’envoi choisi (et les secrets correspondants). Ne pas commettre de clé.
5. Après chaque modification de `content/events.json` ou `content/news.json`, un déploiement (ou le redeploy automatique du commit) republie les pages. La date « aujourd’hui » du calendrier est celle du dernier rendu, au fuseau de Montréal. Les pages se régénèrent au plus chaque jour (`revalidate = 86400`).

## En local

```bash
npm install
npm run dev
npm run build
npm run lint
```

Node.js 22 ou plus récent. Ouvrir [http://localhost:3000](http://localhost:3000) : la racine renvoie vers `/fr`.

## Repères de design

Fond crème, grain de papier très léger, titres en Source Serif 4 sur les pages communautaires, Newsreader et IBM Plex Sans sur À propos et Don. Le trait à la main est limité : trois icônes dans le hero, un papillon adhésif sur la carte du jour, une annotation par page, un ruban de washi sur le bloc de don. Le logo est celui du site actuel, recompressé.

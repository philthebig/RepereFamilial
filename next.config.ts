import type { NextConfig } from "next";

/**
 * Old Joomla paths on reperefamilial.com, mapped to the new French URLs.
 * English pages are reached with the language switch, not with these legacy paths.
 * The root redirect stays temporary so a later language negotiation can replace it.
 */
const legacy: Array<[string, string]> = [
  ["/index.php", "/fr"],
  ["/index.php/fr", "/fr"],
  ["/index.php/fr/nos-services/volet-maison-de-la-famille", "/fr/services/maison-de-la-famille"],
  ["/index.php/nos-services/volet-maison-de-la-famille", "/fr/services/maison-de-la-famille"],
  ["/index.php/fr/nos-services/volet-perinatalite", "/fr/services/perinatalite"],
  ["/index.php/nos-services/volet-perinatalite", "/fr/services/perinatalite"],
  ["/index.php/fr/nos-services/volet-centre-de-pediatrie-sociale", "/fr/services/pediatrie-sociale"],
  ["/index.php/nos-services/volet-centre-de-pediatrie-sociale", "/fr/services/pediatrie-sociale"],
  ["/index.php/fr/nos-services/services-generaux", "/fr/services/services-generaux"],
  ["/index.php/fr/nous-joindre", "/fr/nous-joindre"],
  ["/index.php/fr/a-propos/lequipe", "/fr/a-propos#equipe"],
  ["/index.php/a-propos/lequipe", "/fr/a-propos#equipe"],
  ["/index.php/fr/a-propos/conseil-dadministration", "/fr/a-propos#conseil"],
  ["/index.php/a-propos/conseil-dadministration", "/fr/a-propos#conseil"],
  ["/index.php/fr/a-propos/bilan-annuel", "/fr/a-propos#bilans"],
  ["/index.php/a-propos/bilan-annuel", "/fr/a-propos#bilans"],
  ["/index.php/fr/a-propos/partenaires-financiers", "/fr/a-propos#partenaires"],
  ["/index.php/a-propos/partenaires-financiers", "/fr/a-propos#partenaires"],
  ["/index.php/fr/a-propos/fier-membre", "/fr/a-propos#membre"],
  ["/index.php/a-propos/fier-membre", "/fr/a-propos#membre"],
  ["/index.php/fr/nouvelles", "/fr/nouvelles"],
  ["/index.php/fr/nouvelles/nouvelles-et-evenements", "/fr/nouvelles"],
  ["/index.php/fr/nouvelles/programmation", "/fr/nouvelles"],
  ["/index.php/fr/nouvelles/programmation/21-programmation-fevrier", "/fr/nouvelles/programmation-ateliers-fevrier-2025"],
  ["/index.php/fr/nouvelles/programmation/22-programmation-halte-garderie", "/fr/nouvelles/programmation-halte-garderie-fevrier-2025"],
  ["/index.php/faireundon", "/fr/don"],
  ["/index.php/fr/faireundon", "/fr/don"],
  ["/index.php/fr/je-mimplique", "/fr/a-propos#simpliquer"],
  ["/index.php/je-mimplique", "/fr/a-propos#simpliquer"],
];

const nextConfig: NextConfig = {
  experimental: {
    globalNotFound: true,
  },
  async redirects() {
    return [
      { source: "/", destination: "/fr", permanent: false },
      ...legacy.map(([source, destination]) => ({
        source,
        destination,
        permanent: true,
      })),
    ];
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
        ],
      },
    ];
  },
};

export default nextConfig;

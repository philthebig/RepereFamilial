import type { Metadata } from "next";
import { Nunito, Source_Serif_4 } from "next/font/google";
import Link from "next/link";
import { ui } from "@/content/ui";
import { tx } from "@/lib/locale";
import "./globals.css";

const nunito = Nunito({ subsets: ["latin"], weight: ["400", "700", "800"], variable: "--font-nunito" });
const serif = Source_Serif_4({ subsets: ["latin"], weight: ["600"], variable: "--font-serif" });

export const metadata: Metadata = {
  title: "Page introuvable · Repère familial",
};

export default function GlobalNotFound() {
  return (
    <html lang="fr-CA" className={`${nunito.variable} ${serif.variable}`}>
      <body>
        <main id="contenu" className="page">
          <div className="wrap prose-block">
            <p className="kicker">Repère familial</p>
            <h1>{tx("fr", ui.notFound.title)}</h1>
            <p className="lead">{tx("fr", ui.notFound.body)}</p>
            <p>
              <Link className="btn" href="/fr">
                {tx("fr", ui.notFound.home)}
              </Link>
            </p>
            <p lang="en">
              <strong>{tx("en", ui.notFound.title)}.</strong> {tx("en", ui.notFound.body)}{" "}
              <Link href="/en">{tx("en", ui.notFound.home)}</Link>
            </p>
          </div>
        </main>
      </body>
    </html>
  );
}

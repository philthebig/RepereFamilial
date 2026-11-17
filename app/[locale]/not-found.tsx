import Link from "next/link";
import { ui } from "@/content/ui";
import { tx } from "@/lib/locale";

export default function LocaleNotFound() {
  return (
    <main id="contenu" className="page">
      <div className="wrap prose-block">
        <p className="anno" aria-hidden="true">
          {tx("fr", ui.notFound.annotation)}
        </p>
        <h1>{tx("fr", ui.notFound.title)}</h1>
        <p className="lead">{tx("fr", ui.notFound.body)}</p>
        <p>
          <Link className="btn" href="/fr">
            {tx("fr", ui.notFound.home)}
          </Link>
        </p>
        <p lang="en">
          {tx("en", ui.notFound.body)} <Link href="/en">{tx("en", ui.notFound.home)}</Link>
        </p>
      </div>
    </main>
  );
}

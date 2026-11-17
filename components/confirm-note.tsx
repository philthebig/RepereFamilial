import { tx, type Locale } from "@/lib/locale";
import { ui } from "@/content/ui";

export function ConfirmNote({ locale, children }: { locale: Locale; children: React.ReactNode }) {
  return (
    <p className="confirm">
      <strong>{tx(locale, ui.contact.confirm)}</strong>
      <span>{children}</span>
    </p>
  );
}

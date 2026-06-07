import { useTranslations } from "next-intl";
import { ArrowUpRight } from "lucide-react";
import { contacts } from "@/lib/contacts";
import { Logomark } from "@/components/shared/Logomark";

export function Footer() {
  const t = useTranslations("footer");
  const nav = useTranslations("nav");

  const links = [
    { key: "homes", href: "#homes" },
    { key: "ecosystem", href: "#ecosystem" },
    { key: "farm", href: "#farm" },
    { key: "invest", href: "#invest" },
    { key: "partners", href: "#partners" },
    { key: "contacts", href: "#cta" },
  ] as const;

  return (
    <footer className="grid-bg border-t border-border bg-background">
      <div className="mx-auto max-w-[1200px] px-4 md:px-6 py-12">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <span className="flex items-center gap-3 text-foreground">
              <Logomark className="h-10 w-10 shrink-0" />
              <span className="leading-none">
                <span className="block text-base font-extrabold tracking-tight">NOMAD IT PARK</span>
                <span className="mt-1 block text-[9px] font-semibold uppercase tracking-[0.22em] text-primary">
                  Smart City · Almaty
                </span>
              </span>
            </span>
            <p className="mt-4 text-sm text-muted max-w-xs">{t("tagline")}</p>
          </div>

          <nav className="grid grid-cols-2 gap-2 text-sm">
            {links.map((l) => (
              <a
                key={l.key}
                href={l.href}
                className="text-foreground/75 hover:text-primary transition-colors"
              >
                {nav(l.key)}
              </a>
            ))}
          </nav>

          <div className="text-sm text-muted space-y-2">
            <a
              href={`mailto:${contacts.email}`}
              className="block hover:text-primary transition-colors"
            >
              {contacts.email}
            </a>
            <a
              href={contacts.telegram}
              target="_blank"
              rel="noopener noreferrer"
              className="block hover:text-primary transition-colors"
            >
              Telegram
            </a>
            <span className="block">{contacts.website}</span>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-start gap-4 border-t border-border pt-6 sm:flex-row sm:items-center sm:justify-between">
          <span className="text-xs text-muted">{t("copyright")}</span>

          {/* Built by Benevsky */}
          <a
            href="https://benevsky.work"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2.5 rounded-xl border border-primary/30 bg-gradient-to-r from-primary/12 to-primary/[0.03] px-4 py-2.5 shadow-card transition-all hover:border-primary/60 hover:shadow-[0_6px_20px_-6px_rgba(22,163,74,0.4)]"
          >
            <span className="inline-flex h-6 w-6 items-center justify-center rounded-md bg-primary text-[11px] font-black text-white">
              B
            </span>
            <span className="leading-none">
              <span className="block text-[10px] font-semibold uppercase tracking-[0.18em] text-muted">
                Built by
              </span>
              <span className="mt-0.5 block text-sm font-extrabold tracking-tight text-foreground">
                Benevsky<span className="text-primary">.work</span>
              </span>
            </span>
            <ArrowUpRight className="h-4 w-4 text-primary transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
        </div>
      </div>
    </footer>
  );
}

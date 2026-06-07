"use client";

import { useEffect, useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";
import { Menu, X, Moon, Sun } from "lucide-react";
import { cn } from "@/lib/utils";
import { Logomark } from "@/components/shared/Logomark";
import { ContactDialog } from "@/components/ContactDialog";

const NAV = [
  { key: "homes", href: "#homes" },
  { key: "ecosystem", href: "#ecosystem" },
  { key: "farm", href: "#farm" },
  { key: "invest", href: "#invest" },
  { key: "partners", href: "#partners" },
  { key: "contacts", href: "#cta" },
] as const;

const LOCALE_LABELS: Record<string, string> = { ru: "RU", kk: "ҚАЗ", en: "EN", zh: "中文" };

function Logo({ onHero }: { onHero: boolean }) {
  return (
    <a href="#top" className="flex items-center gap-3 shrink-0">
      <Logomark className="h-9 w-9 shrink-0" />
      <span className={cn("leading-none", onHero ? "text-white" : "text-foreground")}>
        <span className="block text-[15px] font-extrabold tracking-tight">NOMAD IT PARK</span>
        <span className="mt-1 block text-[9px] font-semibold uppercase tracking-[0.22em] text-primary">
          Smart City · Almaty
        </span>
      </span>
    </a>
  );
}

function ThemeToggle({ onHero }: { onHero: boolean }) {
  const [dark, setDark] = useState(false);
  useEffect(() => {
    // Sync the toggle icon to the theme applied by the inline boot script.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setDark(document.documentElement.classList.contains("dark"));
  }, []);
  const toggle = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    try {
      localStorage.setItem("theme", next ? "dark" : "light");
    } catch {}
  };
  return (
    <button
      onClick={toggle}
      aria-label="Toggle theme"
      className={cn(
        "inline-flex h-10 w-10 items-center justify-center rounded-full transition-colors",
        onHero
          ? "text-white hover:bg-white/15"
          : "text-foreground hover:bg-muted-bg"
      )}
    >
      {dark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
    </button>
  );
}

function LocaleSwitch({
  onHero,
  onNavigate,
}: {
  onHero?: boolean;
  onNavigate?: () => void;
}) {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const switchTo = (next: string) => {
    onNavigate?.();
    router.replace(pathname, { locale: next });
  };

  return (
    <div
      className={cn(
        "flex items-center gap-0.5 rounded-lg p-1 text-[13px] font-bold",
        onHero ? "bg-white/10" : "bg-muted-bg"
      )}
    >
      {routing.locales.map((l) => (
        <button
          key={l}
          onClick={() => switchTo(l)}
          className={cn(
            "rounded-md px-2.5 py-1 transition-colors",
            l === locale
              ? "bg-primary text-white"
              : onHero
                ? "text-white/70 hover:text-white"
                : "text-muted hover:text-foreground"
          )}
        >
          {LOCALE_LABELS[l]}
        </button>
      ))}
    </div>
  );
}

export function Header() {
  const t = useTranslations("nav");
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const onHero = !scrolled;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-border shadow-[0_1px_0_rgba(0,0,0,0.02)]"
          : "bg-transparent"
      )}
    >
      <div className="mx-auto max-w-[1200px] px-4 md:px-6 h-[68px] flex items-center justify-between gap-3">
        <Logo onHero={onHero} />

        <nav className="hidden lg:flex items-center gap-0.5">
          {NAV.map((item) => (
            <a
              key={item.key}
              href={item.href}
              className={cn(
                "whitespace-nowrap rounded-lg px-3 py-2 text-[13px] font-medium transition-colors xl:text-sm",
                onHero
                  ? "text-white/85 hover:bg-white/10 hover:text-white"
                  : "text-foreground/75 hover:bg-muted-bg hover:text-foreground"
              )}
            >
              {t(item.key)}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-1.5">
          <div className="hidden sm:block">
            <LocaleSwitch onHero={onHero} />
          </div>
          <ThemeToggle onHero={onHero} />
          <div className="hidden md:block">
            <ContactDialog label={t("cta")} size="sm" />
          </div>
          <button
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            className={cn(
              "lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-full transition-colors",
              onHero ? "text-white hover:bg-white/15" : "text-foreground hover:bg-muted-bg"
            )}
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>

      {/* Mobile sheet (top) */}
      <div
        className={cn(
          "lg:hidden fixed inset-0 z-50 transition-opacity",
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
      >
        <div className="absolute inset-0 bg-black/50" onClick={() => setOpen(false)} />
        <div
          className={cn(
            "absolute inset-x-0 top-0 bg-card border-b border-border rounded-b-card p-6 transition-transform duration-300",
            open ? "translate-y-0" : "-translate-y-full"
          )}
        >
          <div className="flex items-center justify-between mb-6">
            <span className="flex items-center gap-3">
              <Logomark className="h-9 w-9 shrink-0" />
              <span className="leading-none">
                <span className="block text-[15px] font-extrabold tracking-tight">NOMAD IT PARK</span>
                <span className="mt-1 block text-[9px] font-semibold uppercase tracking-[0.22em] text-primary">
                  Smart City · Almaty
                </span>
              </span>
            </span>
            <button
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full hover:bg-muted-bg"
            >
              <X className="h-6 w-6" />
            </button>
          </div>
          <nav className="flex flex-col gap-1 text-lg font-semibold">
            {NAV.map((item) => (
              <a
                key={item.key}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-3 py-2.5 hover:bg-muted-bg hover:text-primary transition-colors"
              >
                {t(item.key)}
              </a>
            ))}
          </nav>
          <div className="mt-6 flex items-center justify-between">
            <LocaleSwitch onNavigate={() => setOpen(false)} />
            <ContactDialog label={t("cta")} size="sm" />
          </div>
        </div>
      </div>
    </header>
  );
}

import { useLocale, useTranslations } from "next-intl";
import { ArrowUpRight, ShieldCheck, Cpu } from "lucide-react";
import { nicasMembers } from "@/lib/nicas";
import type { Locale } from "@/lib/houses";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { SectionMore } from "@/components/shared/SectionMore";
import { Reveal } from "@/components/shared/Reveal";

function monogram(name: string) {
  const clean = name.replace(/^(КБ|НИЦ)\s*/i, "").replace(/[«»"']/g, "").trim();
  return clean.slice(0, 2).toUpperCase();
}

export function Nicas() {
  const t = useTranslations("nicas");
  const locale = useLocale() as Locale;
  const [anchor, ...members] = nicasMembers;

  return (
    <section id="nicas" className="py-24 md:py-32">
      <div className="mx-auto max-w-[1200px] px-4 md:px-6">
        <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <SectionHeading eyebrow={t("eyebrow")} title={t("title")} sub={t("sub")} />
          <SectionMore href="/ecosystem" />
        </div>

        {/* Anchor — dark tech panel */}
        <Reveal className="mt-12">
          <div className="relative overflow-hidden rounded-card border border-[#1c3a29] bg-[#070d0a] p-7 md:p-9 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.45)]">
            <div
              className="pointer-events-none absolute inset-0 opacity-50"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(22,163,74,0.07) 1px,transparent 1px),linear-gradient(90deg,rgba(22,163,74,0.07) 1px,transparent 1px)",
                backgroundSize: "38px 38px",
              }}
            />
            <div className="pointer-events-none absolute -right-20 -top-20 h-60 w-60 rounded-full bg-primary/20 blur-[90px]" />

            <div className="relative grid gap-6 lg:grid-cols-[auto_1fr_auto] lg:items-center">
              <span className="inline-flex h-20 w-20 items-center justify-center rounded-2xl bg-primary text-white shadow-[0_8px_28px_rgba(22,163,74,0.45)]">
                <Cpu className="h-9 w-9" />
              </span>
              <div>
                <div className="flex flex-wrap items-center gap-3">
                  <span className="tele-live inline-block h-2 w-2 rounded-full bg-primary" />
                  <h3 className="text-2xl font-extrabold tracking-tight text-white">{anchor.name}</h3>
                </div>
                <p className="mt-1.5 text-[12px] font-extrabold uppercase tracking-[0.14em] text-primary">
                  {anchor.role[locale]}
                </p>
                <p className="mt-3 max-w-2xl text-base text-white/80 leading-relaxed">
                  {anchor.desc[locale]}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {anchor.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md border border-white/15 bg-white/[0.04] px-3 py-1 text-xs font-semibold text-white/75"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              {anchor.site && (
                <a
                  href={`https://${anchor.site}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex shrink-0 items-center gap-1.5 rounded-xl bg-primary px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-primary-dark"
                >
                  {anchor.site}
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              )}
            </div>

            <div className="relative mt-6 flex items-center gap-2.5 border-t border-white/10 pt-5 text-sm font-medium text-white/80">
              <ShieldCheck className="h-5 w-5 shrink-0 text-primary" />
              {t("partner_note")}
            </div>
          </div>
        </Reveal>

        {/* Members */}
        <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {members.map((m, i) => (
            <Reveal key={m.slug} delay={(i % 3) * 70}>
              <div className="accent-bar sheen group flex h-full flex-col overflow-hidden rounded-card border border-border bg-card p-6 shadow-card hover-lift hover:border-primary/60">
                <div className="flex items-center gap-3.5">
                  <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-foreground/[0.05] text-base font-extrabold text-foreground/65 transition-colors group-hover:bg-primary group-hover:text-white">
                    {monogram(m.name)}
                  </span>
                  <div className="min-w-0">
                    <h3 className="truncate text-lg font-bold tracking-tight">{m.name}</h3>
                    <p className="truncate text-[13px] font-semibold text-primary">{m.role[locale]}</p>
                  </div>
                </div>
                <p className="mt-4 flex-1 text-sm text-muted leading-relaxed">{m.desc[locale]}</p>
                <div className="mt-4 flex items-center justify-between gap-2">
                  <div className="flex flex-wrap gap-1.5">
                    {m.tags.map((tag) => (
                      <span key={tag} className="rounded-md border border-border px-2.5 py-0.5 text-[11px] font-semibold text-muted">
                        {tag}
                      </span>
                    ))}
                  </div>
                  {m.site && (
                    <a
                      href={`https://${m.site}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={m.site}
                      className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-muted transition-colors hover:bg-primary hover:text-white"
                    >
                      <ArrowUpRight className="h-4 w-4" />
                    </a>
                  )}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

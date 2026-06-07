import { useLocale, useTranslations } from "next-intl";
import { partners } from "@/lib/partners";
import type { Locale } from "@/lib/houses";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { SectionMore } from "@/components/shared/SectionMore";
import { Reveal } from "@/components/shared/Reveal";

export function Partners() {
  const t = useTranslations("partners");
  const locale = useLocale() as Locale;

  return (
    <section id="partners" className="bg-muted-bg grid-bg py-24 md:py-32">
      <div className="mx-auto max-w-[1200px] px-4 md:px-6">
        <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <SectionHeading eyebrow={t("eyebrow")} title={t("title")} sub={t("sub")} />
          <SectionMore href="/partners" />
        </div>

        <div className="mt-12 grid gap-4 lg:grid-cols-2">
          {partners.map((p, i) => (
            <Reveal key={p.slug} delay={(i % 2) * 70}>
              <div className="accent-bar sheen group flex h-full gap-5 overflow-hidden rounded-card border border-border bg-card p-6 shadow-card hover-lift hover:border-primary/60">
                <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl border border-border bg-muted-bg text-3xl">
                  {p.flag}
                </span>
                <div className="min-w-0">
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                    <h3 className="text-xl font-extrabold tracking-tight">{p.name}</h3>
                    <span className="rounded-md border border-border px-2 py-0.5 text-[11px] font-semibold text-muted">
                      {p.region[locale]}
                    </span>
                  </div>
                  <p className="mt-1 text-[13px] font-semibold text-primary">{p.role[locale]}</p>
                  <p className="mt-2.5 text-sm text-muted leading-relaxed">{p.desc[locale]}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

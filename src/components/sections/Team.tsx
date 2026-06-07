import { useLocale, useTranslations } from "next-intl";
import { UserRound } from "lucide-react";
import { team } from "@/lib/team";
import type { Locale } from "@/lib/houses";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Reveal } from "@/components/shared/Reveal";

export function Team() {
  const t = useTranslations("team");
  const locale = useLocale() as Locale;

  return (
    <section id="team" className="py-24 md:py-32">
      <div className="mx-auto max-w-[1200px] px-4 md:px-6">
        <SectionHeading eyebrow={t("eyebrow")} title={t("title")} sub={t("sub")} />

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((m, i) => (
            <Reveal key={m.slug} delay={(i % 4) * 60}>
              <div className="flex h-full flex-col rounded-card border border-border bg-card p-6 shadow-card">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-foreground/[0.05] text-foreground/55">
                  <UserRound className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-base font-bold tracking-tight leading-snug">
                  {m.role[locale]}
                </h3>
                {m.name !== "—" && (
                  <p className="mt-1 text-sm font-semibold text-primary">{m.name}</p>
                )}
                <p className="mt-3 flex-1 text-[13px] text-muted leading-relaxed">
                  {m.credential[locale]}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-6">
          <p className="text-sm text-muted">{t("note")}</p>
        </Reveal>
      </div>
    </section>
  );
}

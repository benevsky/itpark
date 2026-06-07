import { useTranslations } from "next-intl";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Reveal } from "@/components/shared/Reveal";
import { cn } from "@/lib/utils";

type Item = { period: string; title: string; desc: string };

export function Timeline() {
  const t = useTranslations("timeline");
  const items = t.raw("items") as Item[];

  return (
    <section id="timeline" className="py-24 md:py-32">
      <div className="mx-auto max-w-[1200px] px-4 md:px-6">
        <SectionHeading eyebrow={t("eyebrow")} title={t("title")} sub={t("sub")} />

        <div className="relative mt-12">
          {/* Соединительная линия (desktop) */}
          <div className="pointer-events-none absolute left-0 right-0 top-7 hidden h-0.5 rounded-full bg-gradient-to-r from-primary/10 via-primary/40 to-primary/10 lg:block" />

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-6">
            {items.map((it, i) => {
              const launch = i === 1;
              return (
                <Reveal key={i} delay={i * 70}>
                  <div className="relative flex h-full flex-col">
                    <span
                      className={cn(
                        "relative z-10 mb-4 inline-flex h-14 w-14 items-center justify-center rounded-2xl text-lg font-extrabold tabular-nums ring-4 ring-background",
                        launch
                          ? "bg-primary text-white shadow-[0_8px_24px_rgba(26,173,92,0.45)]"
                          : "bg-card text-primary border border-border"
                      )}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div
                      className={cn(
                        "relative flex-1 overflow-hidden rounded-card border p-6 shadow-card hover-lift",
                        launch
                          ? "border-primary bg-primary text-white"
                          : "border-border bg-card"
                      )}
                    >
                      <span
                        className={cn(
                          "pointer-events-none absolute -right-0.5 -top-1 text-4xl font-extrabold tabular-nums",
                          launch ? "text-white/15" : "text-primary/[0.07]"
                        )}
                      >
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <p
                        className={cn(
                          "relative text-[12px] font-extrabold uppercase tracking-[0.12em]",
                          launch ? "text-white/90" : "text-primary"
                        )}
                      >
                        {it.period}
                      </p>
                      <h3 className="relative mt-2 text-lg font-bold tracking-tight">
                        {it.title}
                      </h3>
                      <p
                        className={cn(
                          "relative mt-2 text-sm leading-relaxed",
                          launch ? "text-white/85" : "text-muted"
                        )}
                      >
                        {it.desc}
                      </p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

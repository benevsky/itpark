"use client";

import { useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { Cpu } from "lucide-react";
import { houses, type Locale } from "@/lib/houses";
import { HouseCard } from "@/components/shared/HouseCard";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { SectionMore } from "@/components/shared/SectionMore";
import { Reveal } from "@/components/shared/Reveal";
import { cn } from "@/lib/utils";

type Filter = "all" | "1floor" | "2floor" | "bath";

export function Homes() {
  const t = useTranslations("homes");
  const locale = useLocale() as Locale;
  const [filter, setFilter] = useState<Filter>("all");

  const filters: { key: Filter; label: string }[] = [
    { key: "all", label: t("filter_all") },
    { key: "1floor", label: t("filter_1floor") },
    { key: "2floor", label: t("filter_2floor") },
    { key: "bath", label: t("filter_bath") },
  ];

  const filtered = houses.filter((h) => {
    if (filter === "all") return true;
    if (filter === "bath") return h.type === "bath";
    if (filter === "1floor") return h.type === "house" && h.floors === 1;
    if (filter === "2floor") return h.type === "house" && h.floors === 2;
    return true;
  });

  return (
    <section id="homes" className="py-24 md:py-32">
      <div className="mx-auto max-w-[1200px] px-4 md:px-6">
        <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <SectionHeading eyebrow={t("eyebrow")} title={t("title")} sub={t("sub")} />
          <SectionMore href="/homes" />
        </div>

        {/* Smart-home banner */}
        <Reveal className="mt-10">
          <div className="flex flex-col gap-4 overflow-hidden rounded-card border border-primary/30 bg-primary/[0.05] p-6 shadow-card sm:flex-row sm:items-center">
            <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary text-white">
              <Cpu className="h-6 w-6" />
            </span>
            <div className="flex-1">
              <h3 className="text-lg font-bold tracking-tight">{t("smart_title")}</h3>
              <p className="mt-1 text-sm text-muted leading-relaxed">{t("smart_desc")}</p>
            </div>
            <div className="flex shrink-0 gap-2">
              <span className="rounded-md border border-primary/30 bg-card px-3 py-1.5 text-xs font-bold text-primary">
                Turan Telematika
              </span>
              <span className="rounded-md border border-primary/30 bg-card px-3 py-1.5 text-xs font-bold text-primary">
                QR System
              </span>
            </div>
          </div>
        </Reveal>

        {/* Filters */}
        <Reveal className="mt-8">
          <div className="inline-flex flex-wrap gap-1 rounded-lg border border-border bg-card p-1">
            {filters.map((f) => (
              <button
                key={f.key}
                onClick={() => setFilter(f.key)}
                className={cn(
                  "rounded-md px-4 py-2 text-sm font-medium transition-colors",
                  filter === f.key
                    ? "bg-primary text-primary-foreground"
                    : "text-muted hover:text-foreground"
                )}
              >
                {f.label}
              </button>
            ))}
          </div>
        </Reveal>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((h, i) => (
            <Reveal key={h.slug} delay={(i % 3) * 70}>
              <HouseCard
                house={h}
                locale={locale}
                incomeBadge={t("income_badge")}
                smartBadge={t("smart_badge")}
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

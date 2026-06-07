import { useTranslations } from "next-intl";
import {
  Fuel,
  UtensilsCrossed,
  Bath,
  Home,
  Building2,
  BedDouble,
  Medal,
  PawPrint,
  Fish,
  Tent,
  Milk,
  Sprout,
  Monitor,
  Umbrella,
  ShieldCheck,
  SunMedium,
  type LucideIcon,
} from "lucide-react";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { SectionMore } from "@/components/shared/SectionMore";
import { Reveal } from "@/components/shared/Reveal";

const MASTERPLAN = "/media/2026-06-07 18.08.40.webp";

type VObject = { title: string; desc: string };

const OBJECT_ICONS: LucideIcon[] = [
  Fuel, UtensilsCrossed, Bath, Home,
  Building2, BedDouble, Medal, PawPrint,
  Fish, Tent, Milk, Sprout,
  Monitor, Umbrella, ShieldCheck, SunMedium,
];

export function Vision() {
  const t = useTranslations("vision");
  const objects = t.raw("objects") as VObject[];

  return (
    <section id="vision" className="py-24 md:py-32">
      <div className="mx-auto max-w-[1200px] px-4 md:px-6">
        <SectionHeading eyebrow={t("eyebrow")} title={t("title")} sub={t("sub")} center />
        <Reveal className="mt-6 flex justify-center">
          <SectionMore href="/vision" />
        </Reveal>

        {/* Masterplan banner */}
        <Reveal className="mt-12">
          <div className="relative overflow-hidden rounded-card border border-border shadow-card">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={MASTERPLAN}
              alt=""
              loading="lazy"
              className="h-56 sm:h-72 md:h-96 w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
            {/* futuristic HUD overlay */}
            <div
              className="pointer-events-none absolute inset-0 opacity-60 mix-blend-screen"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(22,163,74,0.10) 1px,transparent 1px),linear-gradient(90deg,rgba(22,163,74,0.10) 1px,transparent 1px)",
                backgroundSize: "44px 44px",
              }}
            />
            <div className="pointer-events-none absolute left-4 top-4 h-6 w-6 border-l-2 border-t-2 border-primary/70" />
            <div className="pointer-events-none absolute right-4 top-4 h-6 w-6 border-r-2 border-t-2 border-primary/70" />
            <div className="pointer-events-none absolute bottom-4 left-4 h-6 w-6 border-b-2 border-l-2 border-primary/70" />
            <div className="pointer-events-none absolute bottom-4 right-4 h-6 w-6 border-b-2 border-r-2 border-primary/70" />
            <div className="eco-scan pointer-events-none absolute inset-x-0 h-px bg-gradient-to-r from-transparent via-primary/70 to-transparent" />
            <div className="absolute bottom-6 left-6 flex flex-wrap items-center gap-3">
              <span className="rounded-md bg-primary px-4 py-1.5 text-sm font-bold text-white">
                {objects.length} объектов
              </span>
              <span className="rounded-md bg-black/40 px-4 py-1.5 text-sm font-semibold text-white backdrop-blur-sm">
                54 га · единый мастерплан
              </span>
            </div>
          </div>
        </Reveal>

        {/* Object cards */}
        <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {objects.map((o, i) => {
            const Icon = OBJECT_ICONS[i] ?? Home;
            return (
              <Reveal key={i} delay={(i % 4) * 50}>
                <div className="accent-bar sheen group flex h-full flex-col overflow-hidden rounded-card border border-border bg-card p-5 shadow-card hover-lift hover:border-primary/60">
                  <div className="flex items-start justify-between">
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-foreground/[0.05] text-foreground/65 transition-colors group-hover:bg-primary group-hover:text-white">
                      <Icon className="h-5 w-5" />
                    </span>
                    <span className="rounded-md border border-border px-2 py-0.5 text-[11px] font-bold tabular-nums text-muted transition-colors group-hover:border-primary/40 group-hover:text-primary">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="mt-4 text-base font-bold tracking-tight">{o.title}</h3>
                  <p className="mt-1.5 flex-1 text-[13px] text-muted leading-relaxed">{o.desc}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

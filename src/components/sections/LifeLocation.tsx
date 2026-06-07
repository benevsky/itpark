import { useTranslations } from "next-intl";
import { Sunrise, Sun, Sunset, MapPin, Navigation } from "lucide-react";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { SectionMore } from "@/components/shared/SectionMore";
import { Reveal } from "@/components/shared/Reveal";
import { buttonClasses } from "@/components/ui/button";
import { ICONS } from "@/lib/icons";
import { contacts } from "@/lib/contacts";

type Item = { icon: string; title: string; metric: string; desc: string };
type Day = { time: string; label: string };
type LItem = { icon: string; text: string };
type Opp = { icon: string; title: string; desc: string };

const DAY_ICONS = [Sunrise, Sun, Sunset];
const FEATURE_VIDEO = "/media/fuel-2.mp4";
const FEATURE_POSTER = "/media/fuel-2.webp";
const LOC_VIDEO = "/media/fuel-3.mp4";
const LOC_POSTER = "/media/fuel-3.webp";

export function LifeLocation() {
  const t = useTranslations("infra");
  const loc = useTranslations("location");
  const items = t.raw("items") as Item[];
  const day = t.raw("day") as Day[];
  const [feature, ...rest] = items;
  const FeatureIcon = ICONS[feature.icon] ?? ICONS.Monitor;

  const lItems = loc.raw("items") as LItem[];
  const opps = loc.raw("opps") as Opp[];
  const address = lItems[0];
  const distances = lItems.slice(1);

  return (
    <section id="life" className="py-24 md:py-32">
      <div className="mx-auto max-w-[1200px] px-4 md:px-6">
        <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <SectionHeading eyebrow={t("eyebrow")} title={t("title")} sub={t("sub")} />
          <SectionMore href="/life" />
        </div>

        {/* Day rhythm */}
        <Reveal className="mt-8">
          <div className="grid gap-3 sm:grid-cols-3">
            {day.map((d, i) => {
              const DayIcon = DAY_ICONS[i] ?? Sun;
              return (
                <div key={i} className="accent-bar flex items-center gap-3.5 overflow-hidden rounded-card border border-border bg-card px-5 py-4 shadow-card">
                  <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <DayIcon className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-[11px] font-extrabold uppercase tracking-[0.16em] text-primary">{d.time}</p>
                    <p className="mt-0.5 text-sm font-semibold">{d.label}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </Reveal>

        {/* Amenity bento */}
        <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 lg:auto-rows-fr">
          <Reveal className="md:col-span-2 lg:col-span-2 lg:row-span-2">
            <div className="group relative h-full min-h-[280px] overflow-hidden rounded-card border border-border shadow-card hover-lift">
              <video className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" autoPlay muted loop playsInline poster={FEATURE_POSTER}>
                <source src={FEATURE_VIDEO} type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/45 to-black/15" />
              <div className="relative flex h-full flex-col justify-between p-7">
                <div className="flex items-start justify-between">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary text-white shadow-lg">
                    <FeatureIcon className="h-6 w-6" />
                  </span>
                  <span className="rounded-md bg-white/15 px-3 py-1.5 text-sm font-extrabold tabular-nums text-white backdrop-blur-sm">
                    {feature.metric}
                  </span>
                </div>
                <div>
                  <h3 className="text-2xl font-extrabold tracking-tight text-white">{feature.title}</h3>
                  <p className="mt-2 max-w-md text-sm text-white/80 leading-relaxed">{feature.desc}</p>
                </div>
              </div>
            </div>
          </Reveal>

          {rest.map((it, i) => {
            const Icon = ICONS[it.icon] ?? ICONS.Monitor;
            return (
              <Reveal key={i} delay={(i % 3) * 70}>
                <div className="accent-bar sheen group flex h-full flex-col overflow-hidden rounded-card border border-border bg-card p-6 shadow-card hover-lift hover:border-primary/60">
                  <div className="flex items-center justify-between">
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-foreground/[0.05] text-foreground/65 transition-colors group-hover:bg-primary group-hover:text-white">
                      <Icon className="h-5 w-5" />
                    </span>
                    <span className="text-2xl font-extrabold tabular-nums tracking-tight text-primary">{it.metric}</span>
                  </div>
                  <h3 className="mt-4 text-lg font-bold tracking-tight">{it.title}</h3>
                  <p className="mt-1.5 flex-1 text-sm text-muted leading-relaxed">{it.desc}</p>
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* Location sub-block */}
        <div className="mt-16 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-3 inline-flex items-center gap-2 text-[12px] font-extrabold uppercase tracking-[0.16em] text-primary">
              <span className="h-px w-6 bg-primary/60" />
              {loc("eyebrow")}
            </p>
            <h3 className="text-[1.6rem] md:text-4xl font-extrabold tracking-[-0.02em] leading-[1.08]">
              {loc("title")}
            </h3>
            <p className="mt-3 max-w-xl text-sm text-muted leading-relaxed">{loc("sub")}</p>
          </div>
          <a href={contacts.maps_2gis} target="_blank" rel="noopener noreferrer" className={buttonClasses("default", "default", "shrink-0")}>
            <Navigation className="h-4 w-4" />
            {loc("map_btn")}
          </a>
        </div>

        <div className="mt-8 grid gap-4 lg:grid-cols-2 lg:items-stretch">
          <Reveal>
            <div className="relative h-full min-h-[320px] overflow-hidden rounded-card border border-border shadow-card">
              <video className="absolute inset-0 h-full w-full object-cover" autoPlay muted loop playsInline poster={LOC_POSTER}>
                <source src={LOC_VIDEO} type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 flex items-start gap-3">
                <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary text-white shadow-lg">
                  <MapPin className="h-6 w-6" />
                </span>
                <div>
                  <p className="text-xl font-extrabold tracking-tight text-white leading-tight">65 км от Алматы</p>
                  <p className="mt-1 whitespace-pre-line text-sm text-white/80 leading-relaxed">{address.text}</p>
                </div>
              </div>
            </div>
          </Reveal>

          <div className="grid gap-4 sm:grid-cols-2">
            {opps.map((o, i) => {
              const Icon = ICONS[o.icon] ?? ICONS.MapPin;
              return (
                <Reveal key={i} delay={(i % 2) * 80}>
                  <div className="accent-bar sheen group relative flex h-full flex-col overflow-hidden rounded-card border border-border bg-card p-6 shadow-card hover-lift hover:border-primary/60">
                    <Icon className="pointer-events-none absolute -bottom-5 -right-5 h-24 w-24 text-foreground/[0.04] transition-all duration-500 group-hover:scale-110 group-hover:text-primary/[0.08]" />
                    <span className="relative inline-flex h-11 w-11 items-center justify-center rounded-xl bg-foreground/[0.05] text-foreground/65 transition-colors group-hover:bg-primary group-hover:text-white">
                      <Icon className="h-5 w-5" />
                    </span>
                    <h3 className="relative mt-4 text-base font-bold tracking-tight">{o.title}</h3>
                    <p className="relative mt-1.5 flex-1 text-[13px] text-muted leading-relaxed">{o.desc}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>

        <Reveal className="mt-4">
          <div className="grid grid-cols-2 gap-px overflow-hidden rounded-card border border-border bg-border shadow-card md:grid-cols-4">
            {distances.map((d, i) => {
              const Icon = ICONS[d.icon] ?? ICONS.MapPin;
              return (
                <div key={i} className="flex items-center gap-3 bg-card px-5 py-4">
                  <Icon className="h-5 w-5 shrink-0 text-primary" />
                  <span className="whitespace-pre-line text-sm font-medium text-foreground/85 leading-snug">{d.text}</span>
                </div>
              );
            })}
          </div>
        </Reveal>

        {/* Conclusion */}
        <Reveal className="mt-10">
          <div className="rounded-card border border-primary/30 bg-primary/[0.05] p-7 text-center shadow-card md:p-9">
            <p className="mx-auto max-w-3xl text-lg md:text-2xl font-extrabold tracking-tight">
              {t("conclusion")}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

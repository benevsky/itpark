import { useTranslations } from "next-intl";
import { Sunrise, Sun, Sunset } from "lucide-react";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Reveal } from "@/components/shared/Reveal";
import { ICONS } from "@/lib/icons";

type Item = { icon: string; title: string; metric: string; desc: string };
type Day = { time: string; label: string };

const DAY_ICONS = [Sunrise, Sun, Sunset];

const FEATURE_VIDEO = "/media/fuel-2.mp4";
const FEATURE_POSTER = "/media/fuel-2.webp";

export function Infra() {
  const t = useTranslations("infra");
  const items = t.raw("items") as Item[];
  const day = t.raw("day") as Day[];
  const [feature, ...rest] = items;
  const FeatureIcon = ICONS[feature.icon] ?? ICONS.Monitor;

  return (
    <section id="infra" className="py-24 md:py-32">
      <div className="mx-auto max-w-[1200px] px-4 md:px-6">
        <SectionHeading eyebrow={t("eyebrow")} title={t("title")} sub={t("sub")} />

        {/* Day rhythm */}
        <Reveal className="mt-8">
          <div className="grid gap-3 sm:grid-cols-3">
            {day.map((d, i) => {
              const DayIcon = DAY_ICONS[i] ?? Sun;
              return (
                <div
                  key={i}
                  className="accent-bar flex items-center gap-3.5 overflow-hidden rounded-card border border-border bg-card px-5 py-4 shadow-card"
                >
                  <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <DayIcon className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-[11px] font-extrabold uppercase tracking-[0.16em] text-primary">
                      {d.time}
                    </p>
                    <p className="mt-0.5 text-sm font-semibold">{d.label}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </Reveal>

        <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 lg:auto-rows-fr">
          {/* Featured (video) */}
          <Reveal className="md:col-span-2 lg:col-span-2 lg:row-span-2">
            <div className="group relative h-full min-h-[280px] overflow-hidden rounded-card border border-border shadow-card hover-lift">
              <video
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                autoPlay
                muted
                loop
                playsInline
                poster={FEATURE_POSTER}
              >
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
                  <h3 className="text-2xl font-extrabold tracking-tight text-white">
                    {feature.title}
                  </h3>
                  <p className="mt-2 max-w-md text-sm text-white/80 leading-relaxed">
                    {feature.desc}
                  </p>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Rest — metric cards */}
          {rest.map((it, i) => {
            const Icon = ICONS[it.icon] ?? ICONS.Monitor;
            return (
              <Reveal key={i} delay={(i % 3) * 70}>
                <div className="accent-bar sheen group flex h-full flex-col overflow-hidden rounded-card border border-border bg-card p-6 shadow-card hover-lift hover:border-primary/60">
                  <div className="flex items-center justify-between">
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-foreground/[0.05] text-foreground/65 transition-colors group-hover:bg-primary group-hover:text-white">
                      <Icon className="h-5 w-5" />
                    </span>
                    <span className="text-2xl font-extrabold tabular-nums tracking-tight text-primary">
                      {it.metric}
                    </span>
                  </div>
                  <h3 className="mt-4 text-lg font-bold tracking-tight">{it.title}</h3>
                  <p className="mt-1.5 flex-1 text-sm text-muted leading-relaxed">{it.desc}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

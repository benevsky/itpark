import { useTranslations } from "next-intl";
import { MapPin, Navigation } from "lucide-react";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Reveal } from "@/components/shared/Reveal";
import { buttonClasses } from "@/components/ui/button";
import { ICONS } from "@/lib/icons";
import { contacts } from "@/lib/contacts";

type Item = { icon: string; text: string };
type Opp = { icon: string; title: string; desc: string };

const LOC_VIDEO = "/media/fuel-3.mp4";
const LOC_POSTER = "/media/fuel-3.webp";

export function Location() {
  const t = useTranslations("location");
  const items = t.raw("items") as Item[];
  const opps = t.raw("opps") as Opp[];
  const address = items[0];
  const distances = items.slice(1);

  return (
    <section id="location" className="bg-muted-bg grid-bg py-24 md:py-32">
      <div className="mx-auto max-w-[1200px] px-4 md:px-6">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading eyebrow={t("eyebrow")} title={t("title")} sub={t("sub")} />
          <Reveal>
            <a
              href={contacts.maps_2gis}
              target="_blank"
              rel="noopener noreferrer"
              className={buttonClasses("default", "default", "shrink-0")}
            >
              <Navigation className="h-4 w-4" />
              {t("map_btn")}
            </a>
          </Reveal>
        </div>

        <div className="mt-10 grid gap-4 lg:grid-cols-2 lg:items-stretch">
          {/* Video map */}
          <Reveal>
            <div className="relative h-full min-h-[320px] overflow-hidden rounded-card border border-border shadow-card">
              <video
                className="absolute inset-0 h-full w-full object-cover"
                autoPlay
                muted
                loop
                playsInline
                poster={LOC_POSTER}
              >
                <source src={LOC_VIDEO} type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 flex items-start gap-3">
                <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary text-white shadow-lg">
                  <MapPin className="h-6 w-6" />
                </span>
                <div>
                  <p className="text-xl font-extrabold tracking-tight text-white leading-tight">
                    65 км от Алматы
                  </p>
                  <p className="mt-1 whitespace-pre-line text-sm text-white/80 leading-relaxed">
                    {address.text}
                  </p>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Opportunities */}
          <div className="grid gap-4 sm:grid-cols-2">
            {opps.map((o, i) => {
              const Icon = ICONS[o.icon] ?? ICONS.MapPin;
              return (
                <Reveal key={i} delay={(i % 2) * 80}>
                  <div className="accent-bar group flex h-full flex-col overflow-hidden rounded-card border border-border bg-card p-6 shadow-card hover-lift hover:border-primary/60">
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-foreground/[0.05] text-foreground/65 transition-colors group-hover:bg-primary group-hover:text-white">
                      <Icon className="h-5 w-5" />
                    </span>
                    <h3 className="mt-4 text-base font-bold tracking-tight">{o.title}</h3>
                    <p className="mt-1.5 flex-1 text-[13px] text-muted leading-relaxed">{o.desc}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>

        {/* Distance strip */}
        <Reveal className="mt-4">
          <div className="grid grid-cols-2 gap-px overflow-hidden rounded-card border border-border bg-border shadow-card md:grid-cols-4">
            {distances.map((d, i) => {
              const Icon = ICONS[d.icon] ?? ICONS.MapPin;
              return (
                <div key={i} className="flex items-center gap-3 bg-card px-5 py-4">
                  <Icon className="h-5 w-5 shrink-0 text-primary" />
                  <span className="whitespace-pre-line text-sm font-medium text-foreground/85 leading-snug">
                    {d.text}
                  </span>
                </div>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

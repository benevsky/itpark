import { useTranslations } from "next-intl";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { SectionMore } from "@/components/shared/SectionMore";
import { Reveal } from "@/components/shared/Reveal";
import { ICONS } from "@/lib/icons";

type Asset = { icon: string; title: string; desc: string };

const FEATURE_VIDEO = "/media/aqua-2.mp4";
const FEATURE_POSTER = "/media/aqua-2.webp";

export function About() {
  const t = useTranslations("about");
  const assets = t.raw("assets") as Asset[];
  const [lead, ...rest] = assets;
  const LeadIcon = ICONS[lead.icon] ?? ICONS.MapPin;

  return (
    <section id="about" className="py-24 md:py-32">
      <div className="mx-auto max-w-[1200px] px-4 md:px-6">
        <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <SectionHeading eyebrow={t("eyebrow")} title={t("title")} sub={t("sub")} />
          <SectionMore href="/about" />
        </div>

        <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 lg:auto-rows-fr">
          {/* Featured */}
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
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/10" />
              <div className="relative flex h-full flex-col justify-end p-7">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary text-white shadow-lg">
                  <LeadIcon className="h-6 w-6" />
                </span>
                <h3 className="mt-4 text-2xl font-extrabold tracking-tight text-white">
                  {lead.title}
                </h3>
                <p className="mt-2 max-w-md text-sm text-white/80 leading-relaxed">
                  {lead.desc}
                </p>
              </div>
            </div>
          </Reveal>

          {/* Rest */}
          {rest.map((a, i) => {
            const Icon = ICONS[a.icon] ?? ICONS.MapPin;
            return (
              <Reveal key={i} delay={(i % 3) * 70}>
                <div className="accent-bar sheen group relative h-full overflow-hidden rounded-card border border-border bg-card p-6 shadow-card hover-lift hover:border-primary/60">
                  <Icon className="pointer-events-none absolute -bottom-5 -right-5 h-28 w-28 text-foreground/[0.04] transition-all duration-500 group-hover:scale-110 group-hover:text-primary/[0.08]" />
                  <span className="relative inline-flex h-11 w-11 items-center justify-center rounded-xl bg-foreground/[0.05] text-foreground/65 transition-colors group-hover:bg-primary group-hover:text-white">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="relative mt-4 text-lg font-bold tracking-tight">{a.title}</h3>
                  <p className="relative mt-1.5 text-sm text-muted leading-relaxed">{a.desc}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

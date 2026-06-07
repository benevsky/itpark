import { useTranslations } from "next-intl";
import { Check, Thermometer, Timer } from "lucide-react";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { SectionMore } from "@/components/shared/SectionMore";
import { Reveal } from "@/components/shared/Reveal";
import { RasLoopDiagram } from "@/components/shared/RasLoopDiagram";

type Fish = {
  name: string;
  temp: string;
  price: string;
  cycle: string;
  tag: string;
  desc: string;
};

const FARM_VIDEO = "/media/aqua-3.mp4";
const FARM_POSTER = "/media/aqua-3.webp";

export function Farm() {
  const t = useTranslations("farm");
  const tech = t.raw("tech") as string[];
  const fish = t.raw("fish") as Fish[];

  return (
    <section id="farm" className="relative bg-muted-bg grid-bg py-24 md:py-32">
      <div className="mx-auto max-w-[1200px] px-4 md:px-6">
        <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <SectionHeading eyebrow={t("eyebrow")} title={t("title")} sub={t("sub")} />
          <SectionMore href="/farm" />
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2 lg:items-stretch">
          {/* Tech list */}
          <Reveal className="order-2 lg:order-1">
            <div className="h-full rounded-card border border-border bg-card p-7 shadow-card">
              <ul className="flex flex-col gap-4">
                {tech.map((line, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/15 text-primary">
                      <Check className="h-4 w-4" />
                    </span>
                    <span className="text-sm md:text-base text-foreground/85 leading-relaxed">
                      {line}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          {/* Image */}
          <Reveal className="order-1 lg:order-2">
            <div className="relative h-full min-h-[18rem] overflow-hidden rounded-card border border-border shadow-card">
              <video
                className="absolute inset-0 h-full w-full object-cover"
                autoPlay
                muted
                loop
                playsInline
                poster={FARM_POSTER}
              >
                <source src={FARM_VIDEO} type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-gradient-to-t from-black/55 to-transparent" />
              <span className="absolute right-4 top-4 inline-flex items-center gap-1.5 rounded-md bg-black/45 px-2.5 py-1 text-[11px] font-bold uppercase tracking-wide text-white backdrop-blur-sm">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-red-500" />
                Live
              </span>
              <div className="absolute bottom-5 left-5 flex items-center gap-3">
                <span className="rounded-md bg-primary px-3.5 py-1.5 text-sm font-bold text-white">
                  200 т / год
                </span>
                <span className="rounded-md bg-black/40 px-3.5 py-1.5 text-sm font-semibold text-white backdrop-blur-sm">
                  4 вида рыбы
                </span>
              </div>
            </div>
          </Reveal>
        </div>

        {/* RAS closed-loop diagram */}
        <Reveal className="mt-4">
          <RasLoopDiagram />
        </Reveal>

        {/* Fish cards */}
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {fish.map((f, i) => (
            <Reveal key={i} delay={(i % 4) * 70}>
              <div className="group relative flex h-full flex-col overflow-hidden rounded-card border border-border bg-card shadow-card hover-lift hover:border-primary/60">
                <span className="block h-1.5 w-full bg-gradient-to-r from-primary to-primary/40" />
                <div className="flex flex-1 flex-col p-6">
                  <span className="inline-flex w-fit rounded-md bg-primary/10 px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-primary">
                    {f.tag}
                  </span>
                  <h3 className="mt-3 text-xl font-extrabold tracking-tight">{f.name}</h3>
                  <p className="mt-1 text-lg font-extrabold tabular-nums text-primary">
                    {f.price}
                  </p>
                  <p className="mt-3 flex-1 text-sm text-muted leading-relaxed">{f.desc}</p>

                  <div className="mt-5 flex items-center gap-4 border-t border-border pt-4 text-sm">
                    <span className="inline-flex items-center gap-1.5 text-foreground/80">
                      <Thermometer className="h-4 w-4 text-primary" />
                      <span className="tabular-nums">{f.temp}</span>
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-foreground/80">
                      <Timer className="h-4 w-4 text-primary" />
                      <span className="tabular-nums">{f.cycle}</span>
                    </span>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-8">
          <a href="#invest" className="text-sm font-semibold text-primary hover:underline">
            {t("income_cta")}
          </a>
        </Reveal>
      </div>
    </section>
  );
}

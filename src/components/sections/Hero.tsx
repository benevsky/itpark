import { useTranslations } from "next-intl";
import { ChevronDown } from "lucide-react";
import { buttonClasses } from "@/components/ui/button";
import { Reveal } from "@/components/shared/Reveal";

const HERO_VIDEO = "/media/2026-06-07 18.05.53.mp4";
const HERO_POSTER = "/media/акваферма и заправка.00_00_55_00.Still018.webp";

export function Hero() {
  const t = useTranslations("hero");

  const stats = [
    { v: t("stat1_val"), l: t("stat1_lbl") },
    { v: t("stat2_val"), l: t("stat2_lbl") },
    { v: t("stat3_val"), l: t("stat3_lbl") },
    { v: t("stat4_val"), l: t("stat4_lbl") },
  ];

  return (
    <section id="top" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Video background */}
      <video
        className="absolute inset-0 z-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        poster={HERO_POSTER}
      >
        <source src={HERO_VIDEO} type="video/mp4" />
      </video>
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/55 via-black/40 to-black/80" />
      <div className="absolute inset-0 z-10 grid-bg opacity-50" />
      {/* focus vignette */}
      <div className="absolute inset-0 z-10 bg-[radial-gradient(ellipse_at_center,transparent_35%,rgba(0,0,0,0.5)_100%)]" />

      <div className="relative z-20 mx-auto flex w-full max-w-[1120px] flex-col items-center px-4 md:px-6 pt-28 pb-24 text-center">
        {/* Frosted text panel */}
        <Reveal className="w-full">
          <div className="mx-auto w-full max-w-4xl rounded-[1.75rem] border border-white/12 bg-black/30 px-6 py-9 shadow-[0_24px_70px_-15px_rgba(0,0,0,0.55)] backdrop-blur-md md:px-12 md:py-12">
            <p className="inline-flex items-center gap-2.5 text-[11px] md:text-xs font-bold uppercase tracking-[0.16em] text-white/90">
              <span className="tele-live inline-block h-2 w-2 rounded-full bg-primary" />
              {t("eyebrow")}
            </p>

            <h1 className="mt-6 text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter leading-[0.95] text-white">
              <span className="inline">{t("line1")} </span>
              <span className="inline">{t("line2")} </span>
              <span className="inline text-primary">{t("line3")}</span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-base md:text-lg leading-relaxed text-white/85">
              {t("sub")}
            </p>
          </div>
        </Reveal>

        {/* CTAs */}
        <Reveal delay={160}>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a href="#homes" className={buttonClasses("default", "lg")}>
              {t("cta_homes")}
            </a>
            <a
              href="#invest"
              className={buttonClasses(
                "outline",
                "lg",
                "border-white/40 bg-white/5 text-white backdrop-blur-sm hover:bg-white/10 hover:text-white hover:border-white"
              )}
            >
              {t("cta_invest")}
            </a>
          </div>
        </Reveal>

        {/* Stats */}
        <Reveal delay={260} className="w-full">
          <div className="mx-auto mt-12 grid max-w-3xl grid-cols-2 gap-px overflow-hidden rounded-[1.25rem] border border-white/15 bg-white/15 backdrop-blur-md md:grid-cols-4">
            {stats.map((s, i) => (
              <div
                key={i}
                className="bg-black/30 px-5 py-6 text-center transition-colors hover:bg-black/40"
              >
                <div className="text-3xl md:text-4xl font-extrabold tabular-nums text-white">
                  {s.v}
                </div>
                <div className="mt-1.5 text-xs md:text-sm text-white/65">{s.l}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        aria-label="Scroll down"
        className="absolute bottom-6 left-1/2 z-20 -translate-x-1/2 inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/25 bg-black/25 text-white/70 backdrop-blur-sm transition-colors hover:border-white/50 hover:text-white"
      >
        <ChevronDown className="h-5 w-5 animate-bounce" />
      </a>
    </section>
  );
}

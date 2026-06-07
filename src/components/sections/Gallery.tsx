import { useTranslations } from "next-intl";
import { Reveal } from "@/components/shared/Reveal";

const BG_VIDEO = "/media/2026-06-07 18.06.24.mp4";
const BG_POSTER = "/media/manifest.webp";

type Media = { type: "img"; src: string } | { type: "video"; src: string; poster: string };

const RAIL: Media[] = [
  { type: "img", src: "/media/акваферма и заправка.00_01_47_15.Still017.webp" },
  { type: "video", src: "/media/aqua-4.mp4", poster: "/media/aqua-4.webp" },
  { type: "img", src: "/media/акваферма и заправка.00_01_13_09.Still020.webp" },
  { type: "img", src: "/media/2026-06-07 18.08.40.webp" },
  { type: "video", src: "/media/fuel-1.mp4", poster: "/media/fuel-1.webp" },
  { type: "img", src: "/media/акваферма и заправка.00_00_55_00.Still018.webp" },
];

export function Gallery() {
  const t = useTranslations("gallery");

  return (
    <section id="vision-band" className="relative flex min-h-[88vh] items-center overflow-hidden py-28 text-white">
      <video className="absolute inset-0 z-0 h-full w-full object-cover" autoPlay muted loop playsInline poster={BG_POSTER}>
        <source src={BG_VIDEO} type="video/mp4" />
      </video>
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/70 via-black/55 to-black/85" />
      <div className="absolute inset-0 z-10 grid-bg opacity-40" />
      <div className="absolute inset-0 z-10 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(0,0,0,0.55)_100%)]" />

      <div className="relative z-20 mx-auto w-full max-w-[1100px] px-4 md:px-6">
        <div className="text-center">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.18em] text-white/90 backdrop-blur-sm">
              <span className="tele-live inline-block h-2 w-2 rounded-full bg-primary" />
              {t("eyebrow")}
            </span>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="mx-auto mt-6 max-w-3xl text-4xl md:text-6xl font-extrabold tracking-tighter leading-[0.98]">
              {t("title")}
            </h2>
          </Reveal>
          <Reveal delay={150}>
            <p className="mx-auto mt-6 max-w-2xl text-base md:text-lg leading-relaxed text-white/80">
              {t("sub")}
            </p>
          </Reveal>
          <Reveal delay={220}>
            <p className="mx-auto mt-8 max-w-3xl text-xl md:text-3xl font-extrabold tracking-tight text-white">
              “{t("quote")}”
            </p>
          </Reveal>
        </div>

        {/* media rail */}
        <Reveal delay={300} className="mt-12">
          <div className="snap-x-row flex gap-3 overflow-x-auto pb-2">
            {RAIL.map((m, i) => (
              <div
                key={i}
                className="group relative h-24 w-40 shrink-0 overflow-hidden rounded-xl border border-white/15 shadow-lg sm:h-28 sm:w-52"
              >
                {m.type === "video" ? (
                  <video className="h-full w-full object-cover" autoPlay muted loop playsInline poster={m.poster}>
                    <source src={m.src} type="video/mp4" />
                  </video>
                ) : (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={m.src} alt="" loading="lazy" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" />
                )}
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

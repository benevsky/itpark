import { useTranslations } from "next-intl";
import { Check } from "lucide-react";
import { Reveal } from "@/components/shared/Reveal";
import { ContactDialog } from "@/components/ContactDialog";
import { contacts } from "@/lib/contacts";

const CTA_VIDEO = "/media/aqua-1.mp4";
const CTA_POSTER = "/media/aqua-1.webp";

export function CTA() {
  const t = useTranslations("cta");
  const points = t.raw("points") as string[];

  return (
    <section id="cta" className="relative overflow-hidden py-28 md:py-40 text-white">
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        poster={CTA_POSTER}
      >
        <source src={CTA_VIDEO} type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/65 to-black/85" />
      <div className="absolute inset-0 grid-bg opacity-50" />

      <div className="relative mx-auto max-w-[1100px] px-4 md:px-6 text-center">
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

        <Reveal delay={160}>
          <p className="mx-auto mt-6 max-w-2xl text-base md:text-lg text-white/80 leading-relaxed">
            {t("sub")}
          </p>
        </Reveal>

        <Reveal delay={220}>
          <div className="mx-auto mt-9 grid max-w-3xl grid-cols-1 gap-2.5 sm:grid-cols-2">
            {points.map((p, i) => (
              <div
                key={i}
                className="flex items-center gap-3 rounded-xl border border-white/12 bg-white/[0.06] px-4 py-3 text-left backdrop-blur-sm"
              >
                <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-primary text-white">
                  <Check className="h-4 w-4" />
                </span>
                <span className="text-sm font-medium text-white/90">{p}</span>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={300}>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <ContactDialog label={t("btn_homes")} size="lg" defaultType="live" />
            <ContactDialog
              label={t("btn_invest")}
              size="lg"
              variant="outline"
              defaultType="invest"
              className="border-white/40 bg-white/5 text-white backdrop-blur-sm hover:bg-white/10 hover:text-white"
            />
          </div>
        </Reveal>

        <Reveal delay={360}>
          <p className="mt-8 text-sm text-white/60">
            <a href={`mailto:${contacts.email}`} className="font-semibold text-white/85 hover:text-white">
              {contacts.email}
            </a>
            <span className="mx-2 text-white/30">·</span>
            {contacts.website}
          </p>
        </Reveal>
      </div>
    </section>
  );
}

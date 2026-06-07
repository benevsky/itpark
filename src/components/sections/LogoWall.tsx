import { useTranslations } from "next-intl";
import { partners } from "@/lib/partners";

export function LogoWall() {
  const t = useTranslations("partners");

  const names = ["НИЦАС", ...partners.map((p) => p.name.split(" · ")[0])];

  return (
    <section className="border-y border-border bg-muted-bg/40 py-12 md:py-14">
      <div className="mx-auto max-w-[1200px] px-4 md:px-6">
        <p className="text-center text-[12px] font-bold uppercase tracking-[0.18em] text-muted">
          {t("logos_title")}
        </p>
        <div className="mt-8 grid grid-cols-3 gap-px overflow-hidden rounded-card border border-border bg-border sm:grid-cols-3 lg:grid-cols-9">
          {names.map((name, i) => (
            <div
              key={i}
              className="group flex items-center justify-center bg-background px-3 py-6 transition-colors"
            >
              <span className="text-center text-sm font-extrabold tracking-tight text-foreground/35 transition-colors duration-300 group-hover:text-foreground">
                {name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

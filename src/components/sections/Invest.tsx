import { useTranslations } from "next-intl";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { SectionMore } from "@/components/shared/SectionMore";
import { Reveal } from "@/components/shared/Reveal";
import { RevenueChart } from "@/components/shared/RevenueChart";
import { InvestOptions } from "@/components/shared/InvestOptions";
import { InvestCalculator } from "@/components/shared/InvestCalculator";
import { InvestEngine } from "@/components/shared/InvestEngine";
import { ContactDialog } from "@/components/ContactDialog";
import { buttonClasses } from "@/components/ui/button";
import { contacts } from "@/lib/contacts";

type Phase = { tag: string; name: string; capex: string; income: string; pct: number };
type Sum = { key: string; val: string };
type Support = { name: string; amount: string; desc: string };
type Point = { year: string; usd: number; label: string };
type Fund = { name: string; amount: string; pct: number };

const ALLOC_COLORS = ["bg-primary", "bg-primary/65", "bg-primary/35"];

function SubHead({ title, caption }: { title: string; caption?: string }) {
  return (
    <div className="mb-5">
      <p className="inline-flex items-center gap-2 text-[12px] font-extrabold uppercase tracking-[0.16em] text-primary">
        <span className="h-px w-6 bg-primary/60" />
        {title}
      </p>
      {caption && <p className="mt-2 max-w-2xl text-sm text-muted leading-relaxed">{caption}</p>}
    </div>
  );
}

export function Invest() {
  const t = useTranslations("invest");
  const phases = t.raw("phases") as Phase[];
  const summary = t.raw("summary") as Sum[];
  const support = t.raw("support") as Support[];
  const chart = t.raw("revenue_chart") as Point[];
  const funds = t.raw("usefunds") as Fund[];

  return (
    <section id="invest" className="bg-muted-bg grid-bg py-24 md:py-32">
      <div className="mx-auto max-w-[1200px] px-4 md:px-6">
        <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <SectionHeading eyebrow={t("eyebrow")} title={t("title")} sub={t("sub")} />
          <SectionMore href="/invest" />
        </div>

        {/* Phases */}
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {phases.map((p, i) => (
            <Reveal key={i} delay={i * 90}>
              <div className="accent-bar h-full overflow-hidden rounded-card border border-border bg-card p-6 shadow-card hover-lift">
                <div className="flex items-center justify-between">
                  <p className="text-[12px] font-extrabold uppercase tracking-[0.12em] text-primary">{p.tag}</p>
                  <span className="text-2xl font-extrabold tabular-nums text-foreground/15">0{i + 1}</span>
                </div>
                <h3 className="mt-2 text-xl font-bold tracking-tight">{p.name}</h3>
                <p className="mt-3 text-3xl font-extrabold tabular-nums">{p.capex}</p>
                <p className="mt-2 text-sm text-muted">{p.income}</p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Cash engine diagram */}
        <Reveal className="mt-5">
          <InvestEngine />
        </Reveal>

        {/* Financial model */}
        <div className="mt-14">
          <Reveal>
            <SubHead title={t("model_title")} caption={t("model_caption")} />
          </Reveal>
          <div className="grid gap-5 lg:grid-cols-3 lg:items-stretch">
            <Reveal className="lg:col-span-2">
              <RevenueChart
                data={chart}
                title={t("chart_title")}
                legendRev={t("legend_rev")}
                legendProfit={t("legend_profit")}
              />
            </Reveal>
            <Reveal delay={90}>
              <div className="flex h-full flex-col rounded-card border border-border bg-card p-6 shadow-card">
                <p className="text-[12px] font-extrabold uppercase tracking-[0.12em] text-primary">
                  {t("alloc_title")}
                </p>
                <div className="mt-5 flex h-4 overflow-hidden rounded-md">
                  {phases.map((p, i) => (
                    <div key={i} className={ALLOC_COLORS[i]} style={{ width: `${p.pct}%` }} />
                  ))}
                </div>
                <ul className="mt-5 space-y-3">
                  {phases.map((p, i) => (
                    <li key={i} className="flex items-center justify-between gap-3">
                      <span className="flex min-w-0 items-center gap-2.5">
                        <span className={`h-3 w-3 shrink-0 rounded-sm ${ALLOC_COLORS[i]}`} />
                        <span className="truncate text-sm font-medium">{p.name}</span>
                      </span>
                      <span className="shrink-0 text-sm font-bold tabular-nums">{p.capex} · {p.pct}%</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-auto border-t border-border pt-4 text-sm text-muted">
                  {summary[0].key}: <span className="font-bold text-foreground">{summary[0].val}</span>
                </div>
              </div>
            </Reveal>
          </div>
        </div>

        {/* KPI dashboard */}
        <div className="mt-5 grid grid-cols-2 gap-4 md:grid-cols-4">
          {summary.map((s, i) => (
            <Reveal key={i} delay={(i % 4) * 60}>
              <div className="h-full rounded-card border border-border bg-card p-5 shadow-card">
                <p className="text-xl font-extrabold tabular-nums tracking-tight md:text-2xl">{s.val}</p>
                <p className="mt-1.5 text-[13px] text-muted leading-snug">{s.key}</p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Use of funds */}
        <div className="mt-14">
          <Reveal>
            <SubHead title={t("usefunds_title")} caption={t("usefunds_caption")} />
          </Reveal>
          <Reveal>
            <div className="grid gap-x-10 gap-y-5 rounded-card border border-border bg-card p-7 shadow-card sm:grid-cols-2">
              {funds.map((f, i) => (
                <div key={i}>
                  <div className="flex items-baseline justify-between gap-3">
                    <span className="text-sm font-semibold">{f.name}</span>
                    <span className="shrink-0 text-sm font-bold tabular-nums">{f.amount} · {f.pct}%</span>
                  </div>
                  <div className="mt-2 h-2.5 w-full overflow-hidden rounded-full bg-muted-bg">
                    <div className="h-full rounded-full bg-primary" style={{ width: `${f.pct * 3.4}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        {/* Entry terms + calculator */}
        <div className="mt-14">
          <Reveal>
            <SubHead title={t("options_title")} caption={t("options_caption")} />
          </Reveal>
          <div className="grid gap-5 lg:grid-cols-2 lg:items-stretch">
            <Reveal>
              <InvestOptions />
            </Reveal>
            <Reveal delay={90}>
              <InvestCalculator />
            </Reveal>
          </div>
        </div>

        {/* Government support */}
        <div className="mt-14">
          <Reveal>
            <SubHead title={t("support_title")} />
          </Reveal>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {support.map((s, i) => (
              <Reveal key={i} delay={(i % 4) * 60}>
                <div className="h-full rounded-card border border-border bg-card p-5 shadow-card hover-lift">
                  <p className="text-sm font-semibold">{s.name}</p>
                  <p className="mt-2 text-lg font-extrabold tabular-nums text-primary">{s.amount}</p>
                  <p className="mt-1 text-xs text-muted">{s.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Quote takeaway */}
        <Reveal className="mt-14">
          <div className="rounded-card border border-primary/30 bg-primary/[0.05] p-7 text-center shadow-card md:p-9">
            <p className="mx-auto max-w-3xl text-lg md:text-2xl font-extrabold tracking-tight">
              {t("quote")}
            </p>
          </div>
        </Reveal>

        {/* CTAs */}
        <Reveal className="mt-10 flex flex-wrap gap-3">
          <a
            href={`mailto:${contacts.email}?subject=Investment%20Teaser%20Request`}
            className={buttonClasses("default", "lg")}
          >
            {t("cta_tizer")}
          </a>
          <ContactDialog label={t("cta_meet")} variant="outline" size="lg" defaultType="invest" />
        </Reveal>

        <p className="mt-6 max-w-2xl text-xs leading-relaxed text-muted">{t("note")}</p>
      </div>
    </section>
  );
}

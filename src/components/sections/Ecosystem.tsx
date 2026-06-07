import { useTranslations } from "next-intl";
import { Server, Cpu, Smartphone, ArrowRight, TrendingUp } from "lucide-react";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { SectionMore } from "@/components/shared/SectionMore";
import { Reveal } from "@/components/shared/Reveal";

type Stat = { val: string; lbl: string };
type Tele = { label: string; val: string };

const CX = 290;
const CY = 240;
const R = 168;
const VW = 580;
const VH = 480;

const SERVICE = "#4ade80";
const INFRA = "#2dd4bf";
const TRENDS = ["+4.2%", "+0.8%", "+1.4%", "+0.1%"];

function spark(seed: number) {
  const pts: string[] = [];
  let v = 12;
  for (let i = 0; i < 10; i++) {
    v += (((seed * (i + 3)) % 7) - 3) * 1.6;
    v = Math.max(3, Math.min(21, v));
    pts.push(`${i * 9},${24 - v}`);
  }
  return pts.join(" ");
}

export function Ecosystem() {
  const t = useTranslations("ecosystem");
  const stats = t.raw("stats") as Stat[];
  const nodes = t.raw("nodes") as string[];
  const tele = t.raw("telemetry") as Tele[];

  const legend = [
    { label: t("layer_infra_label"), Icon: Server },
    { label: t("layer_platform_label"), Icon: Cpu },
    { label: t("layer_services_label"), Icon: Smartphone },
  ];

  const points = nodes.map((label, i) => {
    const a = (Math.PI * 2 * i) / nodes.length - Math.PI / 2;
    const x = CX + R * Math.cos(a);
    const y = CY + R * Math.sin(a);
    const lx = CX + (R + 22) * Math.cos(a);
    const ly = CY + (R + 22) * Math.sin(a);
    const anchor: "start" | "end" | "middle" =
      Math.cos(a) > 0.25 ? "start" : Math.cos(a) < -0.25 ? "end" : "middle";
    const isService = i < 4;
    return { label, x, y, lx, ly, anchor, isService, color: isService ? SERVICE : INFRA };
  });

  return (
    <section id="ecosystem" className="py-24 md:py-32">
      <div className="mx-auto max-w-[1200px] px-4 md:px-6">
        <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <SectionHeading eyebrow={t("eyebrow")} title={t("title")} sub={t("sub")} />
          <SectionMore href="/ecosystem" />
        </div>

        <Reveal className="mt-12">
          <div className="relative overflow-hidden rounded-card border border-[#1c3a29] bg-[#070d0a] shadow-[0_40px_100px_-20px_rgba(0,0,0,0.45)]">
            <div
              className="pointer-events-none absolute inset-0 opacity-[0.5]"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(22,163,74,0.07) 1px,transparent 1px),linear-gradient(90deg,rgba(22,163,74,0.07) 1px,transparent 1px)",
                backgroundSize: "40px 40px",
              }}
            />
            <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-primary/20 blur-[100px]" />
            <div className="pointer-events-none absolute -bottom-24 right-1/4 h-72 w-72 rounded-full bg-emerald-500/10 blur-[100px]" />

            {/* HUD corner brackets */}
            <div className="pointer-events-none absolute left-3 top-3 h-5 w-5 border-l-2 border-t-2 border-primary/40" />
            <div className="pointer-events-none absolute right-3 top-3 h-5 w-5 border-r-2 border-t-2 border-primary/40" />
            <div className="pointer-events-none absolute bottom-3 left-3 h-5 w-5 border-b-2 border-l-2 border-primary/40" />
            <div className="pointer-events-none absolute bottom-3 right-3 h-5 w-5 border-b-2 border-r-2 border-primary/40" />

            {/* moving scanline */}
            <div className="eco-scan pointer-events-none absolute inset-x-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

            {/* top bar */}
            <div className="relative flex flex-wrap items-center justify-between gap-3 border-b border-white/10 px-6 py-4">
              <span className="flex items-center gap-2.5">
                <span className="tele-live inline-block h-2.5 w-2.5 rounded-full bg-primary" />
                <span className="leading-tight">
                  <span className="block text-sm font-semibold text-white">{t("panel_title")}</span>
                  <span className="block text-[11px] text-white/45">Akshi · 43.5°N, 77.3°E</span>
                </span>
              </span>
              <span className="flex gap-2">
                {["IoT", "AI", "SOC 24/7"].map((c) => (
                  <span key={c} className="rounded-md border border-white/15 bg-white/[0.04] px-2.5 py-1 text-[11px] font-bold text-white/70">
                    {c}
                  </span>
                ))}
              </span>
            </div>

            <div className="relative grid gap-2 p-4 md:p-6 lg:grid-cols-[1fr_290px]">
              <svg viewBox={`0 0 ${VW} ${VH}`} className="w-full" role="img" aria-label="Smart-city digital twin">
                <defs>
                  <radialGradient id="coreGlow" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#16a34a" stopOpacity="0.55" />
                    <stop offset="100%" stopColor="#16a34a" stopOpacity="0" />
                  </radialGradient>
                  <radialGradient id="sweepGrad">
                    <stop offset="0%" stopColor="#16a34a" stopOpacity="0" />
                    <stop offset="80%" stopColor="#16a34a" stopOpacity="0.16" />
                    <stop offset="100%" stopColor="#3ee07a" stopOpacity="0.32" />
                  </radialGradient>
                  <filter id="glow" x="-60%" y="-60%" width="220%" height="220%">
                    <feGaussianBlur stdDeviation="3.2" result="b" />
                    <feMerge>
                      <feMergeNode in="b" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>

                {[R, R * 0.66, R * 0.33].map((rr, i) => (
                  <circle key={`o${i}`} cx={CX} cy={CY} r={rr} fill="none" stroke="#1f5a38" strokeWidth={1} strokeOpacity={0.5} />
                ))}

                <g>
                  <path
                    d={`M ${CX} ${CY} L ${CX + R * Math.cos(-0.22)} ${CY + R * Math.sin(-0.22)} A ${R} ${R} 0 0 1 ${CX + R * Math.cos(0.22)} ${CY + R * Math.sin(0.22)} Z`}
                    fill="url(#sweepGrad)"
                  >
                    <animateTransform attributeName="transform" type="rotate" from={`0 ${CX} ${CY}`} to={`360 ${CX} ${CY}`} dur="7s" repeatCount="indefinite" />
                  </path>
                </g>

                {/* connectors */}
                {points.map((p, i) => (
                  <line key={`l${i}`} x1={p.x} y1={p.y} x2={CX} y2={CY} stroke={p.color} strokeOpacity={0.32} strokeWidth={1.4} className="eco-flow" />
                ))}

                {/* flowing dots — infra IN to core, services OUT to nodes */}
                {points.map((p, i) => (
                  <circle key={`d${i}`} r={3.2} fill={p.color} filter="url(#glow)">
                    <animateMotion
                      dur="2.3s"
                      begin={`${i * 0.26}s`}
                      repeatCount="indefinite"
                      path={p.isService ? `M${CX},${CY} L${p.x},${p.y}` : `M${p.x},${p.y} L${CX},${CY}`}
                    />
                  </circle>
                ))}

                {/* nodes */}
                {points.map((p, i) => (
                  <g key={`n${i}`}>
                    <circle cx={p.x} cy={p.y} r={16} fill="#0c1812" stroke={p.color} strokeOpacity={0.6} />
                    <circle cx={p.x} cy={p.y} r={5.5} fill={p.color} filter="url(#glow)" className="eco-node" />
                    <text x={p.lx} y={p.ly} textAnchor={p.anchor} dominantBaseline="middle" fontSize={13.5} fontWeight={600} fill="#cfe3d8">
                      {p.label}
                    </text>
                  </g>
                ))}

                {/* core */}
                <circle cx={CX} cy={CY} r={110} fill="url(#coreGlow)" />
                <circle cx={CX} cy={CY} r={70} fill="none" stroke="#16a34a" strokeWidth={1.5} strokeDasharray="2 10" className="eco-spin" />
                <circle cx={CX} cy={CY} r={56} fill="none" stroke="#3ee07a" strokeWidth={1.5} className="eco-pulse" />
                <circle cx={CX} cy={CY} r={56} fill="none" stroke="#3ee07a" strokeWidth={1.5} className="eco-pulse" style={{ animationDelay: "1.6s" }} />
                <circle cx={CX} cy={CY} r={54} fill="#16a34a" filter="url(#glow)" />
                {/* CPU glyph (как в блоке НИЦАС) */}
                <g stroke="#fff" strokeWidth={1.8} strokeLinecap="round" fill="none">
                  <rect x={CX - 11} y={CY - 25} width={22} height={22} rx={4} />
                  <rect x={CX - 4.5} y={CY - 18.5} width={9} height={9} rx={2} />
                  <line x1={CX - 4} y1={CY - 28} x2={CX - 4} y2={CY - 25} />
                  <line x1={CX + 4} y1={CY - 28} x2={CX + 4} y2={CY - 25} />
                  <line x1={CX - 4} y1={CY - 3} x2={CX - 4} y2={CY} />
                  <line x1={CX + 4} y1={CY - 3} x2={CX + 4} y2={CY} />
                  <line x1={CX - 14} y1={CY - 18} x2={CX - 11} y2={CY - 18} />
                  <line x1={CX - 14} y1={CY - 10} x2={CX - 11} y2={CY - 10} />
                  <line x1={CX + 11} y1={CY - 18} x2={CX + 14} y2={CY - 18} />
                  <line x1={CX + 11} y1={CY - 10} x2={CX + 14} y2={CY - 10} />
                </g>
                <text x={CX} y={CY + 22} textAnchor="middle" fontSize={15} fontWeight={800} fill="#fff">НИЦАС</text>
              </svg>

              {/* telemetry */}
              <div className="flex flex-col gap-2.5">
                {tele.map((w, i) => (
                  <div key={i} className="rounded-lg border border-white/10 bg-white/[0.03] px-4 py-3">
                    <div className="flex items-center justify-between gap-3">
                      <span className="text-[11px] font-medium uppercase tracking-wide text-white/55">
                        {w.label}
                      </span>
                      <span className="inline-flex items-center gap-1 text-[11px] font-bold text-primary">
                        <TrendingUp className="h-3 w-3" />
                        {TRENDS[i]}
                      </span>
                    </div>
                    <div className="mt-1 flex items-end justify-between gap-3">
                      <span className="text-2xl font-extrabold tabular-nums text-white">{w.val}</span>
                      <svg viewBox="0 0 81 24" className="h-7 w-24">
                        <polyline points={spark(i + 2)} fill="none" stroke="#3ee07a" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* legend strip with direction + color key */}
            <div className="relative flex flex-wrap items-center justify-between gap-x-8 gap-y-2 border-t border-white/10 px-6 py-4">
              <span className="flex flex-wrap items-center gap-x-6 gap-y-2">
                {legend.map((l, i) => (
                  <span key={i} className="flex items-center gap-2 text-sm font-semibold text-white/80">
                    <l.Icon className="h-4 w-4 text-primary" />
                    {l.label}
                    {i < legend.length - 1 && <ArrowRight className="ml-4 h-4 w-4 text-white/25" />}
                  </span>
                ))}
              </span>
              <span className="flex items-center gap-4 text-[12px] font-medium text-white/55">
                <span className="flex items-center gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full" style={{ background: INFRA }} />
                  → НИЦАС
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full" style={{ background: SERVICE }} />
                  НИЦАС →
                </span>
              </span>
            </div>
          </div>
        </Reveal>

        {/* Core CTA */}
        <Reveal className="mt-4">
          <a
            href="#nicas"
            className="group flex items-center justify-between gap-3 rounded-card border border-primary/40 bg-primary/[0.05] p-5 shadow-card transition-colors hover:border-primary/70"
          >
            <span className="flex items-center gap-3">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary text-white">
                <Cpu className="h-5 w-5" />
              </span>
              <span>
                <span className="block text-[11px] font-extrabold uppercase tracking-[0.14em] text-primary">
                  {t("core_label")}
                </span>
                <span className="block text-lg font-extrabold tracking-tight">НИЦАС</span>
              </span>
            </span>
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white transition-transform group-hover:translate-x-1">
              <ArrowRight className="h-5 w-5" />
            </span>
          </a>
        </Reveal>

        {/* Stats */}
        <div className="mt-4 grid grid-cols-2 gap-px overflow-hidden rounded-card border border-border bg-border shadow-card md:grid-cols-4">
          {stats.map((s, i) => (
            <div key={i} className="bg-card px-5 py-7 text-center">
              <div className="text-3xl md:text-4xl font-extrabold tabular-nums text-primary">{s.val}</div>
              <div className="mt-1.5 text-sm text-muted">{s.lbl}</div>
            </div>
          ))}
        </div>

        {/* Quote takeaway */}
        <Reveal className="mt-4">
          <div className="rounded-card border border-primary/30 bg-primary/[0.05] p-7 text-center shadow-card md:p-9">
            <p className="mx-auto max-w-3xl text-lg md:text-2xl font-extrabold tracking-tight">
              {t("quote")}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

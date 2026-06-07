import { useTranslations } from "next-intl";

const CX = 280;
const CY = 230;
const R = 150;

export function RasLoopDiagram() {
  const t = useTranslations("farm");
  const stages = t.raw("loop_stages") as string[];

  const nodes = stages.map((label, i) => {
    const a = (Math.PI * 2 * i) / stages.length - Math.PI / 2;
    const x = CX + R * Math.cos(a);
    const y = CY + R * Math.sin(a);
    const lx = CX + (R + 24) * Math.cos(a);
    const ly = CY + (R + 24) * Math.sin(a);
    const anchor: "start" | "end" | "middle" =
      Math.cos(a) > 0.3 ? "start" : Math.cos(a) < -0.3 ? "end" : "middle";
    return { label, x, y, lx, ly, anchor };
  });

  const loopPath = `M ${CX},${CY - R} A ${R},${R} 0 1,1 ${CX},${CY + R} A ${R},${R} 0 1,1 ${CX},${CY - R}`;

  return (
    <div className="relative overflow-hidden rounded-card border border-[#1c3a29] bg-[#070d0a] shadow-[0_30px_80px_-20px_rgba(0,0,0,0.45)]">
      <div
        className="pointer-events-none absolute inset-0 opacity-50"
        style={{
          backgroundImage:
            "linear-gradient(rgba(22,163,74,0.07) 1px,transparent 1px),linear-gradient(90deg,rgba(22,163,74,0.07) 1px,transparent 1px)",
          backgroundSize: "38px 38px",
        }}
      />
      <div className="pointer-events-none absolute -left-20 top-1/2 h-56 w-56 -translate-y-1/2 rounded-full bg-primary/15 blur-[90px]" />

      <div className="pointer-events-none absolute left-3 top-3 h-5 w-5 border-l-2 border-t-2 border-primary/40" />
      <div className="pointer-events-none absolute right-3 top-3 h-5 w-5 border-r-2 border-t-2 border-primary/40" />
      <div className="pointer-events-none absolute bottom-3 left-3 h-5 w-5 border-b-2 border-l-2 border-primary/40" />
      <div className="pointer-events-none absolute bottom-3 right-3 h-5 w-5 border-b-2 border-r-2 border-primary/40" />

      <div className="relative flex items-center gap-2.5 border-b border-white/10 px-6 py-4">
        <span className="tele-live inline-block h-2.5 w-2.5 rounded-full bg-primary" />
        <span className="text-sm font-semibold text-white">{t("loop_panel")}</span>
      </div>

      <svg viewBox="0 0 560 470" className="relative w-full" role="img" aria-label="RAS closed loop">
        <defs>
          <filter id="rasGlow" x="-60%" y="-60%" width="220%" height="220%">
            <feGaussianBlur stdDeviation="3" result="b" />
            <feMerge>
              <feMergeNode in="b" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* loop track */}
        <circle cx={CX} cy={CY} r={R} fill="none" stroke="#16a34a" strokeOpacity={0.3} strokeWidth={2} strokeDasharray="4 8" className="eco-flow" />

        {/* circulating water */}
        {[0, 1, 2, 3, 4].map((i) => (
          <circle key={i} r={3.4} fill="#3ee07a" filter="url(#rasGlow)">
            <animateMotion dur="6s" begin={`${i * 1.2}s`} repeatCount="indefinite" path={loopPath} />
          </circle>
        ))}

        {/* stages */}
        {nodes.map((n, i) => (
          <g key={i}>
            <circle cx={n.x} cy={n.y} r={15} fill="#0c1812" stroke="#16a34a" strokeOpacity={0.6} />
            <circle cx={n.x} cy={n.y} r={5} fill="#3ee07a" filter="url(#rasGlow)" className="eco-node" />
            <text x={n.lx} y={n.ly} textAnchor={n.anchor} dominantBaseline="middle" fontSize={13} fontWeight={600} fill="#cfe3d8">
              {n.label}
            </text>
          </g>
        ))}

        {/* center */}
        <text x={CX} y={CY - 4} textAnchor="middle" fontSize={30} fontWeight={800} fill="#fff">
          {t("loop_title")}
        </text>
        <text x={CX} y={CY + 20} textAnchor="middle" fontSize={13} fontWeight={600} fill="#3ee07a">
          {t("loop_sub")}
        </text>
        <text x={CX} y={CY + 42} textAnchor="middle" fontSize={11} fill="rgba(255,255,255,0.5)">
          {t("loop_note")}
        </text>
      </svg>
    </div>
  );
}

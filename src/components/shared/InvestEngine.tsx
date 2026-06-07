import { useTranslations } from "next-intl";

type Phase = { tag: string; name: string; capex: string; income: string; pct: number };

const BOXES = [
  { x: 20 },
  { x: 305 },
  { x: 590 },
];
const BW = 210;
const BH = 130;
const BY = 56;
const MIDY = BY + BH / 2;
// reinvest arc: from box3 bottom-center back to box1 bottom-center
const REINVEST = `M ${590 + BW / 2},${BY + BH} C ${590 + BW / 2},300 ${20 + BW / 2},300 ${20 + BW / 2},${BY + BH}`;

export function InvestEngine() {
  const t = useTranslations("invest");
  const phases = t.raw("phases") as Phase[];

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
      <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-primary/15 blur-[90px]" />
      <div className="pointer-events-none absolute left-3 top-3 h-5 w-5 border-l-2 border-t-2 border-primary/40" />
      <div className="pointer-events-none absolute right-3 top-3 h-5 w-5 border-r-2 border-t-2 border-primary/40" />
      <div className="pointer-events-none absolute bottom-3 left-3 h-5 w-5 border-b-2 border-l-2 border-primary/40" />
      <div className="pointer-events-none absolute bottom-3 right-3 h-5 w-5 border-b-2 border-r-2 border-primary/40" />

      <div className="relative flex items-center gap-2.5 border-b border-white/10 px-6 py-4">
        <span className="tele-live inline-block h-2.5 w-2.5 rounded-full bg-primary" />
        <span className="text-sm font-semibold text-white">{t("engine_panel")}</span>
      </div>

      <svg viewBox="0 0 820 350" className="relative w-full" role="img" aria-label="Cash engine">
        <defs>
          <filter id="engGlow" x="-60%" y="-60%" width="220%" height="220%">
            <feGaussianBlur stdDeviation="2.6" result="b" />
            <feMerge>
              <feMergeNode in="b" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* outcome chip */}
        <rect x={560} y={12} width={240} height={30} rx={8} fill="#16a34a" />
        <text x={680} y={32} textAnchor="middle" fontSize={14} fontWeight={800} fill="#fff">
          {t("engine_outcome")}
        </text>

        {/* forward connectors + flow dots */}
        {[0, 1].map((i) => {
          const x1 = BOXES[i].x + BW;
          const x2 = BOXES[i + 1].x;
          return (
            <g key={`c${i}`}>
              <line x1={x1} y1={MIDY} x2={x2} y2={MIDY} stroke="#16a34a" strokeOpacity={0.4} strokeWidth={2} strokeDasharray="4 7" className="eco-flow" />
              <polygon points={`${x2 - 8},${MIDY - 5} ${x2},${MIDY} ${x2 - 8},${MIDY + 5}`} fill="#3ee07a" />
              {[0, 1, 2].map((d) => (
                <circle key={d} r={3} fill="#3ee07a" filter="url(#engGlow)">
                  <animateMotion dur="1.8s" begin={`${i * 0.3 + d * 0.6}s`} repeatCount="indefinite" path={`M${x1},${MIDY} L${x2},${MIDY}`} />
                </circle>
              ))}
            </g>
          );
        })}

        {/* phase boxes */}
        {phases.map((p, i) => {
          const bx = BOXES[i].x;
          return (
            <g key={`b${i}`}>
              <rect x={bx} y={BY} width={BW} height={BH} rx={12} fill="#0c1812" stroke="#16a34a" strokeOpacity={0.55} />
              <rect x={bx} y={BY} width={BW} height={3} fill="#16a34a" />
              <text x={bx + 18} y={BY + 30} fontSize={11} fontWeight={800} fill="#3ee07a" style={{ letterSpacing: "0.08em" }}>
                {p.tag.toUpperCase()}
              </text>
              <text x={bx + 18} y={BY + 62} fontSize={18} fontWeight={700} fill="#fff">
                {p.name}
              </text>
              <text x={bx + 18} y={BY + 100} fontSize={28} fontWeight={800} fill="#fff">
                {p.capex}
              </text>
            </g>
          );
        })}

        {/* reinvest arc */}
        <path d={REINVEST} fill="none" stroke="#16a34a" strokeOpacity={0.4} strokeWidth={2} strokeDasharray="4 7" className="eco-flow" />
        <polygon points={`${BOXES[0].x + BW / 2 - 5},${BY + BH + 9} ${BOXES[0].x + BW / 2},${BY + BH + 1} ${BOXES[0].x + BW / 2 + 5},${BY + BH + 9}`} fill="#3ee07a" />
        {[0, 1, 2, 3].map((d) => (
          <circle key={d} r={3} fill="#3ee07a" filter="url(#engGlow)">
            <animateMotion dur="3.2s" begin={`${d * 0.8}s`} repeatCount="indefinite" path={REINVEST} />
          </circle>
        ))}
        <text x={410} y={296} textAnchor="middle" fontSize={13} fontWeight={600} fill="#cfe3d8">
          ↺ {t("engine_reinvest")}
        </text>
      </svg>
    </div>
  );
}

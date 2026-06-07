type Point = { year: string; usd: number; profit?: number; label: string };

const W = 640;
const H = 320;
const PL = 56;
const PR = 18;
const PT = 28;
const PB = 44;

export function RevenueChart({
  data,
  title,
  legendRev,
  legendProfit,
}: {
  data: Point[];
  title: string;
  legendRev: string;
  legendProfit: string;
}) {
  const plotW = W - PL - PR;
  const plotH = H - PT - PB;
  const baseline = PT + plotH;
  const max = 1_000_000;
  const grid = [0, 250_000, 500_000, 750_000, 1_000_000];

  const y = (v: number) => baseline - (v / max) * plotH;
  const slot = plotW / data.length;
  const xc = (i: number) => PL + slot * (i + 0.5);
  const barW = Math.min(46, slot * 0.42);

  const fmt = (n: number) => (n >= 1000 ? `$${Math.round(n / 1000)}K` : `$${n}`);

  const linePts = data.map((d, i) => `${xc(i)},${y(d.usd)}`).join(" ");
  const profitPts = data.map((d, i) => `${xc(i)},${y(d.profit ?? 0)}`).join(" ");
  const areaPath =
    `M ${xc(0)},${baseline} ` +
    data.map((d, i) => `L ${xc(i)},${y(d.usd)}`).join(" ") +
    ` L ${xc(data.length - 1)},${baseline} Z`;

  const first = data[0].usd;
  const last = data[data.length - 1].usd;
  const years = data.length - 1;
  const cagr = Math.round((Math.pow(last / first, 1 / years) - 1) * 100);
  const multiple = (last / first).toFixed(1);
  const hasProfit = data.some((d) => d.profit != null);

  return (
    <div className="flex h-full flex-col rounded-card border border-border bg-card p-6 shadow-card">
      <div className="mb-4 flex flex-wrap items-start justify-between gap-3">
        <div>
          <p className="text-[12px] font-extrabold uppercase tracking-[0.12em] text-primary">
            {title}
          </p>
          <div className="mt-2 flex flex-wrap items-center gap-4 text-xs font-medium text-muted">
            <span className="inline-flex items-center gap-1.5">
              <span className="h-2.5 w-4 rounded-sm bg-primary" />
              {legendRev}
            </span>
            {hasProfit && (
              <span className="inline-flex items-center gap-1.5">
                <span className="h-0 w-4 border-t-2 border-dashed border-foreground/55" />
                {legendProfit}
              </span>
            )}
          </div>
        </div>
        <div className="flex gap-2">
          <span className="rounded-md border border-primary/30 bg-primary/[0.06] px-3 py-1.5 text-xs font-bold text-primary">
            CAGR ≈ {cagr}%
          </span>
          <span className="rounded-md border border-border px-3 py-1.5 text-xs font-bold text-foreground">
            ×{multiple}
          </span>
        </div>
      </div>

      <svg viewBox={`0 0 ${W} ${H}`} className="w-full" role="img" aria-label="Revenue chart">
        <defs>
          <linearGradient id="revArea" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="var(--primary)" stopOpacity="0.22" />
            <stop offset="100%" stopColor="var(--primary)" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="revBar" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="var(--primary)" stopOpacity="0.85" />
            <stop offset="100%" stopColor="var(--primary)" stopOpacity="0.3" />
          </linearGradient>
        </defs>

        {grid.map((v, i) => (
          <g key={i}>
            <line x1={PL} y1={y(v)} x2={W - PR} y2={y(v)} stroke="var(--border)" strokeWidth={1} />
            <text x={PL - 10} y={y(v)} textAnchor="end" dominantBaseline="middle" fontSize={11} fill="var(--muted)">
              {fmt(v)}
            </text>
          </g>
        ))}

        {data.map((d, i) => (
          <rect
            key={`b${i}`}
            x={xc(i) - barW / 2}
            y={y(d.usd)}
            width={barW}
            height={baseline - y(d.usd)}
            rx={5}
            fill="url(#revBar)"
            className="chart-bar"
            style={{ animationDelay: `${i * 0.12}s` }}
          />
        ))}

        <path d={areaPath} fill="url(#revArea)" className="chart-fade" />
        <polyline
          points={linePts}
          fill="none"
          stroke="var(--primary)"
          strokeWidth={2.5}
          strokeLinecap="round"
          strokeLinejoin="round"
          pathLength={1}
          className="chart-draw"
        />

        {/* profit line (dashed) */}
        {hasProfit && (
          <polyline
            points={profitPts}
            fill="none"
            stroke="var(--foreground)"
            strokeOpacity={0.55}
            strokeWidth={2}
            strokeDasharray="6 5"
            strokeLinecap="round"
            className="chart-fade"
            style={{ animationDelay: "1.1s" }}
          />
        )}

        {data.map((d, i) => (
          <g key={`p${i}`} className="chart-fade" style={{ animationDelay: `${1 + i * 0.08}s` }}>
            {hasProfit && (
              <circle cx={xc(i)} cy={y(d.profit ?? 0)} r={3} fill="var(--card)" stroke="var(--foreground)" strokeOpacity={0.55} strokeWidth={2} />
            )}
            <circle cx={xc(i)} cy={y(d.usd)} r={4.5} fill="var(--card)" stroke="var(--primary)" strokeWidth={2.5} />
            <text x={xc(i)} y={y(d.usd) - 12} textAnchor="middle" fontSize={12} fontWeight={800} fill="var(--foreground)">
              {fmt(d.usd)}
            </text>
            <text x={xc(i)} y={baseline + 20} textAnchor="middle" fontSize={12} fontWeight={700} fill="var(--foreground)">
              {d.year}
            </text>
            {d.label && (
              <text x={xc(i)} y={baseline + 34} textAnchor="middle" fontSize={9} fill="var(--muted)">
                {d.label}
              </text>
            )}
          </g>
        ))}
      </svg>
    </div>
  );
}

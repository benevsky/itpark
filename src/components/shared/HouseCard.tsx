import { Maximize2, BedDouble, Layers, Cpu, ArrowUpRight } from "lucide-react";
import type { House, Locale } from "@/lib/houses";
import { formatKzt } from "@/lib/utils";

export function HouseCard({
  house,
  locale,
  incomeBadge,
  smartBadge,
}: {
  house: House;
  locale: Locale;
  incomeBadge?: string;
  smartBadge?: string;
}) {
  return (
    <div className="sheen hover-lift group flex h-full flex-col overflow-hidden rounded-card border border-border bg-card shadow-card hover:border-primary/60">
      {/* Image with overlaid title */}
      <div className="relative aspect-[4/3] overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={house.photo}
          alt={house.name[locale]}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/15 to-black/10" />

        {/* top badges */}
        <div className="absolute inset-x-3 top-3 flex items-start justify-between gap-2">
          {house.highlight ? (
            <span className="rounded-md bg-primary px-2.5 py-1 text-[11px] font-bold text-white shadow">
              ★ ХИТ ПРОДАЖ
            </span>
          ) : (
            <span />
          )}
          {incomeBadge && house.type === "house" && (
            <span className="max-w-[60%] rounded-md bg-black/55 px-2.5 py-1 text-[11px] font-semibold text-white backdrop-blur-sm">
              {incomeBadge}
            </span>
          )}
        </div>

        {/* title + stats on image */}
        <div className="absolute inset-x-4 bottom-4">
          <h3 className="text-2xl font-extrabold tracking-tight text-white">
            {house.name[locale]}
          </h3>
          <div className="mt-2 flex flex-wrap gap-2 text-[12px] font-semibold text-white/90">
            <span className="inline-flex items-center gap-1 rounded bg-white/15 px-2 py-0.5 backdrop-blur-sm">
              <Maximize2 className="h-3.5 w-3.5" />
              {house.area} м²
            </span>
            {house.rooms != null && (
              <span className="inline-flex items-center gap-1 rounded bg-white/15 px-2 py-0.5 backdrop-blur-sm">
                <BedDouble className="h-3.5 w-3.5" />
                {house.rooms}
              </span>
            )}
            <span className="inline-flex items-center gap-1 rounded bg-white/15 px-2 py-0.5 backdrop-blur-sm">
              <Layers className="h-3.5 w-3.5" />
              {house.floors} эт.
            </span>
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col gap-4 p-5">
        {/* Smart home */}
        {smartBadge && (
          <div className="flex items-center gap-2.5 rounded-lg border border-primary/25 bg-primary/[0.05] px-3 py-2">
            <span className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-primary text-white">
              <Cpu className="h-4 w-4" />
            </span>
            <div className="leading-tight">
              <p className="text-[12px] font-bold text-foreground">{smartBadge}</p>
              <p className="text-[11px] text-muted">Turan Telematika · QR System</p>
            </div>
          </div>
        )}

        {/* Features */}
        <ul className="flex flex-wrap gap-1.5">
          {house.features[locale].map((f, i) => (
            <li
              key={i}
              className="rounded-md border border-border px-2.5 py-1 text-[11px] font-medium text-muted"
            >
              {f}
            </li>
          ))}
        </ul>

        {/* Price */}
        <div className="mt-auto flex items-end justify-between gap-3 border-t border-border pt-4">
          <div>
            {house.old_price_kzt && (
              <span className="block text-xs text-muted line-through tabular-nums">
                {formatKzt(house.old_price_kzt)}
              </span>
            )}
            <span className="block text-xl font-extrabold tabular-nums">
              {formatKzt(house.price_kzt)}
            </span>
          </div>
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-foreground/[0.05] text-foreground/60 transition-colors group-hover:bg-primary group-hover:text-white">
            <ArrowUpRight className="h-4 w-4" />
          </span>
        </div>
      </div>
    </div>
  );
}

"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

type Opt = { label: string; sub: string; items: string[] };

export function InvestOptions() {
  const t = useTranslations("invest");
  const a = t.raw("option_a") as Opt;
  const b = t.raw("option_b") as Opt;
  const [active, setActive] = useState<"a" | "b">("a");
  const opt = active === "a" ? a : b;

  return (
    <div className="h-full rounded-card border border-border bg-card p-6 shadow-card">
      <div className="inline-flex gap-1 rounded-lg border border-border p-1">
        {(["a", "b"] as const).map((k) => (
          <button
            key={k}
            onClick={() => setActive(k)}
            className={cn(
              "rounded-md px-5 py-2 text-sm font-semibold transition-colors",
              active === k
                ? "bg-primary text-white"
                : "text-muted hover:text-foreground"
            )}
          >
            {(k === "a" ? a : b).label}
          </button>
        ))}
      </div>

      <p className="mt-5 text-sm text-muted">{opt.sub}</p>
      <ul className="mt-4 space-y-2.5">
        {opt.items.map((it, i) => (
          <li key={i} className="flex gap-2.5 text-sm text-foreground/85">
            <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
            {it}
          </li>
        ))}
      </ul>
    </div>
  );
}

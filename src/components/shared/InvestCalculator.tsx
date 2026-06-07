"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Calculator } from "lucide-react";

// amount in thousands USD
function fmtM(thousands: number) {
  return `$${(thousands / 1000).toFixed(1)}M`;
}
function fmtK(thousands: number) {
  return `$${Math.round(thousands)}K`;
}

export function InvestCalculator() {
  const t = useTranslations("invest");
  const [amount, setAmount] = useState(1200); // thousands USD

  const equity = Math.max(10, Math.min(45, Math.round(amount / 60)));
  const income = (571 * equity) / 100; // net profit at maturity $571K × equity

  return (
    <div className="flex h-full flex-col rounded-card border border-border bg-card p-6 shadow-card">
      <p className="flex items-center gap-2 text-[12px] font-extrabold uppercase tracking-[0.12em] text-primary">
        <Calculator className="h-4 w-4" />
        {t("calc_title")}
      </p>

      <div className="mt-6 flex items-baseline justify-between">
        <span className="text-sm text-muted">{t("calc_amount")}</span>
        <span className="text-2xl font-extrabold tabular-nums">{fmtM(amount)}</span>
      </div>
      <input
        type="range"
        min={500}
        max={3000}
        step={100}
        value={amount}
        onChange={(e) => setAmount(Number(e.target.value))}
        className="mt-3 h-2 w-full cursor-pointer appearance-none rounded-full bg-muted-bg accent-primary"
      />
      <div className="mt-1 flex justify-between text-[11px] text-muted">
        <span>$0.5M</span>
        <span>$3.0M</span>
      </div>

      <div className="mt-6 grid grid-cols-2 gap-3">
        <div className="rounded-lg border border-border bg-muted-bg/50 p-4 text-center">
          <div className="text-2xl font-extrabold tabular-nums text-primary">~{equity}%</div>
          <div className="mt-1 text-[12px] text-muted leading-snug">{t("calc_equity")}</div>
        </div>
        <div className="rounded-lg border border-border bg-muted-bg/50 p-4 text-center">
          <div className="text-2xl font-extrabold tabular-nums text-primary">~{fmtK(income)}</div>
          <div className="mt-1 text-[12px] text-muted leading-snug">{t("calc_income")}</div>
        </div>
      </div>

      <p className="mt-auto pt-4 text-[11px] leading-relaxed text-muted">{t("calc_note")}</p>
    </div>
  );
}

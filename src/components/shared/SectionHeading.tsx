import { Reveal } from "./Reveal";
import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  accent,
  sub,
  center,
  light,
}: {
  eyebrow?: string;
  title: string;
  accent?: string;
  sub?: string;
  center?: boolean;
  light?: boolean;
}) {
  return (
    <Reveal className={cn("max-w-3xl", center && "mx-auto text-center")}>
      {eyebrow && (
        <p
          className={cn(
            "mb-4 inline-flex items-center gap-2 text-[12px] font-extrabold uppercase tracking-[0.16em] text-primary",
            center && "justify-center"
          )}
        >
          <span className="h-px w-6 bg-primary/60" />
          {eyebrow}
        </p>
      )}
      <h2
        className={cn(
          "text-[1.75rem] leading-[1.08] font-extrabold tracking-[-0.02em] md:text-[2.75rem] lg:text-5xl",
          light && "text-white"
        )}
      >
        {title}
        {accent && <span className="text-primary"> {accent}</span>}
      </h2>
      {sub && (
        <p
          className={cn(
            "mt-3 text-sm md:text-[15px] leading-relaxed",
            light ? "text-white/65" : "text-muted"
          )}
        >
          {sub}
        </p>
      )}
    </Reveal>
  );
}

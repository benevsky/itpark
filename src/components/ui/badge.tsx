import * as React from "react";
import { cn } from "@/lib/utils";

type Variant = "default" | "secondary" | "outline";

const variants: Record<Variant, string> = {
  default: "bg-primary text-primary-foreground border-transparent",
  secondary: "bg-black/55 text-white border-transparent backdrop-blur-sm",
  outline: "border-border text-foreground",
};

export function Badge({
  className,
  variant = "default",
  ...props
}: React.HTMLAttributes<HTMLSpanElement> & { variant?: Variant }) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-md border px-2.5 py-1 text-[11px] font-semibold tracking-wide",
        variants[variant],
        className
      )}
      {...props}
    />
  );
}

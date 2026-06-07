import * as React from "react";
import { cn } from "@/lib/utils";

type Variant = "default" | "outline" | "ghost" | "secondary";
type Size = "default" | "sm" | "lg" | "icon";

const base =
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl font-semibold tracking-tight transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 disabled:pointer-events-none disabled:opacity-50 cursor-pointer active:scale-[0.98]";

const variants: Record<Variant, string> = {
  default:
    "bg-primary text-primary-foreground hover:bg-primary-dark shadow-[0_4px_14px_rgba(26,173,92,0.30)] hover:shadow-[0_6px_22px_rgba(26,173,92,0.42)]",
  outline:
    "border border-border bg-transparent text-foreground hover:border-primary hover:text-primary",
  ghost: "bg-transparent text-foreground hover:bg-muted-bg",
  secondary: "bg-muted-bg text-foreground hover:bg-border",
};

const sizes: Record<Size, string> = {
  default: "h-12 px-7 text-[15px]",
  sm: "h-10 px-5 text-sm",
  lg: "h-14 px-9 text-base",
  icon: "h-11 w-11",
};

export function buttonClasses(variant: Variant = "default", size: Size = "default", className?: string) {
  return cn(base, variants[variant], sizes[size], className);
}

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", ...props }, ref) => (
    <button ref={ref} className={buttonClasses(variant, size, className)} {...props} />
  )
);
Button.displayName = "Button";

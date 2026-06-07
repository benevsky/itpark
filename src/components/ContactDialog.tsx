import { buttonClasses } from "@/components/ui/button";
import { contacts } from "@/lib/contacts";

type Props = {
  label: string;
  variant?: "default" | "outline" | "ghost" | "secondary";
  size?: "default" | "sm" | "lg";
  className?: string;
  // kept for call-site compatibility; contact always routes to Telegram
  defaultType?: "live" | "invest";
};

/** Contact action — routes to Telegram. */
export function ContactDialog({ label, variant = "default", size = "default", className }: Props) {
  return (
    <a
      href={contacts.telegram}
      target="_blank"
      rel="noopener noreferrer"
      className={buttonClasses(variant, size, className)}
    >
      {label}
    </a>
  );
}

import { useTranslations } from "next-intl";
import { ArrowRight } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { buttonClasses } from "@/components/ui/button";

export function SectionMore({ href, label }: { href: string; label?: string }) {
  const t = useTranslations("common");
  return (
    <Link href={href} className={buttonClasses("outline", "default", "group shrink-0")}>
      {label ?? t("details")}
      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
    </Link>
  );
}

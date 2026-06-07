import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

export function DetailShell({ children }: { children: React.ReactNode }) {
  const t = useTranslations("common");
  return (
    <div className="pt-24 md:pt-28">
      <div className="mx-auto max-w-[1200px] px-4 md:px-6">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-card px-4 py-2 text-sm font-semibold text-muted shadow-card transition-colors hover:border-primary hover:text-primary"
        >
          {t("back")}
        </Link>
      </div>
      {children}
    </div>
  );
}

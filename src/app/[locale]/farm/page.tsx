import { setRequestLocale } from "next-intl/server";
import { DetailShell } from "@/components/shared/DetailShell";
import { Farm } from "@/components/sections/Farm";

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  return (
    <DetailShell>
      <Farm />
    </DetailShell>
  );
}

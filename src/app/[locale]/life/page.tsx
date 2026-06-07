import { setRequestLocale } from "next-intl/server";
import { DetailShell } from "@/components/shared/DetailShell";
import { LifeLocation } from "@/components/sections/LifeLocation";

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  return (
    <DetailShell>
      <LifeLocation />
    </DetailShell>
  );
}

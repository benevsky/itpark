import { setRequestLocale } from "next-intl/server";
import { DetailShell } from "@/components/shared/DetailShell";
import { Homes } from "@/components/sections/Homes";

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  return (
    <DetailShell>
      <Homes />
    </DetailShell>
  );
}

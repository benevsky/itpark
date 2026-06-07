import { setRequestLocale } from "next-intl/server";
import { DetailShell } from "@/components/shared/DetailShell";
import { Ecosystem } from "@/components/sections/Ecosystem";
import { Nicas } from "@/components/sections/Nicas";

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  return (
    <DetailShell>
      <Ecosystem />
      <Nicas />
    </DetailShell>
  );
}

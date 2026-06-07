import { setRequestLocale } from "next-intl/server";
import { DetailShell } from "@/components/shared/DetailShell";
import { Partners } from "@/components/sections/Partners";
import { LogoWall } from "@/components/sections/LogoWall";

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  return (
    <DetailShell>
      <Partners />
      <LogoWall />
    </DetailShell>
  );
}

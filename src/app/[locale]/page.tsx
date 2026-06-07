import { setRequestLocale } from "next-intl/server";
import { Hero } from "@/components/sections/Hero";
import { LogoWall } from "@/components/sections/LogoWall";
import { About } from "@/components/sections/About";
import { Ecosystem } from "@/components/sections/Ecosystem";
import { Farm } from "@/components/sections/Farm";
import { Homes } from "@/components/sections/Homes";
import { Vision } from "@/components/sections/Vision";
import { Gallery } from "@/components/sections/Gallery";
import { LifeLocation } from "@/components/sections/LifeLocation";
import { Invest } from "@/components/sections/Invest";
import { Faq } from "@/components/sections/Faq";
import { Timeline } from "@/components/sections/Timeline";
import { Nicas } from "@/components/sections/Nicas";
import { Partners } from "@/components/sections/Partners";
import { CTA } from "@/components/sections/CTA";

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <Hero />
      <LogoWall />
      <About />
      <Ecosystem />
      <Farm />
      <Homes />
      <Vision />
      <Gallery />
      <LifeLocation />
      <Invest />
      <Faq />
      <Timeline />
      <Nicas />
      <Partners />
      <CTA />
    </>
  );
}

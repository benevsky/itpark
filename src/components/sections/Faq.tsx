import { useTranslations } from "next-intl";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Reveal } from "@/components/shared/Reveal";
import { RiskAccordion } from "@/components/shared/RiskAccordion";

type Risk = { q: string; a: string };

export function Faq() {
  const t = useTranslations("faq");
  const inv = useTranslations("invest");
  const risks = inv.raw("risks") as Risk[];

  return (
    <section id="faq" className="py-24 md:py-32">
      <div className="mx-auto max-w-[920px] px-4 md:px-6">
        <SectionHeading eyebrow={t("eyebrow")} title={t("title")} sub={t("sub")} center />
        <Reveal className="mt-12">
          <RiskAccordion items={risks} />
        </Reveal>
      </div>
    </section>
  );
}

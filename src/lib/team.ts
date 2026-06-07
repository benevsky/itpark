import type { Locale } from "./houses";

export type Member = {
  slug: string;
  name: string;
  role: Record<Locale, string>;
  credential: Record<Locale, string>;
};

export const team: Member[] = [
  {
    slug: "ceo",
    name: "—",
    role: {
      ru: "Управляющий партнёр · CEO",
      kk: "Басқарушы серіктес · CEO",
      en: "Managing Partner · CEO",
      zh: "管理合伙人 · CEO",
    },
    credential: {
      ru: "Стратегия, привлечение капитала и развитие кластера",
      kk: "Стратегия, капитал тарту және кластерді дамыту",
      en: "Strategy, capital raising and cluster development",
      zh: "战略、融资与园区发展",
    },
  },
  {
    slug: "cto",
    name: "—",
    role: {
      ru: "Технический директор · CTO",
      kk: "Техникалық директор · CTO",
      en: "Chief Technology Officer · CTO",
      zh: "首席技术官 · CTO",
    },
    credential: {
      ru: "PhD в кибербезопасности и AI · 35+ реализованных проектов (Benevsky IT Hub)",
      kk: "Киберқауіпсіздік пен AI PhD · 35+ жоба (Benevsky IT Hub)",
      en: "PhD in cybersecurity and AI · 35+ delivered projects (Benevsky IT Hub)",
      zh: "网络安全与 AI 博士 · 35+ 个已交付项目（Benevsky IT Hub）",
    },
  },
  {
    slug: "agro",
    name: "—",
    role: {
      ru: "Директор по агротехнологиям",
      kk: "Агротехнология жөніндегі директор",
      en: "Director of Agri-Technology",
      zh: "农业技术总监",
    },
    credential: {
      ru: "УЗВ полного цикла, аквакультура и кормопроизводство",
      kk: "Толық циклді УЗВ, аквакультура және жем өндірісі",
      en: "Full-cycle RAS, aquaculture and feed production",
      zh: "全周期 RAS、水产养殖与饲料生产",
    },
  },
  {
    slug: "ir",
    name: "—",
    role: {
      ru: "Директор по инвестициям · IR",
      kk: "Инвестиция жөніндегі директор · IR",
      en: "Director of Investment · IR",
      zh: "投资总监 · IR",
    },
    credential: {
      ru: "Финмодель, отношения с инвесторами и государственная поддержка",
      kk: "Қаржы моделі, инвесторлармен қарым-қатынас және мемлекеттік қолдау",
      en: "Financial model, investor relations and government support",
      zh: "财务模型、投资者关系与政府扶持",
    },
  },
];

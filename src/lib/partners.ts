import type { Locale } from "./houses";

export type Partner = {
  slug: string;
  name: string;
  flag: string;
  region: Record<Locale, string>;
  role: Record<Locale, string>;
  desc: Record<Locale, string>;
};

export const partners: Partner[] = [
  {
    slug: "mcriap",
    name: "МЦРИАП",
    flag: "🇰🇿",
    region: { ru: "Казахстан", kk: "Қазақстан", en: "Kazakhstan", zh: "哈萨克斯坦" },
    role: {
      ru: "Цифровое развитие · госинституты",
      kk: "Цифрлық даму · мемлекеттік институттар",
      en: "Digital Development · Government",
      zh: "数字发展 · 政府机构",
    },
    desc: {
      ru: "Профильное министерство цифрового развития: доступ к программам господдержки Qazaqstan Digital и регуляторная база умного города.",
      kk: "Бейінді цифрлық даму министрлігі: Qazaqstan Digital қолдау бағдарламалары мен смарт қаланың реттеуші базасы.",
      en: "The national digital-development ministry: access to Qazaqstan Digital support programmes and the smart-city regulatory base.",
      zh: "国家数字发展主管部门：可对接 Qazaqstan Digital 扶持计划，并提供智慧城市监管基础。",
    },
  },
  {
    slug: "siemens",
    name: "Siemens",
    flag: "🇩🇪",
    region: { ru: "Германия", kk: "Германия", en: "Germany", zh: "德国" },
    role: {
      ru: "Промышленная автоматизация",
      kk: "Өнеркәсіптік автоматтандыру",
      en: "Industrial Automation",
      zh: "工业自动化",
    },
    desc: {
      ru: "Инженерные системы зданий, энергоменеджмент и промышленная автоматика как технологический слой умного города.",
      kk: "Ғимарат инженерлік жүйелері, энергоменеджмент және смарт қаланың өнеркәсіптік автоматикасы.",
      en: "Building engineering, energy management and industrial automation as the smart-city technology layer.",
      zh: "楼宇工程、能源管理与工业自动化，构成智慧城市的技术层。",
    },
  },
  {
    slug: "cloudflare",
    name: "Cloudflare",
    flag: "🇺🇸",
    region: { ru: "США", kk: "АҚШ", en: "USA", zh: "美国" },
    role: {
      ru: "Облако · кибербезопасность",
      kk: "Бұлт · киберқауіпсіздік",
      en: "Cloud · Cybersecurity",
      zh: "云与网络安全",
    },
    desc: {
      ru: "Глобальная сеть, защита от DDoS и Zero-Trust-периметр для цифровой платформы и сервисов резидентов.",
      kk: "Жаһандық желі, DDoS қорғанысы және цифрлық платформа мен тұрғын сервистеріне Zero-Trust периметрі.",
      en: "Global network, DDoS protection and a Zero-Trust perimeter for the digital platform and resident services.",
      zh: "全球网络、DDoS 防护以及面向数字平台与住户服务的零信任边界。",
    },
  },
  {
    slug: "tencent",
    name: "Tencent",
    flag: "🇨🇳",
    region: { ru: "Китай", kk: "Қытай", en: "China", zh: "中国" },
    role: {
      ru: "Облачные технологии и AI",
      kk: "Бұлтты технологиялар және AI",
      en: "Cloud Technology & AI",
      zh: "云技术与人工智能",
    },
    desc: {
      ru: "Облачные сервисы и AI-инфраструктура для обработки данных IoT и масштабирования цифровых сервисов кластера.",
      kk: "IoT деректерін өңдеуге және кластердің цифрлық сервистерін масштабтауға арналған бұлтты сервистер мен AI.",
      en: "Cloud services and AI infrastructure to process IoT data and scale the cluster's digital services.",
      zh: "云服务与 AI 基础设施，用于处理 IoT 数据并扩展园区的数字服务。",
    },
  },
  {
    slug: "miti-malaysia",
    name: "MITI Malaysia",
    flag: "🇲🇾",
    region: { ru: "Малайзия", kk: "Малайзия", en: "Malaysia", zh: "马来西亚" },
    role: {
      ru: "Инвестиции, торговля и промышленность",
      kk: "Инвестиция, сауда және өнеркәсіп",
      en: "Investment, Trade & Industry",
      zh: "投资、贸易与工业",
    },
    desc: {
      ru: "Министерство инвестиций, торговли и промышленности Малайзии: международные инвестиционные и торговые связи.",
      kk: "Малайзияның инвестиция, сауда және өнеркәсіп министрлігі: халықаралық инвестициялық байланыстар.",
      en: "Malaysia's Ministry of Investment, Trade and Industry: international investment and trade ties.",
      zh: "马来西亚投资、贸易与工业部：国际投资与贸易联系。",
    },
  },
  {
    slug: "latraps",
    name: "LATRAPS",
    flag: "🇱🇻",
    region: { ru: "Латвия", kk: "Латвия", en: "Latvia", zh: "拉脱维亚" },
    role: {
      ru: "Агропромышленный кооператив",
      kk: "Агроөнеркәсіптік кооператив",
      en: "Agricultural Cooperative",
      zh: "农业合作社",
    },
    desc: {
      ru: "Один из крупнейших агрокооперативов Латвии: экспертиза в агрологистике, переработке и экспорте продукции.",
      kk: "Латвияның ірі агрокооперативтерінің бірі: агрологистика, өңдеу және экспорт тәжірибесі.",
      en: "One of Latvia's largest agricultural cooperatives: expertise in agri-logistics, processing and export.",
      zh: "拉脱维亚最大的农业合作社之一：在农业物流、加工与出口方面拥有专长。",
    },
  },
  {
    slug: "rbt",
    name: "RBT · Riga Bulk Terminal",
    flag: "🇱🇻",
    region: { ru: "Латвия", kk: "Латвия", en: "Latvia", zh: "拉脱维亚" },
    role: {
      ru: "Портовая логистика и экспорт",
      kk: "Порт логистикасы және экспорт",
      en: "Port Logistics & Export",
      zh: "港口物流与出口",
    },
    desc: {
      ru: "Портовый терминал в Риге: выход на экспортную логистику ЕС и стран Балтии для продукции кластера.",
      kk: "Ригадағы порт терминалы: кластер өніміне ЕО мен Балтия экспорттық логистикасына шығу.",
      en: "A port terminal in Riga: access to EU and Baltic export logistics for the cluster's output.",
      zh: "里加散货码头：为园区产品打通欧盟与波罗的海的出口物流。",
    },
  },
  {
    slug: "case",
    name: "CASE",
    flag: "🇰🇿",
    region: { ru: "Казахстан", kk: "Қазақстан", en: "Kazakhstan", zh: "哈萨克斯坦" },
    role: {
      ru: "Экосистема инновационного менеджмента",
      kk: "Инновациялық менеджмент экожүйесі",
      en: "Innovation Management Ecosystem",
      zh: "创新管理生态系统",
    },
    desc: {
      ru: "Первая в Центральной Азии экосистема инновационного менеджмента: связывает технологические компании, экспертизу и капитал.",
      kk: "Орталық Азиядағы алғашқы инновациялық менеджмент экожүйесі: технологиялық компанияларды, сараптама мен капиталды байланыстырады.",
      en: "Central Asia's first innovation-management ecosystem: connecting technology companies, expertise and capital.",
      zh: "中亚首个创新管理生态系统：连接科技企业、专业知识与资本。",
    },
  },
];

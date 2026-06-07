import type { Locale } from "./houses";

export type NicasMember = {
  slug: string;
  name: string;
  site?: string;
  anchor?: boolean;
  role: Record<Locale, string>;
  desc: Record<Locale, string>;
  tags: string[];
};

export const nicasMembers: NicasMember[] = [
  {
    slug: "nicas",
    name: "НИЦАС",
    site: "rcsas.tech",
    anchor: true,
    role: {
      ru: "Научно-исследовательский центр анализа и стратегии · якорь альянса",
      kk: "Талдау және стратегия ғылыми-зерттеу орталығы · альянс анкері",
      en: "Research Center for Analysis & Strategy · alliance anchor",
      zh: "分析与战略研究中心 · 联盟核心",
    },
    desc: {
      ru: "Объединяет 5+ компаний Казахстана — промышленность, наука и IT под одной крышей. Управляет R&D-дорожной картой и стратегией всего альянса. Партнёр НИИАС при РЖД.",
      kk: "Қазақстанның 5+ компаниясын біріктіреді — өнеркәсіп, ғылым және IT. Альянстың R&D жол картасы мен стратегиясын басқарады. РЖД жанындағы НИИАС серіктесі.",
      en: "Unites 5+ Kazakhstani companies — industry, science and IT under one roof. Runs the alliance R&D roadmap and strategy. Partner of NIIAS at RZhD.",
      zh: "整合哈萨克斯坦 5+ 家企业——工业、科研与 IT 同处一体。负责联盟的 R&D 路线图与整体战略。俄铁旗下 НИИАС 的合作伙伴。",
    },
    tags: ["R&D", "Strategy", "Alliance"],
  },
  {
    slug: "turan-telematika",
    name: "Turan Telematika",
    site: "rcsas.tech/telematika",
    role: {
      ru: "Телематика и IoT",
      kk: "Телематика және IoT",
      en: "Telematics & IoT",
      zh: "车联网与 IoT",
    },
    desc: {
      ru: "IoT-платформа, GPS-трекинг и бортовые системы для мониторинга инфраструктуры в реальном времени.",
      kk: "Нақты уақыттағы инфрақұрылым мониторингіне арналған IoT-платформа, GPS-трекинг және бортты жүйелер.",
      en: "IoT platform, GPS tracking and onboard systems for real-time infrastructure monitoring.",
      zh: "IoT 平台、GPS 追踪与车载系统，用于基础设施的实时监控。",
    },
    tags: ["IoT", "GPS"],
  },
  {
    slug: "viscur",
    name: "КБ VISCUR",
    site: "viscur.ru",
    role: {
      ru: "Конструкторское бюро · микроэлектроника",
      kk: "Конструкторлық бюро · микроэлектроника",
      en: "Design Bureau · Microelectronics",
      zh: "设计局 · 微电子",
    },
    desc: {
      ru: "Разработка аппаратных решений: контроллеры, датчики и промышленная электроника для систем умного города.",
      kk: "Жабдықтамалық шешімдер: смарт қала жүйелеріне арналған контроллерлер, сенсорлар, өнеркәсіптік электроника.",
      en: "Hardware R&D: controllers, sensors and industrial electronics for smart-city systems.",
      zh: "硬件研发：用于智慧城市系统的控制器、传感器与工业电子。",
    },
    tags: ["Hardware", "Sensors"],
  },
  {
    slug: "qr-systems",
    name: "QR Systems",
    site: "qr-s.kz",
    role: {
      ru: "Завод радиоэлектроники",
      kk: "Радиоэлектроника зауыты",
      en: "Radioelectronics Factory",
      zh: "无线电电子工厂",
    },
    desc: {
      ru: "Серийное производство радиоэлектронных компонентов и модулей с локализацией в Казахстане.",
      kk: "Радиоэлектронды компоненттер мен модульдерді Қазақстанда локализациялап сериялық өндіру.",
      en: "Serial production of radioelectronic components and modules, localized in Kazakhstan.",
      zh: "无线电电子元件与模块的批量生产，在哈萨克斯坦本地化制造。",
    },
    tags: ["Manufacturing", "PCB"],
  },
  {
    slug: "bsg",
    name: "BSG",
    site: "bsgns.kz",
    role: {
      ru: "Безопасность и системная интеграция",
      kk: "Қауіпсіздік және жүйелік интеграция",
      en: "Security & System Integration",
      zh: "安全与系统集成",
    },
    desc: {
      ru: "Кибербезопасность АСУ ТП, системная интеграция объектов и SOC-центр мониторинга 24/7.",
      kk: "АСУ ТП киберқауіпсіздігі, нысандарды жүйелік интеграция және 24/7 SOC-орталығы.",
      en: "ICS cybersecurity, facility system integration and a 24/7 SOC monitoring center.",
      zh: "工控系统网络安全、设施系统集成与 24/7 SOC 监控中心。",
    },
    tags: ["Security", "SOC"],
  },
  {
    slug: "core247",
    name: "Core 24/7",
    site: "core247.kz",
    role: {
      ru: "ИТ-инфраструктура · дата-центры",
      kk: "АТ-инфрақұрылым · деректер орталықтары",
      en: "IT Infrastructure · Data Centers",
      zh: "IT 基础设施 · 数据中心",
    },
    desc: {
      ru: "Облачная инфраструктура, ЦОД и поддержка критических систем с гарантией uptime 99.9%.",
      kk: "Бұлтты инфрақұрылым, ДО және 99.9% uptime кепілдігімен маңызды жүйелерді қолдау.",
      en: "Cloud infrastructure, data centers and critical-system support with 99.9% uptime.",
      zh: "云基础设施、数据中心与关键系统支持，保障 99.9% 在线率。",
    },
    tags: ["Cloud", "SLA"],
  },
  {
    slug: "benevsky-it-hub",
    name: "Benevsky IT Hub",
    site: "benevsky.work",
    role: {
      ru: "AI · цифровые решения",
      kk: "AI · цифрлық шешімдер",
      en: "AI · Digital Solutions",
      zh: "AI · 数字解决方案",
    },
    desc: {
      ru: "35+ реализованных проектов, AI/ML-разработка с 2015 года. Основатель — PhD в кибербезопасности и AI.",
      kk: "35+ жоба, 2015 жылдан AI/ML-әзірлеу. Негізін қалаушы — киберқауіпсіздік пен AI PhD иегері.",
      en: "35+ delivered projects, AI/ML development since 2015. Founder holds a PhD in cybersecurity and AI.",
      zh: "35+ 个已交付项目，自 2015 年起从事 AI/ML 研发。创始人拥有网络安全与 AI 博士学位。",
    },
    tags: ["AI/ML", "Full-Stack"],
  },
];

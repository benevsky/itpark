import type { Locale } from "./houses";

export const contacts: {
  email: string;
  website: string;
  phone: string;
  address: Record<Locale, string>;
  telegram: string;
  maps_2gis: string;
  maps_google: string;
} = {
  email: "investor@itvillage.kz",
  website: "itvillage.kz",
  phone: "+7 (7xx) xxx-xx-xx",
  address: {
    ru: "Алматинская обл., Енбекшиказахский р-н, с. Акши, ул. Канапия Кусаина 32",
    kk: "Алматы обл., Еңбекшіқазақ ауданы, Ақши ауылы, Канапия Қосаин к-сі 32",
    en: "Almaty Region, Enbekshi-Kazakhstan District, Akshi village, 32 Kanapiya Kusaina St",
    zh: "阿拉木图州 恩别克什哈萨克区 阿克希村 卡纳皮亚·库萨因娜街32号"
  },
  telegram: "https://t.me/R888888Ak",
  maps_2gis: "https://2gis.kz/",
  maps_google: "https://maps.google.com/?q=43.5,77.3"
};

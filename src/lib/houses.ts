export type Locale = "ru" | "kk" | "en" | "zh";

export type House = {
  slug: string;
  type: "house" | "bath";
  floors: number;
  area: number;
  rooms: number | null;
  price_kzt: number;
  old_price_kzt: number | null;
  photo: string;
  highlight: boolean;
  name: Record<Locale, string>;
  features: Record<Locale, string[]>;
};

export const houses: House[] = [
  {
    slug: "kompakt",
    type: "house",
    floors: 1,
    area: 35,
    rooms: 2,
    price_kzt: 5500000,
    old_price_kzt: 7500000,
    photo: "/media/mockup of house 3.webp",
    highlight: false,
    name: { ru: "Компакт", kk: "Компакт", en: "Compact", zh: "紧凑型" },
    features: { ru: ["Одна спальня", "Терраса", "Умный замок"],
                kk: ["Бір жатын бөлме", "Тераса", "Смарт құлып"],
                en: ["1 bedroom", "Terrace", "Smart lock"],
                zh: ["1间卧室", "露台", "智能锁"] }
  },
  {
    slug: "standart",
    type: "house",
    floors: 1,
    area: 75,
    rooms: 3,
    price_kzt: 12900000,
    old_price_kzt: 14045000,
    photo: "/media/mockup of house 5.webp",
    highlight: false,
    name: { ru: "Стандарт", kk: "Стандарт", en: "Standard", zh: "标准型" },
    features: { ru: ["2 спальни", "Открытая терраса", "Панорамное остекление"],
                kk: ["2 жатын бөлме", "Ашық тераса", "Панорамалық әйнек"],
                en: ["2 bedrooms", "Open terrace", "Floor-to-ceiling glazing"],
                zh: ["2间卧室", "开放式露台", "落地玻璃幕墙"] }
  },
  {
    slug: "sredniy",
    type: "house",
    floors: 1,
    area: 101,
    rooms: 3,
    price_kzt: 19800000,
    old_price_kzt: null,
    photo: "/media/mockup of house 2.webp",
    highlight: false,
    name: { ru: "Средний", kk: "Орта", en: "Medium", zh: "中户型" },
    features: { ru: ["3 спальни", "Мастер-санузел", "Котельная"],
                kk: ["3 жатын бөлме", "Мастер-санузел", "Қазандық"],
                en: ["3 bedrooms", "Master ensuite", "Utility room"],
                zh: ["3间卧室", "主卧套间", "设备间"] }
  },
  {
    slug: "populyarnyy",
    type: "house",
    floors: 1,
    area: 150,
    rooms: 4,
    price_kzt: 20600000,
    old_price_kzt: 27200000,
    photo: "/media/mockup of house.webp",
    highlight: true,
    name: { ru: "Популярный", kk: "Танымал", en: "Popular", zh: "热销型" },
    features: { ru: ["4 спальни", "Кухня-гостиная с витражом", "Гардеробная", "Большая терраса"],
                kk: ["4 жатын бөлме", "Витражды ас үй-зал", "Киім бөлмесі", "Үлкен тераса"],
                en: ["4 bedrooms", "Kitchen-living with glazing", "Walk-in wardrobe", "Large terrace"],
                zh: ["4间卧室", "玻璃幕墙客厅厨房", "步入式衣帽间", "大露台"] }
  },
  {
    slug: "prostornyy",
    type: "house",
    floors: 2,
    area: 140,
    rooms: 4,
    price_kzt: 23600000,
    old_price_kzt: null,
    photo: "/media/mockup of house 4.webp",
    highlight: false,
    name: { ru: "Просторный", kk: "Кең", en: "Spacious", zh: "宽敞型" },
    features: { ru: ["4 спальни", "Два этажа", "Балкон с видом", "Гараж"],
                kk: ["4 жатын бөлме", "Екі қабат", "Көрінісі бар балкон", "Гараж"],
                en: ["4 bedrooms", "Two floors", "View balcony", "Garage"],
                zh: ["4间卧室", "两层", "观景阳台", "车库"] }
  },
  {
    slug: "banya-m",
    type: "bath",
    floors: 1,
    area: 47,
    rooms: null,
    price_kzt: 8800000,
    old_price_kzt: null,
    photo: "/media/mockup of house 3.webp",
    highlight: false,
    name: { ru: "Баня M", kk: "Монша M", en: "Bathhouse M", zh: "桑拿房 M" },
    features: { ru: ["Парная", "Комната отдыха", "Душевая"],
                kk: ["Бу бөлмесі", "Демалыс бөлмесі", "Душ"],
                en: ["Steam room", "Lounge", "Shower"],
                zh: ["蒸汽房", "休息室", "淋浴间"] }
  },
  {
    slug: "banya-l",
    type: "bath",
    floors: 1,
    area: 90,
    rooms: null,
    price_kzt: 13800000,
    old_price_kzt: null,
    photo: "/media/mockup of house 5.webp",
    highlight: false,
    name: { ru: "Баня L", kk: "Монша L", en: "Bathhouse L", zh: "桑拿房 L" },
    features: { ru: ["Парная", "Бассейн-купель", "Бильярдная", "Летняя терраса"],
                kk: ["Бу бөлмесі", "Бассейн", "Бильярд", "Жазғы тераса"],
                en: ["Steam room", "Plunge pool", "Billiards", "Summer terrace"],
                zh: ["蒸汽房", "浸泡池", "台球室", "夏季露台"] }
  }
];

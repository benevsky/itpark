# NOMAD IT PARK

Маркетинговый сайт частного IT-города и agri-tech кластера под Алматы — экосистема «умного города» на единой цифровой платформе.

Многоязычный лендинг (RU · KK · EN · ZH) с анимированными SVG-инфографиками, видео-лупами, тёмной/светлой темой и внутренними страницами по разделам.

## Стек

- **Next.js 16** (App Router) + **React 19** + **TypeScript**
- **Tailwind CSS v4**
- **next-intl** — интернационализация (4 языка, маршруты `/ru` `/kk` `/en` `/zh`)
- **lucide-react** — иконки
- **Manrope** (`next/font/google`)

## Возможности

- 4 языка с переключателем и локализованными маршрутами; `/` → `/ru`
- Тёмная/светлая тема (по умолчанию светлая, переключатель в шапке)
- Анимированные диаграммы (SVG + SMIL): сеть «умного города», замкнутый цикл УЗВ, денежный двигатель, график выручки/прибыли
- Видео-лупы (оптимизированные mp4) и аэрофото в `public/media`
- Внутренние страницы по разделам: `/farm`, `/homes`, `/invest`, `/life`, `/ecosystem`, `/vision`, `/partners`, `/about`
- Индикатор прогресса прокрутки, поддержка `prefers-reduced-motion`, брендовый favicon

## Быстрый старт

```bash
npm install
npm run dev      # http://localhost:3000 → /ru
```

Production-сборка:

```bash
npm run build && npm start
```

Можно также использовать `./install.sh` (проверка Node, установка, запуск).

## Структура

```
src/
  app/[locale]/        # локализованные маршруты (главная + внутренние страницы)
  components/
    layout/            # Header, Footer
    sections/          # секции лендинга
    shared/            # переиспользуемые блоки, диаграммы, UI
  i18n/                # routing, request, navigation (next-intl)
  lib/                 # данные (houses, partners, nicas, contacts) + утилиты
messages/              # переводы ru / kk / en / zh
public/media/          # оптимизированные видео и фото
```

## Медиа

Видео сжаты до 720p (mp4). Если меняете исходники — кладите оптимизированные файлы в `public/media` под теми же именами, что в компонентах.

---

Built by [Benevsky](https://benevsky.work)

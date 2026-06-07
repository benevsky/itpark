# KAI VALLEY — запуск

Лендинг собран по `CLAUDE_CODE_PROMPT.md` на стеке **Next.js 16 + Tailwind v4 + next-intl** (3 языка RU/KK/EN, тёмная/светлая тема, оптимизированное медиа).

## Запустить локально

```bash
cd kai-valley
npm install            # доустановить зависимости, если нужно
npm run dev            # http://localhost:3000 → редирект на /ru
```

Сборка прод-версии:

```bash
npm run build && npm start
```

## Что готово (Шаг «Лендинг»)

- Маршрутизация `/ru` `/kk` `/en`, `/` → `/ru` (middleware).
- 11 секций главной: Hero (видео-фон) · About · Farm · Homes (фильтры) ·
  Vision (мастерплан) · Infra · Invest (фазы, график выручки, Option A/B,
  субсидии) · Timeline · Location · Partners · CTA.
- Переключатель языка и темы в шапке, мобильное меню, кнопка «наверх»,
  reveal-анимации (IntersectionObserver), форма заявки (модалка).
- Медиа оптимизировано в `public/media/` (видео → 720p mp4, фото → webp).

## Медиа

Видео сжаты до mp4 720p (WebM не генерировался — при желании добавьте
`libvpx-vp9` проход из скрипта в промте). Все фото — webp ≤ 0.5 МБ.

## Не сделано (по договорённости — «сначала лендинг»)

Внутренние страницы (`/homes/[slug]`, `/farm`, `/invest`, `/infra`,
`/about`, `/partners`, `/location`, `/contacts`, `/agro-con`) — следующий этап.

#!/usr/bin/env bash
#
# KAI VALLEY — установка и запуск проекта
# Использование:
#   ./install.sh          установить зависимости
#   ./install.sh dev      установить и запустить dev-сервер
#   ./install.sh build    установить и собрать прод-версию
#
set -euo pipefail

# Перейти в папку скрипта (корень проекта)
cd "$(dirname "$0")"

green() { printf '\033[0;32m%s\033[0m\n' "$1"; }
red()   { printf '\033[0;31m%s\033[0m\n' "$1"; }

# --- 1. Проверка Node.js ---
if ! command -v node >/dev/null 2>&1; then
  red "✗ Node.js не найден. Установите Node 18+ → https://nodejs.org"
  exit 1
fi

NODE_MAJOR="$(node -p 'process.versions.node.split(".")[0]')"
if [ "$NODE_MAJOR" -lt 18 ]; then
  red "✗ Нужна Node.js 18+. Текущая: $(node -v)"
  exit 1
fi
green "✓ Node.js $(node -v)"

# --- 2. Менеджер пакетов ---
if command -v pnpm >/dev/null 2>&1; then
  PM="pnpm"
elif command -v yarn >/dev/null 2>&1; then
  PM="yarn"
else
  PM="npm"
fi
green "✓ Менеджер пакетов: $PM"

# --- 3. Установка зависимостей ---
echo "▶ Установка зависимостей…"
case "$PM" in
  pnpm) pnpm install ;;
  yarn) yarn install ;;
  npm)  npm install ;;
esac
green "✓ Зависимости установлены"

# --- 4. Действие ---
ACTION="${1:-}"
case "$ACTION" in
  dev)
    green "▶ Запуск dev-сервера → http://localhost:3000"
    exec $PM run dev
    ;;
  build)
    green "▶ Production-сборка…"
    $PM run build
    green "✓ Готово. Запуск: $PM start"
    ;;
  "")
    green "✓ Установка завершена."
    echo "  Запустить:   ./install.sh dev    (или: $PM run dev)"
    echo "  Собрать:     ./install.sh build  (или: $PM run build)"
    ;;
  *)
    red "Неизвестная команда: $ACTION (доступно: dev, build)"
    exit 1
    ;;
esac

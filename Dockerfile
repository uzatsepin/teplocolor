# Используем базовый образ для сборки сайта
FROM node:18 AS builder

# Устанавливаем рабочую директорию
WORKDIR /app

# Копируем package.json и package-lock.json
COPY package*.json ./

# Устанавливаем зависимости
RUN npm install

# Копируем все файлы проекта
COPY . .

# Генерируем статический сайт
RUN npm run generate

# Используем легковесный веб-сервер для статических файлов
FROM nginx:alpine

# Копируем статические файлы в nginx
COPY --from=builder /app/.output/public /usr/share/nginx/html

# Копируем конфигурацию Nginx
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Открываем порт 80
EXPOSE 80

# Запускаем nginx
CMD ["nginx", "-g", "daemon off;"]

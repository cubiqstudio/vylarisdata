# syntax=docker/dockerfile:1
# Stufe 1: Seite bauen (Next.js, statischer Export nach /app/out)
FROM node:22-alpine AS build
ENV NEXT_TELEMETRY_DISABLED=1
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci --no-audit --no-fund
COPY . .
RUN npm run build

# Stufe 2: nur die fertigen Dateien ausliefern – nginx ohne Root-Rechte, Port 8080
FROM nginxinc/nginx-unprivileged:stable-alpine
COPY docker/nginx.conf /etc/nginx/conf.d/default.conf
COPY docker/security.conf /etc/nginx/snippets/security.conf
COPY --from=build /app/out /usr/share/nginx/html
EXPOSE 8080

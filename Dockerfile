# syntax=docker/dockerfile:1
# Stufe 1: Seite bauen (Next.js, Standalone-Server)
FROM node:22-alpine AS build
ENV NEXT_TELEMETRY_DISABLED=1
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci --no-audit --no-fund
COPY . .
RUN npm run build

# Stufe 2: schlanker Laufzeit-Container – Node-Server ohne Root-Rechte, Port 8080 (nicht nach außen veröffentlicht)
FROM node:22-alpine AS run
ENV NODE_ENV=production \
    NEXT_TELEMETRY_DISABLED=1 \
    PORT=8080 \
    HOSTNAME=0.0.0.0 \
    DATA_DIR=/data \
    UV_THREADPOOL_SIZE=8
WORKDIR /app
# /data ist das Volume für Admin-Zugang, Sitzungen, Status und Protokoll
RUN mkdir -p /data && chown node:node /data
COPY --from=build --chown=node:node /app/.next/standalone ./
COPY --from=build --chown=node:node /app/.next/static ./.next/static
COPY --from=build --chown=node:node /app/public ./public
USER node
EXPOSE 8080
VOLUME ["/data"]
CMD ["node", "server.js"]

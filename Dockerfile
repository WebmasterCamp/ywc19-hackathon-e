FROM node:18-alpine as deps-prod

WORKDIR /app

COPY package.json yarn.lock* package-lock.json* pnpm-lock.yaml* ./
RUN npx pnpm -r i --frozen-lockfile --prod

# ? -------------------------

FROM node:18-alpine as builder

WORKDIR /app

COPY package.json yarn.lock* package-lock.json* pnpm-lock.yaml* ./
RUN npx pnpm -r i --frozen-lockfile

COPY postcss.config.js svelte.config.js tailwind.config.js tsconfig.json vite.config.ts ./
COPY static ./static
COPY src ./src

RUN npx pnpm build

# ? -------------------------

FROM node:18-alpine as runner

ENV NODE_ENV production

COPY package.json ./
COPY --from=deps-prod /app/node_modules ./node_modules
COPY --from=builder /app/.svelte-kit ./.svelte-kit
COPY --from=builder /app/build ./build

EXPOSE 3000
ENV PORT 3000

CMD ["./build/index.js"]

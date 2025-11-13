# Stage 1: Base
FROM node:20-alpine AS base
WORKDIR /app
COPY package*.json ./

# Stage 2: Dependencies
FROM base AS deps
RUN npm ci

# Stage 3: Build
FROM base AS build
COPY . .
RUN npm ci
RUN npm run build

# Stage 4: Production
FROM node:20-alpine AS prod
WORKDIR /app

# Create non-root user
RUN addgroup -S nodejs && adduser -S nodejs -G nodejs

COPY --from=deps /app/node_modules ./node_modules
COPY --from=build /app/dist ./dist
COPY package*.json ./

USER nodejs
EXPOSE 3000
CMD ["node", "dist/index.js"]

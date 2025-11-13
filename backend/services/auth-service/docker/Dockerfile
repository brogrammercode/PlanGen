# # Stage 1: Base
# FROM node:20-alpine AS base
# WORKDIR /app

# # Copy package files
# COPY package*.json ./

# # Stage 2: Install dependencies
# FROM base AS dependencies
# RUN npm ci

# # Stage 3: Build TypeScript
# FROM base AS build
# COPY . .
# RUN npm ci
# # Generate Prisma client for build stage
# RUN npx prisma generate --schema=src/infrastructure/database/schema.prisma
# # Compile TypeScript + fix path aliases
# RUN npm run build

# # Stage 4: Production image
# FROM node:20-alpine AS production
# WORKDIR /app

# # Create non-root user
# RUN addgroup -g 1001 -S nodejs && adduser -S nodejs -u 1001

# # Copy dependencies
# COPY --from=dependencies --chown=nodejs:nodejs /app/node_modules ./node_modules

# # Copy compiled dist files
# COPY --from=build --chown=nodejs:nodejs /app/dist ./dist

# # Copy Prisma schema/runtime files
# COPY --from=build --chown=nodejs:nodejs /app/src/infrastructure/database ./src/infrastructure/database

# # Copy generated Prisma client (this is critical!)
# COPY --from=build --chown=nodejs:nodejs /app/node_modules/.prisma ./node_modules/.prisma
# COPY --from=build --chown=nodejs:nodejs /app/node_modules/@prisma ./node_modules/@prisma

# # Copy package.json for production scripts if needed
# COPY --chown=nodejs:nodejs package*.json ./

# # Create logs folder
# RUN mkdir -p logs && chown -R nodejs:nodejs logs

# # Switch to non-root user
# USER nodejs

# EXPOSE 3001

# # Wait-for-postgres + push Prisma schema before starting app
# CMD sh -c "npx wait-on tcp:postgres:5432 && npx prisma db push --schema=src/infrastructure/database/schema.prisma && node dist/src/index.js"


# ------------------------------------------------------------------------------------------


# Base
FROM node:20-alpine AS base
WORKDIR /app
COPY package*.json ./

# Dependencies
FROM base AS deps
RUN npm ci

# Build
FROM base AS build
COPY . .
RUN npm ci
RUN npx prisma generate --schema=src/infrastructure/database/schema.prisma
RUN npm run build

# Production
FROM node:20-alpine AS prod
WORKDIR /app

RUN addgroup -S nodejs && adduser -S nodejs -G nodejs

COPY --from=deps /app/node_modules ./node_modules
COPY --from=build /app/dist ./dist
COPY --from=build /app/src/infrastructure/database ./src/infrastructure/database
COPY package*.json ./

USER nodejs
EXPOSE 8000
CMD ["node", "dist/src/index.js"]

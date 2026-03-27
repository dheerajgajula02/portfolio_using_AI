# Multi-stage Dockerfile for Next.js (production)
# Uses a builder stage to install deps and build the app, then a small runtime image.

# Builder stage
FROM node:20-alpine AS builder
WORKDIR /app

# Install dependencies (use package-lock if present)
COPY package.json package-lock.json* ./
RUN npm ci

# Copy the rest of the sources and build
COPY . .
RUN npm run build

# Runner stage - using slim alpine image
FROM node:20-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV PORT=3010
ENV HOSTNAME="0.0.0.0"

# Copy only the standalone build (much smaller than full node_modules)
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
COPY --from=builder /app/public ./public

# Copy the added static site folder named `index`
COPY --from=builder /app/index ./index

# Install a tiny static server globally to serve the `index` folder
RUN npm install -g http-server --no-fund --no-audit

# Add an entrypoint script that starts both Next.js and the static server
COPY entrypoint.sh ./entrypoint.sh
RUN chmod +x ./entrypoint.sh

# Expose ports: Next app (3010) and static site (8080)
EXPOSE 3010 8080

# Start both services using the entrypoint script
CMD ["/app/entrypoint.sh"]

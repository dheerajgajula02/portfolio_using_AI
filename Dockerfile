# ─────────────────────────────────────────────────────────────────────────────
# Build & push:
#   docker build -t 10.0.0.19:5000/portfolioIndex:latest .
#   docker push 10.0.0.19:5000/portfolioIndex:latest
#
# Multi-app Docker image
# Apps:
#   portfolio  — Next.js portfolio site      → port 3010
#   hub        — Static homelab projects hub → port 8080
#   site3      — (placeholder)               → port 3011
#   site4      — (placeholder)               → port 3012
# ─────────────────────────────────────────────────────────────────────────────

# ── Stage 1: Build ────────────────────────────────────────────────────────────
FROM node:20-alpine AS builder
WORKDIR /build

# ── Build: portfolio (Next.js) ────────────────────────────────────────────────
COPY portfolio/package.json portfolio/package-lock.json* ./portfolio/
RUN cd portfolio && npm ci

COPY portfolio/ ./portfolio/
RUN cd portfolio && npm run build

# ── Build: hub (static — no build step) ──────────────────────────────────────
COPY hub/ ./hub/

# ── Build: site3 (placeholder) ───────────────────────────────────────────────
# COPY site3/package.json site3/package-lock.json* ./site3/
# RUN cd site3 && npm ci
# COPY site3/ ./site3/
# RUN cd site3 && npm run build

# ── Build: site4 (placeholder) ───────────────────────────────────────────────
# COPY site4/package.json site4/package-lock.json* ./site4/
# RUN cd site4 && npm ci
# COPY site4/ ./site4/
# RUN cd site4 && npm run build


# ── Stage 2: Runner ───────────────────────────────────────────────────────────
FROM node:20-alpine AS runner

ENV NODE_ENV=production
ENV HOSTNAME="0.0.0.0"

# ── App: portfolio (Next.js standalone) ── port 3010 ──────────────────────────
WORKDIR /apps/portfolio
COPY --from=builder /build/portfolio/.next/standalone ./
COPY --from=builder /build/portfolio/.next/static ./.next/static
COPY --from=builder /build/portfolio/public ./public

# ── App: hub (static homelab projects hub) ── port 8080 ──────────────────────
COPY --from=builder /build/hub /apps/hub

# Install lightweight static file server (used by hub and any future static apps)
RUN npm install -g http-server --no-fund --no-audit

# ── App: site3 (placeholder) ── port 3011 ─────────────────────────────────────
# COPY --from=builder /build/site3/.next/standalone /apps/site3
# COPY --from=builder /build/site3/.next/static /apps/site3/.next/static
# COPY --from=builder /build/site3/public /apps/site3/public

# ── App: site4 (placeholder) ── port 3012 ─────────────────────────────────────
# COPY --from=builder /build/site4/.next/standalone /apps/site4
# COPY --from=builder /build/site4/.next/static /apps/site4/.next/static
# COPY --from=builder /build/site4/public /apps/site4/public

# Entrypoint script that starts all active apps
COPY entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh

# portfolio=3010  hub=8080  site3=3011(placeholder)  site4=3012(placeholder)
EXPOSE 3010 8080

CMD ["/entrypoint.sh"]

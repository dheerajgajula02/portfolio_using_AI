#!/bin/sh
# Starts all active apps in parallel.
# Add new apps by following the pattern below.

set -e

# ── portfolio (Next.js standalone) — port 3010 ────────────────────────────────
echo "[portfolio] Starting on port 3010..."
PORT=3010 node /apps/portfolio/server.js &
PORTFOLIO_PID=$!

# ── hub (static homelab projects hub) — port 8080 ────────────────────────────
echo "[hub] Starting on port 8080..."
http-server /apps/hub -p 8080 --silent &
HUB_PID=$!

# ── site3 (placeholder) — port 3011 ──────────────────────────────────────────
# echo "[site3] Starting on port 3011..."
# PORT=3011 node /apps/site3/server.js &
# SITE3_PID=$!

# ── site4 (placeholder) — port 3012 ──────────────────────────────────────────
# echo "[site4] Starting on port 3012..."
# PORT=3012 node /apps/site4/server.js &
# SITE4_PID=$!

# ── Health check: log when services are up ────────────────────────────────────
sleep 2
echo "[entrypoint] All services started. PIDs: portfolio=${PORTFOLIO_PID} hub=${HUB_PID}"

# Wait for any process to exit and propagate its exit code
wait -n ${PORTFOLIO_PID} ${HUB_PID}
EXIT_CODE=$?

echo "[entrypoint] A service exited with code ${EXIT_CODE}. Shutting down."
exit ${EXIT_CODE}

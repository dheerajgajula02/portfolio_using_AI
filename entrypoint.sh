#!/bin/sh
# Entrypoint to run both Next.js (standalone) and a static server for /index
# Starts Next on port 3010 and serves the static site on port 8080

set -e

# Start Next.js standalone server in background
echo "Starting Next.js on port 3010..."
node server.js &
NEXT_PID=$!

# Start static server for the `index` folder on port 8080
echo "Starting static server for /index on port 8080..."
http-server /app/index -p 8080 &
STATIC_PID=$!

# Wait for either process to exit
wait -n ${NEXT_PID} ${STATIC_PID}

# If we get here, one process exited — propagate its exit code
exit_code=0
if [ -n "${NEXT_PID}" ]; then
  if ! kill -0 ${NEXT_PID} 2>/dev/null; then
    wait ${NEXT_PID} || exit_code=$?
  fi
fi
if [ -n "${STATIC_PID}" ]; then
  if ! kill -0 ${STATIC_PID} 2>/dev/null; then
    wait ${STATIC_PID} || exit_code=$?
  fi
fi
exit ${exit_code}

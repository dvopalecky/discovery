echo "Building Discovery"
./build.sh discovery
mv dist dist_discovery
echo "Building Krokysjezisem"
./build.sh krokysjezisem
mv dist dist_krokysjezisem

echo "Starting servers"
export PORT_DISCOVERY=8001
rye run python -m http.server $PORT_DISCOVERY --directory dist_discovery &
SERVER_PID_DISCOVERY=$!

export PORT_KROKYSJEZISEM=8002
rye run python -m http.server $PORT_KROKYSJEZISEM --directory dist_krokysjezisem &
SERVER_PID_KROKYSJEZISEM=$!

echo "Running tests"
if [[ "$*" == *--update-snapshots* ]]; then
  bunx playwright test tests/*.spec.js --update-snapshots
else
  bunx playwright test tests/*.spec.js
fi

echo "Killing servers"
kill $SERVER_PID_DISCOVERY
kill $SERVER_PID_KROKYSJEZISEM

echo "cleaning up"
rm -rf dist_discovery
rm -rf dist_krokysjezisem

echo "Building Discovery"
./build.sh discovery

echo "Starting server"
PORT=8000
rye run python -m http.server $PORT --directory dist &
SERVER_PID=$!

echo "Running tests"
bunx playwright test tests/discovery.spec.js

echo "Killing server"
kill $SERVER_PID

# echo "Building Krokysjezisem"
# ./build.sh krokysjezisem

# echo "Starting server"
# PORT=8000
# rye run python -m http.server $PORT --directory dist &
# SERVER_PID=$!

# echo "Running tests"
# bunx playwright test tests/krokysjezisem.spec.js

# echo "Killing server"
# kill $SERVER_PID

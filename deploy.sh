if [ "$1" != "discovery" ] && [ "$1" != "krokysjezisem" ]; then
    echo "Usage: $0 [discovery|krokysjezisem]"
    exit 1
fi

cd dist
echo {} > composer.json
mv index.html index.php

tar -cz . | ssh dokku git:from-archive $1 --

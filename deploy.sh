if [ "$1" != "discovery" ] && [ "$1" != "krokysjezisem" ]; then
    echo "Usage: $0 [discovery|krokysjezisem]"
    exit 1
fi

cd dist
touch .static

tar --no-xattrs --no-mac-metadata -cz . | ssh dokku git:from-archive en-$1 --

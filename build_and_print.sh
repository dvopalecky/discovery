#!/bin/bash

./build.sh $1

PORT=8001
rye run python -m http.server $PORT --directory dist &
SERVER_PID=$!

if [ "$1" == "discovery" ]; then
    rye run python print_pdf.py discovery $PORT ""
    rye run python print_pdf.py discovery-2 $PORT jak-zacit-discovery-print
else
    rye run python print_pdf.py $1 $PORT
fi



echo "Waiting for server to finish"
kill $SERVER_PID
mkdir -p dist/pdf

# use qpdf to merge discovery-a4.pdf discovery-2-a4.pdf

if [ "$1" == "discovery" ]; then
    qpdf --empty --pages discovery-a4.pdf discovery-2-a4.pdf -- dist/pdf/discovery-a4.pdf
    qpdf --empty --pages discovery-a5-2x.pdf discovery-2-a5-2x.pdf -- dist/pdf/discovery-a5-2x.pdf
    qpdf --empty --pages discovery-a6-4x.pdf discovery-2-a6-4x.pdf -- dist/pdf/discovery-a6-4x.pdf
    rm discovery-a4.pdf discovery-2-a4.pdf discovery-a5-2x.pdf discovery-2-a5-2x.pdf discovery-a6-4x.pdf discovery-2-a6-4x.pdf
else
    mv ./*.pdf dist/pdf
fi

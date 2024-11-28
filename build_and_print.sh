#!/bin/bash

./build.sh $1

PORT=8001
uv run python -m http.server $PORT --directory dist &
SERVER_PID=$!

if [ "$1" == "discovery" ]; then
    uv run python print_pdf.py discovery $PORT ""
    uv run python print_pdf.py discovery-2 $PORT jak-zacit-discovery-print
elif [ "$1" == "krokysjezisem" ]; then
    uv run python print_pdf.py bozi-rodina $PORT ""
    uv run python print_pdf.py bozi-rodina-2 $PORT posileni-vize
else
    uv run python print_pdf.py $1 $PORT
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
elif [ "$1" == "krokysjezisem" ]; then
    qpdf --empty --pages bozi-rodina-a4.pdf bozi-rodina-2-a4.pdf -- dist/pdf/bozi-rodina-a4.pdf
    qpdf --empty --pages bozi-rodina-a5-2x.pdf bozi-rodina-2-a5-2x.pdf -- dist/pdf/bozi-rodina-a5-2x.pdf
    qpdf --empty --pages bozi-rodina-a6-4x.pdf bozi-rodina-2-a6-4x.pdf -- dist/pdf/bozi-rodina-a6-4x.pdf
    rm bozi-rodina-a4.pdf bozi-rodina-2-a4.pdf bozi-rodina-a5-2x.pdf bozi-rodina-2-a5-2x.pdf bozi-rodina-a6-4x.pdf bozi-rodina-2-a6-4x.pdf
else
    mv ./*.pdf dist/pdf
fi

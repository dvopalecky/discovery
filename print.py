import sys

from playwright.sync_api import sync_playwright

name = sys.argv[1]

with sync_playwright() as p:
    browser = p.chromium.launch()
    page = browser.new_page()
    page.goto("http://localhost:8000/#print")

    page.evaluate("""
        const style = document.createElement('style');
        style.innerHTML = `
        @media print {
            @page { size: A5 landscape; }
        }

        .print-mode article { height: 148mm; }
        `;
        document.head.appendChild(style);
    """)

    # 1x A4
    page.pdf(
        path=f"{name}-a4.pdf",
        format="a5",  # this is correct, to scale correctly
    )


with sync_playwright() as p:
    browser = p.chromium.launch()
    page = browser.new_page()
    page.goto("http://localhost:8000/#print")

    # 2x A5
    page.evaluate("""
        const article = document.querySelector('article');
        for (let i = 0; i < 1; i++) {
            const clone = article.cloneNode(true);
            article.parentNode.appendChild(clone);
        }

        const style = document.createElement('style');
        style.innerHTML = `
        @media print {
            @page {
                margin: 0;
                size: A4;
            }
        }
        `;
        document.head.appendChild(style);
    """)

    page.pdf(
        path=f"{name}-a5-2x.pdf",
        format="a4",
    )


with sync_playwright() as p:
    browser = p.chromium.launch()
    page = browser.new_page()
    page.goto("http://localhost:8000/#print")

    # 4x A6
    page.evaluate("""
        const article = document.querySelector('article');
        for (let i = 0; i < 3; i++) {
            const clone = article.cloneNode(true);
            article.parentNode.appendChild(clone);
        }

        const style = document.createElement('style');
        style.innerHTML = `

        @media print {
            @page { size: A4 landscape; }
        }
          div.md-content {
              grid-template-columns: repeat(2, 1fr);
          }
                    `;
        document.head.appendChild(style);
    """)

    page.pdf(
        path=f"{name}-a6-4x.pdf",
        format="a4",
    )
    browser.close()

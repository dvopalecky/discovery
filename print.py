import argparse

from playwright.sync_api import sync_playwright


def setup_page(playwright, url):
    browser = playwright.chromium.launch()
    page = browser.new_page()
    page.goto(url)
    return browser, page


def generate_pdf(name, url, format, path, page_setup):
    with sync_playwright() as p:
        browser, page = setup_page(p, url)
        page_setup(page)
        page.pdf(path=path, format=format)
        browser.close()


def a4_setup(page):
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


def a5_2x_setup(page):
    page.evaluate("""
        const article = document.querySelector('article');
        article.parentNode.appendChild(article.cloneNode(true));
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


def a6_4x_setup(page):
    page.evaluate("""
        const article = document.querySelector('article');
        for (let i = 0; i < 3; i++) {
            article.parentNode.appendChild(article.cloneNode(true));
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


def main():
    parser = argparse.ArgumentParser(description="Generate PDFs from a webpage")
    parser.add_argument("name", help="Base name for the output PDFs")
    parser.add_argument(
        "--url",
        default="http://localhost:8000/#print",
        help="URL to generate PDFs from",
    )
    args = parser.parse_args()

    generate_pdf(args.name, args.url, "a5", f"{args.name}-a4.pdf", a4_setup)
    generate_pdf(args.name, args.url, "a4", f"{args.name}-a5-2x.pdf", a5_2x_setup)
    generate_pdf(args.name, args.url, "a4", f"{args.name}-a6-4x.pdf", a6_4x_setup)


if __name__ == "__main__":
    main()

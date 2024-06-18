import os
import re

from bs4 import BeautifulSoup


def postprocess_html(directory: str):
    """
    Processes HTML files in a specified directory, modifying text within <article> tags.
    It replaces spaces after single-letter words with non-breaking spaces for specific letters.

    Parameters:
        directory (str): The directory path containing HTML files to be processed.

    Example:
        postprocess_html('site')
    """
    for filename in os.listdir(directory):
        if filename.endswith(".html"):
            filepath = os.path.join(directory, filename)
            with open(filepath, "r", encoding="utf-8") as file:
                soup = BeautifulSoup(file, "html.parser")

            # Find all text within <article> tags and replace spaces after single-letter words
            articles = soup.find_all("article")
            for article in articles:
                texts = article.find_all(string=True)
                for text in texts:
                    # replace with non-breaking space
                    updated_text = re.sub(
                        r"\b([ksvzaoui])\s", r"\1 ", text, flags=re.IGNORECASE
                    )
                    text.replace_with(updated_text)

            with open(filepath, "w", encoding="utf-8") as file:
                file.write(str(soup))


# Example usage
postprocess_html("site")
postprocess_html("site/jak-zacit-discovery")
postprocess_html("site/texty-ke-cteni")
postprocess_html("site/jak-zacit-discovery-print")

import fitz  # PyMuPDF


def extract_text_from_pdf(pdf_path):
    """
    Extract all text from a PDF file.
    """

    document = fitz.open(pdf_path)

    text = ""

    for page in document:
        text += page.get_text()

    document.close()

    return text

if __name__ == "__main__":

    pdf_path = "uploads/Shreyash_Resume.pdf"

    text = extract_text_from_pdf(pdf_path)

    print(text)
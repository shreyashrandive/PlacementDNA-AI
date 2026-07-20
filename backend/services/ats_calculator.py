def calculate_ats_score(text: str, skills: list):
    """
    Calculate a basic ATS score for a resume.
    """

    score = 0

    text_lower = text.lower()

    # Resume contains content
    if len(text.strip()) > 100:
        score += 20

    # Skill score
    if len(skills) >= 5:
        score += 30
    elif len(skills) >= 3:
        score += 20
    elif len(skills) >= 1:
        score += 10

    # Education
    if "education" in text_lower:
        score += 20

    # Projects
    if "project" in text_lower:
        score += 15

    # Experience
    if "experience" in text_lower:
        score += 15

    return min(score, 100)
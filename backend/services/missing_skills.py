REQUIRED_SKILLS = [
    "Python",
    "Java",
    "SQL",
    "Git",
    "GitHub",
    "React",
    "FastAPI",
    "PostgreSQL",
    "Docker",
    "AWS"
]


def find_missing_skills(detected_skills):
    """
    Compare detected skills with required skills.
    """

    missing = []

    for skill in REQUIRED_SKILLS:
        if skill not in detected_skills:
            missing.append(skill)

    return missing
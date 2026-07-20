# List of skills our AI can detect
SKILLS = [
    "Python",
    "Java",
    "C",
    "C++",
    "JavaScript",
    "TypeScript",
    "React",
    "Angular",
    "Vue",
    "HTML",
    "CSS",
    "FastAPI",
    "Django",
    "Flask",
    "Node.js",
    "Express",
    "SQL",
    "MySQL",
    "PostgreSQL",
    "MongoDB",
    "Git",
    "GitHub",
    "Docker",
    "Kubernetes",
    "AWS",
    "Azure",
    "Power BI",
    "Tableau",
    "Excel",
    "Pandas",
    "NumPy",
    "Machine Learning",
    "Artificial Intelligence"
]


def extract_skills(text: str):
    """
    Detect skills present in the resume text.
    """

    found_skills = []

    text_lower = text.lower()

    for skill in SKILLS:
        if skill.lower() in text_lower:
            found_skills.append(skill)

    return sorted(found_skills)
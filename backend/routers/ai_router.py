from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
import os

from database import get_db
import models
from services.resume_analyzer import extract_text_from_pdf
from services.skill_extractor import extract_skills
from services.ats_calculator import calculate_ats_score
from services.missing_skills import find_missing_skills

router = APIRouter(
    prefix="/ai",
    tags=["AI"]
)


@router.get("/analyze/{resume_id}")
def analyze_resume(resume_id: int, db: Session = Depends(get_db)):

    resume = (
        db.query(models.Resume)
        .filter(models.Resume.id == resume_id)
        .first()
    )

    if not resume:
        raise HTTPException(status_code=404, detail="Resume not found")

    pdf_path = resume.resume_path

    if not os.path.exists(pdf_path):
        raise HTTPException(status_code=404, detail="PDF file not found")

    extracted_text = extract_text_from_pdf(pdf_path)

    detected_skills = extract_skills(extracted_text)

    ats_score = calculate_ats_score(
        extracted_text,
        detected_skills
    )

    missing_skills = find_missing_skills(detected_skills)

    return {
        "resume_id": resume.id,
        "student_name": resume.student_name,
        "text": extracted_text,
        "skills": detected_skills,
        "missing_skills": missing_skills,
        "ats_score": ats_score
    }
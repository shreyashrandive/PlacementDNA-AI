from fastapi import APIRouter
from crud import get_student_data
from schemas import Student

router = APIRouter()


@router.get("/student", response_model=Student)
def get_student():

    student = get_student_data()

    return {
        "name": student[0],
        "placement_score": student[1],
        "career_match": student[2],
        "skill_readiness": student[3],
        "hiring_probability": student[4]
    }
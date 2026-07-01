from fastapi import APIRouter
from crud import (
    get_student_data,
    create_student,
    get_all_students,
    delete_student,
    update_student,
    get_dashboard_stats,
    get_chart_data,
    get_director_insights,
    get_ai_recommendations,
    get_hiring_pie_data,
    get_placement_trend,
    get_department_analytics,
    get_top_students
)
from schemas import Student, StudentCreate

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
@router.get("/students")
def fetch_students():

    students = get_all_students()

    result = []

    for student in students:

        result.append(
            {
                "id": student[0],
                "name": student[1],
                "email": student[2],
                "placement_score": student[3],
                "career_match": student[4],
                "skill_readiness": student[5],
                "hiring_probability": student[6]
            }
        )

    return result


@router.delete("/students/{student_id}")
def remove_student(student_id: int):

    return delete_student(student_id)


@router.put("/students/{student_id}")
def edit_student(student_id: int, student: StudentCreate):

    return update_student(student_id, student)


@router.get("/dashboard/stats")
def dashboard_stats():

    return get_dashboard_stats()

@router.get("/dashboard/chart")
def dashboard_chart():

    return get_chart_data()

@router.get("/dashboard/director-insights")
def director_insights():

    return get_director_insights()

@router.get("/dashboard/ai-recommendations")
def ai_recommendations():

    return get_ai_recommendations()

@router.get("/dashboard/hiring-pie")
def hiring_pie():

    return get_hiring_pie_data()

@router.get("/dashboard/placement-trend")
def placement_trend():
    return get_placement_trend()

@router.get("/dashboard/department-analytics")
def department_analytics():
    return get_department_analytics()

@router.get("/dashboard/top-students")
def top_students():
    return get_top_students()
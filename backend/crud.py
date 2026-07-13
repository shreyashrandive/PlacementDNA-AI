from sqlalchemy.orm import Session

import models
import schemas


# ==========================
# Create Student
# ==========================

def create_student(db: Session, student: schemas.StudentCreate):

    db_student = models.Student(
        full_name=student.full_name,
        email=student.email,
        phone=student.phone,
        branch=student.branch,
        year=student.year,
        cgpa=student.cgpa,
        placement_score=student.placement_score,
        career_match=student.career_match,
        skill_readiness=student.skill_readiness,
        hiring_probability=student.hiring_probability,
        resume_url=student.resume_url
    )

    db.add(db_student)
    db.commit()
    db.refresh(db_student)

    return db_student


# ==========================
# Get All Students
# ==========================

def get_all_students(db: Session):

    return (
        db.query(models.Student)
        .order_by(models.Student.id)
        .all()
    )


# ==========================
# Get Student By ID
# ==========================

def get_student(db: Session, student_id: int):

    return (
        db.query(models.Student)
        .filter(models.Student.id == student_id)
        .first()
    )


# ==========================
# Update Student
# ==========================

def update_student(
    db: Session,
    student_id: int,
    student: schemas.StudentUpdate
):

    db_student = get_student(db, student_id)

    if not db_student:
        return None

    db_student.full_name = student.full_name
    db_student.email = student.email
    db_student.phone = student.phone
    db_student.branch = student.branch
    db_student.year = student.year
    db_student.cgpa = student.cgpa
    db_student.placement_score = student.placement_score
    db_student.career_match = student.career_match
    db_student.skill_readiness = student.skill_readiness
    db_student.hiring_probability = student.hiring_probability
    db_student.resume_url = student.resume_url

    db.commit()
    db.refresh(db_student)

    return db_student


# ==========================
# Delete Student
# ==========================

def delete_student(db: Session, student_id: int):

    db_student = get_student(db, student_id)

    if not db_student:
        return None

    db.delete(db_student)
    db.commit()

    return {
        "message": "Student deleted successfully"
    }


# ==========================
# Dashboard Statistics
# ==========================

def get_dashboard_stats(db: Session):

    students = db.query(models.Student).all()

    total_students = len(students)

    if total_students == 0:

        return {
            "total_students": 0,
            "avg_score": 0,
            "avg_hiring": 0,
            "placement_ready": 0
        }

    avg_score = sum(
        s.placement_score for s in students
    ) / total_students

    avg_hiring = sum(
        s.hiring_probability for s in students
    ) / total_students

    placement_ready = len([
        s for s in students
        if s.placement_score >= 70
    ])

    return {
        "total_students": total_students,
        "avg_score": round(avg_score, 2),
        "avg_hiring": round(avg_hiring, 2),
        "placement_ready": placement_ready
    }



# =====================================================
# COMPANY CRUD
# =====================================================

def create_company(db: Session, company: schemas.CompanyCreate):

    db_company = models.Company(**company.model_dump())

    db.add(db_company)

    db.commit()

    db.refresh(db_company)

    return db_company


def get_companies(db: Session):

    return db.query(models.Company).all()


def get_company(db: Session, company_id: int):

    return (
        db.query(models.Company)
        .filter(models.Company.id == company_id)
        .first()
    )

def update_company(
    db: Session,
    company_id: int,
    company: schemas.CompanyUpdate
):

    db_company = (
        db.query(models.Company)
        .filter(models.Company.id == company_id)
        .first()
    )

    if not db_company:
        return None

    for key, value in company.model_dump().items():
        setattr(db_company, key, value)

    db.commit()

    db.refresh(db_company)

    return db_company

def delete_company(
    db: Session,
    company_id: int
):

    db_company = (
        db.query(models.Company)
        .filter(models.Company.id == company_id)
        .first()
    )

    if not db_company:
        return {
            "message": "Company not found"
        }

    db.delete(db_company)

    db.commit()

    return {
        "message": "Company deleted successfully"
    }
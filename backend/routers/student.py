from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

import crud
import schemas
import database

router = APIRouter(
    prefix="/students",
    tags=["Students"]
)


# ==========================
# Create Student
# ==========================
@router.post(
    "/",
    response_model=schemas.StudentResponse
)
def create_student(
    student: schemas.StudentCreate,
    db: Session = Depends(database.get_db)
):
    return crud.create_student(db, student)


# ==========================
# Get All Students
# ==========================
@router.get(
    "/",
    response_model=list[schemas.StudentResponse]
)
def get_students(
    db: Session = Depends(database.get_db)
):
    return crud.get_all_students(db)


# ==========================
# Get Student By ID
# ==========================
@router.get(
    "/{student_id}",
    response_model=schemas.StudentResponse
)
def get_student(
    student_id: int,
    db: Session = Depends(database.get_db)
):
    student = crud.get_student(db, student_id)

    if student is None:
        raise HTTPException(
            status_code=404,
            detail="Student not found"
        )

    return student


# ==========================
# Update Student
# ==========================
@router.put(
    "/{student_id}",
    response_model=schemas.StudentResponse
)
def update_student(
    student_id: int,
    student: schemas.StudentUpdate,
    db: Session = Depends(database.get_db)
):
    updated_student = crud.update_student(
        db,
        student_id,
        student
    )

    if updated_student is None:
        raise HTTPException(
            status_code=404,
            detail="Student not found"
        )

    return updated_student


# ==========================
# Delete Student
# ==========================
@router.delete("/{student_id}")
def delete_student(
    student_id: int,
    db: Session = Depends(database.get_db)
):
    deleted_student = crud.delete_student(
        db,
        student_id
    )

    if deleted_student is None:
        raise HTTPException(
            status_code=404,
            detail="Student not found"
        )

    return deleted_student


# ==========================
# Dashboard Statistics
# ==========================
@router.get("/dashboard/stats")
def dashboard_stats(
    db: Session = Depends(database.get_db)
):
    return crud.get_dashboard_stats(db)
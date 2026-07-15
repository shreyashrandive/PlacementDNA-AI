from fastapi import APIRouter, Depends, UploadFile, File, Form
from sqlalchemy.orm import Session

import os
import shutil

import crud
import schemas
from database import get_db

router = APIRouter(
    prefix="/resumes",
    tags=["Resumes"]
)


@router.post(
    "/",
    response_model=schemas.ResumeResponse
)
def create_resume(
    resume: schemas.ResumeCreate,
    db: Session = Depends(get_db)
):

    return crud.create_resume(
        db,
        resume
    )


@router.get(
    "/",
    response_model=list[schemas.ResumeResponse]
)
def get_resumes(
    db: Session = Depends(get_db)
):

    return crud.get_resumes(db)


@router.get(
    "/{resume_id}",
    response_model=schemas.ResumeResponse
)
def get_resume(
    resume_id: int,
    db: Session = Depends(get_db)
):

    return crud.get_resume(
        db,
        resume_id
    )

@router.put(
    "/{resume_id}",
    response_model=schemas.ResumeResponse
)
def update_resume(
    resume_id: int,
    resume: schemas.ResumeUpdate,
    db: Session = Depends(get_db)
):

    return crud.update_resume(
        db,
        resume_id,
        resume
    )

@router.delete("/{resume_id}")
def delete_resume(
    resume_id: int,
    db: Session = Depends(get_db)
):

    return crud.delete_resume(
        db,
        resume_id
    )


@router.post("/upload")
def upload_resume(
    student_name: str = Form(...),
    email: str = Form(...),
    file: UploadFile = File(...)
):
    upload_folder = "uploads"

    file_path = os.path.join(
        upload_folder,
        file.filename
    )

    with open(file_path, "wb") as buffer:
        shutil.copyfileobj(
            file.file,
            buffer
        )

    return {
        "filename": file.filename,
        "path": file_path
    }
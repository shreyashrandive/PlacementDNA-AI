from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

import crud
import schemas
from database import get_db

router = APIRouter(
    prefix="/companies",
    tags=["Companies"]
)


@router.post(
    "/",
    response_model=schemas.CompanyResponse
)
def create_company(
    company: schemas.CompanyCreate,
    db: Session = Depends(get_db)
):

    return crud.create_company(db, company)


@router.get(
    "/",
    response_model=list[schemas.CompanyResponse]
)
def get_companies(
    db: Session = Depends(get_db)
):

    return crud.get_companies(db)


@router.get(
    "/{company_id}",
    response_model=schemas.CompanyResponse
)
def get_company(
    company_id: int,
    db: Session = Depends(get_db)
):

    return crud.get_company(db, company_id)


@router.put(
    "/{company_id}",
    response_model=schemas.CompanyResponse
)
def update_company(
    company_id: int,
    company: schemas.CompanyUpdate,
    db: Session = Depends(get_db)
):

    return crud.update_company(
        db,
        company_id,
        company
    )

@router.delete("/{company_id}")
def delete_company(
    company_id: int,
    db: Session = Depends(get_db)
):

    return crud.delete_company(
        db,
        company_id
    )
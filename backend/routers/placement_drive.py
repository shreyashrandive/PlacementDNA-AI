from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

import crud
import schemas
from database import get_db

router = APIRouter(
    prefix="/placement-drives",
    tags=["Placement Drives"]
)


@router.post(
    "/",
    response_model=schemas.PlacementDriveResponse
)
def create_placement_drive(
    placement_drive: schemas.PlacementDriveCreate,
    db: Session = Depends(get_db)
):

    return crud.create_placement_drive(
        db,
        placement_drive
    )


@router.get(
    "/",
    response_model=list[schemas.PlacementDriveResponse]
)
def get_placement_drives(
    db: Session = Depends(get_db)
):

    return crud.get_placement_drives(db)


@router.get(
    "/{drive_id}",
    response_model=schemas.PlacementDriveResponse
)
def get_placement_drive(
    drive_id: int,
    db: Session = Depends(get_db)
):

    return crud.get_placement_drive(
        db,
        drive_id
    )


@router.put(
    "/{drive_id}",
    response_model=schemas.PlacementDriveResponse
)
def update_placement_drive(
    drive_id: int,
    placement_drive: schemas.PlacementDriveUpdate,
    db: Session = Depends(get_db)
):

    return crud.update_placement_drive(
        db,
        drive_id,
        placement_drive
    )


@router.delete("/{drive_id}")
def delete_placement_drive(
    drive_id: int,
    db: Session = Depends(get_db)
):

    return crud.delete_placement_drive(
        db,
        drive_id
    )
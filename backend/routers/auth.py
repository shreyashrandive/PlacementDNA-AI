from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

import database
import models
import schemas
import security


router = APIRouter(
    prefix="/auth",
    tags=["Authentication"]
)


@router.post("/login")
def login(
    user: schemas.UserLogin,
    db: Session = Depends(database.get_db)
):
    # Find user by email
    db_user = (
        db.query(models.User)
        .filter(models.User.email == user.email)
        .first()
    )

    # Check if user exists
    if not db_user:
        raise HTTPException(
            status_code=401,
            detail="Invalid email or password"
        )

    # Verify password
    if not security.verify_password(
        user.password,
        db_user.password
    ):
        raise HTTPException(
            status_code=401,
            detail="Invalid email or password"
        )

    # Check if account is active
    if not db_user.is_active:
        raise HTTPException(
            status_code=403,
            detail="Account is disabled"
        )

    # Generate JWT Token
    access_token = security.create_access_token(
        data={
            "sub": db_user.email,
            "role": db_user.role
        }
    )

    # Return Response
    return {
        "access_token": access_token,
        "token_type": "bearer",
        "user": {
            "id": db_user.id,
            "username": db_user.username,
            "email": db_user.email,
            "role": db_user.role
        }
    }   
from pydantic import BaseModel, EmailStr
from typing import Optional


# ==========================
# Student Schemas
# ==========================

class StudentBase(BaseModel):
    full_name: str
    email: EmailStr
    phone: str
    branch: str
    year: int
    cgpa: float
    placement_score: int
    career_match: int
    skill_readiness: int
    hiring_probability: int
    resume_url: Optional[str] = None


class StudentCreate(StudentBase):
    pass


class StudentUpdate(StudentBase):
    pass


class StudentResponse(StudentBase):
    id: int

    class Config:
        from_attributes = True


# ==========================
# Authentication Schemas
# ==========================

class UserBase(BaseModel):
    username: str
    email: EmailStr


class UserCreate(UserBase):
    password: str
    role: str


class UserLogin(BaseModel):
    email: EmailStr
    password: str


class UserResponse(UserBase):
    id: int
    role: str
    is_active: bool

    class Config:
        from_attributes = True
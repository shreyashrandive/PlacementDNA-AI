from pydantic import BaseModel


# ==========================
# Student Schemas
# ==========================

class Student(BaseModel):
    name: str
    placement_score: int
    career_match: int
    skill_readiness: int
    hiring_probability: int


class StudentCreate(BaseModel):
    name: str
    email: str
    placement_score: int
    career_match: int
    skill_readiness: int
    hiring_probability: int


# ==========================
# Authentication Schemas
# ==========================

class UserBase(BaseModel):
    username: str
    email: str


class UserCreate(UserBase):
    password: str
    role: str


class UserLogin(BaseModel):
    email: str
    password: str


class UserResponse(UserBase):
    id: int
    role: str
    is_active: bool

class Config:
        from_attributes = True
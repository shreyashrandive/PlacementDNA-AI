from sqlalchemy import (
    Column,
    Integer,
    String,
    Boolean,
    Float,
    DateTime
)

from datetime import datetime

from database import Base


class User(Base):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True, index=True)

    username = Column(String, nullable=False)

    email = Column(String, unique=True, index=True, nullable=False)

    password = Column(String, nullable=False)

    role = Column(String, nullable=False)

    is_active = Column(Boolean, default=True)


class Student(Base):
    __tablename__ = "students"

    id = Column(Integer, primary_key=True, index=True)

    full_name = Column(String, nullable=False)

    email = Column(String, unique=True, nullable=False)

    phone = Column(String, nullable=False)

    branch = Column(String, nullable=False)

    year = Column(Integer, nullable=False)

    cgpa = Column(Float, nullable=False)

    placement_score = Column(Integer, default=0)

    career_match = Column(Integer, default=0)

    skill_readiness = Column(Integer, default=0)

    hiring_probability = Column(Integer, default=0)

    resume_url = Column(String, nullable=True)

    created_at = Column(DateTime, default=datetime.utcnow)


class Company(Base):
    __tablename__ = "companies"

    id = Column(Integer, primary_key=True, index=True)

    company_name = Column(String, nullable=False)

    company_type = Column(String, nullable=False)

    package = Column(Float, nullable=False)

    location = Column(String, nullable=False)

    eligibility = Column(Float, nullable=False)

    job_role = Column(String, nullable=False)

    status = Column(String, default="Active")

    created_at = Column(DateTime, default=datetime.utcnow)
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
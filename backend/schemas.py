from pydantic import BaseModel


class Student(BaseModel):
    name: str
    placement_score: int
    career_match: int
    skill_readiness: int
    hiring_probability: int
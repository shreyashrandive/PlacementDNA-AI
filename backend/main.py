from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles

from routers.student import router as student_router
from routers.auth import router as auth_router
from routers.company import router as company_router
from routers.placement_drive import router as placement_drive_router
from routers.resume import router as resume_router

import models
from database import Base, engine

app = FastAPI()

Base.metadata.create_all(bind=engine)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(student_router)
app.include_router(auth_router)
app.include_router(company_router)
app.include_router(placement_drive_router)
app.include_router(resume_router)


app.mount(
    "/uploads",
    StaticFiles(directory="uploads"),
    name="uploads"
)


@app.get("/")
def home():
    return {
        "message": "PlacementDNA AI Backend Running"
    }
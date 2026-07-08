from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from routers.student import router as student_router
from routers.auth import router as auth_router

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


@app.get("/")
def home():
    return {
        "message": "PlacementDNA AI Backend Running"
    }
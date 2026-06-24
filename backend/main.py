from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from routers.student import router as student_router

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(student_router)


@app.get("/")
def home():
    return {
        "message": "PlacementDNA AI Backend Running"
    }
from fastapi import FastAPI
from sqlalchemy import create_engine, MetaData
from sqlalchemy.orm import sessionmaker
from auth_icd import authenticate

DATABASE_URL = "postgresql://postgres:root@localhost/diagnosis_db"

engine = create_engine(DATABASE_URL)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)
metadata = MetaData()

app = FastAPI()

@app.on_event("startup")
async def startup_event():
    access_token = authenticate()
    
    if access_token:
        app.state.access_token = access_token
    else:
        print("Authentication failed at startup.")

@app.get("/health")
def health_check():
    return {"status": "ok"}
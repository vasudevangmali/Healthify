import firebase_admin
from firebase_admin import credentials

cred = credentials.Certificate('Backend/config/firebase-adminsdk.json')
firebase_admin.initialize_app(cred)

print("Firebase initialized successfully")
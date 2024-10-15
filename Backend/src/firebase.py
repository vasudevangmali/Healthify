import firebase_admin
from firebase_admin import credentials, firestore

def initialize_firebase():
    cred = credentials.Certificate('config/firebase-adminsdk.json')
    firebase_admin.initialize_app(cred)
    return firestore.client()

from flask import Blueprint, request, jsonify
from firebase import initialize_firebase

api_bp = Blueprint('api', __name__)

db = initialize_firebase()

@api_bp.route('/', methods=['GET'])
def home():
    return jsonify({"message": "Welcome to the Healthify API. Use POST /api/symptoms to submit symptoms."})

@api_bp.route('/api/symptoms', methods=['POST'])
def get_disease_info():
    user_input = request.json.get('symptoms', [])
    diseases = []
    
    if not user_input:
        return jsonify({"error": "No symptoms provided"}), 400
    
    for symptom in user_input:
        docs = db.collection('Diseases').where('related_symptoms', 'array_contains', symptom).get()
        for doc in docs:
            diseases.append(doc.to_dict())
    
    return jsonify(diseases)
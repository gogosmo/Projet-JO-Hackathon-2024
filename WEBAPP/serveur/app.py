from flask import Flask, request, jsonify
import psycopg2
from psycopg2.extras import RealDictCursor
from dotenv import load_dotenv
import os

load_dotenv()

app = Flask(__name__)

DB_HOST = os.getenv('DB_HOST')
DB_NAME = os.getenv('DB_NAME')
DB_USER = os.getenv('DB_USER')
DB_PASSWORD = os.getenv('DB_PASSWORD')

conn = psycopg2.connect(host=DB_HOST, database=DB_NAME, user=DB_USER, password=DB_PASSWORD)

@app.route('/', methods=['GET'])
def home():
    return "Bienvenue sur l'API des JO2024"

@app.route('/olympic_medals', methods=['GET'])
def get_medals():
    params = {
        'medal_type': request.args.get('medal_type'),
        'country_name': request.args.get('country_name'),
        'event_gender': request.args.get('event_gender'),
        'participant_type': request.args.get('participant_type'),
        'year': request.args.get('year')
    }

    valid_params = { key: value for key, value in params.items() if value }

    query = '''
    SELECT om.*, oa.*
    FROM olympic_medals om
    JOIN olympic_athletes oa ON om.athlete_url = oa.athlete_url
    '''

    conditions = []
    values = []

    for key, value in valid_params.items():
        if key == 'medal_type' and value not in ['GOLD', 'SILVER', 'BRONZE']:
            return jsonify({ 'error': 'Invalid medal_type parameter' }), 400
        if key == 'event_gender' and value not in ['Men', 'Women', 'Mixed']:
            return jsonify({ 'error': 'Invalid event_gender parameter' }), 400
        if key == 'participant_type' and value not in ['Athlete', 'GameTeam']:
            return jsonify({ 'error': 'Invalid participant_type parameter' }), 400
        if key == 'year':
            conditions.append("game_slug LIKE %s")
            value = f"%{value}"
        else:
            conditions.append(f"{key} = %s")
        values.append(value)

    if conditions:
        query += ' WHERE ' + ' AND '.join(conditions)
    
    cur = conn.cursor(cursor_factory=RealDictCursor)
    cur.execute(query, values)
    medals = cur.fetchall()

    return jsonify(medals)



@app.after_request
def add_cors_headers(response):
    response.headers['Access-Control-Allow-Origin'] = '*'
    response.headers['Access-Control-Allow-Headers'] = 'Content-Type,Authorization'
    response.headers['Access-Control-Allow-Methods'] = 'GET,PUT,POST,DELETE,OPTIONS'
    return response

if __name__ == '__main__':
    app.run(debug=True)

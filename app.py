from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Allow frontend requests

@app.route('/contact', methods=['POST'])
def contact():
    data = request.json
    name = data.get('name')
    email = data.get('email')
    message = data.get('message')
    # For demo: just print or log, in real deploy you can send email or store in DB
    print(f"Received message from {name} ({email}): {message}")
    return jsonify({"message": "Thank you for contacting me! I'll reply soon."})

if __name__ == '__main__':
    app.run(debug=True)

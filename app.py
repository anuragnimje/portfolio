
from flask import Flask, render_template, jsonify, request
import json
import os

app = Flask(__name__, template_folder='templates', static_folder='static')

# Load chatbot data
with open(os.path.join(os.path.dirname(__file__), 'chatbot_data.json'), 'r') as f:
    chatbot_data = json.load(f)

@app.route('/')
def home():
    return render_template('anurag.html')

@app.route('/chatbot', methods=['POST'])
def chatbot():
    user_message = request.json.get('message', '').lower()

    # Check greetings
    if any(greet in user_message for greet in chatbot_data.get('greetings', [])):
        response = chatbot_data['greetings'][0]
    # Check farewells
    elif any(farewell in user_message for farewell in chatbot_data.get('farewells', [])):
        response = chatbot_data['farewells'][0]
    # Check about
    elif any(keyword in user_message for keyword in ['who are you', 'about you', 'yourself', 'about me']):
        response = chatbot_data.get('about', ["I'm not sure about that."])[0]
    # Check skills
    elif any(keyword in user_message for keyword in ['skills', 'expertise', 'technologies', 'tech stack']):
        response = chatbot_data.get('skills', ["I don't have that information."])[0]
    # Check projects
    elif any(keyword in user_message for keyword in ['projects', 'work', 'portfolio']):
        response = chatbot_data.get('projects', ["I don't have that information."])[0]
    # Check contact
    elif any(keyword in user_message for keyword in ['contact', 'email', 'phone', 'reach you']):
        response = chatbot_data.get('contact', ["I don't have that information."])[0]
    else:
        response = chatbot_data.get('default', "Sorry, I didn't understand that.")
    return jsonify({'response': response})

if __name__ == '__main__':
    app.run(debug=True)

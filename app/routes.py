from flask import render_template, request, jsonify
from app import app
import re

BLACKLIST = ['password', '123456', '123456789', '12345678', '12345']

def check_password_strength(password):
    length_error = len(password) < 12
    digit_error = re.search(r"\d", password) is None
    uppercase_error = re.search(r"[A-Z]", password) is None
    lowercase_error = re.search(r"[a-z]", password) is None
    symbol_error = re.search(r"[!@#$%^&*()_+]", password) is None
    blacklist_error = password in BLACKLIST

    password_ok = not (length_error or digit_error or uppercase_error or lowercase_error or symbol_error or blacklist_error)

    return {
        'password_ok': password_ok,
        'length_error': length_error,
        'digit_error': digit_error,
        'uppercase_error': uppercase_error,
        'lowercase_error': lowercase_error,
        'symbol_error': symbol_error,
        'blacklist_error': blacklist_error,
    }

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/check', methods=['POST'])
def check():
    password = request.form['password']
    result = check_password_strength(password)
    return jsonify(result)

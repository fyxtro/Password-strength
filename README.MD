# Password Strength Checker

A web-based tool that checks the strength of passwords and provides suggestions for improvement.

## Features

- Assess password complexity.
- Provide real-time feedback and suggestions for stronger passwords.
- Integrate a common password blacklist to prevent the use of weak passwords.

## Technologies

- HTML
- CSS
- JavaScript
- Python (Flask)

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/fyxtro/password-strength-checker.git
   cd password-strength-checker
   ```
2. Create and activate a virtual environment:
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows, use `venv\Scripts\activate`
   ```
3. Install the dependencies:
   ```bash
   pip install -r requirements.txt
   ```
4. Run the application:
   ```bash
   python run.py
   ```
5. Open your web browser and go to `http://127.0.0.1:5000`.

## Usage
 - Enter a password in the input field and see the strength feedback update dynamically.
 - The tool will display the password strength and provide suggestions for improvement.

## License
This project is licensed under the MIT License.
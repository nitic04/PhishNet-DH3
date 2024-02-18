from flask import Flask, request, jsonify
from email_parser import check_scam_likeliness
import os

app = Flask(__name__)

@app.route('/upload', methods=['POST'])
def upload_file():
    data = request.get_json()
    email_content = data.get('emailContent', '')

    file = request.files['file']

    # Print the name of the file
    print("Uploaded filename:", file.filename)

    if not email_content:
        return jsonify({'error': 'No email content provided'})

    try:
        # Define the file path where the file will be saved
        file_path = 'uploaded_email.eml'

        # Write the email content to the file
        with open(file_path, 'w') as file:
            file.write(email_content)

        # Call the check_scam_likeliness function with the file path
        # result = check_scam_likeliness(file_path)

        return jsonify({'result': result})
    except Exception as e:
        return jsonify({'error': str(e)})



if __name__ == '__main__':
    app.run(debug=True)

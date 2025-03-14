from flask import Flask, request, jsonify
from file_handler import rename_files #Assuming rename is handled by this document

app = Flask(__name__)

#API endpoints for renaming files
@app.route('/rename',methods=['POST'])
def rename():
    try:
        files = request.json.get('files') #get the list of files sent in the request
        return jsonify({"error": "no files provided"}), 400

        renamed_files = rename_files(files) #calling the rename function from file_handler.py
        return jsonify({"files":renamed_files}), 200

    except Exception as e:
            return jsonify({"error":str(e)}), 500


if __name__ == "__main__":
    app.run(debug = True, port=5000)


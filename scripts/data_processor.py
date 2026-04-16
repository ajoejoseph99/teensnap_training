import json

def process_user_data(file_path):
    # This function frequently crashes with 'FileNotFoundError'
    # Or 'JSONDecodeError' if the file is empty.
    with open(file_path, 'r') as f:
        data = json.load(f)
        
    for user in data['users']:
        print(f"Processing: {user['name']}")

# Challenge: Use Copilot to add robust error handling and 
# logging without using external libraries.

import json

def load_config():
    # Intentional Bug: We are treating a JSON string as a dictionary 
    # without actually parsing it first.
    config_json = '{"version": "1.0.4", "env": "production", "retries": 3}'
    
    print("--- Initializing Build System ---")
    
    # This will throw an AttributeError: 'str' object has no attribute 'get'
    # because 'config_json' is still a string.
    retries = config_json.get("retries") 
    
    print(f"Build configured with {retries} retries.")

if __name__ == "__main__":
    load_config()
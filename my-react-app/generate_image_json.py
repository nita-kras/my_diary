import os
import json

# Define the folder paths
input_folder = os.path.join(os.getcwd(), 'public', 'unsensored')
output_folder = os.path.join(os.getcwd(), 'public')
output_file = os.path.join(output_folder, 'images.json')

# Function to generate JSON file with image filenames
def generate_json():
    try:
        # Get a list of all files in the input folder
        image_files = [f for f in os.listdir(input_folder) if os.path.isfile(os.path.join(input_folder, f))]

        # Filter out non-image files based on extension (you can customize this if necessary)
        image_files = [f for f in image_files if f.lower().endswith(('.jpg', '.jpeg', '.png', '.svg'))]

        # Create JSON content
        data = image_files

        # Ensure the output folder exists
        os.makedirs(output_folder, exist_ok=True)

        # Write the list to the output JSON file
        with open(output_file, 'w') as json_file:
            json.dump(data, json_file, indent=4)

        print(f"JSON file successfully created at: {output_file}")
    except Exception as e:
        print(f"Error: {e}")

# Run the function to generate the JSON
generate_json()

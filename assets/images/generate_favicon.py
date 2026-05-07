import os
from PIL import Image

# Paths
input_path = r'd:\Swasthya\swasthya-website\assets\images\Swasthya-Food-Consulting.png'
output_path = r'd:\Swasthya\swasthya-website\favicon.ico'

def create_favicon():
    if not os.path.exists(input_path):
        print(f"Error: Input file not found at {input_path}")
        return

    # Load image
    img = Image.open(input_path)
    
    # Save as ICO (multiple sizes is best)
    icon_sizes = [(16, 16), (32, 32), (48, 48), (64, 64)]
    img.save(output_path, format='ICO', sizes=icon_sizes)
    
    print(f"Successfully created favicon at {output_path}")

if __name__ == "__main__":
    create_favicon()

import os
from PIL import Image

# Paths
input_path = r'd:\swasthya-website\assets\images\Swasthya-Food-Consulting.png'
output_og = r'd:\swasthya-website\assets\images\og-image.png'

def create_square_og_image():
    if not os.path.exists(input_path):
        print(f"Error: Input file not found at {input_path}")
        return

    # Load image
    img = Image.open(input_path).convert("RGBA")
    width, height = img.size
    
    # Universal Square OG size 1200x1200px
    # This works best for WhatsApp and most social platforms as they center-crop
    target_size = 1200
    
    # Create a square white canvas
    new_img = Image.new("RGBA", (target_size, target_size), (255, 255, 255, 255))
    
    # Resize the logo to fit within the square with significant padding (approx 20% each side)
    # Max width 1000px
    max_w = 1000
    scale = max_w / width
    new_width = int(width * scale)
    new_height = int(height * scale)
    
    resized_logo = img.resize((new_width, new_height), Image.Resampling.LANCZOS)
    
    # Calculate position to paste (centered)
    x = (target_size - new_width) // 2
    y = (target_size - new_height) // 2
    
    # Paste the logo
    new_img.paste(resized_logo, (x, y), resized_logo)
    
    # Save as PNG
    new_img.save(output_og)
    print(f"Successfully created square og-image.png at {output_og}")

if __name__ == "__main__":
    create_square_og_image()

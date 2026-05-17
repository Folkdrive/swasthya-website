import os
from PIL import Image

# Paths
input_path = r'd:\swasthya-website\assets\images\Swasthya-Food-Consulting.png'
output_png = r'd:\swasthya-website\assets\images\favicon-square.png'
output_ico = r'd:\swasthya-website\favicon.ico'

def create_square_favicon():
    if not os.path.exists(input_path):
        print(f"Error: Input file not found at {input_path}")
        return

    # Load image
    img = Image.open(input_path).convert("RGBA")
    width, height = img.size
    
    # Create a square canvas with transparency
    square_size = max(width, height)
    new_img = Image.new("RGBA", (square_size, square_size), (0, 0, 0, 0))
    
    # Calculate position to paste (centered)
    x = (square_size - width) // 2
    y = (square_size - height) // 2
    
    # Paste the original logo
    new_img.paste(img, (x, y), img)
    
    # Save as square PNG
    new_img.save(output_png)
    print(f"Successfully created square PNG at {output_png}")
    
    # Save as ICO with multiple sizes
    icon_sizes = [(16, 16), (32, 32), (48, 48), (64, 64), (128, 128)]
    new_img.save(output_ico, format='ICO', sizes=icon_sizes)
    print(f"Successfully created favicon.ico at {output_ico}")

if __name__ == "__main__":
    create_square_favicon()

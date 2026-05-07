import os
from PIL import Image, ImageEnhance

# Paths
input_path = r'd:\Swasthya\swasthya-website\assets\images\DSC_1042 copy copyuu.JPG'
output_path = r'd:\Swasthya\swasthya-website\assets\images\MD-Thammaiah-Professional.webp'

def optimize_founder_image():
    if not os.path.exists(input_path):
        print(f"Error: Input file not found at {input_path}")
        return

    # Load image
    img = Image.open(input_path)
    
    # 1. Resize if too large (Target around 1000px width for a portrait)
    max_width = 1000
    if img.width > max_width:
        ratio = max_width / float(img.width)
        new_height = int(float(img.height) * float(ratio))
        img = img.resize((max_width, new_height), Image.Resampling.LANCZOS)
    
    # 2. Enhance: Slight contrast and sharpness to 'pop' the portrait
    enhancer = ImageEnhance.Contrast(img)
    img = enhancer.enhance(1.1)
    
    enhancer = ImageEnhance.Sharpness(img)
    img = enhancer.enhance(1.2)
    
    # 3. Save as WebP
    img.save(output_path, 'WEBP', quality=85, method=6)
    
    print(f"Successfully optimized and saved to {output_path}")
    print(f"Original size: {os.path.getsize(input_path) / 1024:.2f} KB")
    print(f"Optimized size: {os.path.getsize(output_path) / 1024:.2f} KB")

if __name__ == "__main__":
    optimize_founder_image()

import os
from PIL import Image

# Paths
input_path = r'd:\swasthya-website\assets\images\Swasthya-Food-Consulting.png'
output_fav = r'd:\swasthya-website\assets\images\favicon-square.png'
output_ico = r'd:\swasthya-website\favicon.ico'

def create_letter_favicon():
    if not os.path.exists(input_path):
        print(f"Error: Input file not found at {input_path}")
        return

    # Load image
    img = Image.open(input_path).convert("RGBA")
    
    # The stylized "S" is inside the leaf on the left.
    # We'll crop the area where the "S" is.
    # Based on previous crops, the "S" is roughly in the left-most part of the leaf.
    # Leaf area was roughly (0, 0, 520, 296)
    s_crop = img.crop((100, 50, 250, 250)) # Estimating "S" position
    
    # Actually, let's try to find the "S" by looking for white pixels in the leaf area.
    # Or, even better, just create a high-quality "S" in the brand's font/color.
    # The brand teal color is roughly #009688.
    
    from PIL import ImageDraw, ImageFont
    
    side = 512
    favicon = Image.new("RGBA", (side, side), (255, 255, 255, 0))
    draw = ImageDraw.Draw(favicon)
    
    # Brand color (teal)
    brand_teal = (0, 150, 136, 255) # This is a standard teal, let's try to match the logo precisely
    # Sampling from the logo might be better but let's use a clean teal circle
    
    # Draw a rounded background or circle
    draw.ellipse((20, 20, 492, 492), fill=brand_teal)
    
    # Try to load a bold font that looks similar to "Outfit" or "Plus Jakarta Sans" used in the site
    try:
        # On Windows, we can try to find a common font
        font_path = r"C:\Windows\Fonts\arialbd.ttf" # Arial Bold as fallback
        if not os.path.exists(font_path):
            font_path = "arial.ttf"
        
        font = ImageFont.truetype(font_path, 380)
        
        # Center the "S"
        text = "S"
        # Get text size using textbbox
        bbox = draw.textbbox((0, 0), text, font=font)
        w = bbox[2] - bbox[0]
        h = bbox[3] - bbox[1]
        
        draw.text(((side - w) // 2, (side - h) // 2 - 40), text, font=font, fill=(255, 255, 255, 255))
    except Exception as e:
        print(f"Font error: {e}")
        # Simple fallback if no font found
        draw.text((150, 50), "S", fill=(255, 255, 255, 255))

    # Save
    favicon.save(output_fav)
    ico_sizes = [(16,16), (32,32), (48,48), (64,64), (128,128)]
    favicon.save(output_ico, format='ICO', sizes=ico_sizes)
    print(f"Successfully created letter 'S' favicon at {output_fav}")

if __name__ == "__main__":
    create_letter_favicon()

import os
from PIL import Image, ImageChops

input_logo = r'd:\swasthya-website\favicon\Swasthya-Food-Consulting-Final-Logo-White-BG.png'
favicon_png = r'd:\swasthya-website\assets\images\favicon-square.png'
favicon_ico = r'd:\swasthya-website\favicon.ico'
og_image = r'd:\swasthya-website\assets\images\og-image.png'

def process_images():
    if not os.path.exists(input_logo):
        print(f"Error: Could not find {input_logo}")
        return

    # Load image
    img = Image.open(input_logo).convert("RGBA")
    width, height = img.size
    print(f"Original size: {width}x{height}")

    # Generate Favicon
    # Client requested the full logo as a favicon, so we will pad it into a square.
    favicon_size = max(width, height)
    favicon_full = Image.new("RGBA", (favicon_size, favicon_size), (255, 255, 255, 255))
    
    fx = (favicon_size - width) // 2
    fy = (favicon_size - height) // 2
    favicon_full.paste(img, (fx, fy), img)
    
    # Save favicon png (180x180 for apple touch)
    favicon_png_img = favicon_full.resize((180, 180), Image.Resampling.LANCZOS)
    favicon_png_img.save(favicon_png)
    
    # Save favicon.ico
    ico_sizes = [(16,16), (32,32), (48,48), (64,64)]
    favicon_full.save(favicon_ico, format='ICO', sizes=ico_sizes)
    print("Favicons generated.")

    # Generate OG Image
    # 1200x630 is standard
    og_width, og_height = 1200, 630
    og = Image.new("RGBA", (og_width, og_height), (255, 255, 255, 255))
    
    # We want the logo to take up most of the width but not all, say max width 1000px
    max_w = 1000
    scale = max_w / width
    new_width = int(width * scale)
    new_height = int(height * scale)
    
    # Ensure it fits height too (unlikely to be an issue for a wide logo, but safe)
    if new_height > (og_height - 100):
        scale = (og_height - 100) / height
        new_width = int(width * scale)
        new_height = int(height * scale)
        
    resized_logo = img.resize((new_width, new_height), Image.Resampling.LANCZOS)
    
    # Center it
    x = (og_width - new_width) // 2
    y = (og_height - new_height) // 2
    
    # Paste
    og.paste(resized_logo, (x, y), resized_logo)
    og = og.convert("RGB") # OG images don't need alpha usually
    og.save(og_image)
    print("OG image generated.")

if __name__ == "__main__":
    process_images()

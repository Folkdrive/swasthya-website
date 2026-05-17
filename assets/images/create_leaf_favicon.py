import os
from PIL import Image

# Paths
input_path = r'd:\swasthya-website\assets\images\Swasthya-Food-Consulting.png'
output_leaf = r'd:\swasthya-website\assets\images\favicon-square.png'
output_ico = r'd:\swasthya-website\favicon.ico'

def extract_leaf_favicon():
    if not os.path.exists(input_path):
        print(f"Error: Input file not found at {input_path}")
        return

    # Load image
    img = Image.open(input_path).convert("RGBA")
    width, height = img.size
    
    # Let's crop the left part where the leaf is. 
    # Based on the logo, the leaf is the primary graphic on the left.
    # We'll take a larger area first and then try to find the leaf.
    leaf_area = img.crop((0, 0, int(width * 0.55), height))
    
    # To get JUST the leaf, we'll look for the largest connected component of the main color?
    # Or just use a better bounding box.
    # The previous bbox was (0, 0, 476, 296) roughly.
    
    # I'll manually define a better crop based on typical logo layout
    # The leaf is roughly 450x296 in a 1058x296 image.
    leaf = img.crop((0, 0, 520, height))
    
    # Now get the bounding box of the non-transparent pixels in this crop
    bbox = leaf.getbbox()
    if bbox:
        leaf = leaf.crop(bbox)
    
    l_w, l_h = leaf.size
    
    # Create a square canvas
    side = max(l_w, l_h) + 10
    favicon = Image.new("RGBA", (side, side), (255, 255, 255, 0))
    
    # Center
    x = (side - l_w) // 2
    y = (side - l_h) // 2
    favicon.paste(leaf, (x, y), leaf)
    
    # Save
    favicon.save(output_leaf)
    ico_sizes = [(16,16), (32,32), (48,48), (64,64), (128,128)]
    favicon.save(output_ico, format='ICO', sizes=ico_sizes)
    print(f"Successfully refined leaf favicon at {output_leaf}")

if __name__ == "__main__":
    extract_leaf_favicon()

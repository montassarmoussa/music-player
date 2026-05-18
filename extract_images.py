import os

def extract_art(src_dir):
    for filename in os.listdir(src_dir):
        if filename.endswith(".mp3"):
            filepath = os.path.join(src_dir, filename)
            try:
                with open(filepath, 'rb') as f:
                    data = f.read()
                    
                    # Search for the start of a JPEG or PNG in the APIC frame
                    # JPEG starts with \xff\xd8, PNG starts with \x89PNG
                    
                    # This is a basic search for the ID3 tag 'APIC'
                    apic_index = data.find(b'APIC')
                    if apic_index != -1:
                        # Find the start of the image data within the APIC frame
                        # We look for common image headers
                        jpg_start = data.find(b'\xff\xd8\xff', apic_index)
                        png_start = data.find(b'\x89PNG', apic_index)
                        
                        start = -1
                        ext = ""
                        
                        if jpg_start != -1 and (png_start == -1 or jpg_start < png_start):
                            start = jpg_start
                            # Find end of JPEG (approximate or just take a chunk)
                            # For safety in this script, we'll find the next frame or end of file
                            # but simpler is to find \xff\xd9
                            end = data.find(b'\xff\xd9', start)
                            if end != -1:
                                end += 2
                                ext = ".jpg"
                        elif png_start != -1:
                            start = png_start
                            end = data.find(b'IEND', start)
                            if end != -1:
                                end += 8
                                ext = ".png"
                        
                        if start != -1 and end != -1:
                            image_data = data[start:end]
                            output_path = os.path.join(src_dir, filename.replace(".mp3", ext))
                            with open(output_path, 'wb') as img_f:
                                img_f.write(image_data)
                            print(f"Extrait : {filename} -> {ext}")
            except Exception as e:
                print(f"Erreur sur {filename}: {e}")

if __name__ == "__main__":
    extract_art("src")

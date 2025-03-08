import os

def rename_files(files):
    renamed_files = []
    for file in files:
        # Add a prefix "_renamed" to each file (simulting renaming)
        new_name = "renamed_"+file
        # Optionally rename the actual file on disk if needed
        # os.rename(os.path.join('uploads', file), os.path.join('uploads',new_name))
        renamed_files.append(new_name)
    
    return renamed_files
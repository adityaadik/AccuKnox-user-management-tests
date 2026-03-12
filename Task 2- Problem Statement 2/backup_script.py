import os
import shutil
from datetime import datetime

source_dir = "source_folder"
backup_dir = "backup_folder"

try:
    if not os.path.exists(source_dir):
        print("Error: Source folder does not exist.")
        exit()

    if not os.path.exists(backup_dir):
        os.makedirs(backup_dir)

    timestamp = datetime.now().strftime("%Y%m%d_%H%M%S")
    backup_path = os.path.join(backup_dir, "backup_" + timestamp)

    shutil.copytree(source_dir, backup_path)

    print("Backup Successful")
    print("Backup location:", backup_path)

except Exception as e:
    print("Backup Failed")
    print("Error:", e)
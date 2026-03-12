import psutil
from datetime import datetime

CPU_THRESHOLD = 80
MEMORY_THRESHOLD = 80
DISK_THRESHOLD = 80

log_file = "system_health.log"

def log_alert(message):
    with open(log_file, "a") as f:
        f.write(f"{datetime.now()} - {message}\n")
    print(message)

cpu_usage = psutil.cpu_percent(interval=1)
if cpu_usage > CPU_THRESHOLD:
    log_alert(f"ALERT: High CPU Usage: {cpu_usage}%")

memory = psutil.virtual_memory()
if memory.percent > MEMORY_THRESHOLD:
    log_alert(f"ALERT: High Memory Usage: {memory.percent}%")

disk = psutil.disk_usage('/')
if disk.percent > DISK_THRESHOLD:
    log_alert(f"ALERT: High Disk Usage: {disk.percent}%")

process_count = len(psutil.pids())
print(f"Running Processes: {process_count}")

print("System Health Check Completed")
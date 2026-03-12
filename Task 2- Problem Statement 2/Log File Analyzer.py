from collections import Counter

log_file = "access.log"

error_404_count = 0
pages = Counter()
ips = Counter()

try:
    with open(log_file, "r") as file:
        for line in file:
            parts = line.split()

            ip = parts[0]
            page = parts[6]
            status = parts[8]

            ips[ip] += 1
            pages[page] += 1

            if status == "404":
                error_404_count += 1

    print("Log Analysis Report")
    print("--------------------")
    print("Total 404 Errors:", error_404_count)

    print("\nTop Requested Pages:")
    for page, count in pages.most_common(5):
        print(page, "-", count, "requests")

    print("\nTop IP Addresses:")
    for ip, count in ips.most_common(5):
        print(ip, "-", count, "requests")

except FileNotFoundError:
    print("Log file not found.")
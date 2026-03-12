import requests

url = "https://example.com"

try:
    response = requests.get(url, timeout=5)
    status_code = response.status_code

    if status_code == 200:
        print("Application Status: UP")
        print("HTTP Status Code:", status_code)
    else:
        print("Application Status: DOWN")
        print("HTTP Status Code:", status_code)

except requests.exceptions.RequestException:
    print("Application Status: DOWN")
    print("Application is not responding.")
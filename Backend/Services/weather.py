import requests
from typing import Any


#url = "https://api.open-meteo.com/v1/forecast?latitude=27.95&longitude=-82.46&current_weather=true"
#response = requests.get(url)
#data = response.json()
#print(data["current_weather"])

def get_current_weather() -> Any:
    url = "https://api.open-meteo.com/v1/forecast?latitude=27.95&longitude=-82.46&current_weather=true"
    response = requests.get(url)
    response.raise_for_status()
    data = response.json()
    return data.get("current_weather")
import requests
from typing import Any, List, Dict

def get_tide_forecast() -> List[Dict[str, Any]]:
    """
    Fetch tide/forecast data from weather.gov for Tampa.
    Returns a list of the first 5 forecast periods.
    """
    points_url = "https://api.weather.gov/points/27.95,-82.46"  # Tampa example
    headers = {
        "User-Agent": "floodnet-app (your@email.com)"
    }

    points_response = requests.get(points_url, headers=headers)
    points_response.raise_for_status()
    points_data = points_response.json()

    if "properties" not in points_data:
        raise KeyError("'properties' not found in points data: " + str(points_data))

    forecast_url = points_data["properties"]["forecast"]

    forecast_response = requests.get(forecast_url, headers=headers)
    forecast_response.raise_for_status()
    forecast_data = forecast_response.json()

    periods = forecast_data["properties"]["periods"]
    return periods[:5]
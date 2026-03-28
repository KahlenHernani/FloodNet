from mapbox import Geocoder
from dotenv import load_dotenv, find_dotenv
import os
from typing import Any

# Load environment variables
dotenv_path = find_dotenv()
if dotenv_path:
    load_dotenv(dotenv_path)

MAPBOX_TOKEN = os.getenv("MAPBOX_TOKEN")
if not MAPBOX_TOKEN:
    raise ValueError("MAPBOX_TOKEN not found! Set it in .env or system env variable.")

geocoder = Geocoder(access_token=MAPBOX_TOKEN)

def geocode_location(location: str = "Tampa, FL") -> Any:
    response = geocoder.forward(location)
    response.raise_for_status()
    return response.json()
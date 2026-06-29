import { setUserWeather } from "../appState/appState";

const API_KEY = process.env.WEATHER_API_KEY;

async function fetchDataByCity(city) {
  try {
    const response = await fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?key=${API_KEY}`,
    );
    const data = await response.json();
    console.log(data);
    
    setUserWeather(data);
  } catch (error) {
    console.log(error);
  }
}

async function fetchDataByLongAndLat(latitude, longitude) {
  try {
    const response = await fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${latitude},${longitude}?key=${API_KEY}`,
    );
    const data = await response.json();
    console.log(data);
    
    setUserWeather(data);
  } catch (error) {
    console.log(error);
  }
}

export { fetchDataByCity, fetchDataByLongAndLat };

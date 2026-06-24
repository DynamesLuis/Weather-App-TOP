import {
  getDays,
  getUserCurrentWeather,
  setUserWeather,
} from "../appState/appState";
import { data } from "../data";
import { getUserLocation } from "../services/userLocationService";
import {
  fetchDataByCity,
  fetchDataByLongAndLat,
} from "../services/weatherService";
import { initCustomSelect } from "../ui/customSelect";
import { renderCurrentConditions } from "../ui/renderCurrentConditions";
import { renderDaysForecast } from "../ui/renderDaysForecast";
import { renderHourlyForecast } from "../ui/renderHourlyForecast";

async function handleDefaultSubmit() {
  try {
    const { latitude, longitude } = await getUserLocation();
    await fetchDataByLongAndLat(latitude, longitude);
    //setUserWeather(data);
    renderCurrentConditions(getUserCurrentWeather());
    renderDaysForecast(getDays());
    renderHourlyForecast(getDays()[0].datetime);
    initCustomSelect();
  } catch (error) {
    console.error(error);
  }
}

async function handleSearchCity(e) {
  try {
    e.preventDefault();
    const city = document.querySelector("#city").value;
    if (city === "") return;
    await fetchDataByCity(city);
    renderCurrentConditions(getUserCurrentWeather());
    renderDaysForecast(getDays());
    renderHourlyForecast(getDays()[0].datetime);
    initCustomSelect();
  } catch (error) {
    console.log(error);
  }
}

export { handleDefaultSubmit, handleSearchCity };

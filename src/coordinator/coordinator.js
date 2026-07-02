import {
  getDays,
  getUserCurrentWeather,
  getUserWeather,
  setScaleConfig,
  setUserWeather,
  setWatherSource,
} from "../appState/appState";
import { data } from "../data";
import { getUserLocation } from "../services/userLocationService";
import {
  fetchDataByCity,
  fetchDataByLongAndLat,
} from "../services/weatherService";
import { changeUnitsIcons } from "../ui/changeConfigIcons";
import { initCustomSelect } from "../ui/customSelect";
import {
  hideEmpty,
  hideForecast,
  hideSpinner,
  showEmpty,
  showForecast,
  showSpinner,
} from "../ui/handleShowing";
import { renderCurrentConditions } from "../ui/weather/renderCurrentConditions";
import { renderDaysForecast } from "../ui/weather/renderDaysForecast";
import { renderHourlyForecast } from "../ui/weather/renderHourlyForecast";

async function handleDefaultSubmit() {
  try {
    const { latitude, longitude } = await getUserLocation();
    hideEmpty();
    showSpinner();
    setWatherSource("user");
    await fetchDataByLongAndLat(latitude, longitude);
    renderCurrentConditions(getUserCurrentWeather());
    renderDaysForecast(getDays());
    renderHourlyForecast(getDays()[0].datetime);
    initCustomSelect();
    showForecast();
  } catch (error) {
    showEmpty();
    console.log(error);
  } finally {
    hideSpinner();
  }
}

async function handleSearchCity(e) {
  try {
    e.preventDefault();
    const city = document.querySelector("#city").value;
    if (city === "") return;
    hideEmpty();
    hideForecast();
    showSpinner();
    setWatherSource("search");
    await fetchDataByCity(city);
    renderCurrentConditions(getUserCurrentWeather());
    renderDaysForecast(getDays());
    renderHourlyForecast(getDays()[0].datetime);
    initCustomSelect();
    showForecast();
  } catch (error) {
    showEmpty();
    console.log(error);
  } finally {
    document.querySelector("#city").value = "";
    hideSpinner();
  }
}

function handleChangeTempScale(e) {
  const scaleToChange = e.currentTarget.dataset.scale;
  if (scaleToChange === "c") {
    e.currentTarget.dataset.scale = "f";
  } else {
    e.currentTarget.dataset.scale = "c";
  }
  setScaleConfig(scaleToChange);
  changeUnitsIcons();
  if (Object.keys(getUserWeather()).length === 0) return;
  renderCurrentConditions(getUserCurrentWeather());
  renderDaysForecast(getDays());
  renderHourlyForecast(getDays()[0].datetime);
}

export { handleDefaultSubmit, handleSearchCity, handleChangeTempScale };

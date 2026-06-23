import { getDays, getUserCurrentWeather, setUserWeather } from "../appState/appState";
import { data } from "../data";
import { getUserLocation } from "../services/userLocationService";
import { fetchDataByLongAndLat } from "../services/weatherService";
import { initCustomSelect } from "../ui/customSelect";
import { renderCurrentConditions } from "../ui/renderCurrentConditions";
import { renderDaysForecast } from "../ui/renderDaysForecast";

async function handleDefaultSubmit() {
  try {
    const { latitude, longitude } = await getUserLocation();

    await fetchDataByLongAndLat(latitude, longitude);
    //setUserWeather(data)
    //
    renderCurrentConditions(getUserCurrentWeather());
    renderDaysForecast(getDays());
    initCustomSelect();
  } catch (error) {
    console.error(error);
  }
}

export { handleDefaultSubmit };

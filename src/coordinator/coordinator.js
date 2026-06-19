import { getDays, getUserCurrentWeather } from "../appState/appState";
import { getUserLocation } from "../services/userLocationService";
import { fetchDataByLongAndLat } from "../services/weatherService";
import { renderCurrentConditions } from "../ui/renderCurrentConditions";
import { renderDaysForecast } from "../ui/renderDaysForecast";

async function handleDefaultSubmit() {
  try {
    const { latitude, longitude } = await getUserLocation();

    await fetchDataByLongAndLat(latitude, longitude);
    renderCurrentConditions(getUserCurrentWeather());
    renderDaysForecast(getDays());
  } catch (error) {
    console.error(error);
  }
}

export { handleDefaultSubmit };

import { getDays } from "../appState/appState";
import { getDateTime } from "../utilis/date";

function renderHourForecast(day = null) {
  const forecast = getDayForecast(day);
}

function getDayForecast(day) {
  let forecast = null;
  if (day) {
    forecast = getDays().find((day) => day.datetime === getDateTime(day));
  } else {
    forecast = getDays()[0];
  }
  console.log(forecast);
  return forecast;
}

export { renderHourForecast };

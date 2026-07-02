import { getDays, getLastdatetime24 } from "../../appState/appState";
import { formatTime, getHour } from "../../utils/date";
import { weatherIcons } from "../icons";
import { getTemperatureForRender } from "./getTemperature";

function renderHourlyForecast(datetime) {
  const days = getDays();

  let actualHours = [];

  // if (datetime != days[0].datetime) {
  //   actualHours = days.find((day) => day.datetime == datetime).hours;
  // } else {
  //   const currentHour = getCurrentHour();
  //   const hours = days[0].hours;
  //   const index = hours.findIndex((hour) => hour.datetime > currentHour);
  //   actualHours = hours.slice(index);
  // }
  const selectedDay = days.find((day) => day.datetime === datetime);

  if (datetime !== days[0].datetime) {
    actualHours = selectedDay.hours;
  } else {
    const currentHour = getHour(getLastdatetime24());
    const index = selectedDay.hours.findIndex((hour) => {
      return getHour(hour.datetime) >= currentHour;
    });
    actualHours = selectedDay.hours.slice(index);
  }

  const $hourlyContainer = document.querySelector(".hourly-container");
  $hourlyContainer.innerHTML = "";

  actualHours.forEach((hour) => {
    const $hourlyCard = document.createElement("div");
    const $iconContainer = document.createElement("div");
    const $pHour = document.createElement("p");
    const $pTemp = document.createElement("p");
    $hourlyCard.classList.add("daily-hour-card");
    $iconContainer.classList.add("icon-container");
    $pHour.classList.add("daily-hour");
    $pTemp.classList.add("daily-temp");

    $iconContainer.innerHTML = weatherIcons[hour.icon];
    $pHour.textContent = formatTime(hour.datetime);
    $pTemp.textContent = `${getTemperatureForRender(hour.temp)}°`;

    $hourlyCard.appendChild($iconContainer);
    $hourlyCard.appendChild($pHour);
    $hourlyCard.appendChild($pTemp);
    $hourlyContainer.appendChild($hourlyCard);
  });
}

export { renderHourlyForecast };

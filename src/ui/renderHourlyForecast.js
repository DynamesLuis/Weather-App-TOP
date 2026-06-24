import { getDays } from "../appState/appState";
import { formatTime, getCurrentHour } from "../utils/date";
import { weatherIcons } from "./icons";

function renderHourlyForecast(datetime) {  
  const days = getDays();  
  
  let actualHours = [];
  console.log(datetime)
  console.log(days[0].datetime)
  console.log(datetime != days[0].datetime);
  
  if (datetime != days[0].datetime) {
    actualHours = days.find((day) => (day.datetime == datetime)).hours;
  } else {
    const currentHour = getCurrentHour();
    const hours = days[0].hours;
    const index = hours.findIndex((hour) => hour.datetime > currentHour);
    actualHours = hours.slice(index);
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
    $pTemp.textContent = `${hour.temp}°`;

    $hourlyCard.appendChild($iconContainer);
    $hourlyCard.appendChild($pHour);
    $hourlyCard.appendChild($pTemp);
    $hourlyContainer.appendChild($hourlyCard);
  });
}

export { renderHourlyForecast };

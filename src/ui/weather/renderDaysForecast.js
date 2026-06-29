import { getDay } from "../../utils/date";
import { shortenDayText } from "../../utils/text";
import { weatherIcons } from "../icons";
import { getTemperatureForRender } from "./getTemperature";

function renderDaysForecast(days) {
  document.querySelectorAll(".daily-card").forEach(($card, index) => {
    $card.querySelector(".card-title").textContent = shortenDayText(
      getDay(days[index].datetime),
    );
    $card.querySelector(".daily-icon").innerHTML =
      weatherIcons[days[index].icon];
    $card.querySelector(".max-temp").textContent =
      getTemperatureForRender(days[index].tempmax) + "°";
    $card.querySelector(".min-temp").textContent =
      getTemperatureForRender(days[index].tempmin) + "°";
  });
}

export { renderDaysForecast };

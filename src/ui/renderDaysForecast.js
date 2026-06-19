import { getDay } from "../utilis/date";
import { shortenDayText } from "../utilis/text";
import { weatherIcons } from "./icons";

function renderDaysForecast(days) {
  document.querySelectorAll(".daily-card").forEach(($card, index) => {
    $card.querySelector(".card-title").textContent = shortenDayText(
      getDay(days[index].datetime),
    );
    $card.querySelector(".daily-icon").innerHTML =
      weatherIcons[days[index].icon];
    $card.querySelector(".max-temp").textContent = days[index].tempmax + "°";
    $card.querySelector(".min-temp").textContent = days[index].tempmin + "°";
  });
}

export { renderDaysForecast };

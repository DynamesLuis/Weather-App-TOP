import { weatherIcons } from "./icons";

function renderCurrentConditions(currentWeather) {
  document.querySelector(".place-temp span").textContent = currentWeather.temp;
  document.querySelector(".place-icon-container").innerHTML =
    weatherIcons[currentWeather.icon];
  document.querySelector(".time-moment").innerHTML = currentWeather.datetime;
  document.querySelector(".time-hour").innerHTML = currentWeather.lastdatetime;
  document.querySelector(".place-city").innerHTML = currentWeather.address
  document.querySelectorAll("p.info-p span").forEach((p) => {
    const property = p.dataset.property;
    if (property in currentWeather) {
      p.textContent = currentWeather[property];
    }
  });
}

export { renderCurrentConditions };

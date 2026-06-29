import { getScaleConfig } from "../../appState/appState";
import { weatherIcons } from "../icons";
import { getDistanceForRender } from "./getDistanceForRender";
import { getTemperatureForRender } from "./getTemperature";

function renderCurrentConditions(currentWeather) {
  document.querySelector(".place-temp span").textContent =
    `${getTemperatureForRender(currentWeather.temp)} ${getScaleConfig().toUpperCase()}°`;
  document.querySelector(".place-icon-container").innerHTML =
    weatherIcons[currentWeather.icon];
  document.querySelector(".time-moment").innerHTML = currentWeather.datetime;
  document.querySelector(".time-hour").innerHTML = currentWeather.lastdatetime;
  document.querySelector(".place-city").innerHTML = currentWeather.address;
  document.querySelectorAll("p.info-p span").forEach((p) => {
    const property = p.dataset.property;
    if (property in currentWeather) {
      let textcontent = currentWeather[property];
      const windScale = getScaleConfig() == "c" ? "km/h" : "m/h";
      const visibilityScale = getScaleConfig() == "c" ? "km" : "miles";
      switch (property) {
        case "feelslike":
          textcontent = `${getTemperatureForRender(textcontent)} ${getScaleConfig().toUpperCase()}°`;
          break;

        case "visibility":
          textcontent = `${getDistanceForRender(textcontent)} ${visibilityScale}`;
          break;

        case "windspeed":
          textcontent = `${getDistanceForRender(textcontent)} ${windScale}`;
          break;
      }
      p.textContent = textcontent;
    }
  });
}

export { renderCurrentConditions };

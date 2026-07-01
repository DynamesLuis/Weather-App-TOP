import { getScaleConfig } from "../appState/appState";

function changeUnitsIcons() {
  const unit = getScaleConfig();
  const $unitBtn = document.querySelector(".temp-scale-btn");
  const $span = $unitBtn.children[2];
  if (unit === "c") {
    $span.textContent = "°F / m/h";
  } else {
    $span.textContent = "°C / km/h";
  }
}

function changeThemeIcon(isDark) {
  const $themeBtn = document.querySelector(".theme-btn");
  const $span = $themeBtn.querySelector("span");

  if (isDark) {
    $span.textContent = "Light";
  } else {
    $span.textContent = "Dark";
  }
}

export { changeUnitsIcons, changeThemeIcon };

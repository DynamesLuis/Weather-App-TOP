import { $emptyState, $forecastContainer, $spinner } from "./domSelector";

function showForecast() {
  $forecastContainer.classList.remove("hidden");
}

function hideForecast() {
  $forecastContainer.classList.add("hidden");
}

function showEmpty() {
  $emptyState.classList.remove("hidden");
}

function hideEmpty() {
  $emptyState.classList.add("hidden");
}

function showSpinner() {
  $spinner.classList.remove("hidden");
}

function hideSpinner() {
  $spinner.classList.add("hidden");
}

export {
  showForecast,
  hideForecast,
  showEmpty,
  hideEmpty,
  showSpinner,
  hideSpinner,
};

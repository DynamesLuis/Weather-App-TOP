function showForecast() {
  const $forecastContainer = document.querySelector(".forecast-container");
  const $emptyState = document.querySelector(".empty-state");
  $emptyState.classList.add("hidden");
  $forecastContainer.classList.remove("hidden");
}

export { showForecast };

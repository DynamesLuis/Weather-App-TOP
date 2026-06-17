const appState = {
  userInfo: {
    latitude: "",
    longitude: "",
    weatherData: {},
  },
};

const setLatitude = (latitude) => (appState.userInfo.latitude = latitude);
const setLongitude = (longitude) => (appState.userInfo.longitude = longitude);
const setUserWeather = (userWeather) =>
  (appState.userInfo.weatherData = userWeather);
const getLatitude = () => appState.userInfo.latitude;
const getLongitude = () => appState.userInfo.longitude;
const getUserWeather = () => appState.userInfo.weatherData;

export {
  setLatitude,
  setLongitude,
  setUserWeather,
  getLatitude,
  getLongitude,
  getUserWeather,
};

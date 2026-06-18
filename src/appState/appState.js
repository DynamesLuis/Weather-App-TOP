import { formatTime, getDay } from "../utilis/date";

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
  (appState.userInfo.weatherData = {
    currentConditions: {
      sunrise: formatTime(userWeather.currentConditions.sunrise),
      sunset: formatTime(userWeather.currentConditions.sunset),
      humidity: userWeather.currentConditions.humidity,
      uvindex: userWeather.currentConditions.uvindex,
      feelslike: userWeather.currentConditions.feelslike,
      windspeed: userWeather.currentConditions.windspeed,
      precipprob: userWeather.currentConditions.precipprob,
      visibility: userWeather.currentConditions.visibility,
      temp: userWeather.currentConditions.temp,
      icon: userWeather.currentConditions.icon,
      lastdatetime: formatTime(userWeather.currentConditions.datetime),
      datetime: getDay(userWeather.days[0].datetime),
    },
    days: userWeather.days.slice(0, 7),
  });
const getLatitude = () => appState.userInfo.latitude;
const getLongitude = () => appState.userInfo.longitude;
const getUserWeather = () => appState.userInfo.weatherData;
const getUserCurrentWeather = () => appState.userInfo.weatherData.currentConditions;

export {
  setLatitude,
  setLongitude,
  setUserWeather,
  getLatitude,
  getLongitude,
  getUserWeather,
  getUserCurrentWeather
};

import { formatTime, getDay } from "../utils/date";

const appState = {
  userInfo: {
    latitude: "",
    longitude: "",
    weatherData: {},
  },
  scaleConfig: "f",
  weatherSource: "",
};

const setWatherSource = (source) => (appState.weatherSource = source);
const setScaleConfig = (scale) => (appState.scaleConfig = scale);
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
      lastdatetime24: userWeather.currentConditions.datetime,
      datetime: getDay(userWeather.days[0].datetime),
      address: userWeather.address,
    },
    days: userWeather.days.slice(0, 7),
  });

const getWeatherSource = () => appState.weatherSource;
const getScaleConfig = () => appState.scaleConfig;
const getLatitude = () => appState.userInfo.latitude;
const getLongitude = () => appState.userInfo.longitude;
const getUserWeather = () => appState.userInfo.weatherData;
const getUserCurrentWeather = () =>
  appState.userInfo.weatherData.currentConditions;
const getDays = () => appState.userInfo.weatherData.days;
const getLastdatetime24 = () =>
  appState.userInfo.weatherData.currentConditions.lastdatetime24;

export {
  setScaleConfig,
  setLatitude,
  setLongitude,
  setUserWeather,
  setWatherSource,
  getLatitude,
  getLongitude,
  getUserWeather,
  getUserCurrentWeather,
  getDays,
  getScaleConfig,
  getWeatherSource,
  getLastdatetime24,
};

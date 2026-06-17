import {
  getLatitude,
  getLongitude,
  setLatitude,
  setLongitude,
} from "../appState/appState";

function getUserLocation() {
  return new Promise((resolve, reject) => {
    if (!navigator.geolocation) {
      reject(new Error("Geolocation is not supported."));
      return;
    }

    navigator.geolocation.getCurrentPosition((position) => {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;

      setLatitude(latitude);
      setLongitude(longitude);

      resolve({ latitude, longitude });
    }, reject);
  });
}

export { getUserLocation };

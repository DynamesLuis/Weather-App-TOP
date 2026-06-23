import { firstLetterToUpperCase } from "./text";

function getDay(date) {
  const [year, month, day] = date.split("-");

  const localDate = new Date(year, month - 1, day);

  return localDate.toLocaleDateString("en-US", {
    weekday: "long",
  });
}

function formatTime(timeString) {
  const [hours, minutes] = timeString.split(":");

  const hour = Number(hours);
  const period = hour >= 12 ? "PM" : "AM";

  const hour12 = hour % 12 || 12;

  return `${hour12}:${minutes} ${period}`;
}

function getCurrentHour() {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const seconds = String(now.getSeconds()).padStart(2, "0");

  return `${hours}:${minutes}:${seconds}`;
}

export { getDay, formatTime, getCurrentHour };

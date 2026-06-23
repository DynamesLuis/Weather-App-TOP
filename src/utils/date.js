import { firstLetterToUpperCase } from "./text";

function getDay(date) {
  const [year, month, day] = date.split("-");

  const localDate = new Date(year, month - 1, day);

  return localDate.toLocaleDateString("en-US", {
    weekday: "long",
  });
}

function getDateTime(day) {}

function formatTime(timeString) {
  const [hours, minutes] = timeString.split(":");

  const hour = Number(hours);
  const period = hour >= 12 ? "PM" : "AM";

  const hour12 = hour % 12 || 12;

  return `${hour12}:${minutes} ${period}`;
}

export { getDay, formatTime, getDateTime };

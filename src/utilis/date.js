import { firstLetterToUpperCase } from "./text";

function getDay(date) {
  const dayName = new Date(date).toLocaleDateString("en-US", {
    weekday: "long",
  });

  const formattedDay = firstLetterToUpperCase(dayName);

  return formattedDay;
}

function formatTime(timeString) {
  const [hours, minutes] = timeString.split(":");

  const hour = Number(hours);
  const period = hour >= 12 ? "PM" : "AM";

  const hour12 = hour % 12 || 12;

  return `${hour12}:${minutes} ${period}`;
}

export { getDay, formatTime };

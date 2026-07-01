function getBgImg(dateTime) {
  const [hourMinute, period] = dateTime.split(" ");
  let hour = Number(hourMinute.split(":")[0]);

  // Convertir a formato de 24 horas
  if (period === "PM" && hour !== 12) {
    hour += 12;
  }

  if (period === "AM" && hour === 12) {
    hour = 0;
  }

  if (hour >= 5 && hour < 8) {
    return "morning";
  }

  if (hour >= 8 && hour < 17) {
    return "day";
  }

  if (hour >= 17 && hour < 19) {
    return "sunset";
  }

  return "night";
}

export { getBgImg };

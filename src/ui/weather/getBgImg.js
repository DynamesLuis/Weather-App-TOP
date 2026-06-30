function getBgImg(dateTime) {
  const [hourMinute, period] = dateTime.split(" ");
  const hour = Number(hourMinute.split(":")[0]);

  if (period === "AM") {
    if (hour >= 5 && hour < 8) return "morning";
    return "day";
  }

  // PM
  if (hour >= 5 && hour < 7) return "sunset";
  return "night";
}

export { getBgImg };

function convertFtoC(temp) {
  return Math.round((temp - 32) * (5 / 9));
}

function convertMtoKm(miles) {
  return Number((miles * 1.60934).toFixed(1));
}

export { convertFtoC, convertMtoKm };

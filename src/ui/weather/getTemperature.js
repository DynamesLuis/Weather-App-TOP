import { getScaleConfig } from "../../appState/appState";
import { convertFtoC } from "../../utils/units";

function getTemperatureForRender(temperature) {
  const unit = getScaleConfig();

  const actualtemp =
    unit === "c" ? convertFtoC(temperature) : Math.round(temperature);

  return actualtemp;
}

export { getTemperatureForRender };

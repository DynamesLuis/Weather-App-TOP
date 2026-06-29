import { getScaleConfig } from "../../appState/appState";
import { convertMtoKm } from "../../utils/units";

function getDistanceForRender(distance) {
  const unit = getScaleConfig();

  const actualDIstance = unit === "c" ? convertMtoKm(distance) : distance;

  return actualDIstance;
}

export { getDistanceForRender };

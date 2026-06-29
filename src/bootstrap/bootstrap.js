import {
  handleChangeTempScale,
  handleDefaultSubmit,
  handleSearchCity,
} from "../coordinator/coordinator";
import { closeAllSelect } from "../ui/customSelect";
import { handleMenu } from "../ui/handleMenu";

export default function initApp() {
  initEvents();
  handleDefaultSubmit();
}

function initEvents() {
  const $form = document.querySelector(".form");
  const $menuBtn = document.querySelector(".menu-btn");
  const $TempScaleBtn = document.querySelector(".temp-scale-btn");

  document.addEventListener("click", closeAllSelect);
  $form.addEventListener("submit", (e) => handleSearchCity(e));
  $menuBtn.addEventListener("click", handleMenu);
  $TempScaleBtn.addEventListener("click", (e) => handleChangeTempScale(e));
}

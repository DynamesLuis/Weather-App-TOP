import {
  handleChangeTempScale,
  handleDefaultSubmit,
  handleSearchCity,
} from "../coordinator/coordinator";
import { closeAllSelect } from "../ui/customSelect";
import { $menu, $menuBtn } from "../ui/domSelector";
import { closeMenú, handleMenu } from "../ui/handleMenu";
import { switchTheme } from "../ui/switchTheme";

export default function initApp() {
  initEvents();
  handleDefaultSubmit();
}

function initEvents() {
  const $form = document.querySelector(".form");
  const $TempScaleBtn = document.querySelector(".temp-scale-btn");
  const $themeBtn = document.querySelector(".theme-btn");

  document.addEventListener("click", (e) => {
    if (!$menuBtn.contains(e.target) && !$menu.contains(e.target)) {
      closeAllSelect();
      closeMenú();
    }
  });
  $form.addEventListener("submit", (e) => handleSearchCity(e));
  $menuBtn.addEventListener("click", (e) => handleMenu(e));
  $TempScaleBtn.addEventListener("click", (e) => handleChangeTempScale(e));
  $themeBtn.addEventListener("click", switchTheme);
}

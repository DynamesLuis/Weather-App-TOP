import {
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

  document.addEventListener("click", closeAllSelect);
  $form.addEventListener("submit", (e) => handleSearchCity(e));
  $menuBtn.addEventListener("click", handleMenu);
}

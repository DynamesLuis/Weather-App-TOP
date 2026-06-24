import { handleDefaultSubmit, handleSearchCity } from "../coordinator/coordinator";
import { closeAllSelect } from "../ui/customSelect";

export default function initApp() {
  initEvents();
  handleDefaultSubmit();
}

function initEvents() {
  const $form = document.querySelector(".form");

  document.addEventListener("click", closeAllSelect);
  $form.addEventListener("submit", (e) => handleSearchCity(e));
}

import { handleDefaultSubmit } from "../coordinator/coordinator";
import { closeAllSelect } from "../ui/customSelect";

export default function initApp() {
  initEvents();
  handleDefaultSubmit();
}

function initEvents() {
  document.addEventListener("click", closeAllSelect);
}

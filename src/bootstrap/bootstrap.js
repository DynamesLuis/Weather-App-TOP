import { handleDefaultSubmit } from "../coordinator/coordinator";
import { closeAllSelect, initCustomSelect } from "../ui/customSelect";

export default function initApp() {
    initCustomSelect();
    initEvents();
    handleDefaultSubmit();
}

function initEvents() {
    document.addEventListener('click', closeAllSelect);
}
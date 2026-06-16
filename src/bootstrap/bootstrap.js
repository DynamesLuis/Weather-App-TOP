import { closeAllSelect, initCustomSelect } from "../ui/customSelect";

export default function initApp() {
    initCustomSelect();
    initEvents();
}

function initEvents() {
    document.addEventListener("click", closeAllSelect);
}
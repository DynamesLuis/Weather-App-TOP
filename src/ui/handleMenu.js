import { $menu } from "./domSelector";

function handleMenu() {
  if ($menu.classList.contains("hidden")) {
    openMenu();
  } else {
    closeMenú();
  }
}

function closeMenú() {
  $menu.classList.add("hidden");
}

function openMenu() {
  $menu.classList.remove("hidden");
}

export { handleMenu, closeMenú };

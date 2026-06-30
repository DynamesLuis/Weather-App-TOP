import { changeThemeIcon } from "./changeConfigIcons";

function switchTheme() {
  const root = document.documentElement;
  root.classList.toggle("dark");
  const isDark = root.classList.contains("dark")
  changeThemeIcon(isDark);
}

export { switchTheme };

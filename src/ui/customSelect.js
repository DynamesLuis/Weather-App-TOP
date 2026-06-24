import { getDays } from "../appState/appState";
import { getDay } from "../utils/date";
import { renderHourlyForecast } from "./renderHourlyForecast";

function initCustomSelect() {
  initOptions();
  let customSelect, i, j, l, ll, selElmnt, a, b, c;
  /* Look for any elements with the class "custom-select": */
  customSelect = document.getElementsByClassName("custom-select");
  const $seletSelected = document.querySelector(".select-selected");
  const $seletItems = document.querySelector(".select-items");
  if ($seletItems) $seletItems.remove();
  if ($seletSelected) $seletSelected.remove();
  l = customSelect.length;
  for (i = 0; i < l; i++) {
    selElmnt = customSelect[i].getElementsByTagName("select")[0];
    ll = selElmnt.length;
    /* For each element, create a new DIV that will act as the selected item: */
    a = document.createElement("DIV");
    a.setAttribute("class", "select-selected");
    a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
    customSelect[i].appendChild(a);
    /* For each element, create a new DIV that will contain the option list: */
    b = document.createElement("DIV");
    b.setAttribute("class", "select-items select-hide");
    for (j = 0; j < ll; j++) {
      /* For each option in the original select element,
    create a new DIV that will act as an option item: */
      c = document.createElement("DIV");
      c.innerHTML = selElmnt.options[j].innerHTML;
      c.dataset.datetime = selElmnt.options[j].dataset.datetime;
      c.addEventListener("click", function (e) {
        /* When an item is clicked, update the original select box,
        and the selected item: */
        var y, i, k, s, h, sl, yl;
        s = this.parentNode.parentNode.getElementsByTagName("select")[0];
        sl = s.length;
        h = this.parentNode.previousSibling;
        for (i = 0; i < sl; i++) {
          if (s.options[i].innerHTML == this.innerHTML) {
            s.selectedIndex = i;
            h.innerHTML = this.innerHTML;
            y = this.parentNode.getElementsByClassName("same-as-selected");
            yl = y.length;
            for (k = 0; k < yl; k++) {
              y[k].removeAttribute("class");
            }
            this.setAttribute("class", "same-as-selected");
            renderHourlyForecast(this.dataset.datetime);
            break;
          }
        }
        h.click();
      });
      b.appendChild(c);
    }
    customSelect[i].appendChild(b);
    a.addEventListener("click", function (e) {
      /* When the select box is clicked, close any other select boxes,
    and open/close the current select box: */
      e.stopPropagation();
      closeAllSelect(this);
      this.nextSibling.classList.toggle("select-hide");
      this.classList.toggle("select-arrow-active");
    });
  }
}

function closeAllSelect(elmnt) {
  /* A function that will close all select boxes in the document,
  except the current select box: */
  let x,
    y,
    i,
    xl,
    yl,
    arrNo = [];
  x = document.getElementsByClassName("select-items");
  y = document.getElementsByClassName("select-selected");
  xl = x.length;
  yl = y.length;
  for (i = 0; i < yl; i++) {
    if (elmnt == y[i]) {
      arrNo.push(i);
    } else {
      y[i].classList.remove("select-arrow-active");
    }
  }
  for (i = 0; i < xl; i++) {
    if (arrNo.indexOf(i)) {
      x[i].classList.add("select-hide");
    }
  }
}

function initOptions() {
  const $select = document.querySelector(".custom-select select");
  $select.innerHTML = "";
  getDays().forEach((day) => {
    const $option = document.createElement("option");
    $option.textContent = getDay(day.datetime);
    $option.dataset.datetime = day.datetime;
    $select.appendChild($option);
  });
}

export { initCustomSelect, closeAllSelect };

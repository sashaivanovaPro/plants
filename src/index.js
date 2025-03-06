import "core-js/stable";
import "regenerator-runtime/runtime";
import "./sass/main.scss";
import { burgerIconClick, outOfIconClick } from "./modules/burger";
import { serviceBlur } from "./modules/blur";
import { accordionSwitch } from "./modules/accordion";
import {
  dropdownCitySwitch,
  closeDropdown,
  makeCardsVisible,
} from "./modules/dropdown";

window.onload = function () {
  // burger handler
  burgerIconClick();
  outOfIconClick();

  //service section blur not chosen elements

  serviceBlur();

  // Accordion prices

  accordionSwitch();

  // Dropdown from contacts section

  dropdownCitySwitch();
  closeDropdown();
  makeCardsVisible();
};

//  Smooth navigation

const smooth = document.querySelectorAll(".smooth__link[data-goto]");

if (smooth.length > 0) {
  smooth.forEach((smooth) => {
    smooth.addEventListener("click", navLinkClick);
  });
  function navLinkClick(e) {
    const navLink = e.target;
    if (navLink.dataset.goto && document.querySelector(navLink.dataset.goto)) {
      const gotoSection = document.querySelector(navLink.dataset.goto);
      const gotoSectionPosition = gotoSection.getBoundingClientRect().top;
      window.scrollTo({
        top: gotoSectionPosition,
        behavior: "smooth",
      });
      e.preventDefault();
    }
  }
}

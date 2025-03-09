import "core-js/stable";
import "regenerator-runtime/runtime";
import "./sass/main.scss";
import { serviceBlur } from "./modules/blur";
import { accordionSwitch } from "./modules/accordion";
import {
  dropdownCitySwitch,
  closeDropdown,
  makeCardsVisible,
} from "./modules/dropdown";
import { toggleBurgerMenu } from "./modules/burger";

document.addEventListener("DOMContentLoaded", function () {
  serviceBlur();

  // Accordion prices

  accordionSwitch();

  // Dropdown from contacts section

  dropdownCitySwitch();
  closeDropdown();
  makeCardsVisible();
});

import "core-js/stable";
import "regenerator-runtime/runtime";
import "./sass/main.scss";
import { serviceBlur } from "./modules/blur";
import { accordionSwitch } from "./modules/accordion";
import { toggleBurgerMenu } from "./modules/burger";
import {
  dropdownCitySwitch,
  closeDropdown,
  makeCardsVisible,
} from "./modules/dropdown";

window.onload = function () {
  //service section blur not chosen elements

  serviceBlur();

  // Accordion prices

  accordionSwitch();

  // Dropdown from contacts section

  dropdownCitySwitch();
  closeDropdown();
  makeCardsVisible();
};

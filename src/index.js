import "core-js/stable";
import "regenerator-runtime/runtime";
import "./sass/main.scss";
import { serviceBlur } from "./modules/blur";
import { accordionSwitch } from "./modules/accordion";
import { dropdownCitySwitch } from "./modules/dropdown";
import { toggleBurgerMenu } from "./modules/burger";
import { handleSmoothScroll } from "./modules/scroll";

const initApp = () => {
  // Initialize modules
  serviceBlur();
  accordionSwitch();
  dropdownCitySwitch();

  // Initialize smooth scroll for Learn More button
  const learnMoreBtn = document.querySelector(".button--more");
  if (learnMoreBtn) {
    learnMoreBtn.addEventListener("click", handleSmoothScroll);
  }
};

document.addEventListener("DOMContentLoaded", initApp);

import {accordionSwitch} from './js/accordion';
import {burgerIconClick,outofIconClick} from './js/burger';
import {serviceBlur} from './js/blur';
import './sass/newstyle.scss';
import {dropdownCitySwitch,closeDropdown, makeCardsVisible} from './js/dropdown';

window.onload = function(){
  console.log("Hello RS!");

  // burger handler
  burgerIconClick();
  outofIconClick();

  //service section blur not choosed elements

  serviceBlur ();

  // Accordion prices

  accordionSwitch();

  // Smooth links

  // navLinkClick();

  // Dropdown from contacts section 

  dropdownCitySwitch();
  closeDropdown();
  makeCardsVisible();
}



// Плавная прокрутка -- Smooth navigation

const smooth = document.querySelectorAll(".smooth__link[data-goto]");

if (smooth.length > 0) {
  smooth.forEach(smooth => {
      smooth.addEventListener('click', navLinkClick);
  });
  function navLinkClick(e) {
      const navLink = e.target;
      if (navLink.dataset.goto && document.querySelector(navLink.dataset.goto)) {
          const gotoSection = document.querySelector(navLink.dataset.goto);
          const gotoSectionPosition = gotoSection.getBoundingClientRect().top;
          window.scrollTo({
              top: gotoSectionPosition,
              behavior: "smooth"
          });
          e.preventDefault();
      }
  }
}
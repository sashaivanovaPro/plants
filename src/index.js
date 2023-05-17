import {accordionSwitch} from './js/accordion';
import {burgerIconClick,outofIconClick} from './js/burger';
import {serviceBlur} from './js/blur';
import './sass/newstyle.scss';
// import {navLinkClick} from './js/common';
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

  // navLinkClick(e);

  // Dropdown from contacts section 

  dropdownCitySwitch();
  closeDropdown();
  makeCardsVisible();
}
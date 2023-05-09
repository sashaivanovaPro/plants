import {accordionSwitch,hideOption,hideDescription} from './src/js/accordion'

window.onload = function(){
  console.log("Hello RS!");

  // burger handler
  burgerIconClick();
  outofIconClick();

  //service section blur not choosed elements

  serviceBlur ();

  // Accordion prices

  accordionSwitch();
  hideOption();
  hideDescription();

}
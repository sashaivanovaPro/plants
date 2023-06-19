/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sass_newstyle_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sass/newstyle.scss */ "./src/sass/newstyle.scss");
/* harmony import */ var _modules_burger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/burger */ "./src/modules/burger.js");
/* harmony import */ var _modules_blur__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/blur */ "./src/modules/blur.js");
/* harmony import */ var _modules_accordion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/accordion */ "./src/modules/accordion.js");
/* harmony import */ var _modules_dropdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/dropdown */ "./src/modules/dropdown.js");





window.onload = function () {
  console.log("Hello RS!");

  // burger handler
  (0,_modules_burger__WEBPACK_IMPORTED_MODULE_1__.burgerIconClick)();
  (0,_modules_burger__WEBPACK_IMPORTED_MODULE_1__.outofIconClick)();

  //service section blur not choosed elements

  (0,_modules_blur__WEBPACK_IMPORTED_MODULE_2__.serviceBlur)();

  // Accordion prices

  (0,_modules_accordion__WEBPACK_IMPORTED_MODULE_3__.accordionSwitch)();

  // Dropdown from contacts section 

  (0,_modules_dropdown__WEBPACK_IMPORTED_MODULE_4__.dropdownCitySwitch)();
  (0,_modules_dropdown__WEBPACK_IMPORTED_MODULE_4__.closeDropdown)();
  (0,_modules_dropdown__WEBPACK_IMPORTED_MODULE_4__.makeCardsVisible)();
};

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

/***/ }),

/***/ "./src/modules/accordion.js":
/*!**********************************!*\
  !*** ./src/modules/accordion.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "accordionSwitch": () => (/* binding */ accordionSwitch)
/* harmony export */ });
// Accordion from prices section

const accordionSwitch = () => {
  const priceItems = document.querySelectorAll('.accordion__item');
  const priceCards = document.querySelectorAll('.price-card');
  // console.log(priceItems);
  priceItems.forEach(item => {
    item.addEventListener('click', () => {
      // initialy close all description window and shows all tarif buttons 

      priceCards.forEach(element => {
        element.classList.add('accordion-description-close');
      });
      priceItems.forEach(variant => {
        variant.classList.remove('accordion-button-close');
      });
      // Dropdown cklicking - makes button disappeared and shows description
      item.nextElementSibling.classList.remove('accordion-description-close');
      item.classList.add('accordion-button-close');
    });
  });

  // // console.log(priceCards);
  priceCards.forEach(card => {
    card.addEventListener('click', () => {
      // Dropup, cklicking - makes description disappeared and shows button
      card.previousElementSibling.classList.remove('accordion-button-close');
      card.classList.add('accordion-description-close');
    });
  });
};


// Slow working version 

// export const accordionSwitch = () => {
//   document.querySelector('.accordion').addEventListener('click', (e) =>{
//     if (e.target.classList.contains('accordion__item')){
//       let clickedOption = e.target;
//       let card = clickedOption.nextElementSibling;
//       hideOption (clickedOption,card);         
//     } if (e.target.classList.contains('price-card')){
//       let clickedCard = e.target;
//       let option = clickedCard.previousElementSibling;
//       hideDescription (clickedCard, option);
//     }
//   })
// }

// export const hideOption = (clickedOption,card) => {
//     clickedOption.classList.add('accordion-close');
//     card.classList.remove('accordion-close');
// }

// export const hideDescription = (clickedCard, option) => {
//     option.classList.remove('accordion-close');
//     clickedCard.classList.add('accordion-close');
// }

/***/ }),

/***/ "./src/modules/blur.js":
/*!*****************************!*\
  !*** ./src/modules/blur.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "serviceBlur": () => (/* binding */ serviceBlur)
/* harmony export */ });
// Blur of unactive service cards after choosing category

let buttons = document.querySelectorAll('.service__button');
let services = document.querySelectorAll('.grid__wrapper .grid__item');
let buttonNameSet = [];
const serviceBlur = () => {
  document.querySelector('.service__button--wrapper').addEventListener('click', e => {
    if (e.target.classList.contains('service__button')) {
      let clickedButton = e.target;
      let buttonName = e.target.id;
      console.log(buttonName);
      let buttonSet = document.querySelectorAll('.button__service-clicked');
      // console.log(buttonSet.length);

      // - 1 - while all three buttons are clicked - reset button active state amd remove blur effect from all services by adding unblur class

      if (!clickedButton.classList.contains('button__service-clicked') && buttonSet.length === 2) {
        addFocus(clickedButton); // add active state to button         
        buttons.forEach(button => {
          button.classList.remove('button__service-clicked');
          buttonNameSet.pop(buttonName);
        });
        services.forEach(service => {
          service.classList.add('grid__item--no-blur');
        });
      }
      // - 2 - while two buttons are clicked - clicked buttons are in active state
      //       and only cards of uncklicked cathegory are blured
      else if (!clickedButton.classList.contains('button__service-clicked') && buttonSet.length === 1) {
        addFocus(clickedButton); // add active state to button
        buttonNameSet.push(buttonName);
        //remove unblur class for all services
        services.forEach(service => {
          service.classList.remove('grid__item--no-blur');
        });
        // find not clicked button name and return unblur class for all services instead of this button
        const thirdButtonName = ['garden', 'lawn', 'planting'].find(buttonName => !buttonNameSet.includes(buttonName));
        services.forEach(service => {
          if (!service.classList.contains(thirdButtonName)) {
            service.classList.add('grid__item--no-blur');
          }
        });
      }

      // - 3 - while two buttons are clicked an we click active button to remove active class
      //       and only cards of uncklicked cathegory are blured
      else if (clickedButton.classList.contains('button__service-clicked') && buttonSet.length === 2) {
        removeFocus(clickedButton); // remove active state from button

        //remove unblur class for all services
        services.forEach(service => {
          service.classList.remove('grid__item--no-blur');
        });
        let nameIndex = buttonNameSet.indexOf(buttonName);
        buttonNameSet.splice(nameIndex, 1);
        let onlyButtonName = buttonNameSet[0];
        console.log(onlyButtonName);
        services.forEach(service => {
          if (service.classList.contains(onlyButtonName)) {
            service.classList.add('grid__item--no-blur');
          }
        });
      }
      // - 4 - one button is clicked - it recives active state and cards of two other categogories are blured
      else if (!clickedButton.classList.contains('button__service-clicked') && buttonSet.length === 0) {
        addFocus(clickedButton);
        filterSelectedServices(e, clickedButton);
        buttonNameSet.push(buttonName);
      } else if (clickedButton.classList.contains('button__service-clicked') && buttonSet.length === 1) {
        removeFocus(clickedButton);
        filterSelectedServices(e, clickedButton);
        buttonNameSet.pop(buttonName);
      }
      console.log(buttonNameSet);
    }
  });
};

// change the button color to active state

const addFocus = clickedButton => {
  clickedButton.classList.add('button__service-clicked');
};

// change back the button color to default state

const removeFocus = clickedButton => {
  //   
  clickedButton.classList.remove('button__service-clicked');
};

// blur service card according to cklicked button

const filterSelectedServices = (e, clickedButton) => {
  let buttonName = e.target.id;

  // remove class reseting blur from elements without id corresponded to button name
  services.forEach(grid => {
    if (!grid.classList.contains(buttonName)) {
      grid.classList.toggle('grid__item--no-blur');
    }
  });
};


/***/ }),

/***/ "./src/modules/burger.js":
/*!*******************************!*\
  !*** ./src/modules/burger.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "burgerIconClick": () => (/* binding */ burgerIconClick),
/* harmony export */   "outofIconClick": () => (/* binding */ outofIconClick)
/* harmony export */ });
// Burger handler

const burgerItem = document.querySelector(".burger");
const menu = document.querySelector(".header__nav");
const overlay = document.querySelector('.header__overlay');
const body = document.querySelector('body');
const burgerIconClick = () => {
  menu.classList.toggle('header__nav--active');
  burgerItem.classList.toggle('burger__move');
  overlay.classList.toggle('header__overlay--active');
  body.classList.toggle('hidden');
};
const outofIconClick = () => {
  menu.classList.remove('header__nav--active');
  burgerItem.classList.remove('burger__move');
  overlay.classList.remove('header__overlay--active');
  body.classList.remove('hidden');
};
burgerItem.addEventListener('click', () => {
  burgerIconClick();
});
menu.addEventListener('click', () => {
  outofIconClick();
});
overlay.addEventListener('click', () => {
  outofIconClick();
});


/***/ }),

/***/ "./src/modules/dropdown.js":
/*!*********************************!*\
  !*** ./src/modules/dropdown.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "closeDropdown": () => (/* binding */ closeDropdown),
/* harmony export */   "dropdownCitySwitch": () => (/* binding */ dropdownCitySwitch),
/* harmony export */   "makeCardsVisible": () => (/* binding */ makeCardsVisible)
/* harmony export */ });
// Dropdown (DD) from contacts section 

const dropdownBtn = document.querySelector('.dropdown__button');
// const cityCard = document.querySelectorAll('.city__card');
const dropdownList = document.querySelector('.dropdown__list');
const cityList = document.querySelectorAll('.dropdown__list--item');
const rotation = document.querySelector('#rotate');
const cityPicker = document.querySelector('.dropdown');
console.log(cityPicker);

// make Dropdown closed when clicking outside it 

const closeDropdown = () => {
  document.addEventListener('click', e => {
    const btnTarget = e.target;
    // console.log(btnTarget); 
    if (dropdownBtn.firstElementChild.innerText === 'City' && e.target !== dropdownBtn && !dropdownBtn.contains(btnTarget) && dropdownList.classList.contains('dropdown__list--visible')) {
      dropdownList.classList.remove('dropdown__list--visible');
      dropdownBtn.classList.remove('dropdown__button--active');
    }
    if (e.target !== dropdownBtn && !dropdownBtn.contains(btnTarget) && dropdownList.classList.contains('dropdown__list--visible')) {
      // console.log('outside click'); 
      dropdownList.classList.remove('dropdown__list--visible');
      rotation.style.setProperty('transform', 'initial');
    }
  });
};
const dropdownCitySwitch = () => {
  dropdownBtn.addEventListener('click', () => {
    // toggling active class to initial City choice (color change + arrow rotation)
    dropdownBtn.classList.toggle('dropdown__button--active');

    // toggle visibility of City List
    dropdownList.classList.toggle('dropdown__list--visible');

    // make contact block image disappeared after opening city list for mobile devices 
    const screenWidth = window.innerWidth;
    const contactsImage = document.querySelector('.contacts__image');
    const contactsWrapper = document.querySelector('.contacts__wrapper');
    // console.log(screenWidth); 
    // for first click img disappears and when list is open add a padding bottom for section to save the section height same size
    if (screenWidth < 425.98 && dropdownBtn.firstElementChild.innerText === 'City') {
      contactsImage.style.display = "none";
      contactsWrapper.style.paddingBottom = "27.4rem"; // add more space than in Figma not to change elemebts position and margins between elements
    }
    // when we click to DD button without chosing city - img come back and section padding bottom returns to zero 
    if (screenWidth < 425.98 && dropdownBtn.firstElementChild.innerText === 'City' && !dropdownList.classList.contains('dropdown__list--visible')) {
      contactsImage.style.display = "block";
      contactsWrapper.style.paddingBottom = "0rem";
    }

    // when the city is selected color stay active + arrow rotation when click City button
    if (dropdownBtn.firstElementChild.innerText != 'City') {
      dropdownBtn.classList.add('dropdown__button--active');
      rotation.style.setProperty('transform', 'rotate(180deg)');
    }
    // moving back the arrow icon
    if (dropdownBtn.firstElementChild.innerText !== 'City' && !dropdownList.classList.contains('dropdown__list--visible')) {
      rotation.style.setProperty('transform', 'initial');
    }

    // acting while clicking dropdown city list
    cityList.forEach(city => {
      city.addEventListener('click', () => {
        // raplacing city name in City button with selected city name
        dropdownBtn.firstElementChild.innerText = city.innerText;

        // remove visibility of City List after city is selected
        dropdownList.classList.remove('dropdown__list--visible');

        // when the city is selected color stay active + arrow rotation of City button
        // after clicking city name from city list
        if (dropdownBtn.firstElementChild.innerText !== 'City') {
          rotation.style.setProperty('transform', 'initial');
          if (screenWidth < 425.98) {
            contactsWrapper.style.paddingBottom = "3.3rem"; // add padding bottom to section to have a space under a card for mobile devices
          }
        }
      });
    });
  });
};

// make adress Cards visible

const makeCardsVisible = () => {
  const adressLinks = document.querySelectorAll('[data-value]');
  const adressCards = document.querySelectorAll('[data-value-content]');
  adressLinks.forEach(adress => {
    adress.addEventListener('click', () => {
      // make all cards invisible

      adressCards.forEach(item => {
        item.classList.add('card-hidden');
      });

      // make visible selected card 

      const showAdress = document.querySelector('#' + adress.dataset.value);
      showAdress.classList.remove('card-hidden');

      // change space between dropdown and image of contacts section due to its initial value 

      const wrapper = document.querySelector('.contacts__wrapper');
      if (wrapper.style.gap !== 0) {
        wrapper.style.setProperty('gap', '1.5rem');
      }
    });
  });
};


/***/ }),

/***/ "./src/sass/newstyle.scss":
/*!********************************!*\
  !*** ./src/sass/newstyle.scss ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	__webpack_require__("./src/index.js");
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/sass/newstyle.scss");
/******/ 	
/******/ })()
;
//# sourceMappingURL=bundle.js.map
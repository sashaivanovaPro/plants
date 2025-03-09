// Dropdown (DD) from contacts section

const dropdownBtn = document.querySelector(".dropdown__button");
// const cityCard = document.querySelectorAll('.city__card');
const dropdownList = document.querySelector(".dropdown__list");
const cityList = document.querySelectorAll(".dropdown__list--item");
const rotation = document.querySelector("#rotate");
const cityPicker = document.querySelector(".dropdown");
// console.log(cityPicker);

// make Dropdown closed when clicking outside it

const closeDropdown = () => {
  document.addEventListener("click", (e) => {
    const btnTarget = e.target;
    // console.log(btnTarget);
    if (
      dropdownBtn.firstElementChild.innerText === "City" &&
      e.target !== dropdownBtn &&
      !dropdownBtn.contains(btnTarget) &&
      dropdownList.classList.contains("dropdown__list--visible")
    ) {
      dropdownList.classList.remove("dropdown__list--visible");
      dropdownBtn.classList.remove("dropdown__button--active");
    }
    if (
      e.target !== dropdownBtn &&
      !dropdownBtn.contains(btnTarget) &&
      dropdownList.classList.contains("dropdown__list--visible")
    ) {
      // console.log('outside click');
      dropdownList.classList.remove("dropdown__list--visible");
      rotation.style.setProperty("transform", "initial");
    }
  });
};

const dropdownCitySwitch = () => {
  dropdownBtn.addEventListener("click", () => {
    // toggling active class to initial City choice (color change + arrow rotation)
    dropdownBtn.classList.toggle("dropdown__button--active");

    // toggle visibility of City List
    dropdownList.classList.toggle("dropdown__list--visible");

    // make contact block image disappeared after opening city list for mobile devices
    const screenWidth = window.innerWidth;
    const contactsImage = document.querySelector(".contacts__image");
    const contactsWrapper = document.querySelector(".contacts__wrapper");
    // console.log(screenWidth);
    // for first click img disappears and when list is open add a padding bottom for section to save the section height same size
    if (
      screenWidth < 425.98 &&
      dropdownBtn.firstElementChild.innerText === "City"
    ) {
      contactsImage.style.display = "none";
      contactsWrapper.style.paddingBottom = "27.4rem"; // add more space than in Figma not to change elemebts position and margins between elements
    }
    // when we click to DD button without chosing city - img come back and section padding bottom returns to zero
    if (
      screenWidth < 425.98 &&
      dropdownBtn.firstElementChild.innerText === "City" &&
      !dropdownList.classList.contains("dropdown__list--visible")
    ) {
      contactsImage.style.display = "block";
      contactsWrapper.style.paddingBottom = "0rem";
    }

    // when the city is selected color stay active + arrow rotation when click City button
    if (dropdownBtn.firstElementChild.innerText != "City") {
      dropdownBtn.classList.add("dropdown__button--active");
      rotation.style.setProperty("transform", "rotate(180deg)");
    }
    // moving back the arrow icon
    if (
      dropdownBtn.firstElementChild.innerText !== "City" &&
      !dropdownList.classList.contains("dropdown__list--visible")
    ) {
      rotation.style.setProperty("transform", "initial");
    }

    // acting while clicking dropdown city list
    cityList.forEach((city) => {
      city.addEventListener("click", () => {
        // raplacing city name in City button with selected city name
        dropdownBtn.firstElementChild.innerText = city.innerText;

        // remove visibility of City List after city is selected
        dropdownList.classList.remove("dropdown__list--visible");

        // when the city is selected color stay active + arrow rotation of City button
        // after clicking city name from city list
        if (dropdownBtn.firstElementChild.innerText !== "City") {
          rotation.style.setProperty("transform", "initial");
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
  const adressLinks = document.querySelectorAll("[data-value]");
  const adressCards = document.querySelectorAll("[data-value-content]");

  adressLinks.forEach((adress) => {
    adress.addEventListener("click", () => {
      // make all cards invisible

      adressCards.forEach((item) => {
        item.classList.add("card-hidden");
      });

      // make visible selected card

      const showAdress = document.querySelector("#" + adress.dataset.value);
      showAdress.classList.remove("card-hidden");

      // change space between dropdown and image of contacts section due to its initial value

      const wrapper = document.querySelector(".contacts__wrapper");

      if (wrapper.style.gap !== 0) {
        wrapper.style.setProperty("gap", "1.5rem");
      }
    });
  });
};

export { dropdownCitySwitch, closeDropdown, makeCardsVisible };

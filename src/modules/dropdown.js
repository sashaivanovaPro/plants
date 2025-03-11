// Dropdown (DD) functionality for city selection in the contacts section

const dropdownBtn = document.querySelector(".dropdown__button");
const dropdownList = document.querySelector(".dropdown__list");
const cityList = document.querySelectorAll(".dropdown__list--item");
const rotation = document.querySelector("#rotate");
const cityPicker = document.querySelector(".dropdown");
const contactsSection = document.querySelector(".contacts");
const contactsImage = document.querySelector(".contacts__image");
const contactsWrapper = document.querySelector(".contacts__wrapper");

/**
 * Handle clicks inside the contacts section
 * Closes DD when clicking outside but inside the contacts section
 */
contactsSection.addEventListener("click", (e) => {
  const isClickInsideDropdown = cityPicker.contains(e.target);

  if (
    dropdownBtn.getAttribute("aria-expanded") === "true" &&
    !isClickInsideDropdown
  ) {
    setDropdownState(false);
  }
});

/**
 * Handle clicks outside the contacts section
 * Closes DD when clicking anywhere outside the contacts section
 */
document.addEventListener("click", (e) => {
  if (
    !contactsSection.contains(e.target) &&
    dropdownBtn.getAttribute("aria-expanded") === "true"
  ) {
    setDropdownState(false);
  }
});

/**
 * Sets the dropdown state (open or closed)
 * @param {boolean} isOpen - Whether the DD should be open
 */
const setDropdownState = (isOpen) => {
  dropdownBtn.setAttribute("aria-expanded", isOpen);
  dropdownList.hidden = !isOpen;

  dropdownBtn.classList.toggle("dropdown__button--active", isOpen);

  rotation.style.transform = isOpen ? "rotate(180deg)" : "initial";

  handleMobileLayout(isOpen);
};

/**
 * Adjusts layout for mobile devices
 * @param {boolean} isOpen - Whether the DD is open
 */
const handleMobileLayout = (isOpen) => {
  const screenWidth = window.innerWidth;
  const isCityDefaultLabel =
    dropdownBtn.firstElementChild.textContent === "City";

  if (screenWidth < 425.98 && isCityDefaultLabel) {
    contactsImage.style.display = isOpen ? "none" : "block";
    contactsWrapper.style.paddingBottom = isOpen ? "27.4rem" : "0";
  }
};

/**
 * Initialize DD functionality for city selection
 */
const dropdownCitySwitch = () => {
  const addressCards = document.querySelectorAll("[data-value-content]");
  addressCards.forEach((card) => {
    card.hidden = true;
  });

  // Toggle DD state when clicking the DD button
  dropdownBtn.addEventListener("click", () => {
    const currentState = dropdownBtn.getAttribute("aria-expanded") === "true";
    setDropdownState(!currentState);
  });

  // Handle city selection
  cityList.forEach((city) => {
    city.addEventListener("click", () => {
      // Update DD label with selected city name
      dropdownBtn.firstElementChild.textContent = city.textContent;

      // Close the DD
      setDropdownState(false);

      // Keep the DD button in active state
      dropdownBtn.classList.add("dropdown__button--active");

      // Adjust padding for mobile devices
      if (window.innerWidth < 425.98) {
        contactsWrapper.style.paddingBottom = "3.3rem";
      }
      // Show the address card for the selected city
      showAddressCard(city.dataset.value);
    });
  });
};

/**
 * Display the address card for the selected city
 * @param {string} cityValue - The value attribute of the selected city
 */
const showAddressCard = (cityValue) => {
  const addressCards = document.querySelectorAll("[data-value-content]");

  // Hide all address cards
  addressCards.forEach((card) => {
    card.hidden = true;
  });

  // Show the selected address card
  const selectedCard = document.querySelector("#" + cityValue);
  if (selectedCard) {
    selectedCard.hidden = false;

    // Adjust layout spacing
    contactsWrapper.style.gap = "1.5rem";
  }
};

export { dropdownCitySwitch };

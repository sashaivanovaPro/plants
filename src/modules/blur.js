// Service card visibility management based on category selection

let buttons = document.querySelectorAll(".service__button");
let services = document.querySelectorAll(".grid__wrapper .grid__item");

const serviceBlur = () => {
  let buttonNameSet = [];

  // Helper functions for card blur management
  const removeBlurFromAll = () => {
    services.forEach((service) => {
      service.classList.add("grid__item--no-blur");
    });
  };

  const addBlurToAll = () => {
    services.forEach((service) => {
      service.classList.remove("grid__item--no-blur");
    });
  };

  // Set blur for cards based on category
  const setBlurByCategory = (categoryName, includeCategory = true) => {
    services.forEach((service) => {
      const shouldHaveBlur = includeCategory
        ? !service.classList.contains(categoryName)
        : service.classList.contains(categoryName);

      if (shouldHaveBlur) {
        service.classList.remove("grid__item--no-blur");
      } else {
        service.classList.add("grid__item--no-blur");
      }
    });
  };

  // Helper functions for active category array management
  const addButtonToSet = (buttonName) => {
    if (!buttonNameSet.includes(buttonName)) {
      buttonNameSet.push(buttonName);
    }
    return buttonNameSet;
  };

  const removeButtonFromSet = (buttonName) => {
    const index = buttonNameSet.indexOf(buttonName);
    if (index !== -1) {
      buttonNameSet.splice(index, 1);
    }
    return buttonNameSet;
  };

  const getButtonsNotInSet = () => {
    return ["garden", "lawn", "planting"].filter(
      (btn) => !buttonNameSet.includes(btn)
    );
  };

  // Category button click handler
  document
    .querySelector(".service__button--wrapper")
    .addEventListener("click", (e) => {
      if (e.target.classList.contains("service__button")) {
        let clickedButton = e.target;
        let buttonName = e.target.id;
        let buttonSet = document.querySelectorAll(".button__service-clicked");

        // Scenario 1: Selecting third category resets all filters
        if (
          !clickedButton.classList.contains("button__service-clicked") &&
          buttonSet.length === 2
        ) {
          addFocus(clickedButton);
          buttons.forEach((button) => {
            button.classList.remove("button__service-clicked");
            buttonNameSet.pop(buttonName);
          });
          buttonNameSet = []; // Reset active categories array
          removeBlurFromAll();
        }

        // Scenario 2: Selecting second category - show both selected categories
        else if (
          !clickedButton.classList.contains("button__service-clicked") &&
          buttonSet.length === 1
        ) {
          addFocus(clickedButton);
          addButtonToSet(buttonName);
          addBlurToAll();

          // Find the unselected category and blur only it
          const [thirdButtonName] = getButtonsNotInSet();
          setBlurByCategory(thirdButtonName, false);
        }

        // Scenario 3: Canceling one of two active categories
        else if (
          clickedButton.classList.contains("button__service-clicked") &&
          buttonSet.length === 2
        ) {
          removeFocus(clickedButton);
          addBlurToAll();
          removeButtonFromSet(buttonName);

          // Show only the remaining selected category
          let onlyButtonName = buttonNameSet[0];
          setBlurByCategory(onlyButtonName, true);
        }

        // Scenario 4: Selecting first category - show only this one
        else if (
          !clickedButton.classList.contains("button__service-clicked") &&
          buttonSet.length === 0
        ) {
          addFocus(clickedButton);
          setBlurByCategory(buttonName, true);
          addButtonToSet(buttonName);
        }

        // Scenario 5: Canceling the only active category
        else if (
          clickedButton.classList.contains("button__service-clicked") &&
          buttonSet.length === 1
        ) {
          removeFocus(clickedButton);
          removeButtonFromSet(buttonName);
          removeBlurFromAll(); // Show all cards
        }
      }
    });
};

// Set button active state
const addFocus = (clickedButton) => {
  clickedButton.classList.add("button__service-clicked");
  clickedButton.setAttribute("aria-pressed", true);
};

// Remove button active state
const removeFocus = (clickedButton) => {
  //
  clickedButton.classList.remove("button__service-clicked");
  clickedButton.setAttribute("aria-pressed", false);
};

export { serviceBlur };

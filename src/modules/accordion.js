// Accordion functionality for pricing section

export const accordionSwitch = () => {
  const priceButtons = document.querySelectorAll(".accordion__item");
  const priceCards = document.querySelectorAll(".price-card");

  // Reset accordion to initial state: all buttons visible, all panels hidden
  const resetAccordionState = () => {
    priceButtons.forEach((button) => button.removeAttribute("hidden"));
    priceButtons.forEach((button) =>
      button.setAttribute("aria-expanded", "false")
    );
    priceCards.forEach((card) => card.setAttribute("hidden", ""));
  };

  // Hide the button that was clicked
  const hideClickedButton = (button) => {
    button.setAttribute("hidden", "");
  };

  // Show specific panel (price card)
  const showPanel = (panel) => {
    panel.removeAttribute("hidden");
  };

  // Mark button as expanded for accessibility
  const setClickedButtonAsExpanded = (button) => {
    button.setAttribute("aria-expanded", "true");
  };

  // Handle clicks on price buttons (open respective panels)
  priceButtons.forEach((button) => {
    button.addEventListener("click", () => {
      resetAccordionState();

      hideClickedButton(button);
      const panel = button.nextElementSibling;
      showPanel(panel);
      setClickedButtonAsExpanded(button);
    });
  });

  // Handle clicks on price cards (close them)
  priceCards.forEach((card) => {
    card.addEventListener("click", () => {
      //Tab is button previous to card
      const tab = card.previousElementSibling;
      card.setAttribute("hidden", "");
      tab.removeAttribute("hidden");
      tab.setAttribute("aria-expanded", "false");
    });
  });
};

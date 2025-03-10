// Burger handler

const burger = document.querySelector(".burger");
const menu = document.querySelector(".header__nav");
const overlay = document.querySelector(".header__overlay");
const body = document.querySelector("body");
const menuLinks = document.querySelectorAll(".header__link");

// Initial state
let isExpanded = false;

const toggleBurgerMenu = (forceState = null) => {
  isExpanded = forceState !== null ? forceState : !isExpanded;
  menu.classList.toggle("header__nav--active", isExpanded);
  burger.classList.toggle("burger__move", isExpanded);
  overlay.classList.toggle("header__overlay--active", isExpanded);
  body.classList.toggle("hidden", isExpanded);

  burger.setAttribute("aria-expanded", isExpanded);
  burger.setAttribute("aria-label", isExpanded ? "Close menu" : "Open menu");
};

burger.addEventListener("click", () => {
  toggleBurgerMenu();
});

overlay.addEventListener("click", () => {
  toggleBurgerMenu(false);
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && isExpanded) {
    toggleBurgerMenu(false);
  }
});

menuLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();

    toggleBurgerMenu(false);

    const targetId = link.getAttribute("data-goto");
    if (targetId) {
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        setTimeout(() => {
          targetElement.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }, 300);
      }
    }
  });
});

export { toggleBurgerMenu };

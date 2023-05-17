
// Плавная прокрутка -- Smooth navigation

export const smooth = document.querySelectorAll(".smooth__link[data-goto]");

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


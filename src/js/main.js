

window.onload = function(){
    console.log("Hello RS!");

    // burger handler
    burgerIconClick();
    outofIconClick();

    // Smooth navigation

    // navLinkClick();

    //service section blur not choosed elements

    serviceBlur ();

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


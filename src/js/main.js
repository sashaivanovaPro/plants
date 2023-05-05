console.log("Hello RS!");

// Burger handler

(function () {
    const burgerItem = document.querySelector("#burger");
    const menu = document.querySelector('#header__nav');
    const menuCloseItem = document.querySelector('#header__nav--close');
    const CLoseLinkOne = document.querySelector("#header__link1");
    const CLoseLinkTwo = document.querySelector("#header__link2");
    const CLoseLinkThree = document.querySelector("#header__link3");
    const CLoseLinkFour = document.querySelector("#header__link4");
    const CLoseLinkFive = document.querySelector("#header__link5");
    const transparency = document.querySelector("#transparant");
    const closeOutside = document.querySelector(".transparant");
    burgerItem.addEventListener('click', () => {
        menu.classList.add('header__nav--active');
     });
    burgerItem.addEventListener('click', () => {
        transparency.classList.add('transparant__active');
     });
    menuCloseItem.addEventListener('click', () => {
        menu.classList.remove('header__nav--active');
    });
    CLoseLinkOne.addEventListener('click', () => {
        menu.classList.remove('header__nav--active');
    });
    CLoseLinkTwo.addEventListener('click', () => {
        menu.classList.remove('header__nav--active');
    });
    CLoseLinkThree.addEventListener('click', () => {
        menu.classList.remove('header__nav--active');
    });
    CLoseLinkFour.addEventListener('click', () => {
        menu.classList.remove('header__nav--active');
    });
    CLoseLinkFive.addEventListener('click', () => {
        menu.classList.remove('header__nav--active');
    });
    closeOutside.addEventListener('click', () => {
        menu.classList.remove('header__nav--active');
});
}());

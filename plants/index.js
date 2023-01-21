//console.log("Max score - 100 points.\n Total score - 110 points:\n Вёрстка валидная +10 \n Вёрстка семантическая +20\n Вёрстка соответствует макету +48 \n Требования к css + 12 \n Интерактивность, реализуемая через css +20");

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
    burgerItem.addEventListener('click', () => {
        menu.classList.add('header__nav--active');
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
}());


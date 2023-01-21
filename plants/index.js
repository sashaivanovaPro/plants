console.log("Total score - points: 74. \n Вёрстка соответствует макету. Ширина экрана 768px +24; \n Вёрстка соответствует макету. Ширина экрана 380px +24; \n На ширине экрана 380рх и меньше реализовано адаптивное меню +18 (нет закрытия меню по клику вне окна); \n Нет полосы прокрутки при ширине страницы от 380px до 320рх +8; \n Не начислены баллы - не смогла сделать адаптивную верстку от 1440 до 320 - структура разваливается.");

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


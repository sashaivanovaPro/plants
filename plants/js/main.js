console.log("Total score - points: 52.5. \n При выборе одной услуги (нажатии одной кнопки), остальные карточки услуг принимают эффект blur, выбранная услуга остается неизменной +20; \n Анимации плавного перемещения кнопок в активное состояние и карточек услуг в эффект blur +10 \n При нажатии на dropdown кнопку появляется описание тарифов цен в соответствии с макетом. Внутри реализована кнопка order, которая ведет на секцию contacts, при нажатии на нее Accordion все еще остается открытым +12.5 \n При нажатии на кнопку Call us реализован вызов по номеру, который соответствует выбранному городу +10 ");

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

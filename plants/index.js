//console.log("Max score - 100 points.\n Total score - 110 points:\n Вёрстка валидная +10 \n Вёрстка семантическая +20\n Вёрстка соответствует макету +48 \n Требования к css + 12 \n Интерактивность, реализуемая через css +20");

/* Header slow appearence
(function (){
     const header = document.querySelector('.header');
     window.onscroll = () => {
        if (window.pageXOffset > 50) {
            header.classList.add('header_active');
        } else {
            header.classList.remove('header_active');
        }
     };
}());
*/

// Burger handler

(function () {
    const burgerItem = document.querySelector('.burger');
    const menu = document.querySelector('.header__nav');
    const menuCloseItem = document.querySelector('.header__nav-close');
    burgerItem.addEventListener('click', () => {
        menu.classList.add('header__nav_active');
     });
    menuCloseItem.addEventListener('click', () =>{
        menu.classList.remove('header__nav_active');
    });

}());

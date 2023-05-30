// Burger handler

const burgerItem = document.querySelector(".burger");
const menu = document.querySelector(".header__nav");
const overlay = document.querySelector('.header__overlay');
const body = document.querySelector('body');

const burgerIconClick = () => {
  menu.classList.toggle('header__nav--active');
  burgerItem.classList.toggle('burger__move');
  overlay.classList.toggle('header__overlay--active');
  body.classList.toggle('hidden');
};

const outofIconClick = () => {
  menu.classList.remove('header__nav--active');
  burgerItem.classList.remove('burger__move');
  overlay.classList.remove('header__overlay--active');
  body.classList.remove('hidden');
};

burgerItem.addEventListener('click', () => {
  burgerIconClick();
});

menu.addEventListener('click', () => {
  outofIconClick();
});

overlay.addEventListener('click', () => {
  outofIconClick();
});

export {burgerIconClick,outofIconClick}



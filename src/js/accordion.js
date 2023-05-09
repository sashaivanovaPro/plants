// Accordion prices

export const accordionSwitch = () => {
  document.querySelector('.accordion').addEventListener('click', (e) =>{
    if (e.target.classList.contains('accordion__item')){
      let clickedOption = e.target;
      let card = clickedOption.nextElementSibling;
      hideOption (clickedOption,card);         
    } if (e.target.classList.contains('price-card')){
      let clickedCard = e.target;
      let option = clickedCard.previousElementSibling;
      hideDescription (clickedCard, option);
    }
  })
}

export const hideOption = (clickedOption,card) => {
    clickedOption.classList.add('accordion-close');
    card.classList.remove('accordion-close');
}

export const hideDescription = (clickedCard, option) => {
    option.classList.remove('accordion-close');
    clickedCard.classList.add('accordion-close');
}

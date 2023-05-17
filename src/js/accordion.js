// Accordion from prices section

export const accordionSwitch = () => {
    const priceItems = document.querySelectorAll('.accordion__item');
    priceItems.forEach(item =>{
      item.addEventListener('click', () => {
        item.nextElementSibling.classList.remove('accordion-close');
        item.classList.add('accordion-close');
      })
    });
    const priceCards = document.querySelectorAll('.price-card');
    // console.log(priceCards);
    priceCards.forEach(card =>{
      card.addEventListener('click', () => {
        card.previousElementSibling.classList.remove('accordion-close');
        card.classList.add('accordion-close');
      })
    })
  }



// Slow working version 

// export const accordionSwitch = () => {
//   document.querySelector('.accordion').addEventListener('click', (e) =>{
//     if (e.target.classList.contains('accordion__item')){
//       let clickedOption = e.target;
//       let card = clickedOption.nextElementSibling;
//       hideOption (clickedOption,card);         
//     } if (e.target.classList.contains('price-card')){
//       let clickedCard = e.target;
//       let option = clickedCard.previousElementSibling;
//       hideDescription (clickedCard, option);
//     }
//   })
// }

// export const hideOption = (clickedOption,card) => {
//     clickedOption.classList.add('accordion-close');
//     card.classList.remove('accordion-close');
// }

// export const hideDescription = (clickedCard, option) => {
//     option.classList.remove('accordion-close');
//     clickedCard.classList.add('accordion-close');
// }

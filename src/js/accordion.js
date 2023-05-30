// Accordion from prices section

const accordionSwitch = () => {
    const priceItems = document.querySelectorAll('.accordion__item');
    const priceCards = document.querySelectorAll('.price-card');
    // console.log(priceItems);
    priceItems.forEach(item =>{
      item.addEventListener('click', () => {
        
        // initialy close all description window and shows all tarif buttons 
        
        priceCards.forEach(element =>{
          element.classList.add('accordion-description-close');
        })
        priceItems.forEach(variant =>{
          variant.classList.remove('accordion-button-close');
        })
        // Dropdown cklicking - makes button disappeared and shows description
        item.nextElementSibling.classList.remove('accordion-description-close');
        item.classList.add('accordion-button-close');
        })
    });
    
    // // console.log(priceCards);
    priceCards.forEach(card =>{
      card.addEventListener('click', () => {      
        // Dropup, cklicking - makes description disappeared and shows button
        card.previousElementSibling.classList.remove('accordion-button-close');
        card.classList.add('accordion-description-close');
      })
    })
  }

export {accordionSwitch}



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

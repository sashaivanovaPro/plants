// Accordion prices

const accordionSwitch = () => {
  document.querySelector('.accordion').addEventListener('click', (e) =>{
    if (e.target.classList.contains('accordion__item')){
      let clickedOption = e.target;
      let card = clickedOption.nextElementSibling;
      hideOption (clickedOption,card);         
    }
  })
  document.querySelector('.accordion').addEventListener('click', (e) =>{
    if (e.target.classList.contains('price-card')){
      let clickedCard = e.target;
      let option = clickedCard.previousElementSibling;
      hideDescription (clickedCard, option);
    }
  }) 
}

const hideOption = (clickedOption,card) => {
    clickedOption.classList.add('accordion-close');
    card.classList.remove('accordion-close');
}

const hideDescription = (clickedCard, option) => {
    option.classList.remove('accordion-close');
    clickedCard.classList.add('accordion-close');
}



// const showDetails 



// document.querySelector('.prices__options--item1').addEventListener('click', function(){
//     document.querySelector('.price__card1').classList.add('visible');
//     document.querySelector('.prices__options--item1').classList.add('hidden');
// });

// document.querySelector('.price__card1').addEventListener('click', function(){
//     document.querySelector('.price__card1').classList.remove('visible');
//     document.querySelector('.prices__options--item1').classList.remove('hidden');
// });

// document.querySelector('.prices__options--item2').addEventListener('click', function(){
//     document.querySelector('.price__card2').classList.add('visible');
//     document.querySelector('.prices__options--item2').classList.add('hidden');
// });

// document.querySelector('.price__card2').addEventListener('click', function(){
//     document.querySelector('.price__card2').classList.remove('visible');
//     document.querySelector('.prices__options--item2').classList.remove('hidden');
// });

// document.querySelector('.prices__options--item3').addEventListener('click', function(){
//     document.querySelector('.price__card3').classList.add('visible');
//     document.querySelector('.prices__options--item3').classList.add('hidden');
// });

// document.querySelector('.price__card3').addEventListener('click', function(){
//     document.querySelector('.price__card3').classList.remove('visible');
//     document.querySelector('.prices__options--item3').classList.remove('hidden');
// });

/*const headers = document.querySelectorAll('[data-name="accordeon-title"]');


headers.forEach( function(item){
    item.addEventListener('click', function(){
   this.nextElementSibling.classList.toggle('hidden');
    })
})
disappear.forEach(function(item){

    item.addEventListener('click', function(){
        this.previousElementSibling.classList.toggle('disappear');
    })
})*/
let buttons = document.querySelectorAll('.service__button');

const serviceBlur = () => {
  document.querySelector('.service__button--wrapper').addEventListener('click', (e) => {
    if (e.target.classList.contains('service__button')){
      let clickedButton = e.target;
      removeSelectedButtons();
      selectClickedButton(clickedButton);
      filterSelectedServices(e);
    }
  })
}

const removeSelectedButtons = () => { 
  buttons.forEach(button =>{
    button.classList.remove('button__clicked');
    button.classList.add('button__unclicked');    
  })
}

const selectClickedButton = (clickedButton) => {
  clickedButton.classList.add('button__clicked');
  clickedButton.classList.remove('button__unclicked');
}

const filterSelectedServices = (e) => {
  let services = document.querySelectorAll('.grid__wrapper .grid__item');
  let buttonName = e.target.id;
  services.forEach( grid => {    
    grid.classList.add('grid__item_blur');
    if (grid.classList.contains(buttonName)){
      grid.classList.remove('grid__item_blur');
    }
  })
}


// document.getElementById('gardens').addEventListener('click', function (){
//     const gardenBlur = document.querySelectorAll('.gardens__blur');
//     gardenBlur.forEach(function(item){
//        item.classList.toggle('services__blur');
// })
// })

// document.getElementById('lawn').addEventListener('click', function (){
//     const gardenBlur = document.querySelectorAll('.lawn__blur');
//     gardenBlur.forEach(function(item){
//        item.classList.toggle('services__blur');
// })
// })

// document.getElementById('planting').addEventListener('click', function (){
//     const gardenBlur = document.querySelectorAll('.plant__blur');
//     gardenBlur.forEach(function(item){
//        item.classList.toggle('services__blur');
// })
// })

// (function () {
//     const buttonClickOne = document.getElementById("gardens");
//     const buttonClickTwo = document.getElementById("lawn");
//     const buttonClickThree = document.getElementById("planting");
//         buttonClickOne.addEventListener('click', () => {
//         buttonClickOne.classList.toggle('service__button--active');
//      });
//         buttonClickTwo.addEventListener('click', () => {
//         buttonClickTwo.classList.toggle('service__button--active');
//      });
//         buttonClickThree.addEventListener('click', () => {
//         buttonClickThree.classList.toggle('service__button--active');
//      });
//     }());


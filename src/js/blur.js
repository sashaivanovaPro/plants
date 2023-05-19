let buttons = document.querySelectorAll('.service__button');



export const serviceBlur = () => {
  document.querySelector('.service__button--wrapper').addEventListener('click', (e) => {
    if (e.target.classList.contains('service__button')){
      let clickedButton = e.target;
      // removeSelectedButtons();
      selectClickedButton(clickedButton);
      filterSelectedServices(e,clickedButton);      
    }
  })
}

// const removeSelectedButtons = () => { 
//   buttons.forEach(button =>{
//     button.classList.remove('button__clicked');
//     button.classList.add('button__unclicked');    
//   })
// }

const selectClickedButton = (clickedButton) => {
  clickedButton.classList.toggle('button__service-clicked');
  }

const filterSelectedServices = (e, clickedButton) => {
  let services = document.querySelectorAll('.grid__wrapper .grid__item');  
  let buttonName = e.target.id;
  console.log(clickedButton);
  console.log(buttonName);
  services.forEach( grid => {    
    // grid.classList.remove('grid__item--no-blur');
    if (!grid.classList.contains(buttonName) && clickedButton.classList.contains('button__service-clicked') ){
      grid.classList.remove('grid__item--no-blur');
    }
    if (!clickedButton.classList.contains('button__service-clicked') ){

    // remove blur from all services by clicking active button
      services.forEach(service => {
        if(!service.classList.contains.buttonName)
        service.classList.add('grid__item--no-blur');
      })
    }
  })
}





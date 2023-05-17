let buttons = document.querySelectorAll('.service__button');

export const serviceBlur = () => {
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





// Dropdown from contacts section 

const dropdownBtn = document.querySelector('.dropdown__button');
// const cityCard = document.querySelectorAll('.city__card');
const dropdownList = document.querySelector('.dropdown__list');
const cityList = document.querySelectorAll('.dropdown__list--item');
const rotation = document.querySelector('#rotate');
  

export const dropdownCitySwitch = () =>{  

  dropdownBtn.addEventListener('click', () =>{
    // toggling active class to initial City choice (color change + arrow rotation)
    dropdownBtn.classList.toggle('dropdown__button--active');

    // toggle visibility of City List
    dropdownList.classList.toggle('dropdown__list--visible');

    // when the city is selected color stay active + arrow rotation when click City button
    if(dropdownBtn.firstElementChild.innerText != 'City') {
     dropdownBtn.classList.add('dropdown__button--active');
     rotation.style.setProperty('transform','rotate(180deg)');
    } 
    if(dropdownBtn.firstElementChild.innerText !== 'City' && !dropdownList.classList.contains('dropdown__list--visible')){
      
      rotation.style.setProperty('transform','initial');
    }   

    // acting while clicking dropdown city list
    cityList.forEach(city => {
      city.addEventListener('click', () =>{
        // raplacing city name in City button with selected city name
        dropdownBtn.firstElementChild.innerText = city.innerText;  
        
        // remove visibility of City List after city is selected
        dropdownList.classList.remove('dropdown__list--visible');

        // when the city is selected color stay active + arrow rotation of City button
        // after clicking city name from city list
        if(dropdownBtn.firstElementChild.innerText !== 'City') {          
          rotation.style.setProperty('transform','initial');
        }             
      })
    })
})
}

// make Dropdown closed when clicking outside it 

export const closeDropdown = () => {
  document.addEventListener('click', (e) => {
    if(e.target !== dropdownBtn){
      // console.log('outside click'); 
      // dropdownList.classList.remove('dropdown__list--visible');
      // rotation.style.setProperty('transform','initial');
      // dropdownBtn.classList.remove('dropdown__button--active');
    }
  })
}

// make adress Cards visible

export const makeCardsVisible = () => {
  const adressLinks = document.querySelectorAll('[data-value]');  
  const adressCards = document.querySelectorAll('[data-value-content]');
  
  adressLinks.forEach(adress =>{
    adress.addEventListener('click', () => {

      // make all cards invisible
      
      adressCards.forEach(item => {
        item.classList.add('card-hidden');
      })

      // make visible selected card 

      const showAdress = document.querySelector('#'+adress.dataset.value);
      showAdress.classList.remove('card-hidden');

      // change space between dropdown and image of contacts section due to its initial value 

      const wrapper = document.querySelector('.contacts__wrapper');
      
      if(wrapper.style.gap !== 0){
        wrapper.style.setProperty('gap','1.5rem');
      }       
    })
  })
  
}


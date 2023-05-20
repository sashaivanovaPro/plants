let buttons = document.querySelectorAll('.service__button');
let services = document.querySelectorAll('.grid__wrapper .grid__item'); 
let buttonNameSet = [];

export const serviceBlur = () => {
  document.querySelector('.service__button--wrapper').addEventListener('click', (e) => {
        if (e.target.classList.contains('service__button')){
          
          let clickedButton = e.target;
          
          let buttonName = e.target.id;
          console.log(buttonName);     
        
          let buttonSet = document.querySelectorAll('.button__service-clicked');
          // console.log(buttonSet.length);
      
          // - 1 - while all three buttons are clicked - reset button active state amd remove blur effect from all services by adding unblur class

          if (!clickedButton.classList.contains('button__service-clicked') && buttonSet.length === 2){
            addFocus (clickedButton); // add active state to button         
            buttons.forEach(button =>{
                  button.classList.remove('button__service-clicked');
                  buttonNameSet.pop(buttonName);
                })
            services.forEach(service =>{
              service.classList.add('grid__item--no-blur');
            })
          }
          // - 2 - while two buttons are clicked - clicked buttons are in active state
          //       and only cards of uncklicked cathegory are blured
           else if (!clickedButton.classList.contains('button__service-clicked') && buttonSet.length === 1){
            addFocus (clickedButton); // add active state to button
            buttonNameSet.push(buttonName);
            //remove unblur class for all services
            services.forEach(service =>{
              service.classList.remove('grid__item--no-blur');
            })
            // find not clicked button name and return unblur class for all services instead of this button
            const thirdButtonName = ['garden', 'lawn', 'planting'].find(buttonName => !buttonNameSet.includes(buttonName));
           
            services.forEach(service =>{
              if(!service.classList.contains(thirdButtonName)){
                service.classList.add('grid__item--no-blur');
              }              
            })
          } 

          // - 3 - while two buttons are clicked an we click active button to remove active class
          //       and only cards of uncklicked cathegory are blured

          else if(clickedButton.classList.contains('button__service-clicked') && buttonSet.length === 2) {
            
            removeFocus(clickedButton); // remove active state from button
            
            //remove unblur class for all services
            services.forEach(service =>{
              service.classList.remove('grid__item--no-blur');
            })
            let nameIndex = buttonNameSet.indexOf(buttonName);
            buttonNameSet.splice(nameIndex, 1);
            let onlyButtonName = buttonNameSet[0];
            console.log(onlyButtonName);
            services.forEach(service =>{
              if(service.classList.contains(onlyButtonName)){
                service.classList.add('grid__item--no-blur');
              }              
            })
          }
          // - 4 - one button is clicked - it recives active state and cards of two other categogories are blured
          else if (!clickedButton.classList.contains('button__service-clicked') && buttonSet.length === 0 ){
            addFocus (clickedButton);
            filterSelectedServices (e, clickedButton);
            buttonNameSet.push(buttonName);     
          } else if (clickedButton.classList.contains('button__service-clicked') && buttonSet.length === 1){
            removeFocus (clickedButton);
            filterSelectedServices(e, clickedButton);
            buttonNameSet.pop(buttonName);  
           }            
          console.log(buttonNameSet); 
          }          
      })
}


const addFocus = (clickedButton) =>{
  clickedButton.classList.add('button__service-clicked');
}

const removeFocus = (clickedButton) =>{//   
    clickedButton.classList.remove('button__service-clicked');
}

const filterSelectedServices = (e, clickedButton) => { 
  let buttonName = e.target.id;

  // remove class reseting blur from elements without id corresponded to button name
  services.forEach(grid => {
  if (!grid.classList.contains(buttonName)){
      grid.classList.toggle('grid__item--no-blur');
    }
  })
}
  
  
  
      
 


// let buttons = document.querySelectorAll('.service__button');
// let buttonNameSet = [];

// export const serviceBlur = () => {
//   document.querySelector('.service__button--wrapper').addEventListener('click', (e) => {
//     if (e.target.classList.contains('service__button')){
//       let clickedButton = e.target;
//       selectClickedButton(clickedButton);
//       filterSelectedServices(e,clickedButton);      
//     }
//   })
// }

// const selectClickedButton = (clickedButton) => {
//   clickedButton.classList.toggle('button__service-clicked');
//   }

// const filterSelectedServices = (e, clickedButton) => {
//   let services = document.querySelectorAll('.grid__wrapper .grid__item');  
//   let buttonName = e.target.id;
//   console.log(clickedButton);
//   console.log(buttonName);

//   //set with all clicked buttons names
//   buttonNameSet.push(buttonName);
//   console.log(buttonNameSet);  

//   // find all clicked buttons
//   let clickedBtnSet = document.querySelectorAll('.button__service-clicked');
//   console.log(clickedBtnSet);

//   // remove class reseting blur from elements without id corresponded to button name
//   services.forEach( grid => {    
    
//     // grid.classList.remove('grid__item--no-blur');
//     if (clickedBtnSet.length === 1 && !grid.classList.contains(buttonName) && clickedButton.classList.contains('button__service-clicked') ){
//       grid.classList.remove('grid__item--no-blur');
//     }

//   // scenario for simultaneous clicking of two buttons
//     if (clickedBtnSet.length === 2){   
//       services.forEach( service =>{
//         if (!service.classList.contains(buttonName)){
//           service.classList.remove('grid__item--no-blur'); 
//         }
//       })   
//       // console.log(buttonNameSet);
//     }


//     if (!clickedButton.classList.contains('button__service-clicked') ){
//       // const removeName = (buttonNameSet,clickedButton) =>{
//       //   return buttonNameSet.filter(el => el !== clickedButton);
//       // }
//       // removeName (buttonNameSet,clickedButton);
//       // console.log(buttonNameSet);


//     // remove blur from all services by clicking active button
//       services.forEach(service => {
//         if(!service.classList.contains.buttonName){
//           service.classList.add('grid__item--no-blur');
//         }
//       })
//     }

//     // while all three buttons are clicked - reset button click state amd remove blur effect from all services 
//     if (!clickedButton.classList.contains('button__service-clicked') || clickedBtnSet.length === 3 ){
//       buttons.forEach(button =>{
//             button.classList.remove('button__service-clicked');
//           })
//     }

//   })
// }





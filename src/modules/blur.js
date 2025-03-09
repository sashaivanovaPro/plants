// Blur of unactive service cards after choosing category

let buttons = document.querySelectorAll(".service__button");
let services = document.querySelectorAll(".grid__wrapper .grid__item");
let buttonNameSet = [];

const serviceBlur = () => {
  document
    .querySelector(".service__button--wrapper")
    .addEventListener("click", (e) => {
      if (e.target.classList.contains("service__button")) {
        let clickedButton = e.target;

        let buttonName = e.target.id;
        console.log(buttonName);

        let buttonSet = document.querySelectorAll(".button__service-clicked");
        // console.log(buttonSet.length);

        // - 1 - while all three buttons are clicked - reset button active state amd remove blur effect from all services by adding unblur class

        if (
          !clickedButton.classList.contains("button__service-clicked") &&
          buttonSet.length === 2
        ) {
          addFocus(clickedButton); // add active state to button
          buttons.forEach((button) => {
            button.classList.remove("button__service-clicked");
            buttonNameSet.pop(buttonName);
          });
          services.forEach((service) => {
            service.classList.add("grid__item--no-blur");
          });
        }
        // - 2 - while two buttons are clicked - clicked buttons are in active state
        //       and only cards of unclicked cathegory are blured
        else if (
          !clickedButton.classList.contains("button__service-clicked") &&
          buttonSet.length === 1
        ) {
          addFocus(clickedButton); // add active state to button
          buttonNameSet.push(buttonName);
          //remove un blur class for all services
          services.forEach((service) => {
            service.classList.remove("grid__item--no-blur");
          });
          // find not clicked button name and return un blur class for all services instead of this button
          const thirdButtonName = ["garden", "lawn", "planting"].find(
            (buttonName) => !buttonNameSet.includes(buttonName)
          );

          services.forEach((service) => {
            if (!service.classList.contains(thirdButtonName)) {
              service.classList.add("grid__item--no-blur");
            }
          });
        }

        // - 3 - while two buttons are clicked an we click active button to remove active class
        //       and only cards of unclicked category are blured
        else if (
          clickedButton.classList.contains("button__service-clicked") &&
          buttonSet.length === 2
        ) {
          removeFocus(clickedButton); // remove active state from button

          //remove unblur class for all services
          services.forEach((service) => {
            service.classList.remove("grid__item--no-blur");
          });
          let nameIndex = buttonNameSet.indexOf(buttonName);
          buttonNameSet.splice(nameIndex, 1);
          let onlyButtonName = buttonNameSet[0];
          console.log(onlyButtonName);
          services.forEach((service) => {
            if (service.classList.contains(onlyButtonName)) {
              service.classList.add("grid__item--no-blur");
            }
          });
        }
        // - 4 - one button is clicked - it recives active state and cards of two other categogories are blured
        else if (
          !clickedButton.classList.contains("button__service-clicked") &&
          buttonSet.length === 0
        ) {
          addFocus(clickedButton);
          filterSelectedServices(e, clickedButton);
          buttonNameSet.push(buttonName);
        } else if (
          clickedButton.classList.contains("button__service-clicked") &&
          buttonSet.length === 1
        ) {
          removeFocus(clickedButton);
          filterSelectedServices(e, clickedButton);
          buttonNameSet.pop(buttonName);
        }
        console.log(buttonNameSet);
      }
    });
};

// change the button color to active state

const addFocus = (clickedButton) => {
  clickedButton.classList.add("button__service-clicked");
};

// change back the button color to default state

const removeFocus = (clickedButton) => {
  //
  clickedButton.classList.remove("button__service-clicked");
};

// blur service card according to cklicked button

const filterSelectedServices = (e, clickedButton) => {
  let buttonName = e.target.id;

  // remove class reseting blur from elements without id corresponded to button name
  services.forEach((grid) => {
    if (!grid.classList.contains(buttonName)) {
      grid.classList.toggle("grid__item--no-blur");
    }
  });
};

export { serviceBlur };

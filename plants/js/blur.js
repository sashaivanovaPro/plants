
document.getElementById('gardens').addEventListener('click', function (){
    const gardenBlur = document.querySelectorAll('.gardens__blur');
    gardenBlur.forEach(function(item){
       item.classList.toggle('services__blur');
})
})


/(function () {
    const buttonClickOne = document.getElementById("gardens");
    const buttonClickTwo = document.getElementById("lawn");
    const buttonClickThree = document.getElementById("planting");
        buttonClickOne.addEventListener('click', () => {
        buttonClick.classList.toggle('service__button--active');
     });
     buttonClickTwo.addEventListener('click', () => {
        buttonClickTwo.classList.toggle('service__button--active');
     });
     buttonClickThree.addEventListener('click', () => {
        buttonClickThree.classList.toggle('service__button--active');
     });
    }());

/*buttonClick.addEventListener('click', () => {
    buttonClick.forEach(function(item){
        item.classList.toggle('.service__button--active');
    })
 });*/

/*
document.getElementById('lawn').addEventListener('click', function (){
    const gardenBlur = document.querySelectorAll('.lawn__blur');
    gardenBlur.forEach(function(item){
       item.classList.toggle('services__blur');
})
})

document.getElementById('planting').addEventListener('click', function (){
    const gardenBlur = document.querySelectorAll('.plant__blur');
    gardenBlur.forEach(function(item){
       item.classList.toggle('services__blur');
})
})
*/
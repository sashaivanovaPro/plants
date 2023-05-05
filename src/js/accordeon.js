

document.querySelector('.prices__options--item1').addEventListener('click', function(){
    document.querySelector('.price__card1').classList.add('visible');
    document.querySelector('.prices__options--item1').classList.add('hidden');
});

document.querySelector('.price__card1').addEventListener('click', function(){
    document.querySelector('.price__card1').classList.remove('visible');
    document.querySelector('.prices__options--item1').classList.remove('hidden');
});

document.querySelector('.prices__options--item2').addEventListener('click', function(){
    document.querySelector('.price__card2').classList.add('visible');
    document.querySelector('.prices__options--item2').classList.add('hidden');
});

document.querySelector('.price__card2').addEventListener('click', function(){
    document.querySelector('.price__card2').classList.remove('visible');
    document.querySelector('.prices__options--item2').classList.remove('hidden');
});

document.querySelector('.prices__options--item3').addEventListener('click', function(){
    document.querySelector('.price__card3').classList.add('visible');
    document.querySelector('.prices__options--item3').classList.add('hidden');
});

document.querySelector('.price__card3').addEventListener('click', function(){
    document.querySelector('.price__card3').classList.remove('visible');
    document.querySelector('.prices__options--item3').classList.remove('hidden');
});

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
document.querySelector('.dropdown__button').addEventListener('click', function(){
    document.querySelector('.dropdown__list').classList.toggle('dropdown__list--active');
});

document.querySelectorAll('.dropdown__list--item').forEach(function(listItem){
    listItem.addEventListener('click', function(){
        document.querySelector('.dropdown__button').innerText = this.innerText;
        document.querySelector('.dropdown__list').classList.remove('dropdown__list--active');
    })
})

/* не могу отодвинуть название города на кнопке
document.querySelectorAll('.dropdown__list--item').forEach(function(listItem){
    listItem.addEventListener('click', function(){
        document.querySelector('.dropdown__list--item').style.display = 'block';
    })
})*/
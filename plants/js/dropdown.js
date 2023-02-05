document.querySelector('.dropdown__button').addEventListener('click', function(){
    document.querySelector('.dropdown__list').classList.toggle('dropdown__list--active');
});

document.querySelectorAll('.dropdown__list--item').forEach(function(listItem){
    listItem.addEventListener('click', function(){
        document.querySelector('.dropdown__button').innerText = this.innerText;
        document.querySelector('.dropdown__list').classList.remove('dropdown__list--active');
    });
});

document.getElementById('yon').addEventListener('click', function(){
    document.getElementById('yonkers').classList.add('city__card--visible');
    });

document.getElementById('canan').addEventListener('click', function(){
    document.getElementById('canandaigua').classList.add('city__card--visible');
    });

document.getElementById('new').addEventListener('click', function(){
    document.getElementById('newyork').classList.add('city__card--visible');
    });

    document.getElementById('sher').addEventListener('click', function(){
        document.getElementById('sherrill').classList.add('city__card--visible');
        });

        document.querySelector('.dropdown__button').addEventListener('click', function(){
            document.querySelectorAll('.city__card').forEach(function(item){
                item.classList.remove('city__card--visible');
                });
        });


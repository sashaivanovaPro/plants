const headers = document.querySelectorAll('[data-name="accordeon-title"]');
console.log(headers);

headers.forEach( function(item){
    console.log(item);
    item.addEventListener('click', function(){
   this.nextElementSibling.classList.toggle('hidden');
    })
})
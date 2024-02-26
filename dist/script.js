const menu = document.querySelector('#menu')
const ul = document.querySelector('#ul')
menu.addEventListener('click',function(e){

    ul.style.display = 'block'
    menu.style.display = 'none'

})

const cross = document.querySelector('#cross')
cross.addEventListener('click',function(dets){
    ul.style.display = 'none'
    menu.style.display = 'block'

})
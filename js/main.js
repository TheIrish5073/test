'use strict'

const collapsibles=document.querySelectorAll('.collapsible');

collapsibles.forEach((item)=>{
    return item.addEventListener('click',function(){
        this.classList.toggle('collapsible--expanded')
    })
})
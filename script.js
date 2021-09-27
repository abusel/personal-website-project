const title = document.getElementById('titleHeader');
title.addEventListener('click',function(){
    alert('Welcome to my personal Website!')
})
const firstColumn = document.getElementById('imgOne');
firstColumn.addEventListener('mouseover',function(){  
    const par = document.createElement('p')
    par.setAttribute('id','paragraph')
    par.textContent = 'Worked as a summer iOS Development intern in 2020.  Bizswipe is a platform for businesses to find each other and look for potential opportunites to collaborate  '
    document.querySelector('body').appendChild(par)
    
})
firstColumn.addEventListener('mouseout',function(){
    const par = document.getElementById('paragraph');
    par.remove()


})

/*
function alertMouse(){
    alert('testing')
}
function mousedOver(){
    const columnOne = document.getElementById('columnOne');
    columnOne.addEventListener('click', alertMouse)
}
mousedOver;
par.setAttribute('id','paragraph')
*/f
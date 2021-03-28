let links=document.querySelector('.links')
let hamB= document.querySelector('.bars')

hamB.addEventListener("click",function(){
    console.log("hello")
    links.classList.toggle('open');
})

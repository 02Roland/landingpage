let hambufger = document.querySelector("#habuger")
let closse = document.querySelector("#close")
hambufger.onclick = function(e){
    this.style.display = 'none'  
    this.nextElementSibling.style.display = 'block' 
    document.querySelector("header").style.backgroundImage = 'none'
    document.querySelector("header").style.backgroundColor = 'black' 
    document.querySelector("main").style.display = 'none'
    document.querySelector("footer").style.display = 'none'
    document.querySelector("header").lastElementChild.style.display = 'none'
    document.querySelector("#mobileMenu").style.display = 'block'
}
closse.onclick = function(e){
    this.style.display = 'none'
    this.previousElementSibling.style.display = 'block'
    document.querySelector("header").style.backgroundImage = 'url("images/mobile/image-hero.jpg")'
    document.querySelector("header").style.backgroundColor = 'none' 
    document.querySelector("main").style.display = 'block'
    document.querySelector("footer").style.display = 'block'
    document.querySelector("header").lastElementChild.style.display = 'block'
    document.querySelector("#mobileMenu").style.display = 'none'
}

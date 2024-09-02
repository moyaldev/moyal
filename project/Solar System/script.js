let seeMore = document.getElementById("seeMore");
let seeLess = document.getElementById("seeLess");
let text = document.getElementById("more");

seeMore.addEventListener("click", function(){
    text.style.display = "block"
    seeLess.style.display = "block"
    seeMore.style.display = "none"
})
seeLess.addEventListener("click", function(){
    text.style.display = "none"
    seeMore.style.display = "block"
    seeLess.style.display = "none"
})

let scrollContainer = document.getElementById("galery");
let nextBtn = document.getElementById("arrowRight");
let backBtn = document.getElementById("arrowLeft");

scrollContainer.addEventListener("wheel", (evt)=>{
    evt.preventDefault()
    scrollContainer.scrollLeft += evt.deltaY
})
nextBtn.addEventListener("click", function(){
    scrollContainer.style.scrollBehavior = "smooth"
    scrollContainer.scrollLeft += 900
})
backBtn.addEventListener("click", function(){
    scrollContainer.style.scrollBehavior = "smooth"
    scrollContainer.scrollLeft -= 900
})
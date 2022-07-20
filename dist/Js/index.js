 // Initialize Swiper
let swiper = new Swiper(".mySwiper", {
    cssMode: true,
    slidesPerView: 1,
    spaceBetween: 30,
    slidesPerGroup: 1,
    navigation: {
        nextEl: ".comment__btn--next",
        prevEl: ".comment__btn--prev",
    },
    pagination: {
        el: ".pagination",
    },
    mousewheel: true,
    keyboard: true,
});


// Responsive Navigation
 let hamburgerMenu = document.querySelector(".humburgerIcon")
 let close = document.querySelector(".closeMenuIcon")
let navMenu = document.querySelector(".responsive__navigation")

 hamburgerMenu.addEventListener("click", function() {
     navMenu.classList.add("show")
     const overlay = document.createElement("div");
     overlay.classList.add("overlay")
     const body = document.querySelector("body")
     body.appendChild(overlay);
     overlay.addEventListener("click", ()=>{
         navMenu.classList.remove("show")
         overlay.remove()
     })
 })

 close.addEventListener("click", function() {
     navMenu.classList.remove("show")
     const overlay = document.querySelector(".overlay")
     overlay.remove()
 })
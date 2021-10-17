const open_btn=document.querySelector(".open-btn")
const close_btn=document.querySelector(".close-btn")
const nav=document.querySelectorAll(".nav")
const logo=document.querySelector(".logo1")
const text=document.querySelector(".text")

open_btn.addEventListener("click",()=>{
    nav.forEach(nav_el=>nav_el.classList.add("visible"))
    logo.classList.add("active")
    text.classList.add("active")
})


close_btn.addEventListener("click",()=>{
    nav.forEach(nav_el=>nav_el.classList.remove("visible"))
    logo.classList.remove("active")
    text.classList.remove("active")
})


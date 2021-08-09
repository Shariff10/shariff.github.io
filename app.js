// select
const toggle = document.querySelector(".toggle");

toggle.addEventListener('click', navdown)

function navdown(){
    toggle.classList.toggle("navdown")
    console.log("saya")
}
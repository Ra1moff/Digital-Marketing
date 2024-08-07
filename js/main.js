const body = document.querySelector("body")
const threeDots = document.querySelector(".header__dots")
const navBurger = document.querySelector(".nav__burger")
const navBurgerLine = document.querySelector(".nav__burger-line")
const navMenu = document.querySelector(".nav__menu")

navBurger.addEventListener("click", function () {
    body.classList.add("active")
    navBurgerLine.classList.toggle("active")
    navMenu.classList.toggle("active")
})

document.addEventListener("mousemove", function(event) {
    
    const speed = threeDots.getAttribute("data-speed")
    
    const X = event.clientX / 10 * speed
    const Y = event.clientY / 10 * speed

    threeDots.style.transform = `translate(${X}px, ${Y}px)`
})
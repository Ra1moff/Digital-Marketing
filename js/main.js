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

const introImage = document.querySelector(".intro__image")
const SectionIntro = document.querySelector(".intro")

function introSection(enter) {
    if (enter[0].isIntersecting) {
        introImage.classList.add("active")
    }
}

const introObserver = new IntersectionObserver(introSection, { threshold: 1 })
introObserver.observe(SectionIntro)


const reasonsCard = document.querySelectorAll(".reasons__card")
const reasons = document.querySelector(".reasons")
const reasonsCards = document.querySelector(".reasons__cards")

function reasonsSection(beginnig) {
    if (beginnig[0].isIntersecting) {
        reasonsCards.classList.add("appear")
    }
}

const reasonsObserver = new IntersectionObserver(reasonsSection, { threshold: 0.5 })
reasonsObserver.observe(reasons)


const plansCard = document.querySelectorAll(".plans__card")
const plansCards = document.querySelector(".plans__cards")
const plans = document.querySelector(".plans")

function plansSection(begin) {
    if (begin[0].isIntersecting) {
        plansCards.classList.add("card")
    }
}

const plansObserver = new IntersectionObserver(plansSection, { threshold: 0.5 })
plansObserver.observe(plans)
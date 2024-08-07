const body = document.querySelector("body")
const threeDots = document.querySelector(".header__dots")
const navBurger = document.querySelector(".nav__burger")
const navBurgerLine = document.querySelector(".nav__burger-line")
const navMenu = document.querySelector(".nav__menu")
const newsSwiper = new Swiper(".news__swiper", {
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
        spaceBetween: 30,
        breakpoints: {
            1024: {
                slidesPerView: "1.6"
            },
            1603: {
                slidesPerView: "2.6"
            },
        },
        pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      loop: true
})
const carousel = new Swiper(".carousel", {
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
        spaceBetween: 30,
        breakpoints: {
            850: {
                slidesPerView: "2.6"
            },
        },
        pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      loop: true
})

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

const span = document.querySelectorAll(".rating__card-num span")
let stopNumbers

function timer(elem, number, index = 0) {  
    index++
    elem.innerHTML = index

    stopNumbers = setTimeout(() => {
        timer(elem, number, index)
    }, 30);

    if (index == number) {
        clearTimeout(stopNumbers)
    }
}

const rating = document.querySelector(".rating")
let stopTimer = true

function intro(entry) {
    if (entry[0].isIntersecting && stopTimer) {
        stopTimer = false
        for (let i = 0; i < span.length; i++) {
            timer(span[i], span[i].innerHTML)
        }
    }
}

const observer = new IntersectionObserver(intro, { threshold: 0.7 })
observer.observe(rating)
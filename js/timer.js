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

const observer = new IntersectionObserver(intro, { threshold: 0.5 })
observer.observe(rating)
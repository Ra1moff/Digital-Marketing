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
var swiper1 = new Swiper(".swiper mySwiper-1 container", {
    slidesPerView:1,
    spaceBetween: 30,
    loop:true,
    pagination:{
        el:".swiper-pagination-1",
        clickable:true,
    },
    navigation: {
        nextEl:".swiper-button-next-1",
        prevEl:".swiper-button-prev-1"
    }
});
var swiper2 = new Swiper(".mySwiper-2", {
    slidesPerView: 4,
    spaceBetween: 30,
    loop: true,
    loopFillGroupWithBlank: true,
    navigation: {
        nextEl: ".swiper-button-next-2",
        prevEl: ".swiper-button-prev-2"
    },
    breakpoints: {
        0: {
            slidesPerView: 1
        },
        520: {
            slidesPerView: 2
        },
        950: {
            slidesPerView: 3
        }
    }
});



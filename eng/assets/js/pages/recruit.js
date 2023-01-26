const advantageSwiper = new Swiper('.advantage-swiper .swiper', {
    effect: 'fade',
    fadeEffect: {
      crossFade: true
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    }
});

const advantageTextSwiper = new Swiper('.advantage-image-swiper .swiper', {

});

advantageSwiper.controller.control = advantageTextSwiper;
advantageTextSwiper.controller.control = advantageSwiper;

const recruitSwiper = new Swiper(".recruit-swiper", {
    effect: "flip",
    grabCursor: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    }
});

const recruitTextSwiper = new Swiper(".recruit-text-swiper", {
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    }
});

recruitSwiper.controller.control = recruitTextSwiper;
recruitTextSwiper.controller.control = recruitSwiper;

scrollActive('.ideal');
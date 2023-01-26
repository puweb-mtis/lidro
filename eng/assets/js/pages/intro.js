const visionSwiper = new Swiper('.vision-swiper', {
    slidesPerView: 2.2,
    spaceBetween: 20,
    breakpoints: {
        576: {
            slidesPerView: 3.2,
            spaceBetween: 20,
        },
        1024: {
            slidesPerView: 6,
            spaceBetween: 20,
        },
        1280: {
            slidesPerView: 6,
            spaceBetween: 40,
        }
    }
});


const locationSwiper = new Swiper('.location-swiper', {
    loop: true,
    effect: 'fade',
    fadeEffect: {
        crossFade: true
    },
    navigation: {
        prevEl: '.location-swiper .swiper-button-prev',
        nextEl: '.location-swiper .swiper-button-next'
    }
});

textAnimation('[data-tani-element="text"]', {
    type: 'slideUp',
    unit: 'word',
    duration: 1000,
    delay: 100
});
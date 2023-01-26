const droidSwiper = new Swiper('.droid-swiper', {
    loop: true,
    effect: 'fade',
    fadeEffect: {
        crossFade: true
    },
    navigation: {
        prevEl: '.swiper-button-prev',
        nextEl: '.swiper-button-next'
    }
});

const droidSwiperElements = document.querySelectorAll('.droid-swiper');
droidSwiperElements.forEach((droidSwiperElement, index) => {
    const img = droidSwiperElement.querySelector('.swiper-slide:first-child .droid-img');
    const nav = droidSwiperElement.querySelector('.swiper-navigation');
    const space = window.innerWidth < 768 ? 48 : 80;
    
    nav.style.top = `${img.clientHeight + space}px`;
});

window.addEventListener('resize', e => {
    droidSwiperElements.forEach((droidSwiperElement, index) => {
        const img = droidSwiperElement.querySelector('.swiper-slide:first-child .droid-img');
        const nav = droidSwiperElement.querySelector('.swiper-navigation');
        const space = window.innerWidth < 768 ? 48 : 80;
    
        nav.style.top = `${img.clientHeight + space}px`;
    });
});
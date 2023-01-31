textAnimation('[data-tani-element="text"]', {
  type: 'slideUp',
  unit: 'word',
  duration: 1000,
  delay: 100
});

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

const locationSwiper = new SwiperInit('.location-swiper', {
  loadActive: true,
  activeNames: `.location-swiper .timer`,
  inactiveNames: `.location-swiper .timer`,
  activeInSlideNames: '',
  inactiveInSlideNames: '',
  video: '',
  swiperOptions: {
    loop: true,
    effect: 'fade',
    autoplay: {
      delay: 7000
    },
    fadeEffect: {
      crossFade: true
    },
    navigation: {
      prevEl: '.location-swiper .swiper-button-prev',
      nextEl: '.location-swiper .swiper-button-next'
    }
  }
});

locationSwiper.swiper.on('touchMove', e => {
  const timer = document.querySelector('.location-swiper .timer');
  locationSwiper.swiper.autoplay.stop();
  timer.classList.remove('active');
});

locationSwiper.swiper.on('touchEnd', e => {
  const timer = document.querySelector('.location-swiper .timer');
  document.querySelector('.location-swiper .swiper-wrapper').addEventListener('transitionend', e => {
    locationSwiper.swiper.autoplay.start();
    timer.classList.add('active');
  });
});
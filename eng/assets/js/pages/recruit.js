const advantageSwiper = new SwiperInit('.advantage-swiper .swiper', {
  loadActive: true,
  activeNames: `.advantage-swiper .timer`,
  inactiveNames: `.advantage-swiper .timer`,
  swiperOptions: {
    effect: 'fade',
    fadeEffect: {
      crossFade: true
    },
    autoplay: {
      delay: 7000
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    }
  }
});

const advantageImageSwiper = new SwiperInit('.advantage-image-swiper .swiper', {
  loadActive: true,
  activeNames: `.advantage-swiper .timer`,
  inactiveNames: `.advantage-swiper .timer`,
  swiperOptions: {
    autoplay: {
      delay: 7000
    }
  }
});

advantageSwiper.swiper.controller.control = advantageImageSwiper.swiper;
advantageImageSwiper.swiper.controller.control = advantageSwiper.swiper;

advantageSwiper.swiper.on('touchMove', e => {
  const timer = document.querySelector('.advantage-swiper .timer');
  advantageSwiper.swiper.autoplay.stop();
  timer.classList.remove('active');
});

advantageSwiper.swiper.on('touchEnd', e => {
  const timer = document.querySelector('.advantage-swiper .timer');
  document.querySelector('.advantage-swiper .swiper-wrapper').addEventListener('transitionend', e => {
    advantageSwiper.swiper.autoplay.start();
    timer.classList.add('active');
  });
});

advantageImageSwiper.swiper.on('touchMove', e => {
  const timer = document.querySelector('.advantage-swiper .timer');
  advantageImageSwiper.swiper.autoplay.stop();
  timer.classList.remove('active');
});

advantageImageSwiper.swiper.on('touchEnd', e => {
  const timer = document.querySelector('.advantage-swiper .timer');
  document.querySelector('.advantage-swiper .swiper-wrapper').addEventListener('transitionend', e => {
    advantageImageSwiper.swiper.autoplay.start();
    timer.classList.add('active');
  });
});

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
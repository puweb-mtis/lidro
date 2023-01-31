// Variables
const WINDOW_WIDTH = window.outerWidth;

// Letter Animation
letterAnimation('main-visual');
letterAnimation('main-prd');

// Fullpage
const fullpage = new pageInit({
  menu: '#fullpage_menu',
  anchors: ['product', 'visual'],
  onLeave: function (index, nextIndex, direction) {
  },
  afterLoad: function (anchorLink, index) {
    if (index === 2) {
      prdSwiper.active(prdSwiper.activeNames);
      prdSwiper.activeInSlide(prdSwiper.activeInSlideNames);
    }
  }
});

// Main Visual Swiper
const mainSwiper = new SwiperInit('.main-visual-swiper', {
  loadActive: true,
  activeNames: `.main-visual .timer`,
  inactiveNames: `.main-visual .timer`,
  activeInSlideNames: [`.main-visual__blur`, `[data-letter-animation="main-visual"]`, `.main-visual__more-link`],
  inactiveInSlideNames: [`.main-visual__blur`, `[data-letter-animation="main-visual"]`, `.main-visual__more-link`],
  video: 'video',
  swiperOptions: {
    keyboard: {
      enabled: true,
      onlyInViewport: false,
    },
    autoplay: {
      delay: 7000,
      disableOnInteraction: false
    },
    speed: 1000,
    navigation: {
      prevEl: '.main-visual-swiper .swiper-button-prev',
      nextEl: '.main-visual-swiper .swiper-button-next'
    },
    pagination: {
      el: '.main-visual-swiper .swiper-pagination',
      type: 'bullets',
      clickable: true
    }
  }
});

mainSwiper.swiper.on('touchMove', e => {
  const timer = document.querySelector('.main-visual-swiper .timer');
  mainSwiper.swiper.autoplay.stop();
  timer.classList.remove('active');
});

mainSwiper.swiper.on('touchEnd', e => {
  const timer = document.querySelector('.main-visual-swiper .timer');
  document.querySelector('.main-visual-swiper .swiper-wrapper').addEventListener('transitionend', e => {
    mainSwiper.swiper.autoplay.start();
    timer.classList.add('active');
  });
});

// Main Product Swiper
const prdSwiper = new SwiperInit('.main-prd-swiper', {
  activeNames: `.main-prd .timer`,
  inactiveNames: `.main-prd .timer`,
  activeInSlideNames: [`.main-prd-sub-title`, `[data-letter-animation="main-prd"]`, `.main-prd__more-link`],
  inactiveInSlideNames: [`.main-prd-sub-title`, `[data-letter-animation="main-prd"]`, `.main-prd__more-link`],
  swiperOptions: {
    spaceBetween: 50,
    slidesPerView: 'auto',
    keyboard: {
      enabled: true,
      onlyInViewport: false,
    },
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    speed: 1000,
    navigation: {
      prevEl: '.main-prd-swiper .swiper-button-prev',
      nextEl: '.main-prd-swiper .swiper-button-next'
    },
    pagination: {
      el: '.main-prd-swiper .swiper-pagination',
      type: 'bullets',
      clickable: true
    }
  }
});

prdSwiper.swiper.on('touchMove', e => {
  const timer = document.querySelector('.main-prd-swiper .timer');
  prdSwiper.swiper.autoplay.stop();
  timer.classList.remove('active');
});

prdSwiper.swiper.on('touchEnd', e => {
  const timer = document.querySelector('.main-prd-swiper .timer');
  document.querySelector('.main-prd-swiper .swiper-wrapper').addEventListener('transitionend', e => {
    prdSwiper.swiper.autoplay.start();
    timer.classList.add('active');
  });
});

if (WINDOW_WIDTH < 1025) {
  prdSwiper.swiper.slides[0].querySelector('.main-prd-sub-title').classList.add('active');
  prdSwiper.swiper.slides[0].querySelector('.main-prd__more-link').classList.add('active');
  
  prdSwiper.swiper.slides[0].querySelectorAll('[data-letter-animation="main-prd"]').forEach(element => {
    element.classList.add('active');
  });
}

const resizeOnce = (f) => {
  let resizeTimer;
  
  window.addEventListener('resize', (e) => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout((e) => {
      f();
    }, 100);
  });
}

resizeOnce(() => {
  let windowWidth = window.outerWidth;
  
  if (windowWidth < 1025) {
    prdSwiper.swiper.slides[prdSwiper.swiper.activeIndex].querySelector('.main-prd-sub-title').classList.add('active');
    prdSwiper.swiper.slides[prdSwiper.swiper.activeIndex].querySelector('.main-prd__more-link').classList.add('active');
    
    prdSwiper.swiper.slides[prdSwiper.swiper.activeIndex].querySelectorAll('[data-letter-animation="main-prd"]').forEach(element => {
      element.classList.add('active');
    });
  }
});
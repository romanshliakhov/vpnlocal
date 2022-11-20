import Swiper from '../vendor/swiper.js';

for (const container of document.querySelectorAll('.container') ) {
  let titleSlider = new Swiper(container.querySelector('.hero__title-slider'), {
    slidesPerView: 1,
    loop: true,
    autoplay: {
      delay: 2500,
    },
    direction: 'vertical',
    autoHeight: true,
    // cleanStyles: false,
    // deleteInstance: false,
    // effect: 'fade',
  });
};
















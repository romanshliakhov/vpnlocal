import lottie from 'lottie-web';

const planet = lottie.loadAnimation({
  container: document.querySelector('.hero__planet'),
  renderer: 'svg',
  loop: true,
  autoplay: true,
  path: '../earth.json'
});



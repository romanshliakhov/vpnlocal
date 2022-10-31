// burger
let menuBtn = document.querySelector('.burger');
let menu = document.querySelector('.mobile');
let disableScroll = document.querySelector('body');

if (menuBtn) {
  menuBtn.addEventListener('click', function(){
    menuBtn.classList.toggle('active');
    menu.classList.toggle('active');
    disableScroll.classList.toggle('body-scroll');
  });
}




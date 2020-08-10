import $ from 'jquery';
import 'lightbox2';

console.log('loaded');
const navbar = document.getElementById('navbar');
let scrolled = false;

window.onscroll = function () {
  if (window.pageYOffset > 100) {
    navbar.classList.remove('top');
    if (!scrolled) {
      navbar.style.transform = 'translateY(-70px)';
    }
    setTimeout(() => {
      navbar.style.transform = 'translateY(0)';
      scrolled = true;
    }, 200);
  } else {
    navbar.classList.add('top');
    scrolled = false;
  }
};

$(document).ready(function () {
  $('#navbar a').on('click', function (e) {
    if (this.hash !== '') {
      const hash = this.hash;
      $('html, body').animate(
        {
          scrollTop: $(hash).offset().top - 100,
        },
        800
      );
    }
  });
});

'use strict';


//слайдер 1

// $('.slider__our__team').slick({
//   slidesToShow: 4,
//   slidesToScroll: 1,
//   autoplay: true,
//   autoplaySpeed: 2000,
//   dots: true,
// });


//слайдер 2
$(document).ready(function () {
  $('.team__mean').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    loop: true,
    autoplaySpeed: 3000,
    dots: true,
  });

  let filtered = true;

  $('.js-filter').on('click', function () {
    if (filtered === false) {
      $('.filtering').slick('slickFilter', ':even');
      $(this).text('Unfilter Slides');
      filtered = true;
    } else {
      $('.filtering').slick('slickUnfilter');
      $(this).text('Filter Slides');
      filtered = false;
    }
  });
});

//стрелка
$(document).on("click", "nav a", function (e) {
  e.preventDefault();
  var id = $(this).attr('href');
  var top = $(id).offset().top;
  $('body, html').animate({
    scrollTop: top
  }, 1000);
});
$(document).on("click", "#upbutton", function (e) {
  e.preventDefault();
  $('body, html').animate({
    scrollTop: 0
  }, 1000);
});
window.onscroll = function () {
  let scrolled = window.pageYOffset || document.documentElement.scrollTop;
  if (scrolled > 100) {
    document.querySelector('.scroll_top').style.display = 'block';
  } else {
    document.querySelector('.scroll_top').style.display = 'none';
  }
};


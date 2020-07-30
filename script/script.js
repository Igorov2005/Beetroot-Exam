'use strict';


//слайдер 1

$('.slider__our__team').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  // dots: true,
});


// слайдер 2

$(document).ready(function () {
  $('.team__mean').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    loop: true,
    autoplaySpeed: 3500,
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

// карта
// mapboxgl.accessToken = 'pk.eyJ1IjoiaWdvcm92IiwiYSI6ImNrZDhpdXA0dDBxcXUyeXRnYmJ2NWVvMnQifQ.m0mRvagvPgTLD9gXZk3qcw';
// var map = new mapboxgl.Map({
//   container: 'map',
//   style: 'mapbox://styles/mapbox/streets-v11'
// });


function initMap() {

  let element = document.getElementById('map');
  let options = {
    zoom: 10,
    center: {
      lat: 50.450001,
      lng: 30.523333
    }
  };

  let myMap = new google.maps.Map(element, options);

  let marker = new google.maps.Marker({
    position: {
      lat: 50.258889,
      lng: 28.656604
    },
    map: myMap,
    title: 'Beetroot Academy Zhytomyr'
  })
};

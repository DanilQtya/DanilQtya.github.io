"use strict";

$(document).ready(function () {
  svg4everybody({});
  AOS.init();
  var body = $('body');
  body.on('click', '.join-form__button', function (e) {
    e.preventDefault();
    $(this).parent().find('.join-form__input').toggleClass('visible');
  });
  var slider = $('.news-slider, .films-slider');
  slider.slick({
    dots: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000
  });
  body.on('click', '.games .tabs-nav .tabs-nav__item, .world .tabs-nav .tabs-nav__item', function (e) {
    e.preventDefault();
    var tab = $(this);
    tab.closest('.section-tab').find('.tabs-nav__item').removeClass('is-active');
    tab.addClass('is-active');
    tab.closest('.section-tab').find('.tabs-content__item').removeClass('is-active');
    tab.closest('.section-tab').find('.tabs-content__item.' + tab.data('tab-name')).addClass('is-active');
    active_slider_article();
  });

  function active_slider_article() {
    $('.slider-article').slick({
      dots: false,
      slidesToShow: 2,
      prevArrow: "<img src='./static/images/content/arrow-left.png' class='slick-prev slick-arrow' alt='prev'>",
      nextArrow: "<img src='./static/images/content/arrow-right.png' class='slick-next slick-arrow' alt='next'>"
    });
  }

  active_slider_article();
  $('.slider-world').slick({
    dots: false,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: '0px',
    prevArrow: "<img src='./static/images/content/arrow-left.png' class='slick-prev slick-arrow' alt='prev'>",
    nextArrow: "<img src='./static/images/content/arrow-right.png' class='slick-next slick-arrow' alt='next'>"
  });
  $(function () {
    $('.main-nav a[href^="#"]').on('click', function (event) {
      event.preventDefault();
      var sc = $(this).attr("href"),
          dn = $(sc).offset().top;
      $('html, body').animate({
        scrollTop: dn
      }, 1000);
    });
  });
}); // Полифилы
// forEach IE 11

if ('NodeList' in window && !NodeList.prototype.forEach) {
  console.info('polyfill for IE11');

  NodeList.prototype.forEach = function (callback, thisArg) {
    thisArg = thisArg || window;

    for (var i = 0; i < this.length; i++) {
      callback.call(thisArg, this[i], i, this);
    }
  };
} // matches IE 11


(function () {
  if (!Element.prototype.matches) {
    Element.prototype.matches = Element.prototype.matchesSelector || Element.prototype.webkitMatchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector;
  }
})(); //Array.form IE 11


if (!Array.from) {
  Array.from = function (object) {
    'use strict';

    return [].slice.call(object);
  };
}
$ (function () {

  var mixer = mixitup('.popular__content');
  
  $('.slider-reviews').slick ({
    dots: true,
    prevArrow: '<button type="button" class="slick-prev"><img src="images/icons/prev-arrow.svg" alt="Прокрутить назад"></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="images/icons/next-arrow.svg" alt="Прокрутить вперед"></button>',

  });
  
});
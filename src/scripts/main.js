'use strict'

$(window).on('load resize orientationchange', function() {
  $('.gallery__photos').each(function() {
    const $carousel = $(this);
    if ($(window).width() > 1024) {
      if ($carousel.hasClass('slick-initialized')) {
        $carousel.slick('unslick');
      }
    }
    else {
      if (!$carousel.hasClass('slick-initialized')) {
        $carousel.slick({
          arrows: false,
          dots: true,
          adaptiveHeight: true,
          infinite: false,
          slidesToShow: 1,
          mobileFirst: true,
        });
      }
    }
  });
});

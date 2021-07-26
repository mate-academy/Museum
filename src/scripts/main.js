$(window).on('load resize orientationchange', function() {
  $('.gallery__photos').each(function(){
      var $carousel = $(this);
      if ($(window).width() > 1024) {
          if ($carousel.hasClass('slick-initialized')) {
              $carousel.slick('unslick');
          }
      }
      else{
          if (!$carousel.hasClass('slick-initialized')) {
            $carousel.slick({
              arrows: false,
              dots: true,
              adaptiveHeight: true,
              infinite: false,
              variableWidth: true,
              mobileFirst: true,
            });
          }
      }
  });
});

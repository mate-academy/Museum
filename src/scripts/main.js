function initSlick() {
  const $slider = $('.slider');
  const windowWidth = $(window).width();


  if (windowWidth < 1280) {
    if (!$slider.hasClass('slick-initialized')) {
      $slider.slick({
        slidesToShow: windowWidth >= 768 ? 2 : 1,
        slidesToScroll: 1,
        centerMode: windowWidth >= 768 ? false : true,
        centerPadding: '0px',
        dots: true,
        infinite: windowWidth >= 768 ? false : true,
      });
    }
  } else {
    if ($slider.hasClass('slick-initialized')) {
      $slider.slick('unslick');
    }
  }
}


$(function () {
  initSlick();
});

$(window).on('resize', function () {
  initSlick();
});

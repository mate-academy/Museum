import Swiper, { Navigation, Pagination } from 'swiper';
import 'swiper/swiper.min.css';
import 'swiper/swiper-bundle.min.css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';

// eslint-disable-next-line no-new
// eslint-disable-next-line no-new
new Swiper('.swiper', {
  modules: [Navigation, Pagination],
  pagination: {
    el: '.swiper-pagination',
  },
});

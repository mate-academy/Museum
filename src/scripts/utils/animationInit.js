import { WOW } from 'wowjs';

export const initWow = () => {
  new WOW({
    boxClass: 'wow',
    animateClass: 'animated',
    offset: 0,
    mobile: true,
    live: true,
  }).init();
};

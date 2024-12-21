import { Fancybox } from '@fancyapps/ui';
import '@fancyapps/ui/dist/fancybox/fancybox.css';

function initEventsGallery() {
  Fancybox.bind('[data-fancybox="events-gallery"]', {
    contentClick: 'iterateZoom',
    Images: {
      Panzoom: {
        maxScale: 2,
      },
    },
    Toolbar: {
      display: {
        left: ['infobar'],
        middle: [
          'zoomIn',
          'zoomOut',
          'toggle1to1',
          'rotateCCW',
          'rotateCW',
          'flipX',
          'flipY',
        ],
        right: ['slideshow', 'download', 'thumbs', 'close'],
      },
    },
  });
}

export default initEventsGallery;

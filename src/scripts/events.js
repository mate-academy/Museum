import { Fancybox } from '@fancyapps/ui';
import '@fancyapps/ui/dist/fancybox/fancybox.css';

function initEventsGallery(galleryDataAttr) {
  Fancybox.bind(galleryDataAttr, {
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

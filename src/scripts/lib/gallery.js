import lightGallery from 'lightgallery';
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import 'lightgallery/css/lightgallery-bundle.css';

lightGallery(document.getElementById('lightgallery'), {
  licenseKey: '7EC452A9-0CFD441C-BD984C7C-17C8456E',
  plugins: [lgThumbnail],
  speed: 500,
  mobileSettings: {
    showCloseIcon: true,
    download: true,
  },
});

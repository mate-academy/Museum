let unlock = true;
const timeout = 500;

const refs = {
  lockPadding: document.querySelectorAll('.lock-padding'),
  body: document.querySelector('.page__body'),
};

export const popupOpen = function(curentPopup) {
  if (curentPopup && unlock) {
    const popupActive = document.querySelector('.popup__open');

    if (popupActive) {
      popupClose(popupActive, false);
    } else {
      bodyLock();
    }
    curentPopup.classList.add('popup__open');

    curentPopup.addEventListener('click', function(e) {
      if (!e.target.closest('.popup__content')) {
        popupClose(e.target.closest('.popup'));
      }
    });

    document.addEventListener('keydown', onKeydownCloseModal);
  }
};

export const popupClose = function(popupActive, doUnlock = true) {
  if (unlock) {
    popupActive.classList.remove('popup__open');
    window.removeEventListener('keydown', onKeydownCloseModal);

    const popupImg = popupActive.querySelector('.popup__image');

    if (popupImg) {
      popupImg.src = '';
      popupImg.alt = '';
    }

    if (doUnlock) {
      bodyUnlock();
    }
  }
};

function bodyLock() {
  const lockPaddingValue = window.innerWidth - document
    .querySelector('.page__body').offsetWidth + 'px';

  if (refs.lockPadding.length > 0) {
    refs.lockPadding.forEach(el => {
      el.style.paddingRight = lockPaddingValue;
    });
  }

  refs.body.style.paddingRight = lockPaddingValue;
  refs.body.classList.add('lock');

  unlock = false;

  setTimeout(function() {
    unlock = true;
  }, timeout);
};

function bodyUnlock() {
  setTimeout(function() {
    refs.lockPadding.forEach(el => {
      el.style.paddingRight = '0px';
    });
    refs.body.style.paddingRight = '0px';
    refs.body.classList.remove('lock');
  }, timeout);

  unlock = false;

  setTimeout(function() {
    unlock = true;
  }, timeout);
}

function onKeydownCloseModal(evt) {
  if (evt.code !== 'Escape') {
    return;
  };

  const popupActive = document.querySelector('.popup__open');

  popupClose(popupActive);
};

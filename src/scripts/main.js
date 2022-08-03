'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

const myTextbox = document.getElementById('subscription__form');

myTextbox.addEventListener('keypress', checkName, false);

function checkName(evt) {
  const charCode = evt.charCode;

  if (charCode !== 0) {
    if (charCode < 97 || charCode > 122) {
      evt.preventDefault();

      displayWarning(
        'Please use lowercase letters only.\n' + `charCode: ${charCode}\n`
      );
    }
  }
}

let warningTimeout;
const warningBox = document.createElement('div');

warningBox.className = 'warning';

function displayWarning(msg) {
  warningBox.innerHTML = msg;

  if (document.body.contains(warningBox)) {
    window.clearTimeout(warningTimeout);
  } else {
    // insert warningBox after myTextbox
    myTextbox.parentNode.insertBefore(warningBox, myTextbox.nextSibling);
  }

  warningTimeout = window.setTimeout(function() {
    warningBox.parentNode.removeChild(warningBox);
    warningTimeout = -1;
  }, 2000);
}

document.getElementById('subscription__form').reset();

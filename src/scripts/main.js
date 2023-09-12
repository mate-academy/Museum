'use strict';

const form = document.getElementById('subscription__field');

form.addEventListener('submit', function handleSubmin(event) {
  event.preventDefault();

  form.reset();
});

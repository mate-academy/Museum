const form = document.getElementById('form');

document.getElementById('form').addEventListener('submit', (event) => {
  event.preventDefault();
  form.reset();
});

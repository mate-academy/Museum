const form = document.querySelector('.js-subscription-form');

form.onsubmit = (event) => {
  event.preventDefault();

  const formData = new FormData(form);

  for (let [name, value] of formData.entries()) {
    console.log(name, ':', value);
  }

  form.reset();
  window.scrollTo(0, 0);
};

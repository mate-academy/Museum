import { Notyf } from 'notyf';
import 'notyf/notyf.min.css';
const notyf = new Notyf({ position: { x: 'right', y: 'top' } });

const sendForm = (formSelector, inputSelector) => {
  const form = document.querySelector(formSelector);
  const email = document.querySelector(inputSelector);

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    notyf.success('Дякуємо за підписку!');
    email.value = '';
  });
};

export default sendForm;

// const dropdown = document.querySelector('.header__dropdown');
// const openBtn = document.querySelector('.icon--dropdown-open');
// const closeBtn = document.querySelector('.icon--dropdown-close');

// // Відкриття дропдауну
// openBtn.addEventListener('click', () => {
//   dropdown.classList.add('header__dropdown--active'); // Активуємо дропдаун
//   openBtn.style.display = 'none'; // Ховаємо кнопку відкриття
//   closeBtn.style.display = 'block'; // Показуємо кнопку закриття
// });

// // Закриття дропдауну
// closeBtn.addEventListener('click', () => {
//   dropdown.classList.remove('header__dropdown--active'); // Деактивуємо дропдаун
//   closeBtn.style.display = 'none'; // Ховаємо кнопку закриття
//   openBtn.style.display = 'block'; // Показуємо кнопку відкриття
// });

const dropdown = document.querySelector('.header__dropdown');
const openBtn = document.querySelector('.icon--dropdown-open');
const closeBtn = document.querySelector('.icon--dropdown-close');
const backdrop = document.getElementById('backdrop');

// Відкриття дропдауну
openBtn.addEventListener('click', () => {
  dropdown.classList.add('header__dropdown--active');

  // Чекаємо завершення анімації і тільки потім ховаємо/показуємо кнопки
  setTimeout(() => {
    openBtn.style.display = 'none';
    closeBtn.style.display = 'block';
    closeBtn.style.opacity = '1'; // Відновлюємо прозорість для кнопки закриття
    backdrop.classList.add('backdrop--active'); // Показуємо бекдроп
    openBtn.classList.remove('fade-out'); // Прибираємо клас анімації
  }, 200);
});

// Закриття дропдауну
closeBtn.addEventListener('click', () => {
  dropdown.classList.remove('header__dropdown--active');

  // Чекаємо завершення анімації і тільки потім ховаємо/показуємо кнопки
  setTimeout(() => {
    closeBtn.style.display = 'none';
    openBtn.style.display = 'block';
    openBtn.style.opacity = '1'; // Відновлюємо прозорість для кнопки відкриття
    backdrop.classList.remove('backdrop--active'); // Ховаємо бекдроп
    closeBtn.classList.remove('fade-out'); // Прибираємо клас анімації
  }, 200);
});

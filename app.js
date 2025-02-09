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
// const dropdownVisibility = document.querySelector(
//   '.header__dropdown--non-visible',
// );
const dropdownNavLinks = document.querySelectorAll(
  '.header__dropdown-nav-link',
);
const openBtn = document.querySelector('.icon--dropdown-open');
const closeBtn = document.querySelector('.icon--dropdown-close');
const backdrop = document.getElementById('backdrop');

// Відкриття дропдауну
openBtn.addEventListener('click', () => {
  dropdown.classList.remove('header__dropdown--non-visible');
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
    dropdown.classList.add('header__dropdown--non-visible');
  }, 200);
});

dropdownNavLinks.forEach((link) => {
  link.addEventListener('click', (event) => {
    event.preventDefault(); // Запобігаємо миттєвому переходу

    dropdown.classList.remove('header__dropdown--active');
    backdrop.classList.remove('backdrop--active');
    closeBtn.style.display = 'none';
    openBtn.style.display = 'block';
    openBtn.style.opacity = '1';

    setTimeout(() => {
      dropdown.classList.add('header__dropdown--non-visible');
    }, 200);

    // Затримуємо перехід на 150 мс
    setTimeout(() => {
      window.location.href = link.href; // Переходимо за посиланням
    }, 220);
  });
});

"use strict";
// let modal;
// function toggleModal(event) {
//   event.stopPropagation();
//   modal.classList.toggle('show');
// }
// function closeModal() {
//   modal.classList.remove('show');
// }
// document.addEventListener('DOMContentLoaded', function() {
//   modal = document.getElementById('modalMenu');
//   modal.addEventListener('click', closeModal);
//   const menuOpener = document.querySelector('.menu__opener');
//   menuOpener.addEventListener('click', toggleModal);
// });
// function sendForm() {
//   const subscribeTextarea = document.getElementById('subscribe');
//   subscribeTextarea.value = '';
// };
const modal = document.getElementById("modalMenu");
const menuOpener = document.querySelector(".menu__opener");
const logo = document.querySelector(".header_logo img");
const logoChevron = document.querySelector(".logo-chevron-hidden");
const logoCross = document.querySelector(".logo-cross-hidden");
menuOpener.addEventListener("click", (event)=>{
    event.stopPropagation();
    modal.classList.toggle("show");
    // Проверяем, открыто ли модальное окно
    if (modal.classList.contains("show")) logo.src = logoCross.src; // Изменяем src на крестик
    else logo.src = logoChevron.src; // Возвращаем src на логотип
});
// Добавляем обработчик для закрытия модального окна при клике вне него
modal.addEventListener("click", ()=>{
    modal.classList.remove("show");
    logo.src = logoCross.src; // Возвращаем src на логотип
});
// Добавляем обработчик для открытия модального окна при клике на логотип
logo.addEventListener("click", (event)=>{
    event.stopPropagation();
    modal.classList.toggle("show");
    // Проверяем, открыто ли модальное окно
    if (modal.classList.contains("show")) logo.src = logoCross.src; // Изменяем src на крестик
    else logo.src = logoChevron.src; // Возвращаем src на логотип
});
document.addEventListener("DOMContentLoaded", function() {
    const subscribeButton = document.querySelector(".footer_subscribe-button");
    const sendForm = ()=>{
        const subscribeTextarea = document.getElementById("subscribe");
        subscribeTextarea.value = "";
    };
    subscribeButton.addEventListener("click", sendForm);
});

//# sourceMappingURL=index.f75de5e1.js.map

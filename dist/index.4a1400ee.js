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
var e=document.getElementById("modalMenu");e.addEventListener("click",function(){e.classList.remove("show")}),document.querySelector(".menu__opener").addEventListener("click",function(t){t.stopPropagation(),e.classList.toggle("show")}),document.querySelector(".header_logo").addEventListener("click",function(){e.classList.toggle("show")}),document.addEventListener("DOMContentLoaded",function(){document.querySelector(".footer_subscribe-button").addEventListener("click",function(){document.getElementById("subscribe").value=""})});//# sourceMappingURL=index.4a1400ee.js.map

//# sourceMappingURL=index.4a1400ee.js.map

'use strict';
const h = document.querySelector(".icon-menu");
const n = document.querySelector(".nav");

h.addEventListener("click", () => {
  console.log('icon clicked');
  n.classList.toggle("nav--activ");
});

h.addEventListener()


// if(activ) {
//     n.classList.remove("nav--activ")
// } else {
//     n.classList.add("nav--activ")
// }

// const f = n.classList.contains("nav");
// console.log(f);

// const activ = n.classList.contains("nav--activ");
// console.log(activ);
// if(activ) {
//     n.classList.remove("nav--activ");
// } else {
//     n.classList.add("nav--activ");
// }
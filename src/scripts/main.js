'use strict';

let indexValue = 1;
const history = [];

showImg(indexValue);

function btm_slide(e) {
  let direction = 0;

  history.push(indexValue);
  console.log(history);

  if (e === indexValue) {
    return
  }

  if (e > indexValue) {
    direction = 1;
  } else {
    direction = -1;
  }

  showImg(indexValue = e, direction);
}

function side_slide(e) {
  let direction = 0;

  if (e > indexValue) {
    direction = 1;
  } else {
    direction = -1;
  }
  showImg(indexValue += e, direction);
}

function showImg(e, swipe = null) {
  let i;
  const img = document.querySelectorAll('.galery__wrapper');
  const slider = document.querySelectorAll('.galery__bottom-slider span');

  if (e > img.length) {
    indexValue = 1;
  }

  if (e < 1) {
    indexValue = img.length;
  }

  for (i = 0; i < img.length; i++) {
    img[i].style.display = 'none';
  }

  for (i = 0; i < slider.length; i++) {
    slider[i].style.backgroundColor = '#687480';
  }

  if (swipe) {
    // const direction = swipe > 0 ? 100 : -100;
    let nextImage;
    let currentImg;
    const lastImg = history.slice(`-${1}`);
    console.log(lastImg);

    if (swipe > 0) {
      nextImage = lastImg - 1 >= 0 ? lastImg - 1 : 0;
      currentImg = indexValue - 1;
      // console.log("next img = "+nextImage);
      // console.log("current img = "+currentImg);
    } else {
      currentImg = indexValue - 2 >= 0 ? indexValue - 1 : 0;
      nextImage = lastImg - 1 >= 0 ? lastImg - 1 : 0;
    }

    if (window.innerWidth > 768) {
      img[nextImage].style.display = 'block';
      img[currentImg].style.display = 'block';

      // img[indexValue].style.transform = 'translateX(-100%)';
      slider[indexValue - 1].style.backgroundColor = '#1A5A4C';
      return;
    }
    img[currentImg].style.display = 'block';
    img[currentImg].style.opacity = '1';
    img[nextImage].style.display = 'block';

    img[nextImage].style.transform = `translateX(-100%)`;
    img[nextImage].style.zIndex = `1`;


    setTimeout(() => {
      img[currentImg].style.zIndex = `1`;
      // img[currentImg].style.transform = `translateX(-100%)`;


      img[nextImage].style.zIndex = `-1`;
      img[nextImage].style.opacity = '0';
      img[nextImage].style.transform = `translateX(0%)`;


    }, 300);
  } else {
    img[indexValue - 1].style.display = 'block';
  }

  if (window.innerWidth > 768) {
    img[indexValue].style.display = 'block';
  }

  if (window.innerWidth > 1080) {
    let counterImg = 1;

    for (let i = 0; i < img.length; i++) {
      if (counterImg === 1 || counterImg === 4) {
        img[i].style.gridColumn = 'span 4';
      } else {
        img[i].style.gridColumn = 'span 8';
      }

      counterImg++;

      if (counterImg > 4) {
        counterImg = 1;
      }
    }

    const i1 = indexValue % img.length;
    const i2 = (indexValue + 1) % img.length;
    const i3 = (indexValue + 2) % img.length;

    img[i1].style.display = 'block';
    img[i2].style.display = 'block';
    img[i3].style.display = 'block';
  }

  slider[indexValue - 1].style.backgroundColor = '#1A5A4C';
}

// function animate(arrayImage, swipe, count = 1) {
//   let workArray = [];

//   if (history.slice(`-${count}`)) {
//     workArray = history.slice(`-${count}`);
//   } else {
//     for (let index = 0; index < count; index++) {
//       workArray.push(index);
//     }
//   }
// // TODO: доробити функцію анімації, при зміні count міняється кількість картинок і відповідно їх зсув
//   for (let i = 0; i < count; i++) {
//     if (swipe > 0) {
//       nextImage = lastImg - 1 >= 0 ? lastImg - 1 : 0;
//       currentImg = indexValue - 1;
//       // console.log("next img = "+nextImage);
//       // console.log("current img = "+currentImg);
//     } else {
//       currentImg = indexValue - 2 >= 0 ? indexValue - 1 : 0;
//       nextImage = lastImg - 1 >= 0 ? lastImg - 1 : 0;
//     }
//   }
// }

document.addEventListener('DOMContentLoaded', () => {
  showImg(indexValue);
});

window.addEventListener('resize', () => {
  showImg(indexValue);
});

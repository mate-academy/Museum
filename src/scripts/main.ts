'use strict';

const swipper = document.querySelector(
  '.section-gallery__swipper',
) as HTMLElement;

const swipperWrapper = document.querySelector(
  '.section-gallery__swipper-wrapper',
) as HTMLElement;

const swipperList = document.querySelector(
  '.section-gallery__swipper-list',
) as HTMLElement;

const swippetImages = document.querySelectorAll(
  '.section-gallery__swipper-image',
) as NodeListOf<HTMLElement>;

let currentFrame = 0;

let frameSize = 0;
const maxframe = 5;
let wrapperWidth = 0;

let imageWidth = 0;

currentFrame = Math.round(
  swipperWrapper.scrollLeft /
    (imageWidth + parseFloat(getComputedStyle(swipperList).gap)),
);

const buttons: HTMLElement = document.querySelector(
  '.section-gallery__buttons',
) as HTMLElement;

const updateButtons = () => {


  currentFrame = Math.min(Math.max(currentFrame, 0), maxframe - (frameSize - 1) - 1);
  let innerbuttons = '';
  for (let i = 0; i < maxframe - (frameSize - 1); i++) {
    if (i === currentFrame) {
      innerbuttons += '<button class="section-gallery__button section-gallery__button--active"></button>';
    } else {
      innerbuttons += '<button class="section-gallery__button"></button>';
    }
  }
  buttons.innerHTML = innerbuttons;

  [...buttons.children].forEach((button, index) => {
    button.addEventListener('click', () => {
      const gap =
        parseFloat(getComputedStyle(swipperList).gap) * Math.max(0, index - 1);
      currentFrame = index;
      wrapper.scrollLeft = imageWidth * index + gap;
      updateButtons();
    });
  });
};

updateButtons();

const resizeImages = () => {
  const old = frameSize;
  frameSize = +getComputedStyle(swipper).getPropertyValue('--frame-size');

  if (old !== frameSize) {
    updateButtons();
  }

  const gap = parseFloat(getComputedStyle(swipperList).gap) * (frameSize - 1);

  wrapperWidth = swipperWrapper.clientWidth;
  imageWidth = wrapperWidth / frameSize - gap / 2;
  swippetImages.forEach((image) => {
    image.style.width = imageWidth + 'px';
  });
};

resizeImages();

window.addEventListener('resize', () => {
  resizeImages();
});

type MouseVelocityData = {
  vx: number;
  vy: number;
  speed: number;
};

type MouseSample = {
  x: number;
  y: number;
  time: number;
};

class MouseVelocity {
  private sampleTime: number;
  private samples: MouseSample[] = [];
  private enabled = false;

  public x = 0;
  public y = 0;

  private readonly onMove = (e: MouseEvent): void => {
    if (!this.enabled) return;

    const now = performance.now();

    this.x = e.clientX;
    this.y = e.clientY;

    this.samples.push({
      x: this.x,
      y: this.y,
      time: now,
    });

    while (
      this.samples.length > 0 &&
      now - this.samples[0].time > this.sampleTime
    ) {
      this.samples.shift();
    }
  };

  constructor(sampleTime = 100) {
    this.sampleTime = sampleTime;
    this.start();
  }

  public getVelocity(): MouseVelocityData {
    if (!this.enabled || this.samples.length < 2) {
      return { vx: 0, vy: 0, speed: 0 };
    }

    const first = this.samples[0];
    const last = this.samples[this.samples.length - 1];

    const dt = (last.time - first.time) / 1000;

    if (dt <= 0) {
      return { vx: 0, vy: 0, speed: 0 };
    }

    const vx = (last.x - first.x) / dt;
    const vy = (last.y - first.y) / dt;

    return {
      vx,
      vy,
      speed: vx,
    };
  }

  public start(): void {
    if (this.enabled) return;

    this.enabled = true;
    this.samples = [];

    window.addEventListener('mousemove', this.onMove);
  }

  public stop(): void {
    if (!this.enabled) return;

    this.enabled = false;
    this.samples = [];

    window.removeEventListener('mousemove', this.onMove);
  }
}

const mouseVelocity = new MouseVelocity(100);

function loop(): void {
  const velocity = mouseVelocity.getVelocity();

  requestAnimationFrame(loop);
}

loop();
mouseVelocity.stop();

const wrapper = document.querySelector(
  '.section-gallery__swipper-wrapper',
) as HTMLElement;

let isDragging = false;
let startX = 0;
let startScrollLeft = 0;

wrapper.addEventListener('pointerdown', (e: PointerEvent) => {
  isDragging = true;
  mouseVelocity.start();
  wrapper.setPointerCapture(e.pointerId);

  startX = e.clientX;
  startScrollLeft = wrapper.scrollLeft;

  wrapper.style.scrollBehavior = 'auto';
  wrapper.style.cursor = 'grabbing';
  wrapper.style.scrollSnapType = 'none';
});

wrapper.addEventListener('pointermove', (e: PointerEvent) => {
  if (!isDragging) {
    return;
  }

  const deltaX = e.clientX - startX;

  wrapper.scrollLeft = startScrollLeft - deltaX;
});

wrapper.addEventListener('pointerup', (e: PointerEvent) => {
  isDragging = false;
  wrapper.releasePointerCapture(e.pointerId);

  wrapper.style.cursor = '';
  wrapper.style.scrollBehavior = '';
  wrapper.style.scrollSnapType = 'x mandatory';

  const scroll = wrapper.scrollLeft -= mouseVelocity.getVelocity().speed / 3
  wrapper.scrollLeft = scroll;
  mouseVelocity.stop();
  currentFrame = Math.round(
    scroll /
      (imageWidth + parseFloat(getComputedStyle(swipperList).gap)),
  );

  currentFrame = Math.min(Math.max(currentFrame, 0), maxframe - (frameSize - 1) - 1);
  console.log(maxframe - (frameSize - 1));
  updateButtons();
});

wrapper.addEventListener('pointercancel', () => {
  isDragging = false;

  wrapper.style.cursor = '';
  wrapper.style.scrollBehavior = '';
  wrapper.style.scrollSnapType = 'x mandatory';

  const scroll = wrapper.scrollLeft -= mouseVelocity.getVelocity().speed / 3
  wrapper.scrollLeft = scroll;
  mouseVelocity.stop();
  currentFrame = Math.round(
    scroll /
      (imageWidth + parseFloat(getComputedStyle(swipperList).gap)),
  );

  currentFrame = Math.min(Math.max(currentFrame, 0), maxframe - (frameSize - 1) - 1);
  console.log(maxframe - (frameSize - 1));
  updateButtons();
});


const form = document.querySelector('.section-subscription__form') as HTMLFormElement;

form.addEventListener('submit', (event) => {
  event.preventDefault()

  form.reset();
});

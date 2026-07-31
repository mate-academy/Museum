# НАМУ — Museum landing page

Адаптивний лендінг Національного художнього музею України: афіша актуальних
виставок, анонс лекції, галерея колекції зі слайдером і форма підписки на новини.

## Технології

HTML5, SCSS (BEM, partials), Vite, Swiper, Cypress

## Посилання

- [DEMO LINK](https://HiljSV.github.io/Museum/)
- [Макет у Figma](https://www.figma.com/design/tC0kH52mr5Yaa4jhWGytzc/)

## Що всередині

- шапка з бургер-меню на `:target` — без JS, зі блокуванням скролу сторінки
- адаптив під **320 / 640 / 768 / 1280**: числа знято з макета через Figma REST API
- галерея: сітка 370/770 на десктопі й слайдер Swiper із пагінацією нижче 1280
- форма підписки: не відправляється порожньою, очищається без перезавантаження
- плавний скрол по якорях, наведення на всі інтерактивні елементи, збільшення
  фото галереї та виставок на hover

## Запуск локально

```bash
nvm use 20
npm install
npm start
```

Відкрити <http://localhost:5173/>

## Перевірки

```bash
npm run lint     # prettier + stylelint + linthtml
npm test         # lint + cypress
npm run build    # прод-збірка у /dist
```

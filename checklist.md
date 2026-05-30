
# Checklist for preparing a portfolio project

## Tech review

1. Add [favicon](http://joxi.ru/1A5kM0lI4nBB3m)
2. Add a smooth scroll for the whole page (`scroll-behavior: smooth;`)
3. Logos in header and footer should be links to home page
4. Make sure when you click on logo there is no 404 error (Use `href="#"` in `anchor tag`)
5. Pictures in the gallery and exhibitions sections should increase on hover
7. All interactive elements(*links, buttons, pictures, icons*) ***should have a hover effect and cursor pointer***. User must intuitively understand that he can interact with them
8. When a user clicks on Address Google Maps is opened in a new tab (Use `target="_blank"`)
9. Make sure when you click on logo there is no 404 error (Use `href="#"` in `anchor tag`)
10. When you try to send the form there is no 405 error and the form is automatically cleared after submit and is scrolled to the top of the page or the page is reloaded
11. The form shouldn’t submit empty
12. After autocomplete the form, change the default styles. Read more about [changing autocomplete styles](https://css-tricks.com/snippets/css/change-autocomplete-styles-webkit-browsers/)
13. OPTIONAL: After everything is done, you can add a slider for viewing pictures in the gallery (for mobile version)

## HR review

1. To make it clear to the recruiter what exactly this landing page is, it is better to give the whole web page the title
2. A landing page is implemented strictly according to the design in Figma
3. Links in the header and footer menus should lead to the corresponding blocks of the landing page
4. The speed of animations is the same throughout the landing page (for example, increasing when hovering or moving blocks when scrolling)
5. Placeholders in the forms suggest what to enter, and if there is a validation of the form, then it is clear in what format to enter the phone number
6. Make sure everything looks neat on mobile and without horizontal scrolling
7. The button "tickets" should lead to the block with current events
8. The button "about us" should lead to the email digest
9. All the social icons in the footer should be clickable and open the social networks in a new tab



Чек-лист для подготовки портфолио-проекта
Tech review
Добавить favicon
Добавить плавный скролл для всей страницы (scroll-behavior: smooth;)
Логотипы в хедере и футере должны быть ссылками на главную страницу
Убедиться, что при клике на логотип нет ошибки 404 (использовать href="#" в anchor tag)
Картинки в секциях gallery и exhibitions должны увеличиваться при наведении
Все интерактивные элементы (ссылки, кнопки, картинки, иконки) должны иметь hover-эффект и cursor pointer. Пользователь должен интуитивно понимать, что с ними можно взаимодействовать
При клике на адрес должны открываться Google Maps в новой вкладке (использовать target="_blank")
Убедиться, что при клике на логотип нет ошибки 404 (использовать href="#" в anchor tag)
При отправке формы не должно быть ошибки 405, форма должна автоматически очищаться после отправки, а страница — прокручиваться вверх или перезагружаться
Форма не должна отправляться пустой
После автозаполнения формы изменить стандартные стили. Подробнее о смене стилей autocomplete
ОПЦИОНАЛЬНО: После завершения основной работы можно добавить слайдер для просмотра изображений в gallery (для мобильной версии)
HR review
Чтобы рекрутеру было понятно, что это за landing page, лучше добавить заголовок всей веб-странице
Landing page должен быть реализован строго по дизайну из Figma
Ссылки в меню хедера и футера должны вести к соответствующим блокам landing page
Скорость анимаций должна быть одинаковой по всему landing page (например, увеличение при hover или движение блоков при скролле)
Placeholder’ы в формах должны подсказывать, что вводить, а если есть валидация формы — должно быть понятно, в каком формате вводить номер телефона
Убедиться, что на мобильных устройствах всё выглядит аккуратно и нет горизонтального скролла
Кнопка "tickets" должна вести к блоку с текущими событиями
Кнопка "about us" должна вести к блоку email-рассылки
Все иконки соцсетей в футере должны быть кликабельными и открывать соцсети в новой вкладке


Лендинг музея

Реализовать landing page согласно дизайну в Figma — использовать BEM и SCSS.

Проверь стили шрифтов. Использовать IBM Plex Sans и Montserrat.

Дизайн: 1440px
Desktop: 1280px
Tablet: 640px
Mobile: (> 320px)
Реализовать header с hamburger menu.
Реализовать блок Художній Музей.
Реализовать блок Актуальні події с двумя похожими блоками: Йду і повертаюсь и І спогади і мрії.
Реализовать блок Від класицизму до романтизму.
Реализовать блок Галерея и слайдер.
Реализовать блок Підписка.
Реализовать footer.
Чек-лист подготовки портфолио-проекта для HR review
Не забудь добавить title для всей веб-страницы (это может быть название лендинга)
Landing page должен быть реализован строго по дизайну из Figma
Ссылки в меню header и footer должны вести к соответствующим блокам landing page
Скорость анимаций должна быть одинаковой по всему landing page (например, увеличение при hover или движение блоков при скролле)
Placeholder’ы в формах должны подсказывать, что вводить, а если есть валидация формы — должно быть понятно, в каком формате вводить номер телефона
Убедиться, что на мобильных устройствах всё выглядит аккуратно и нет горизонтального скролла
Добавить favicon
Добавить плавный скролл для всей страницы
При попытке отправить форму не должно быть ошибки 405, а форма должна автоматически очищаться после отправки и прокручивать страницу вверх либо перезагружать её
Форма не должна отправляться пустой
Кнопки "exhibitions" и "tickets" должны вести к блоку с текущими событиями
Кнопка "about us" должна вести к блоку email-рассылки
Иконки Facebook и Instagram в footer должны быть кликабельными и открывать соцсети музея в новой вкладке
Картинки в секциях gallery и exhibitions должны увеличиваться при hover
ОПЦИОНАЛЬНО: После завершения всей работы можно добавить слайдер для просмотра изображений в gallery (для мобильной версии)
Github flow
Сделать Fork репозитория.
Клонировать форкнутый репозиторий.
(Ссылка на проект должна содержать твоё имя, но не mate-academy)
Выполнить npm install (или просто npm i).
Выполнить npm start.
Открыть ещё одно окно терминала для следующих шагов.
Выполнить git checkout -b develop — чтобы создать новую ветку и переключиться на неё.
Писать код в папке src.
Выполнить npm run lint и исправить ошибки стиля кода.
Выполнить npm run deploy, чтобы задеплоить решение на gh-pages.
Выполнить git add . && git commit -m 'solution', чтобы сохранить изменения.
Выполнить git push origin develop, чтобы отправить код для PR.
Создать Pull Request (PR) из ветки develop в ветку master оригинального репозитория.
Заменить <your_account> на свой Github username в
DEMO LINK.
Скопировать DEMO LINK в описание PR.

- [DEMO LINK](https://diolna.github.io/layout_museum/)
https://github.com/diolna/layout_museum/tree/develop

Страница состоит:
1. Header Простой блочный элемент с элементами top-menu и трансформируемым фоном в зависимости от расширения экрана. Особенностью является структура кнопки "Квитки". Учитывая, что она такая же как форма email (section subscribtion) то также была сделана в виде формы и сконфигурированаа в отдельном файле button как общий элемент.
2. Nav Меню сайта. Так как меню не выводится на весь экран то создан отдельный блок green который наполнился содержимым. для остальной части страницы при этом устанавливается процент непрозрачности.

3  section
  3.1 раздел "current-events"  Использовался Flex. В зависимости от ширины экрана выбираются соответствующие изображения. Событие "ВЫСТАВКА" используется также и в следующем блоке (только как "ЛЕКЦИИ") поэтому элементы с общими свойтсвами выделенны в отдельный файл.
  3.2 раздел "lecture" . Использутеся "position " для смещения блока. В остальном простой блочный элемент. Использует общие свойств для отображения "ЛУКЦИИ".
  3.3 раздел "gallery" В завивимости от размера используется или элемент "slider" или display grid.
  3.4 раздел "subscription" Простой блочный элемент. Форма для отправки email такая же как и в блоке header. Общие свойства выведены в отдельный файл.
  3.5 раздел "footer"  - grid - элемент. имеет три варианта grida  (2, 1fr), (6, 1fr), (12, 1fr)

  В элементах текста использовался неразрывный деффиз &#8209;


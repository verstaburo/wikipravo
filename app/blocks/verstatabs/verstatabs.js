export function VerstaTabs(prefix) {
  var targetData = prefix || "tab", // Префикс названия data-атрибута, переключающего вкладки
      // Атрибуты
      targetAttr = "data-" + targetData + "-target",
      targetGroupAttr = "data-" + targetData + "-group",
      targetGroupContainerAttr = "data-" + targetData + "-group-container",
      targetIdAttr = "data-" + targetData + "-id",
      // Селекторы
      targetSelector = "[" + targetAttr + "]",
      targetGroupSelector = "[" + targetGroupAttr + "]",
      targetGroupContainerSelector = "[" + targetGroupContainerAttr + "]",
      targetIdSelector = "[" + targetIdAttr + "]",
      // Переменные
      targetId, // Переменная для id вкладки
      targetGroup, // Переменная для id группы вкладок
      targetIdVar,
      basicContainerHeight,
      currentContainer;

  // ###################
  // Функция смены вкладок
  function changeTabs() {

    // Определяем контейнер текущей вкладки
    currentContainer = $(document).find("[" + targetIdAttr + "='" + targetId + "']").parents("[" + targetGroupContainerAttr + "='" + targetGroup  + "']");

    // Скрываем контент неактивных вкладок
    $(document).find("[" + targetGroupAttr + "='" + targetGroup + "']").hide().removeClass("active");

    // ###################
    // Показываем контент активной вкладки
    $(document).find("[" + targetIdAttr + "='" + targetId + "']").show(0, function(){

      // Передаем ее высоту контейнеру, анимируем через библиотеку Velocity
      currentContainer.velocity({ height: $(this).outerHeight() }, { duration: 250 });

      // Добавляем вкладке активный класс
      $(this).addClass("active");
    });

    // Делаем вкладку активной
    $(document).find("[" + targetAttr + "='" + targetId + "']").addClass("active");

    // ###################
    // Делаем другие вкладки неактивными
    $(document).find("[" + targetGroupAttr + "='" + targetGroup + "']").not(".active").each(function(){

      // Определяем id рассматриваемой вкладки
      targetIdVar = $(this).attr(targetIdAttr);

      // Убираем активный класс с переключателей вкладок
      $(document).find("[" + targetAttr + "='" + targetIdVar + "']").removeClass("active");
    });

  }

  // ###################
  // Меняем высоту контейнера на auto при ресайзе страницы
  $(window).resize(function(){
    $(document).find(targetGroupContainerSelector).height("auto");
    setTimeout(baseContainerHeight, 1);
  });

  // ###################
  // Задаем начальную высоту контейнерам, если она не задана
  function baseContainerHeight() {
    $(document).find(targetGroupContainerSelector).each(function(){
      $(this).height( $(this).height() );
      $(this).velocity({ height: $(this).height() }, { duration: 0 });
    });
  }

  baseContainerHeight();

  // ###################
  // Отслеживаем клик по вкладке
  $(document).on("click", targetSelector, function(e){

    // Убираем переход по ссылке
    e.preventDefault();

    // Определяем id вкладки
    targetId = $(this).data(targetData + "-target");

    // Определяем группу вкладки
    targetGroup = $(document).find("["+ targetIdAttr + "='" + targetId + "']").attr(targetGroupAttr);

    // Запускаем смену вкладок
    changeTabs();
  });

}

export function VerstaSelectBox() {
  var mainClass = "selectbox",
      buttonClass = mainClass + "__button",
      activeClass = mainClass + "_active",
      optionClass = mainClass + "__option",
      buttonTextOutput = mainClass + "__button-name",
      listClass = mainClass + "__list",
      inputClass = mainClass + "__input",
      optionActiveClass = optionClass + "_active",
      selectTopListClass = mainClass + "__list_top",
      selectScrollParent,
      selectListHeight,
      selectValue;

  // #####################
  // Отработка событий по клику
  function selectBoxClick() {
    // Клик по кнопке
    $(document).on("click", "." + buttonClass, function(e) {
      e.stopPropagation();
      selectBoxPosition($(this));
      $(this).parents("." + mainClass).toggleClass(activeClass);
      console.log("клик по кнопке " + $(this).attr("class"));
    });

    // Клик по элементу списка
    $(document).on("click", "." + optionClass, function(e) {
      e.stopPropagation();
      $(this).parents("." + mainClass).toggleClass(activeClass);
      $(this).addClass(optionActiveClass).siblings("." + optionClass).removeClass(optionActiveClass);
      selectValue = this.childNodes[0].data;
        $(this).parents("." + mainClass).find("." + buttonTextOutput).text(selectValue);
      $(this).parents("." + mainClass).find("." + inputClass).val(selectValue);
    });

    // Клик вне селектбокса
    $(document).on("click", "html", function() {
      $(document).find("." + mainClass).removeClass(activeClass);
    });
  }

  selectBoxClick();

  // #####################
  // При загрузке определяем положение блока и определяем, вверх или вниз ему открываться
  function selectBoxPosition(el) {
    // Определяем скролл-контейнер
    if (el.parents(".sidebar").length > 0) {
      selectScrollParent = $(".sidebar");
    } else {
      selectScrollParent = $(".page-layout__right-col");
    }

    // Определяем высоту селекта
    selectListHeight = el.parents("." + mainClass).find("." + optionClass).length * el.parents("." + mainClass).find("." + optionClass + ":eq(0)").outerHeight();

    // Проверяем оставшееся снизу место
    var topSpace = el.parents("." + mainClass).offset().top - selectScrollParent.scrollTop();
    var bottomSpace = selectScrollParent.outerHeight() - el.offset().top - el.outerHeight();

    if (bottomSpace < selectListHeight + 40) {

      // Места недостаточно — добавляем класс
      el.parents("." + mainClass).find("." + listClass).addClass(selectTopListClass);
    } else {

      // Места достаточно
      el.parents("." + mainClass).find("." + listClass).removeClass(selectTopListClass);
    }
  }

  selectBoxPosition( $("." + buttonClass) );

  // #####################
  // Инициализация скрипта
  $(document).find(".selectbox").each(function(){
    var selectBox = $(this),
        selectButton = selectBox.find("." + buttonClass),
        selectInput = selectBox.find("." + inputClass),
        selectList = selectBox.find("." + listClass),
        selectValue = selectButton.find("span").text(),
        selectScrollParent,
        selectListHeight;
  });
};

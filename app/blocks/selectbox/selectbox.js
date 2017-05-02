import $ from 'jquery';

export function VerstaSelectBox() {
  $(document).find(".selectbox").each(function(){
    var selectBox = $(this),
        mainClass = "selectbox",
        buttonClass = mainClass + "__button",
        activeClass = mainClass + "_active",
        optionClass = mainClass + "__option",
        listClass = mainClass + "__list",
        inputClass = mainClass + "__input",
        optionActiveClass = optionClass + "_active",
        selectButton = selectBox.find("." + buttonClass),
        selectInput = selectBox.find("." + inputClass),
        selectList = selectBox.find("." + listClass),
        selectValue = selectButton.find("span").text(),
        selectTopListClass = mainClass + "__list_top",
        selectScrollParent,
        selectListHeight;

    // #####################
    // Отработка событий по клику
    function selectBoxClick() {
      // Клик по кнопке
      $(document).on("click", "." + buttonClass, function(e) {
        e.stopPropagation();
        selectBoxPosition($(this));
        $(this).parents("." + mainClass).toggleClass(activeClass);
      });

      // Клик по элементу списка
      $(document).on("click", "." + optionClass, function(e) {
        e.stopPropagation();
        $(this).parents("." + mainClass).toggleClass(activeClass);
        $(this).addClass(optionActiveClass).siblings("." + optionClass).removeClass(optionActiveClass);
        selectValue = $(this).text();
        selectButton.find("span").text(selectValue);
        selectInput.val(selectValue);
      });

      // Клик вне селектбокса
      $(document).on("click", "html", function() {
        $(document).find("." + mainClass).removeClass(activeClass);
      });
    }

    // #####################
    // При загрузке определяем положение блока и определяем, вверх или вниз ему открываться
    function selectBoxPosition(el) {
      // Определяем скролл-контейнер
      if (el.parents(".sidebar").length > 0) {
        selectScrollParent = $(".sidebar");
      } else {
        selectScrollParent = $(window);
      }

      // Определяем высоту селекта
      selectListHeight = el.parents("." + mainClass).find("." + optionClass).length * el.parents("." + mainClass).find("." + optionClass + ":eq(0)").outerHeight();

      // Проверяем оставшееся снизу место
      var topSpace = selectBox.offset().top - selectScrollParent.scrollTop();
      var bottomSpace = selectScrollParent.outerHeight() - el.offset().top - el.outerHeight();

      if (bottomSpace < selectListHeight + 40) {

        // Места недостаточно — добавляем класс
        el.parents("." + mainClass).find("." + listClass).addClass(selectTopListClass);
      } else {

        // Места достаточно
        el.parents("." + mainClass).find("." + listClass).removeClass(selectTopListClass);
      }
    }

    selectBoxPosition(selectButton);
    selectBoxClick();
  });
};

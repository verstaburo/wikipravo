export function WorkStatusListOpen () {
  var mainClass = 'work-status',
      buttonClass = mainClass + '__button',
      activeClass = 'active',
      optionClass = mainClass + '__item',
      buttonTextOutput = mainClass + '__name',
      listClass = mainClass + '__list',
      inputClass = mainClass + '__input',
      optionActiveClass = 'active',
      selectDataValue,
      selectValue;

  function WorkStatusClick () {
    $(document).on("click", "." + buttonClass, function(e) {
      e.stopPropagation();
      $(this).parents("." + mainClass).toggleClass(activeClass);
    });

    $(document).on("click", "." + optionClass, function(e) {
      e.stopPropagation();
      $(this).parents("." + mainClass).toggleClass(activeClass);
      $(this).addClass(optionActiveClass).siblings("." + optionClass).removeClass(optionActiveClass);
      selectValue = this.childNodes[0].data;
      selectDataValue = $(this).attr('data-value')
      $(this).parents("." + mainClass).find("." + buttonTextOutput).text(selectValue);
      $(this).parents("." + mainClass).find("." + buttonClass).attr('data-type', selectDataValue);
      $(this).parents("." + mainClass).find("." + inputClass).val(selectValue);
    });

    $(document).on("click", "html", function() {
      $(document).find("." + mainClass).removeClass(activeClass);
    });
  }

  $('.' + listClass).mouseleave(function() {
    $(this).parents("." + mainClass).removeClass(activeClass);
  });

  WorkStatusClick();
};

export function VerstaToggle () {
  $(document).find("[data-toggle-target]").click(function () {

    // Контейнеру авто высоту
    $("[data-tab-group-container]").height("auto");

    // Определяем, какой блок показывать/скрывать
    var toggletarget = $(this).data("toggle-target");

    // Меняем текст в ссылке
    if ( $(this).hasClass("toggled") ) {
      $(this).removeClass("toggled").find("span").text("все ");
    } else {
      $(this).addClass("toggled").find("span").text("основные ");
    }

    // Показ/скрытие блоков
    $(document).find("[data-toggle-block='" + toggletarget + "']").each(function(){

      if ( $(this).hasClass("visible") ) {
        $(this).removeClass("visible").velocity("slideUp", { duration: 500 });
      } else {
        $(this).velocity("slideDown", { duration: 500 }).addClass("visible");
      }

    })

  });
}

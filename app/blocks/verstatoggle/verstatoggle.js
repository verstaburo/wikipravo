export function VerstaToggle () {
  $(document).find("[data-toggle-target]").click(function (e) {
    e.preventDefault();

    // Контейнеру авто высоту
    $("[data-tab-group-container]").height("auto");
    setTimeout(function(){
      $(document).find("[data-tab-group-container]").each(function(){
        $(this).height( $(this).height() );
        $(this).velocity({ height: $(this).height() }, { duration: 0 });
      });
    }, 600);

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
        $(this).removeClass("visible").velocity("slideUp", { duration: 600 });
      } else {
        $(this).show(0, function(){
          $(this).addClass("visible").velocity("slideDown", { duration: 600 });
        });
      }

    })

  });
}

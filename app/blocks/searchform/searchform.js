export function advancedSearchOpened() {
  $(".searchform__open-btn").click(function () {
    if($(".searchform").hasClass("opened")) {
      $(this).find(".searchform__btnname").text("Расширенный поиск");
      $(this).find(".searchform__icon").css({"transform" : "rotate(0)"});
      $(".searchform").removeClass("opened");
      $(".searchform__content").slideUp("1000");
    } else {
      $(this).find(".searchform__btnname").text("Скрыть расширенный поиск");
      $(this).find(".searchform__icon").css({"transform" : "rotate(-180deg)"});
      $(".searchform").addClass("opened");
      $(".searchform__content").slideDown("1000", function () {
        $(this).css({"display" : "flex"});
      });
    }
  });
}

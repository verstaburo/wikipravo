export function FilterOpened() {
  var mainClass = "filter-controls",
      openBtn = mainClass + "__opened-btn",
      activationClass = "opened",
      content = mainClass + "__content",
      icon = mainClass + "__icon",
      btnName = "button__name",
      openedName,
      closedName;

  $("." + opneBtn).click(function () {

    openedName = $("." + openBtn).attr("data-opened-name");
    closedName = $("." + openBtn).attr("data-closed-name");

    if($("." + mainClass).hasClass(activationClass)) {
      $(this).find("." + openBtn + " ." + btnName).text(openedName);
      $(this).find("." + icon).css({"transform" : "rotate(0)"});
      $("." + mainClass).removeClass("opened");
      $("." + content).slideUp("1000");
    } else {
      $(this).find("." + openBtn + " ." + btnName).text(closedName);
      $(this).find("." + icon).css({"transform" : "rotate(-180deg)"});
      $("." + mainClass).addClass(activationClass);
      $("." + content).slideDown("1000", function () {
        $(this).css({"display" : "flex"});
      });
    }
  });
}

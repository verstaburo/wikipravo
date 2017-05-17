export function FilterOpened() {
  var mainClass = "filter-controls",
      openBtn = mainClass + "__open-btn",
      activationClass = "opened",
      content = mainClass + "__content",
      icon = "button__arrow",
      btnName = "button__name",
      openedName,
      closedName;

  $("." + openBtn).click(function () {

    openedName = $("." + openBtn).attr("data-opened-name");
    closedName = $("." + openBtn).attr("data-closed-name");
    console.log(openedName + " " + closedName);

    if($("." + mainClass).hasClass(activationClass)) {
      $("." + openBtn).find("." + btnName).text(openedName);
      $(this).find("." + icon).css({"transform" : "rotate(0)"});
      $("." + mainClass).removeClass(activationClass);
      $("." + content).slideUp("1000");
    } else {
      $("." + openBtn).find("." + btnName).text(closedName);
      $(this).find("." + icon).css({"transform" : "rotate(-180deg)"});
      $("." + mainClass).addClass(activationClass);
      $("." + content).slideDown("1000", function () {
        $(this).css({"display" : "flex"});
      });
    }
  });
}

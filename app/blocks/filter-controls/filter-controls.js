import {ResetSelectBox} from '../selectbox/selectbox';

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
};

export function FilterReset() {
  var mainClass = "filter-controls",
      resetBtn = mainClass + "__reset-btn",
      content = mainClass + "__content",
      selectboxArray;

  $('.' + resetBtn).click(function (e) {
    e.preventDefault();
    selectboxArray = document.querySelectorAll("." + mainClass + " .selectbox");
    for (var i = 0; i <= selectboxArray.length; i++) {
      ResetSelectBox(selectboxArray[i]);
    }
    $(this).parents("form")[0].reset();
  });
}

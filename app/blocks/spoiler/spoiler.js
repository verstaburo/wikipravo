export function SpoilerOpened () {
  var mainClass = "spoiler",
      openBtn = mainClass + "__button",
      activationClass = "opened",
      content = mainClass + "__content",
      icon = "button__arrow",
      btnName = "button__name",
      openedName,
      closedName;

  $("." + openBtn).click(function () {

    openedName = $("." + openBtn).attr("data-open-title");
    closedName = $("." + openBtn).attr("data-close-title");

    if($("." + mainClass).hasClass(activationClass)) {
      $("." + openBtn).find("." + btnName)[0].childNodes[0].textContent = openedName;
      $(this).find("." + icon).css({"transform" : "rotate(0)"});
      $("." + mainClass).removeClass(activationClass);
      $("." + content).slideUp("1000");
    } else {
      $("." + openBtn).find("." + btnName)[0].childNodes[0].textContent = closedName;
      $(this).find("." + icon).css({"transform" : "rotate(-180deg)"});
      $("." + mainClass).addClass(activationClass);
      $("." + content).slideDown("1000", function () {
        $(this).css({"display" : "flex"});
      });
    }
  });
};

export function CounterComments () {
  if(document.querySelector('.js-comment-counter')) {
    setInterval(function () {
      var count;
      count = $('.js-comment-counter').parents('.spoiler').find('.spoiler__content').find('.comment').length;
      if(count > 0) {
        $('.js-comment-counter').text('(' + count + ')');
      }
    }, 500);
  }
};

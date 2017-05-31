export function VerstaPopups() {
  var popups = $(document).find(".popups"),
      popupsActiveClass = "popups_active",
      page = $(document).find(".page-layout"),
      pageBlurredClass = "page-layout_blurred",
      popup = popups.find(".popup"),
      popupActiveClass = "popup_active",
      openTimeout = 500;

    // #####################
    // Показ попапов
    function showPopups() {
      popups.show(0, function(){
        popups.addClass(popupsActiveClass)
      });
      page.addClass(pageBlurredClass);
    }

    // #####################
    // Скрытие попапов
    function hidePopups() {
      popups.removeClass(popupsActiveClass);
      page.removeClass(pageBlurredClass);
      popup.removeClass("popup_active");
      setTimeout(function(){ popups.hide(); }, 500);
    }

    // #####################
    // Скрытие попапа по клику по пустому месту
    popups.click(function() {
      hidePopups();
    });

    /*popup.click(function(e) {
      e.stopPropagation();
    });*/

    // #####################
    // Показ конкретного попапа
    function openPopup(newpopup) {
      var currTimeout = 0;
      if (!popups.hasClass(popupsActiveClass)) { currTimeout = openTimeout; showPopups(); }

      setTimeout(function(){
        popup.removeClass(popupActiveClass);
        $("#" + newpopup).addClass(popupActiveClass);
      }, currTimeout/2);
    }

    // #####################
    // Присваиваем открытие по клику на элементы
    $(document).on("click", ".js-popup-open", function(){
      openPopup( $(this).data("open-popup") );
    });

    // #####################
    // Присваиваем закрытие по клику на элементы
    $(document).on("click", ".js-popup-close", hidePopups);

    //showPopups();
};

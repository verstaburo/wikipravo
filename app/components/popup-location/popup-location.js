export function LocationPopup() {

  $(".popup-location__button_yes").click(function() {
    $(".popup-location").css({"display" : "none"});
    clearInterval(locationPopupTimer);
  });
  $(".popup-location__button_no").click(function() {
    $(".popup-location").css({"display" : "none"});
    clearInterval(locationPopupTimer);
  });
  $("html").click(function(e) {
      if(!$(".popup-location").is(e.target) && $(".popup-location").has(e.target).length === 0) {
        $(".popup-location").css({"display" : "none"});
        clearInterval(locationPopupTimer);
      }
  });

  // Позиционируем относительно .sidebar__selectbox

  function popupLocationPosition() {
    var locationPopupHeight = $(".popup-location").outerHeight();
    var locationPopupPosition =  {top: 0, left: 0}
    var selectBoxPositionTop = $(".sidebar__selectbox").offset().top;
    var selectBoxPositionLeft = $(".sidebar__selectbox").offset().left;
    var selectBoxHeight = $(".sidebar__selectbox").outerHeight();
    var bottomSpace = $(".sidebar").outerHeight() - selectBoxPositionTop - selectBoxHeight;

    if(bottomSpace > locationPopupHeight + 30) {
      locationPopupPosition.top = selectBoxPositionTop + selectBoxHeight + 15;
      locationPopupPosition.left = selectBoxPositionLeft;
      $(".popup-location").removeClass("popup-location_top");
    } else {
      locationPopupPosition.top = selectBoxPositionTop - locationPopupHeight - 15;
      locationPopupPosition.left = selectBoxPositionLeft;
      $(".popup-location").addClass("popup-location_top");
    }

    $(".popup-location").offset(locationPopupPosition).css({"visibility" : "visible"});
  }

  var locationPopupTimer = setInterval( function () {
    if(document.querySelector(".sidebar__selectbox")) {
      popupLocationPosition();
    }
  }, 500);
};

export function SmsCodePopupOpen () {

  function PopupPosition (button) {
    var popupHeight = $('#sms-code').outerHeight(),
        popupWidth= $('#sms-code').outerWidth(),
        popupPosition = {top: 0, left: 0},
        buttonPositionTop = $(button).offset().top,
        buttonPositionLeft = $(button).offset().left,
        buttonHeight = $(button).outerHeight(),
        buttonWidth = $(button).outerWidth();

    popupPosition.top = buttonPositionTop + buttonHeight + 3;
    popupPosition.left = buttonPositionLeft + buttonWidth/2 - popupWidth/2;

    $('#sms-code').offset(popupPosition);
  }

  PopupPosition('.js-smscode-popup-open');

  $('.js-smscode-popup-open').click(function (e) {
    e.preventDefault();

    if(! $('#sms-code').hasClass('active')) {
      $('#sms-code').addClass('active');
    }
  });

  $('.js-smscode-popup-close').click(function () {
    $('#sms-code').removeClass('active');
  });
}

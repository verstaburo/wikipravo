export function ValidationOrder() {
  $('.order-form__button').click(function(e) {
    var stopSubmit = false;
    var validationSteps = [];
    var patternNumeric = /[0-9]/;
    var errorMessage;

    function popupCheckFieldPosition(field) {
      var coordinates = {};
      coordinates.top = $(field).offset().top + $(field).outerHeight() + 15;
      coordinates.left = $(field).offset().left;
      return coordinates;
    }

    function createErrorPopup(field, text) {
      var popup = document.createElement('P');
      var coordinates = popupCheckFieldPosition(field);
      popup.setAttribute('class', 'error-message error-message_popup');
      popup.innerHTML = text;
      field.append(popup);
      popup.offsetLeft = coordinates.left;
      popup.offsetTop = coordinates.top;
      popup.setAttribute('style', 'display: block');
    }

    if($('.order-document__doctype').find('input').val() == '') {
      $('.order-document__doctype').addClass('invalid').removeClass('valid');
      if($('.order-document__doctype').siblings('.error-message').length == 0) {
        $('.order-document__doctype').siblings('.order-document__label').prepend('<span class="error-message error-message_big error-message_bold">*</span>');
        $('.order-document__doctype').after('<p class="error-message">Это поле обязательно и не может быть пустым</p>');
      }
      validationSteps.push(true);
    } else {
      $('.order-document__doctype').removeClass('invalid').addClass('valid');
      $('.order-document__doctype').siblings('.error-message').remove();
      $('.order-document__doctype').siblings('.order-document__label').find('.error-message').remove();
      validationSteps.push(false);
    }

    if($('#short-describe').val() == '') {
      $('#short-describe').addClass('invalid').removeClass('valid');
      if($('#short-describe').siblings('.error-message').length == 0) {
        $('#short-describe').siblings('.order-document__label').prepend('<span class="error-message error-message_big error-message_bold">*</span>');
        $('#short-describe').after('<p class="error-message">Это поле обязательно и не может быть пустым</p>');
      }
      validationSteps.push(true);
    } else {
      $('#short-describe').removeClass('invalid').addClass('valid');
      $('#short-describe').siblings('.error-message').remove();
      $('#short-describe').siblings('.order-document__label').find('.error-message').remove();
      validationSteps.push(false);
    }

    if($('#describe').val() == '') {
      $('#describe').addClass('invalid').removeClass('valid');
      if($('#describe').siblings('.error-message').length == 0) {
        $('#describe').siblings('.order-document__label').prepend('<span class="error-message error-message_big error-message_bold">*</span>');
        $('#describe').after('<p class="error-message">Это поле обязательно и не может быть пустым</p>');
      }
      validationSteps.push(true);
    } else {
      $('#describe').removeClass('invalid').addClass('valid');
      $('#describe').siblings('.error-message').remove();
      $('#describe').siblings('.order-document__label').find('.error-message').remove();
      validationSteps.push(false);
    }

    var priceInvalid, priceChecker = [];
    var priceRadio = $('input[type="radio"][name="price"]');

    for(var i = 0 ; i < priceRadio.length; i++) {
      priceChecker.push(priceRadio[i].checked);
    }

    priceInvalid = priceChecker.every(function(item) {
      return !item;
    });

    if(priceInvalid) {
      if($(priceRadio).parents('.order-document__col').find('.order-document__label').find('.error-message').length == 0) {
        $(priceRadio).parents('.order-document__col').find('.order-document__label').prepend('<span class="error-message error-message_big error-message_bold">*</span>');
        //$(priceRadio).parents('.order-document__col').find('.order-document__label').append('<p class="error-message">Это поле обязательно. Должно быть выбрано одно из значений</p>');
      }
      validationSteps.push(true);
    } else {
      $(priceRadio).parents('.order-document__col').find('.order-document__label').find('.error-message').remove();
      validationSteps.push(false);
    }


    var timeInvalid, timeChecker = [];
    var timeRadio = $('input[type="radio"][name="time"]');

    for(var i = 0 ; i < timeRadio.length; i++) {
      timeChecker.push(timeRadio[i].checked);
    }

    timeInvalid = timeChecker.every(function(item) {
      return !item;
    });

    if(timeInvalid) {
      if($(timeRadio).parents('.order-document__col').find('.order-document__label').find('.error-message').length == 0) {
        $(timeRadio).parents('.order-document__col').find('.order-document__label').prepend('<span class="error-message error-message_big error-message_bold">*</span>');
        //$(timeRadio).parents('.order-document__col').find('.order-document__label').append('<p class="error-message">Это поле обязательно. Должно быть выбрано одно из значений</p>');
      }
      validationSteps.push(true);
    } else {
      $(timeRadio).parents('.order-document__col').find('.order-document__label').find('.error-message').remove();
      validationSteps.push(false);
    }

    if($('.order-document').find('.invalid').length > 0) {
      if($('.order-document').find('.block-title').siblings('.error-message').length == 0) {
        $('.order-document').find('.block-title').append('<p class="error-message">Не все обязательные поля заполнены верно</p>');
      }
    } else {
      $('.order-document').find('.block-title').find('error-message').remove();
    }

    stopSubmit = validationSteps.some(function(item) {
      return item;
    });

    if(stopSubmit) {
      e.preventDefault();
    }
  });
}

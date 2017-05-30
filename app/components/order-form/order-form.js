export function ValidationOrder() {
  $('.order-form__button').click(function(e) {
    var stopSubmit = false;

    if($('.order-document__doctype').find('input').val() == '') {
      $('.order-document__doctype').addClass('invalid').removeClass('valid');
      if($('.order-document__doctype').siblings('.error-message').length == 0) {
        $('.order-document__doctype').siblings('.order-document__label').prepend('<span class="error-message error-message_big error-message_bold">*</span>');
        $('.order-document__doctype').after('<p class="error-message">Это поле обязательно и не может быть пустым</p>');
      }
      stopSubmit = true;
    } else {
      $('.order-document__doctype').removeClass('invalid').addClass('valid');
      $('.order-document__doctype').siblings('.error-message').remove();
      $('.order-document__doctype').siblings('.order-document__label').find('.error-message').remove();
      stopSubmit = false;
    }

    if($('#short-describe').val() == '') {
      $('#short-describe').addClass('invalid').removeClass('valid');
      if($('#short-describe').siblings('.error-message').length == 0) {
        $('#short-describe').siblings('.order-document__label').prepend('<span class="error-message error-message_big error-message_bold">*</span>');
        $('#short-describe').after('<p class="error-message">Это поле обязательно и не может быть пустым</p>');
      }
      stopSubmit = true;
    } else {
      $('#short-describe').removeClass('invalid').addClass('valid');
      $('#short-describe').siblings('.error-message').remove();
      $('#short-describe').siblings('.order-document__label').find('.error-message').remove();
      stopSubmit = false;
    }

    if($('.order-document').find('.invalid').length > 0) {
      if($('.order-document').find('.block-title').siblings('.error-message').length == 0) {
        $('.order-document').find('.block-title').append('<p class="error-message">Не все обязательные поля заполнены верно</p>');
      }
    } else {
      $('.order-document').find('.block-title').find('error-message').remove();
    }

    if(stopSubmit) {
      e.preventDefault();
    }
  });
}

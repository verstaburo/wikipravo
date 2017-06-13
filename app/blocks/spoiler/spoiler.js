export function SpoilerOpened () {
  var mainClass = 'spoiler',
      openBtn = mainClass + '__button',
      activationClass = 'opened',
      content = mainClass + '__content',
      icon = 'button__arrow',
      btnName = 'button__name',
      openedName,
      closedName;

  $('.' + openBtn).click(function () {

    openedName = $(this).attr('data-open-title');
    closedName = $(this).attr('data-close-title');

    if($(this).closest('.' + mainClass).hasClass(activationClass)) {
      $(this).find('.' + btnName)[0].childNodes[0].textContent = openedName;
      $(this).find('.' + icon).css({'transform' : 'rotate(0)'});
      $(this).closest('.' + mainClass).removeClass(activationClass);
      $(this).closest('.' + mainClass).children('.' + content).first().slideUp('1000');
    } else {
      $(this).find('.' + btnName)[0].childNodes[0].textContent = closedName;
      $(this).find('.' + icon).css({'transform' : 'rotate(-180deg)'});
      $(this).closest('.' + mainClass).addClass(activationClass);
      $(this).closest('.' + mainClass).children('.' + content).first().slideDown('1000', function () {
        $(this).css({'display' : 'flex'});
      });
    }
  });
};

export function CounterComments () {
  if(document.querySelector('.js-comment-counter')) {
    setInterval(function () {
      var count;
      count = $('.js-comment-counter').closest('.spoiler').children('.spoiler__content').first().children('.comment').length;
      if(count > 0) {
        $('.js-comment-counter').text('(' + count + ')');
      }
    }, 500);
  }
};

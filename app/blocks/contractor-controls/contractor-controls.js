export function ContractorChose () {
  var mainClass = 'contractor-controls',
      candidate = mainClass + '__button_candidate',
      contractor = mainClass + '__button_contractor',
      reject = mainClass + '__button_reject',
      button = mainClass + '__button',
      activeClass = 'active',
      redButton = 'button_red',
      greenButton = 'button_green',
      blueButton = 'button_blue',
      defaultButtonColor = 'button_transparent_third',
      contractorCardClass = 'contractor-card',
      redCard = contractorCardClass + '_red',
      blueCard = contractorCardClass + '_blue',
      greenCard = contractorCardClass + '_green';

  $('.' + button).click(function () {
    var iconActive = $(this).attr('data-active-icon');
    var icon = $(this).attr('data-icon');
    if($(this).hasClass(activeClass)) {
      $(this).removeClass(activeClass);
      $(this).addClass(defaultButtonColor);
      $(this).find('.button__name')[0].childNodes[2].data = $(this).attr('data-name');
      $(this).find('.button__icon').find('use').attr('xlink:href', icon);
      $(this).siblings('.' + button).not($(this)).removeAttr('disabled');
      if ($(this).hasClass(candidate)) {
        $(this).closest('.' + contractorCardClass).removeClass(blueCard);
        $(this).removeClass(blueButton);
      } else if ($(this).hasClass(contractor)) {
        $(this).closest('.' + contractorCardClass).removeClass(greenCard);
        $(this).removeClass(greenButton);
      } else if ($(this).hasClass(reject)) {
        $(this).closest('.' + contractorCardClass).removeClass(redCard);
        $(this).removeClass(redButton);
      }
    } else {
      $(this).addClass(activeClass);
      $(this).removeClass(defaultButtonColor);
      $(this).find('.button__name')[0].childNodes[2].data = $(this).attr('data-active-name');
      $(this).find('.button__icon').find('use').attr('xlink:href', iconActive);
      $(this).siblings('.' + button).not($(this)).attr('disabled', 'true');
      if ($(this).hasClass(candidate)) {
        $(this).closest('.' + contractorCardClass).addClass(blueCard);
        $(this).addClass(blueButton);
      } else if ($(this).hasClass(contractor)) {
        $(this).closest('.' + contractorCardClass).addClass(greenCard);
        $(this).addClass(greenButton);
      } else if ($(this).hasClass(reject)) {
        $(this).closest('.' + contractorCardClass).addClass(redCard);
        $(this).addClass(redButton);
      }
    }
  });

}

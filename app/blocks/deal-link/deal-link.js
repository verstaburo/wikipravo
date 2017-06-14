export function DealLinkOpen () {
  $('.deal-link a').click(function () {
    var linkId = $(this).attr('href').split('#').pop();
    var link = $(this).attr('href');

    var destination = $('#' + linkId).offset().top;
    $("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 800);

    $('#' + linkId).find('.spoiler__button .button__name')[0].childNodes[0].textContent = $('#' + linkId).find('.spoiler__button').attr('data-close-title');
    $('#' + linkId).find('.spoiler__button .button__arrow').css({'transform' : 'rotate(-180deg)'});
    $('#' + linkId).addClass('opened');
    $('#' + linkId).children('.spoiler__content').first().slideDown('1000', function () {
      $(this).css({'display' : 'flex'});
    });

    return false;
  });
}

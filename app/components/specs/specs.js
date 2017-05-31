$(document).ready(function () {
    var checkbox = $('.specs__slide').find('input[type="checkbox"]');

    $(checkbox).change(function () {
      var siblings = $(this).closest('.slide-parent').find('input[type="checkbox"]').not($(this));
      siblings.prop('checked', $(this).prop("checked"))
    });

    $('.specs__slide-head').click(function () {
      $(this).siblings('.specs__slide-content').fadeToggle(250);
      $(this).parents('.specs__slide').toggleClass('specs__slide_active');
    }).children().find('.checkbox').click(function (e) {
      e.stopPropagation();
    });
});
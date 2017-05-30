$(document).ready(function () {
    var c_right = $('.specs__slide').find('.specs__slide-right input[type="checkbox"]');
    var c_left = $('.specs__slide').find('.specs__slide-left input[type="checkbox"]');
    var checkbox = $('.specs__slide').find('input[type="checkbox"]');

    $(checkbox).change(function () {
      var siblings = $(this).closest('.slide-parent').find('input[type="checkbox"]').not($(this));
      // siblings.prop('checked', true);
      if(siblings.attr('checked') == 'checked') { 
        siblings.prop('checked', false);
      }else{
        siblings.prop('checked', true);
      }
    });

    $('.specs__slide-head').click(function () {
      $(this).siblings('.specs__slide-content').fadeToggle(250);
      $(this).parents('.specs__slide').toggleClass('specs__slide_active');
    }).children().find('.checkbox').click(function (e) {
      e.stopPropagation();
    });
});
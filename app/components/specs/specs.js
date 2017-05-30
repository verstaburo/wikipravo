$(document).ready(function () {
    var c_right = $('.specs__slide').find('.specs__slide-right input[type="checkbox"]');
    var c_left = $('.specs__slide').find('.specs__slide-left input[type="checkbox"]');

    $(c_right).change(function () {
      var siblings = $(this).closest('.slide-parent').find('input[type="checkbox"]').not($(this));
      siblings.prop('checked', true);
      if(siblings == 'checked') { 
        siblings.prop('checked', false);
      }
    });

    $(c_left).change(function () {
      var siblings = $(this).closest('.slide-parent').find('input[type="checkbox"]').not($(this));
      siblings.prop('checked', false);
    });

    $('.specs__slide-head').click(function () {
      $(this).siblings('.specs__slide-content').fadeToggle(250);
      $(this).parents('.specs__slide').toggleClass('specs__slide_active');
    });
});
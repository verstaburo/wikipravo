export function SpecsCheckboxActions() {

  $(document).ready(function () {
    var checkbox = $('.specs__slide').find('input[type="checkbox"]');

    $(checkbox).change(function () {
      var siblings = $(this).parents('.slide-parent').find('input[type="checkbox"]').not($(this));
      siblings.prop('checked', $(this).prop("checked")).onchange();
    });

    $('.specs__arrow').click(function () {
      $(this).parents('.specs__slide').find('.specs__slide-content').fadeToggle(250);
      $(this).parents('.specs__slide').toggleClass('specs__slide_active');
    });
  });

  function CheckboxCount (slideEl) {
    var checboxArray = [];
    var checked = [];

    checboxArray = $(slideEl).find('.specs__slide-content').find('input[type="checkbox"]');

    for(var i = 0; i < checboxArray.length; i++) {
      if(checboxArray[i].checked) {
        checked.push(checboxArray[i].checked);
      }
    }

    return checked.length/2;
  }

  setInterval(function () {
    var slides = $('.specs__slide');
    for(var k = 0; k < slides.length; k++) {
      var count = CheckboxCount(slides[k]);
      if(count > 0) {
        $(slides[k]).find('.specs__count').text('(' + count + ')');
      } else {
        $(slides[k]).find('.specs__count').text('');
      }
    }
  }, 500);
};

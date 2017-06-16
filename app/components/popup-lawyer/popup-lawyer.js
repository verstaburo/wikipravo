export function LawyerFormChange () {
  $('#lawyer').change(function () {
    if($(this).prop('checked')) {
      $('[data-field="lawyer"]').addClass('active');
      $('[data-field="notlawyer"]').removeClass('active');
    } else {
      $('[data-field="notlawyer"]').addClass('active');
      $('[data-field="lawyer"]').removeClass('active');
    }
  });

  $('#notlawyer').change(function () {
    if($(this).prop('checked')) {
      $('[data-field="notlawyer"]').addClass('active');
      $('[data-field="lawyer"]').removeClass('active');
    } else {
      $('[data-field="lawyer"]').addClass('active');
      $('[data-field="notlawyer"]').removeClass('active');
    }
  });
};

export function ViewPassword() {
  var type;
  $('.input-password').find('.input-password__button').click(function () {
    if($(this).siblings('.input-password__password').attr('type') === "text") {
      type = "password";
    } else {
      type = "text";
    }
    $(this).toggleClass("active");
    $(this).siblings('.input-password__password').attr("type", type);
  });
}

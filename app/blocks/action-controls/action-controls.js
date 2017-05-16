export function NoteButtonSwitch() {
  $(".action-controls__button_note").click(function(e) {
    if($(this).hasClass("active")) {
      $(this).removeClass("active");
      $(this).parents(".action-controls").find(".action-controls__note").removeClass("active");
    } else {
      $(this).addClass("active");
      $(this).parents(".action-controls").find(".action-controls__note").addClass("active");
    }
  });
}

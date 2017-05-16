export function NoteTextareaFocus () {
  $(document).on("focusin", ".note__content", function () {
    $(this).siblings(".note__placeholder").css({"display" : "none"});
  });
  $(document).on("focusout", ".note__content", function () {
    if($(this).text().length === 0) {
      $(this).siblings(".note__placeholder").css({"display" : "inline-flex"});
    }
  });
}

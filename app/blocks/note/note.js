export function NoteTextareaFocus () {
  $(document).on("focusin", ".note__content", function () {
    $(this).siblings(".note__placeholder").css({"display" : "none"});
  });
  $(document).on("focusout", ".note__content", function () {
    if($(this).text().length === 0) {
      $(this).siblings(".note__placeholder").css({"display" : "inline-flex"});
    }
    $(this).siblings(".note__text")[0].value = $(this).text();
  });

  var mainClass = "note",
      textarea  = mainClass + "__text",
      textContainer = mainClass + "__content",
      btnSave = mainClass + "__button_save",
      btnCancel = mainClass + "__button_cancel",
      btnRemove = mainClass + "__button_remove",
      btnEdit = mainClass + '__button_edit';

  $("." + btnCancel).click(function(e) {
    e.preventDefault();
    $(this).parents("." + mainClass).find("." + textContainer).text("");
    var el = $(this).parents("form")[0].reset();
  });

  $("." + btnSave).click(function(e) {
    e.preventDefault();
    var text = $("." + textContainer).text();
    $(this).parents('.'+ mainClass).find("." + textarea)[0].value = text;
    $(this).parents("." + mainClass).removeClass("note_empty").addClass("note_noempty");
    $(this).parents("." + mainClass).find("." + textContainer).attr("contenteditable", false);
    $(this).parents("form")[0].submit();
  });

  $("." + btnRemove).click(function(e) {
    $(this).parents("." + mainClass).find("." + textContainer).text("");
    $(this).parents("form")[0].reset();
    $(this).parents("." + mainClass).removeClass("note_noempty").addClass("note_empty");
    $(this).parents("." + mainClass).find("." + textContainer).attr("contenteditable", true);
    $(this).parents("." + mainClass).removeClass('.active');
  });

  $('.' + btnEdit).click(function(e) {
    $(this).parents("." + mainClass).removeClass("note_noempty").addClass("note_empty");
    $(this).parents("." + mainClass).find("." + textContainer).attr("contenteditable", true);
  });
}

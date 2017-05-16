export function NoteButtonSwitch() {
  var button = document.querySelector(".action-controls__button_note");
  var note = document.querySelector(".action-controls__note")

  if(button && note) {
    button.addEventListener("click", function (event) {
      event.preventDefault();
      if (button.classList.contains("active")) {
        button.classList.remove("active");
        note.classList.remove("active");
      } else {
        button.classList.add("active");
        note.classList.add("active");
      }
    }, false);
  }
}

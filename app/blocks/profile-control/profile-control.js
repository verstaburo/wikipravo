export function NoteButtonSwitch() {
  var button = document.querySelector(".profile-control_note");
  var note = document.querySelector(".profile-control__note")

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

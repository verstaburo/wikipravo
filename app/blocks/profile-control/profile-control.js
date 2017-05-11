export function NoteButtonSwitch() {
  var button = document.querySelector(".profile-control_note");
  button.addEventListener("click", function (event) {
    event.preventDefault();
    if (button.classList.contains("active")) {
      button.classList.remove("active");
    } else {
      button.classList.add("active");
    }
  }, false);
}

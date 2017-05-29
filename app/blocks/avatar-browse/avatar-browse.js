export function AvatarLoad() {
  var input = document.getElementById('photofile');
  var output = document.querySelector('output[for="photofile"]');

  if(input && output) {
    var container = input.parentElement;
    var lbl = input.parentElement.querySelector('.avatar-browse__label');

    input.addEventListener('change', function () {
      var files = this.files;
      var file = files[0];
      var message = "";

      /*function ImgValidate (theFile) {
        if(theFile) {
          var fileType = theFile.name.split('.').pop();
          var validSize = 5242880;
          var fileSize = theFile.size;

          if(fileType != 'jpg|jpeg|bmp|png') {
            message = "Не допустимый формат файла";
            return false;
          }

          if(fileSize > validSize) {
            message = "Файл больше 5MB";
            return false;
          }

          message = "Файл выбран";

          return true;
        }
      }

      if(ImgValidate(file)) {
        console.log(message);*/

      function ImgPreview(img) {
        var removeBtn = document.createElement('BUTTON');

        removeBtn.setAttribute('class', 'avatar-browse__remove');
        removeBtn.setAttribute('type', 'button');
        removeBtn.innerHTML = '<svg class="avatar-browse__icon"><use xlink:href="assets/images/icon.svg#icon_cross"></svg>';

        container.appendChild(removeBtn);

        var reader = new FileReader();
        reader.readAsDataURL(img);
        reader.onload = (function(theImg) {
          return function(e) {
            $(output).append('<img class="avatar-browse__img" src="' + e.target.result + '" alt="' + theImg.name + '">');
          }
        })(img);
      }

      ImgPreview(file);

      lbl.innerHTML = lbl.getAttribute('data-label-on-load');
    }, false);
  }

  $(document).on('click', '.avatar-browse__remove', function() {
    $(this).parents('.avatar-browse').find('.avatar-browse__input').value = '';
    $(this).parents('.avatar-browse').find('.avatar-browse__img').remove();
    $(this).parents('.avatar-browse').find('.avatar-browse__label').text("Выберите файл");
    $(this).remove();
    return false;
  });
};

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
      var fileNameOutput = document.querySelector('.avatar-browse__file-output');

      function ImgPreview(img) {
        var removeBtn = document.createElement('BUTTON');

        removeBtn.setAttribute('class', 'avatar-browse__remove');
        removeBtn.setAttribute('type', 'button');
        removeBtn.innerHTML = '<svg class="avatar-browse__icon"><use xlink:href="assets/images/icon.svg#icon_cross"></svg>';

        if(fileNameOutput) {
          var errMsg;
          var spanName = document.createElement('SPAN');
          var newRemoveBtn = document.createElement('BUTTON');

          newRemoveBtn.setAttribute('class', 'avatar-browse__remove');
          newRemoveBtn.setAttribute('type', 'button');
          newRemoveBtn.innerHTML = '<svg class="avatar-browse__icon"><use xlink:href="assets/images/icon.svg#icon_cross"></svg>';

          spanName.setAttribute('class', 'avatar-browse__filename avatar-browse__filename_green');
          spanName.innerHTML = 'Выбран файл: ' + file.name;
          spanName.appendChild(newRemoveBtn);

          errMsg = fileNameOutput.textContent;

          fileNameOutput.setAttribute('data-err-msg', errMsg);
          fileNameOutput.textContent = '';
          fileNameOutput.classList.add('avatar-browse__file-output_dark');
          fileNameOutput.appendChild(spanName);
        } else {
          container.appendChild(removeBtn);
        }

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
    var fileNameOutput = $('.avatar-browse__file-output');
    var msg= $(fileNameOutput).attr('data-err-msg');
    if(!fileNameOutput) {
      $(this).parents('.avatar-browse').find('.avatar-browse__input').value = '';
      $(this).parents('.avatar-browse').find('.avatar-browse__img').remove();
      $(this).parents('.avatar-browse').find('.avatar-browse__label').text("Выберите файл");
      $(this).remove();
    } else {
      $(fileNameOutput).find('.avatar-browse__filename').remove();
      $(fileNameOutput).removeClass('avatar-browse__file-output_dark').text(msg);
      $('.avatar-browse').find('.avatar-browse__input').value = '';
      $('.avatar-browse').find('.avatar-browse__img').remove();
      $('.avatar-browse').find('.avatar-browse__label').text("Выберите файл");
      $('.avatar-browse__remove').remove();
    }
    return false;
  });
};

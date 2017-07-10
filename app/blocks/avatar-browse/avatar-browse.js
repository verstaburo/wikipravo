export function AvatarLoad() {
  var mainClass = 'avatar-browse',
      labelClass = mainClass + '__label',
      outputClass = mainClass + '__output',
      inputClass = mainClass + '__input';

  $('.' + mainClass).on('drag dragstart dragend dragover dragenter dragleave drop', function(e) {
    e.preventDefault();
    e.stopPropagation();
  })
  .on('dragover dragenter', function() {
    $(this).addClass('dragover');
  })
  .on('dragleave dragend drop', function() {
    $(this).removeClass('dragover');
  })
  .on('drop', function(e) {
    var droppedFiles , selectedFiles = {}, queue = [], output, outputUl, file, fileName;

    droppedFiles = e.originalEvent.dataTransfer.files;
    file = droppedFiles[0];
    var output = $(this).find('.' + outputClass)[0];
    var container = $(this)[0];
    var fileNameOutput = $('.avatar-browse__file-output')[0];

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
      } else if(!container.classList.contains('js-update')) {
        container.appendChild(removeBtn);
      }

      var reader = new FileReader();
      reader.readAsDataURL(img);
      reader.onload = (function(theImg) {
        return function(e) {
          output.querySelector('.avatar-browse__img').setAttribute('src', e.target.result);
          output.querySelector('.avatar-browse__img').setAttribute('alt', theImg.name);
        }
      })(img);
    }

    ImgPreview(file);

    var lblText = $(this).find('.' + labelClass).attr('data-label-on-load');

    if(!lblText.length > 0) {lblText = "";}

    $(this).find('.' + labelClass).text(lblText);

    if($('avatar-browse').hasClass('js-update')) {
      $('avatar-browse').parents('form#avatar-update').submit();
    }
  });

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
        } else if(!container.classList.contains('js-update')) {
          container.appendChild(removeBtn);
        }

        var reader = new FileReader();
        reader.readAsDataURL(img);
        reader.onload = (function(theImg) {
          return function(e) {
            output.querySelector('.avatar-browse__img').setAttribute('src', e.target.result);
            output.querySelector('.avatar-browse__img').setAttribute('alt', theImg.name);
          }
        })(img);
      }

      ImgPreview(file);

      var lblText = lbl.getAttribute('data-label-on-load');

      if(!lblText.length > 0) {lblText = "";}

      lbl.innerHTML = lblText;

      if($('avatar-browse').hasClass('js-update')) {
        $('avatar-browse').parents('form#avatar-update').submit();
      }
    }, false);
  }

  $(document).on('click', '.avatar-browse__remove', function() {
    var fileNameOutput = $('.avatar-browse__file-output');
    var msg= $(fileNameOutput).attr('data-err-msg');
    if(!fileNameOutput) {
      $(this).parents('.avatar-browse').find('.avatar-browse__input')[0].value = '';
      $(this).parents('.avatar-browse').find('.avatar-browse__img').attr('src', '');
      $(this).parents('.avatar-browse').find('.avatar-browse__label').text("Выберите файл");
      $(this).remove();
    } else {
      $(fileNameOutput).find('.avatar-browse__filename').remove();
      $(fileNameOutput).removeClass('avatar-browse__file-output_dark').text(msg);
      $('.avatar-browse').find('.avatar-browse__input')[0].value = '';
      $('.avatar-browse').find('.avatar-browse__img').attr('src', '');
      $('.avatar-browse').find('.avatar-browse__label').text("Выберите файл");
      $('.avatar-browse__remove').remove();
    }
    return false;
  });
};

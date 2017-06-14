export function FileListControl() {
  var mainClass = 'file-input',
      outputClass = mainClass + '__output',
      outputUlClass = mainClass + '__files-list',
      inputClass = mainClass + '__files',
      placeholderClass = mainClass + '__placeholder';

  $('.' + inputClass).change(function () {
    var files = this.files,
        mainParent = $(this).closest('.' + mainClass),
        output = $(mainParent).find('.' + outputClass),
        outputUl = $(output).find('.' + outputUlClass),
        placeholder = $(output).find('.' + placeholderClass),
        selectedFiles = {},
        queue = [],
        fileName,
        fileImg;

    for (var i = 0; i < files.length; i++) {
      var file = files[i];

      fileName = file.name;

      if(selectedFiles[fileName] != undefined) continue;

      selectedFiles[fileName] = file;
      queue.push(file);
    }

    $(this)[0].value = '';

    function OutputFile() {
      var icons = {"doc" : "assets/images/doc.svg", "docx" : "assets/images/doc.svg", "pdf" : "assets/images/pdf.svg", "xls" : "assets/images/xls.svg", "xlsx" : "assets/images/xls.svg", "txt" : "assets/images/txt.svg", "other" : "assets/images/other.svg"};

      while(queue.length != 0) {
        var file = queue.pop();
        var li = document.createElement('LI');
        var img = document.createElement('IMG');
        var spanName = document.createElement('SPAN');
        var removeButton = document.createElement('BUTTON');
        var fileName = file.name;
        var fileType = fileName.split('.').pop();
        var fileImg;

        for (var key in icons) {
          if(icons[fileType] != undefined) {
            fileImg = icons[fileType];
          } else {
            fileImg = icons.other;
          }
        }

        li.setAttribute('class', 'files-list__item');
        li.setAttribute('data-file-id', file.name);
        img.setAttribute('class', 'files-list__img');
        img.setAttribute('src', fileImg);
        img.setAttribute('alt', '');
        spanName.setAttribute('class', 'files-list__filename');
        spanName.textContent = fileName;
        removeButton.setAttribute('class', 'files-list__remove');
        removeButton.innerHTML = '<svg class="files-list__icon"><use xlink:href="assets/images/icon.svg#icon_cross"></svg>';

        li.appendChild(img);
        li.appendChild(spanName);
        li.appendChild(removeButton);

        outputUl[0].appendChild(li);

        var reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = (function (file) {
           return function(e) {
             $(output).append('<input type="hidden" name="file[]" value="' + e.target.result + '" data-file-id="' + file.name + '">');
           }
        })(file);
      }
    }

    OutputFile();

    $(placeholder).hide();

    $(document).on('click', '.files-list__remove', function () {
      var fileId = $(this).parents('li').attr('data-file-id');
      var fileInput = $(this).closest('.file-input');

      if(selectedFiles[fileId] != undefined) delete selectedFiles[fileId];
      $(this).parents('li').remove();
      $('input[name^=file][data-file-id="' + fileId + '"]').remove();

      if($(fileInput).find('.files-list').children('li').length === 0) {
        $(fileInput).find('.file-input__placeholder').show();
      }
    });
  });
};

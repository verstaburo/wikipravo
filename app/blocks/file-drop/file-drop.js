export function FileDrop () {
  var mainClass = 'file-drop',
      label = mainClass + '__label',
      outputClass = mainClass + '__output',
      droppedFiles = false,
      selectedFiles = {},
      queue = [],
      output, outputUl;

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
    droppedFiles = e.originalEvent.dataTransfer.files;

    outputUl = $(this).find('.files-list');
    output = $(this).find('.' + outputClass);
    var fileName, fileImg;

    for(var i = 0; i < droppedFiles.length; i++) {
      var file = droppedFiles[i];

      fileName = file.name;

      if(selectedFiles[fileName] != undefined) continue;

      selectedFiles[fileName] = file;
      queue.push(file);
    }

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

    $(this).find('.' + label).hide();
    $(this).find('.' + outputClass).show().css({'display' : 'flex'});
  });

  $(document).on('click', '.files-list__remove', function () {
    var fileId = $(this).parents('li').attr('data-file-id');

    if(selectedFiles[fileId] != undefined) delete selectedFiles[fileId];
    $(this).parents('li').remove();
    $('input[name^=file][data-file-id="' + fileId + '"]').remove();

    if(document.querySelector('.file-drop .files-list').childElementCount == 0) {
      $('.file-drop').find('.file-drop__label').show();
      $('.file-drop').find('.file-drop__output').hide();
    }
  });
};

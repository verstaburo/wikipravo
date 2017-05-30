export function FileListControl() {

  var input = document.getElementById('files');
  var output = document.querySelector('output[for="files"]');
  var selectedFiles = {};
  var queue = [];
  var isProcessing = false;
  var outputUl, placeholder;
  var fileLoad;

  if(input && output) {

    var outputUl = output.querySelector('.files-list');

    input.addEventListener('change', function() {
      var files = this.files;
      var outputList = [];
      var fileName, fileImg;

      for(var i = 0; i < files.length; i++) {
        var file = files[i];

        fileName = file.name;

        if(selectedFiles[fileName] != undefined) continue;

        selectedFiles[fileName] = file;
        queue.push(file);
      }

      this.value = '';

      function OutputFile() {
        var icons = {"doc" : "assets/images/doc.png", "pdf" : "assets/images/pdf.png", "other" : "https://placehold.it/18x24"};

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

          outputUl.appendChild(li);

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

      output.querySelector('.file-input__placeholder').setAttribute('style', 'display: none');
    }, false);
  }

  $(document).on('click', '.files-list__remove', function () {
    var fileId = $(this).parents('li').attr('data-file-id');

    if(selectedFiles[fileId] != undefined) delete selectedFiles[fileId];
    $(this).parents('li').remove();
    $('input[name^=file][data-file-id="' + fileId + '"]').remove();

    if(document.querySelector('.file-input__files-list').childElementCount == 0) {
      output.querySelector('.file-input__placeholder').setAttribute('style', 'display: block');
    }
  });
};

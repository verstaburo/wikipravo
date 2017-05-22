export function FileListControl() {

  var input = document.getElementById('files');
  var output = document.querySelector('output[for="files"]');
  var outputUl, placeholder;

  if(input && output) {

    var outputUl = output.querySelector('.files-list')
    var placeholder =  output.querySelector('.message__placeholder');

    input.addEventListener('change', function() {
      outputUl.innerHTML = OutputFileList(this).join("");
      placeholder.style = "display:none";
    }, false);

    output.addEventListener('click', function(event) {
      var tagert = event.target;
      var inputFileListId = this.getAttribute("for");
      var inputFileList = document.getElementById(inputFileListId);
      var button, removeFileName;

      if(!tagert.classList.contains("files-list__remove")) {
        var tagertParent = tagert.parentElement;

        while (tagertParent != output) {

          if(tagertParent.classList.contains("files-list__remove")) {

            button = tagertParent;
            break;
          } else {
            tagertParent = tagertParent.parentElement;
          }
        }
      } else {
        button = tagert;
      }

      if(button) {
        removeFileName = button.getAttribute("data-remove-file");
        var newFileList = RemoveFileFromFileList(inputFileList, removeFileName);

        if(newFileList.length > 0) {
          console.log(output);

          outputUl.innerHTML = OutputFileList(newFileList).join("");

          console.log(output);
        } else {
          outputUl.innerHTML = "";
          placeholder.style = "display: inline-block";
        }
      }
    }, false);
  }

  function OutputFileList(fileListInput) {
    var icons = {"doc" : "assets/images/doc.png", "pdf" : "assets/images/pdf.png", "other" : "https://placehold.it/18x24"};
    var files = fileListInput.files;
    var outputList = [];
    var fileName, fileType, fileImg;

    for(var i = 0; i < files.length; i++) {
      fileName = files[i].name;
      fileType = fileName.split('.').pop();

      for (var key in icons) {
        if(icons[fileType] != undefined) {
          fileImg = icons[fileType];
        } else {
          fileImg = icons.other;
        }
      }

      outputList.push(
       '<li class=\"files-list__item\"><img class=\"files-list__img\" src=' + fileImg + ' alt=\"\"><span class=\"files-list__filename\">' + fileName + '</span><button type=\"button\" class=\"files-list__remove\" data-remove-file=\"' + fileName + '\"><svg class=\"files-list__icon\"><use xlink:href=\"assets/images/icon.svg#icon_cross\"></svg></button>'
      );
    }

    return outputList;
  }

  function RemoveFileFromFileList(fileListInput, fileName) {
    var files = [];
    var files = fileListInput.files;
    console.log(fileListInput.files);

    for(var i = 0; i < files.length; i++) {

      if (files[i].name === fileName) {
        files.splice(i, 1);
      }
    }

    console.log(files);

    return files;
  }
};

export function ReadFileList() {
  var input = document.querySelector('.message__files');
  var output = document.querySelector('.message__files-output .files-list');
  var placeholder = document.querySelector('.message__placeholder');

  if(input && output) {
    input.addEventListener('change', function() {

      var files = this.files;
      var outputList = [];
      var fileName, fileType, fileImg;

      for(var i = 0; i < files.length; i++) {
        fileName = files[i].name;
        fileType = fileName.split('.').pop();

        if(fileType == 'doc') {
          fileImg = "assets/images/doc.png";
        } else if (fileType == 'pdf') {
          fileImg = "assets/images/pdf.png";
        } else {
          fileImg = "https://placehold.it/18x24";
        }

        outputList.push(
         '<li class=\"files-list__item\"><img class=\"files-list__img\" src=' + fileImg + ' alt=\"\"><span class=\"files-list__filename\">' + fileName + '</span><button type=\"button\" class=\"files-list__remove\"><svg class=\"files-list__icon\"><use xlink:href=\"assets/images/icon.svg#icon_cross\"></svg></button>'
        );
      }

      output.innerHTML = outputList.join("");
      placeholder.style = "display:none";
    }, false);
  }
};

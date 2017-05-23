export function JuristColorChange () {
  var mainClass = "system-regform";
  var button = mainClass + "__button";
  var red = "button_red";
  var blue = "button_blue";
  var jurist = mainClass + "__type_jurist";
  var client = mainClass + "__type_user";
  var juristInput = $("." + jurist).find("input");
  var clientInput = $("." + client).find("input");
  
  $(juristInput).change(function () {
    $("." + button).toggleClass(blue).toggleClass(red);
  });
  
  $(clientInput).change(function () {
    $("." + button).toggleClass(red).toggleClass(blue);
  });
};
  
export function JuristColorChange () {
  var mainClass = "system-regform";
  var button = mainClass + "__button";
  var red = "button_red";
  var blue = "button_blue";
  var jurist = mainClass + "__type_jurist";
  var client = mainClass + "__type_user";
  
  $("." + jurist).mouseenter(function() {
    $("." + button).removeClass(blue).addClass(red);
  });
  
  $("." + jurist).mouseleave(function() {
    $("." + button).removeClass(red).addClass(blue);
  });
  
  $("." + client).mouseenter(function() {
    $("." + button).removeClass(red).addClass(blue);
  });
  
  if($("." + jurist).find("input").attr("check")) {
    $("." + button).removeClass(blue).addClass(red);
  } else {
    $("." + button).removeClass(red).addClass(blue);
  }
  
  if($("." + client).find("input").attr("check")) {
    $("." + button).removeClass(red).addClass(blue);
  }
};
  
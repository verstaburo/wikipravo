export function CourtRoomSwitch () {
  $('#room').change(function () {
    if($(this).prop('checked')) {
      $('.popup-room-court__inputs').css({"visibility" : "visible", "opacity" : "1",});
    } else {
      $('.popup-room-court__inputs').css({"visibility" : "hidden", "opacity" : "0"});
    }
  });

  $('#noroom').change(function () {
    if($(this).prop('checked')) {
      $('.popup-room-court__inputs').css({"visibility" : "hidden", "opacity" : "0"});
    } else {
      $('.popup-room-court__inputs').css({"visibility" : "visible", "opacity" : "1"});
    }
  });
};

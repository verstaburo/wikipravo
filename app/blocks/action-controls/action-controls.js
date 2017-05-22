export function NoteButtonSwitch() {
  $(".action-controls__button_note").click(function(e) {
    e.preventDefault();
    if($(this).hasClass("active")) {
      $(this).removeClass("active");
      $(this).parents(".action-controls").find(".action-controls__note").removeClass("active");
    } else {
      $(this).addClass("active");
      $(this).parents(".action-controls").find(".action-controls__note").addClass("active");
    }
  });
};

export function FavoritesSwitch() {
  var favoritesBtn, blacklistBtn;

  $(".action-controls__button_favorites").click(function(e) {
    blacklistBtn = $(this).parents(".action-controls").find(".action-controls__button_blacklist");
    e.preventDefault()

    if($(this).hasClass("active")) {
      $(this).removeClass("active");
      $(blacklistBtn).removeClass("disabled");
      $(blacklistBtn).attr("disabled", false);
    } else {
      $(this).addClass("active");
      $(blacklistBtn).addClass("disabled");
      $(blacklistBtn).attr("disabled", true);
    }
  });

  $(".action-controls__button_blacklist").click(function(e) {
    favoritesBtn = $(this).parents(".action-controls").find(".action-controls__button_favorites");
    e.preventDefault()

    if($(this).hasClass("active")) {
      $(this).removeClass("active");
      $(favoritesBtn).removeClass("disabled");
      $(favoritesBtn).attr("disabled", false);
    } else {
      $(this).addClass("active");
      $(favoritesBtn).addClass("disabled");
      $(favoritesBtn).attr("disabled", true);
    }
  });
}

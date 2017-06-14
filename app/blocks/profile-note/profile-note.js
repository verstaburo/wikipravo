export function ShowNoteForProfile () {
  $('.profile-note__button').click(function () {
    $(this).parents('.profile-note__control').removeClass('active');
    $(this).parents('.profile-note').find('.profile-note__notice').addClass('active');
  });
};

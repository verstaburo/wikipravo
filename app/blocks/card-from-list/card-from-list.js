export function ShowNoteForListMember () {
  $('.card-from-list__button').click(function () {
    $(this).parents('.card-from-list__control').removeClass('active');
    $(this).parents('.card-from-list').find('.card-from-list__notice').addClass('active');
  });
};

export function RemovePersonFromRelationList () {
  $('.card-from-list__remove').click(function () {
    $(this).parents('.card-from-list').remove();
  });
};

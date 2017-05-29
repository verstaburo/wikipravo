export function ProfileActivation() {
  $('.header-profile').click(function () {
    $(this).find('.header-profile__list').addClass('active');
  });
  
  $(document).on('click', 'html', function (e) {
    var profile = $('.header-profile');
    
    if(!profile.is(e.target) && profile.has(e.target).length === 0) {
      $(document).find('.header-profile__list').removeClass('active');
    }
  });
  
  $('.header-profile__list').mouseleave(function () {
    $(this).removeClass('active');
  });
};
export function CandidateAddEmulation () {
  var button = '.order-candidate__button';
  var content = '.order-candidate__content';
  var ul = document.createElement('UL');
  var li, avatar, image, name, removeBtn;
  ul.setAttribute('class', 'order-candidate__list');
  $(content).append(ul);
  
  $(button).click(function (e) {
    e.preventDefault();
    
    var id = Math.round(1000*Math.random());
    li = document.createElement('LI');
    avatar = document.createElement('DIV');
    image = document.createElement('IMG');
    name = document.createElement('P');
    removeBtn = document.createElement('BUTTON');
    
    li.setAttribute('class', 'order-candidate__item');
    avatar.setAttribute('class', 'avatar avatar_smaller order-candidate__avatar');
    name.setAttribute('class', 'order-candidate__name');
    removeBtn.setAttribute('class', 'order-candidate__remove');
    
    li.setAttribute('data-jurist-id', id);
    removeBtn.setAttribute('data-jurist-remove-id', id);
    removeBtn.setAttribute('type', 'button');
    image.setAttribute('src', 'assets/images/lawyer-avatar.jpg');
    name.textContent = 'Евгений Михайлов';
    removeBtn.innerHTML = '<svg class="order-candidate__icon"><use xlink:href="assets/images/icon.svg#icon_cross"></svg>';
    
    avatar.appendChild(image);
    li.appendChild(avatar);
    li.appendChild(name);
    li.appendChild(removeBtn);
    ul.appendChild(li);
    
    $(content).find('.order-candidate__message').hide();
  });
  
  $(document).on('click', '.order-candidate__remove', function(e) {    
    console.log("click");
    var removeId = $(this).attr('data-jurist-remove-id');
    
    $(this).parents('li[data-jurist-id="' + removeId + '"]').remove();
    
    if(document.querySelector('.order-candidate__list').childElementCount == 0) {
      $(content).find('.order-candidate__message').show();    
    }
  });
};
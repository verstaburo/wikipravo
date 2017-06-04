export function ScrollBar() {
  $(document).ready(function(){
    $('.selectbox_scrollable .selectbox__list').scrollbar();
    $('.sidebar').scrollbar();
    $(document).on("click", ".scroll-bar", function(e) {
      e.stopPropagation();
    });
  });
}

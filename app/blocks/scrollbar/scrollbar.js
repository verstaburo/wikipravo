export function ScrollBar() {
  $(document).ready(function(){
    $('.selectbox_scrollable .selectbox__list').scrollbar();
    $(document).on("click", ".scroll-bar", function(e) {
      e.stopPropagation();
    });
  });
}

function resizeContent() {
    var $height = $(window).height();
    $('.fullHeight').css('min-height', $height+'px');
}

$(document).ready(function(){
    resizeContent();

    $(window).resize(function() {
        resizeContent();
    });
});

$( ".contactLink" ).click(function() {
  $( "#contactLightbox" ).toggle();
});



var $document = $(document),
    $element = $('.fixedBar'),
    className = 'active';

$document.scroll(function() {
  if ($document.scrollTop() >= 75) {
    $element.addClass(className);
  } else {
    $element.removeClass(className);
  }
});
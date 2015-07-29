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

// setTimeout(function() {
// 	$('.app_preview').addClass('preview1');
// }, 3000);

function removeC() {
	$('.app_preview').removeClass('preview1');
	$('.app_preview').removeClass('preview2');
	$('.app_preview').removeClass('preview3');
}
$( "#ssc1" ).click(function() {
	removeC();
	$('.app_preview').addClass('preview1');
});
$( "#ssc2" ).click(function() {
	removeC();
	$('.app_preview').addClass('preview2');
});
$( "#ssc3" ).click(function() {
	removeC();
	$('.app_preview').addClass('preview3');
});
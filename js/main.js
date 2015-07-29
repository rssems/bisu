function resizeContent() {
    $height = $(window).height();
    $('.fullHeight').css('min-height', $height+'px');
}

$(document).ready(function(){
    resizeContent();

    $(window).resize(function() {
        resizeContent();
    });
});
function resizeContent(){var e=$(window).height();$(".fullHeight").css("min-height",e+"px")}function removeC(){$(".app_preview").removeClass("preview1"),$(".app_preview").removeClass("preview2"),$(".app_preview").removeClass("preview3")}$(document).ready(function(){resizeContent(),$(window).resize(function(){resizeContent()})}),$(".contactLink").click(function(){$("#contactLightbox").toggle()});var $document=$(document),$element=$(".fixedBar"),className="active";$document.scroll(function(){$document.scrollTop()>=75?$element.addClass(className):$element.removeClass(className)}),$("#ssc1").click(function(){removeC(),$(".app_preview").addClass("preview1")}),$("#ssc2").click(function(){removeC(),$(".app_preview").addClass("preview2")}),$("#ssc3").click(function(){removeC(),$(".app_preview").addClass("preview3")});
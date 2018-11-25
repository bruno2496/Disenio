$(document).ready(inicio);
function inicio()
{
    $("#popover").popover();
}


$(".jv_scrollup").hide();
	
	// fade in .jv_scrollup
	$(function () {
		$(window).scroll(function () {
			if ($(this).scrollTop() > 100) {
				$('.jv_scrollup').fadeIn();
			} else {
				$('.jv_scrollup').fadeOut();
			}
		});
		// scroll body to 0px on click
		$('.jv_scrollup').click(function () {
			$('body,html').animate({
				scrollTop: 0
			}, 800);
			return false;
		});
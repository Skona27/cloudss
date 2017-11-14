// Navbar shrink on scroll
$(window).scroll(function(){
	if($(document).scrollTop() > 50) {
		$("nav").addClass("shrink");
	} else {
		$("nav").removeClass("shrink");
	}
});

new WOW().init();
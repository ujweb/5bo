$(function () {
	var width = $(window).width(),
		height = $(window).height(),
		headerHeight = $('header').outerHeight();

	$('a.smooth-scroll[href*="#"]:not([href="#"])').on("click", function() {
		if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
			if (target.length) {
				$('html, body').animate({
					scrollTop: (target.offset().top - headerHeight + 1)
				}, 1000);
				return false;
			}
		}
	});

	$(window).on('resize', function () {});
	$(window).on('scroll', function () {});
});

$('.hamurger').click(function(){
	$(this).toggleClass('active');
	$('.nav-group').slideToggle();
})

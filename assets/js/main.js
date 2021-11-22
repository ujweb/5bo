$('a.gotop').hide();

$(function () {
	var width = $(window).width(),
		height = $(window).height(),
		navHeight = $('nav').outerHeight();

	$('a.smooth-scroll[href*="#"]:not([href="#"])').on("click", function() {
		if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
			if (target.length) {
				$('html, body').animate({
					scrollTop: (target.offset().top - navHeight + 1)
				}, 700);
				return false;
			}
		}
	});

	$(window).on('resize', function () {});
	$(window).on('scroll', function () {
		let scroll = $(window).scrollTop();
		if ( scroll > navHeight ) {
			$('a.gotop').fadeIn();
		} else {
			$('a.gotop').fadeOut();
		}
	});
});

$('.hamurger').click(function(){
	$(this).toggleClass('active');
	$('.nav-group').slideToggle();
})

$('.navbar-side ul.lv-1 > li > span').click(function(){
	$(this).toggleClass('opened');
	$(this).siblings('.lv-2').slideToggle();
})

function parse_query_string(query) {
	let vars = query.split("&");
	let query_string = {};
	for (var i = 0; i < vars.length; i++) {
		var pair = vars[i].split("=");
		var key = decodeURIComponent(pair[0]);
		var value = decodeURIComponent(pair[1]);
		if (typeof query_string[key] === "undefined") {
			query_string[key] = decodeURIComponent(value);
		} else if (typeof query_string[key] === "string") {
			var arr = [query_string[key], decodeURIComponent(value)];
			query_string[key] = arr;
		} else {
			query_string[key].push(decodeURIComponent(value));
		}
	}
	return query_string;
}

let service_string = window.location.search;
if ( service_string !== '' ) {
	service_string = service_string.split('?')[1];
}
let sort_index = parse_query_string(service_string);

if ( sort_index.sort == undefined || (sort_index.sort == undefined && sort_index.item == undefined) ) {
	$('.navbar-display-1-1').show();
	$('.navbar-side ul.lv-1').children('li').eq(0).children('.lv-2').show();
	$('.navbar-side ul.lv-1').children('li').eq(0).children('span, a').addClass('active');
	$('.navbar-side ul.lv-1').children('li').eq(0).children('.lv-2').children('li').eq(0).children('a').addClass('active');
} else if ( sort_index.item == undefined ) {
	$(`.navbar-display-${sort_index.sort}`).show();
	$('.navbar-side ul.lv-1').children('li').eq(sort_index.sort-1).children('.lv-2').show();
	$('.navbar-side ul.lv-1').children('li').eq(sort_index.sort-1).children('span, a').addClass('active');
} else {
	$(`.navbar-display-${sort_index.sort}-${sort_index.item}`).show();
	$('.navbar-side ul.lv-1').children('li').eq(sort_index.sort-1).children('.lv-2').show();
	$('.navbar-side ul.lv-1').children('li').eq(sort_index.sort-1).children('span, a').addClass('active');
	$('.navbar-side ul.lv-1').children('li').eq(sort_index.sort-1).children('.lv-2').children('li').eq(sort_index.item-1).children('a').addClass('active');
}

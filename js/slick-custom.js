$(document).ready(function(){
	$('.cslider').slick({
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  autoplay: true,
	  autoplaySpeed: 5000,
	  dot: false,
	});
	$('.workslide').slick({
	  slidesToShow: 3,
	  slidesToScroll: 1,
	  autoplay: true,
	  autoplaySpeed: 2000,
	  dot: false,
	});
});
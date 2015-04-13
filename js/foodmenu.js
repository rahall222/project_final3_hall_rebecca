$(document).ready( function() {

// HAMBURGER MENU
	$(".drawer").drawer();

// FULL PAGE SCROLL
	$('#fullpage').fullpage({
		anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage', 'fifthPage'],
		menu: '#subMenu',
		sectionsColor: ['whitesmoke', 'whitesmoke', 'whitesmoke', 'whitesmoke', 'whitesmoke'],
		autoScrolling: false,
		fitToSection: true
	});

//STICK UP
//initializing jQuery
	jQuery(function($) {
		//enabling stickUp on the '.navbar-wrapper' class
		$('.navbar-wrapper').stickUp({
			//enabling marginTop with the 'auto' setting
			marginTop: 'auto'
		});
	});

//BACKSTRETCH
	$(".breakfast1").backstretch("img/breakfast1.jpg", {
		speed: 500
	});

	$(".breakfast2").backstretch("img/breakfast2.jpg", {
		speed: 500
	});

	$(".breakfast3").backstretch("img/breakfast3.jpg", {
		speed: 500
	});

	$(".sandwich1").backstretch("img/sandwich1.jpg", {
		speed: 500
	});

	$(".sandwich3").backstretch("img/sandwich3.jpg", {
		speed: 500
	});

	$(".hotdog1").backstretch("img/hotdog1.jpg", {
		speed: 500
	});

	$(".dessert1").backstretch("img/dessert1.jpg", {
		speed: 500
	});

	$(".dessert2").backstretch("img/dessert2.jpg", {
		speed: 500
	});

	$(".dessert3").backstretch("img/dessert3.jpg", {
		speed: 500
	});

	$(".drinks1").backstretch("img/drinks1.jpg", {
		speed: 500
	});

});

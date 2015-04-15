$(document).ready( function() {
// HAMBURGER MENU
	$(".drawer").drawer();

//ANIMATE SCROLL
	$('li').click(function() {
		$("li.active").removeClass("active");
		$(this).addClass('active');
	});

	$('.breakfast').on("click", function(){
		$('body').animatescroll();
	});

	$('.sandwiches').on("click", function(){
		$('.section2').animatescroll();
	});

	$('.hotdogs').on("click", function(){
		$('.section3').animatescroll();
	});

	$('.drinks').on("click", function(){
		$('.section4').animatescroll();
	});

	$('.dessert').on("click", function(){
		$('.section5').animatescroll();
	});

//STICK UP
//initializing jQuery
	if ( $( ".navbar-wrapper" ).length ) {
		jQuery(function($) {
			//enabling stickUp on the '.navbar-wrapper' class
			$('.navbar-wrapper').stickUp({
				//enabling marginTop with the 'auto' setting
				marginTop: 'auto'
			});
		});
	}

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



//BACKSTRETCH
	$(".chang").backstretch("img/chang.jpg", {
		speed: 500
	});

	$(".community").backstretch("img/community.jpg", {
		speed: 500
	});


});

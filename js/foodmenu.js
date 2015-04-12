$(document).ready( function() {

// HAMBURGER MENU
	$(".drawer").drawer();

// FULL PAGE SCROLL
	$('#fullpage').fullpage({
		anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage', 'lastPage'],
		menu: '#subMenu',
		sectionsColor: ['#f2f2f2', '#4BBFC3', '#7BAABE', 'whitesmoke', '#000'],
		autoScrolling: false
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

});

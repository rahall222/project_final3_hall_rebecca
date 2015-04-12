$(document).ready( function() {

// HAMBURGER MENU
	$(".drawer").drawer();

// FULL PAGE SCROLL
	$('#fullpage').fullpage({
		anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage'],
		menu: '#subMenu',
		sectionsColor: ['whitesmoke', 'whitesmoke', 'whitesmoke', 'whitesmoke'],
		autoScrolling: false,
		fitToSection: true,
		easingcss3: 'cubic-bezier(0.175, 0.885, 0.320, 1.275)'
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

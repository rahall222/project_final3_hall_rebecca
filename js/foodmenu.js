$(document).ready( function() {
	$(".drawer").drawer();

	$('#fullpage').fullpage({
		anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage', 'lastPage'],
		menu: '#subMenu',
		sectionsColor: ['#f2f2f2', '#4BBFC3', '#7BAABE', 'whitesmoke', '#000'],
		autoScrolling: false
	});
});

/**
 * @author http://blazeboy.me
 */

function flip_dialog(message, html) {	
	// fix backstyle
    $('.flip-container .back').height($('.flip-container .front').height());
	
	$('.flip-container').addClass('hover');
	
}


function flip_dialog2(message, html) {
	
	$('.flip-container').removeClass('hover');
	
}


$(function() {
	
	$('#flipper-view').click(function() {
		flip_dialog("");
	});
	
	$('#flipper-edit').click(function() {
		flip_dialog2("");
	});

});


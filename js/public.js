/**
 * @author      OA Wu <comdan66@gmail.com>
 * @copyright   Copyright (c) 2016 OA Wu Design
 */

$(function () {
	$('#button').click(function(){
		console.log('checked');
		if($('.box').hasClass('checked')){
			$('.box').removeClass('checked');
		} else {

			$('.box').addClass('checked');
		}
	});

	$('#enter').click(function(){
		console.log('get text'+$('#in').val());
		var $text = $('#in').val();
		if($text != ''){
	    	$('#items').append($('<div/>').text($text));
	    }
	    $('#in').val('');
	});
});
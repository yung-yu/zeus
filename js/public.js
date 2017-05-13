/**
 * @author      OA Wu <comdan66@gmail.com>
 * @copyright   Copyright (c) 2016 OA Wu Design
 */

$(function () {
	$('#button').click(function(){
		console.log('checked');
		for($i=0; $i<=4; $i++){
			console.log('checked'+$i);
			if($('#box'+$i).hasClass('checked')){
	          $('#box'+$i).removeClass('checked');
	        } else {
	          $('#box'+$i).addClass('checked');
	        }
    	}
	});
});
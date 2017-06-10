/**
 * @author     Andy Li<yungyu405728@gmail.com>
 * @copyright   Copyright (c) 2016 Andy Li Design
 */

$(function () {
	var count = 0;
	var answer = parseInt(Math.random() * 100);
	var min = 1;
	var max = 100;
	
    console.log('answer '+answer);
	$('#send').click(function(){
		 var number = $('#edite').val();
		 if(number != '' && number <= max && number >= min){
		 	if(answer == number){
		 		if(confirm('終極密碼! 答案：'+answer)){
		 			min = 1;
					max = 100;
					$('#main .content').empty();
					 answer = parseInt(Math.random() * 100);
					 console.log('answer '+answer);
		 		}
		 	} else {
		 		var text = '沒中～ 範圍在：';

		 		if(number > answer){
		 			max = number;
		 			text += min+' ~ '+number;
		 		} else {
		 			min = number;
		 			text +=  number+' ~ '+max;
		 		}
		 		$('#main .content').append(
						$('<div />').addClass('item').append($('<label />').addClass('itemValue').text(text))
					);
		 	}	
			
			$('#edite').val('');
		} else {
			alert('請輸入範圍在'+min+' ~ '+max);
		}
	});

    
});
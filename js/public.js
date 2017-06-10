/**
 * @author     Andy Li<yungyu405728@gmail.com>
 * @copyright   Copyright (c) 2016 Andy Li Design
 */

$(function () {
	var count = 0;
	$('#send').click(function(){
		 var text = $('#edite').val();
		 if(text != ''){
			 var changeColorBtn = $('<label />').addClass('changeColor');
			 var repairBtn = $('<label />').addClass('repair');
			 var deleteBtn = $('<label />').addClass('delete');
			$('#main .content').append(
				$('<div />').addClass('item').append($('<label />').addClass('itemValue').text(text))
				.append(
				$('<div />').addClass('tools')
				.append(changeColorBtn.text('變色'))
				.append(repairBtn.text('修改'))
				.append(deleteBtn.text('刪除'))
				));
			$('#edite').val('');

			changeColorBtn.click(function(){
		    	if($(this).parent().parent().hasClass('change')){
		    		console.log('remove');
		        	$(this).parent().parent().removeClass('change');
		        } else {
		        	console.log('add');
					$(this).parent().parent().addClass('change');
		        }
		    });

		   repairBtn.click(function(){
		    	console.log('repair');
		    	var newText = prompt('請輸入新的內容', '');
	            if(newText){
	            	console.log(newText);
	            	$(this).parent().parent().children('.itemValue').text(newText);

	            }
		    	
		    });

		   deleteBtn.click(function(){
		    	$(this).parent().parent().remove();
		    });
		}
	});

    
});
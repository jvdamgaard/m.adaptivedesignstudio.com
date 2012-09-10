Zepto(function($){

	$('.delete').hide();

	// show delete buttons on swipe
	$('.swipetest').swipeLeft(function(){
	  $('.delete').hide();
	  $('.delete', this).show();
	})

	// delete row on tapping delete button
	$('.swipetest .delete').tap(function(){
	  $(this).parent('.swipetest').remove();
	})
});




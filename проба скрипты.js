$(document).ready( function() 
{
	$('.menu .item').click( function() 
	{
		if( $(this).hasClass( 'selected' ) ) 
		{
			//undo the click & show all posts
			$(this).removeClass( 'selected' );
			$('.post').slideDown( 300 );
		}
		else
		{
			//hides unrelated posts & shows related
			$('.post').hide();
			$('.post.' + $(this).data( 'postsToShow' )).slideDown( 300 );

			//makes menu items stay reddish when clicked
			$('.menu .item.selected').removeClass( 'selected' );
			$(this).addClass( 'selected' );
		}
	});
});
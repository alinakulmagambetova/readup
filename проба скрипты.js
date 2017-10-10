$(document).ready( function() 
{
	$('.menu .item').click( function() 
	{
		var $clickedMenuItem = $(this);

		if( $clickedMenuItem.hasClass('selected' ) )
		{
			$clickedMenuItem.removeClass('selected' );
			$('.post').slideDown( 300 );
		}
		else
		{
			$('.post').hide();
			$('.post.' + $clickedMenuItem.data('postsClassToOpen')).slideDown( 300 );

			$('.menu .item.selected').removeClass( 'selected' );
			$clickedMenuItem.addClass( 'selected' );
		}
	});

});
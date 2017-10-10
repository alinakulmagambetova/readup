$(document).ready( function() 
{
	$('.menu .feminism.item').click( function() 
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
			$('.feminism.post').slideDown( 300 );

			//makes menu items stay reddish when clicked
			$('.menu .item.selected').removeClass( 'selected' );
			$(this).addClass( 'selected' );
		}
	});

	$('.menu .science.item').click( function()
	{
		if( $(this).hasClass( 'selected' ) ) 
		{
			$(this).removeClass( 'selected' );
			$('.post').slideDown( 300 );
		}
		else
		{
			$('.post').hide();
			$('.science.post').slideDown( 300 );

			$('.menu .item.selected').removeClass( 'selected' );
			$(this).addClass( 'selected' );
		}
	});

	$('.menu .memes.item').click( function ()
	{
		if( $(this).hasClass( 'selected' ) ) 
		{
			$(this).removeClass( 'selected' );
			$('.post').slideDown( 300 );
		}
		else
		{
			$('.post').hide();
			$('.memes.post').slideDown( 300 );

			$('.menu .item.selected').removeClass( 'selected' );
			$(this).addClass( 'selected' );
		}
	});

	$('.menu .personal.item').click( function()
	{
		if( $(this).hasClass( 'selected' ) ) 
		{
			$(this).removeClass( 'selected' );
			$('.post').slideDown( 300 );
		}
		else
		{
			$('.post').hide();
			$('.personal.post').slideDown( 300 );

			$('.menu .item.selected').removeClass( 'selected' );
			$(this).addClass( 'selected' );
		}	
	});

});
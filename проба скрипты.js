$(document).ready( function() 
{
	$('.menu .feminism.item').click( function() 
	{
		$('.post').hide();
		$('.feminism.post').slideDown( 300 );

		$('.menu .item.selected').removeClass( 'selected' );
		$(this).addClass( 'selected' );
	});

	$('.menu .science.item').click( function()
	{
		//undo the click (kinda)
		if ( true ) {}

		//hides unrelated posts & shows related
		$('.post').hide();
		$('.science.post').slideDown( 300 );

		//makes menu items stay red when clicked
		$('.menu .item.selected').removeClass( 'selected' );
		$(this).addClass( 'selected' );
	});

	$('.menu .memes.item').click( function ()
	{
		$('.post').hide();
		$('.memes.post').slideDown( 300 );

		$('.menu .item.selected').removeClass( 'selected' );
		$(this).addClass( 'selected' );	
	});

	$('.menu .personal.item').click( function()
	{
		$('.post').hide();
		$('.personal.post').slideDown( 300 );

		$('.menu .item.selected').removeClass( 'selected' );
		$(this).addClass( 'selected' );		
	});

});
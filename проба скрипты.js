$(document).ready( function() 
{
	console.log('blah');


	$('.feminism.item').click( showFeminismPosts );
	$('.science.item').click( showSciencePosts );
	$('.memes.item').click( showMemesPosts );
	$('.personal.item').click( showPersonalPosts );

	function showSciencePosts()
	{
		//hides unrelated posts & shows related
		$('.post').hide();
		$('.science.post').slideDown( 300 );

		//makes menu items stay red when clicked
		$('.menu .item.selected').removeClass( 'selected' );
		$('.menu .science.item').addClass( 'selected' );
	}

	function showFeminismPosts()
	{
		$('.post').hide();
		$('.feminism.post').slideDown( 300 );

		$('.menu .item.selected').removeClass( 'selected' );
		$('.menu .feminism.item').addClass( 'selected' );
	}
	function showMemesPosts()
	{
		$('.post').hide();
		$('.memes.post').slideDown( 300 );

		$('.menu .item.selected').removeClass( 'selected' );
		$('.menu .memes.item').addClass( 'selected' );	
	}

	function showPersonalPosts()
	{
		$('.post').hide();
		$('.personal.post').slideDown( 300 );

		$('.menu .item.selected').removeClass( 'selected' );
		$('.menu .personal.item').addClass( 'selected' );		
	}

});
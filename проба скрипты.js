$(document).ready( function() 
{
	console.log('blah');


	$('.feminism.item').click( showFeminismPosts );
	$('.science.item').click( showSciencePosts );
	$('.memes.item').click( showMemesPosts );
	$('.personal.item').click( showPersonalPosts );

	function showSciencePosts()
	{
		$('.post').hide();
		$('.science.post').slideDown( 300 );
	}

	function showFeminismPosts()
	{
		$('.post').hide();
		$('.feminism.post').slideDown( 300 );
	}
	function showMemesPosts()
	{
		$('.post').hide();
		$('.memes.post').slideDown( 300 );			
	}

	function showPersonalPosts()
	{
		$('.post').hide();
		$('.personal.post').slideDown( 300 );			
	}

});
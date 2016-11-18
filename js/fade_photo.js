function _resize()
{
	if (Foundation.MediaQuery.atLeast('medium'))
	{
		  $( "h1" ).css('font-size', '6em');
		  $( "#clock" ).css('font-size', '2em');
	}
	else
	{
		$( "h1" ).css('font-size', '2em');
		$( "#clock" ).css('font-size', '1em');
	}
	$( ".member p" ).css('top', $( ".member img" ).width() + 10);

	$( ".member" ).height($( ".member img" ).width() + $( ".member p" ).height() + 40);
}

_resize();

$( window ).resize(function()
{
	_resize();
});

$( ".member" ).mouseenter(
	function()
	{
		var $active = $( this ).children('img.character');
		var $next = $( this ).children('img.real');

		//$next.css('z-index',2);

		$active.fadeOut(500,function()
		{
			$active.css('z-index',1).show();
			$next.css('z-index',2);
		});
	})
	.mouseleave(
		function()
		{
			var $active = $( this ).children('img.real');
			var $next = $( this ).children('img.character');

			//$next.css('z-index',2);

			$active.fadeOut(500,function()
			{
				$active.css('z-index',1).show();
				$next.css('z-index',2);
			});
		});

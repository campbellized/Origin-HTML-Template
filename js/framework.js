$js = jQuery.noConflict();

$js(document).ready(function(){
	//Responsive Menu widget
	$js('#mobi-menu').on('click',function(e){
		$js('#header .links').toggleClass('active');
		e.preventDefault();
	});
	
	//Tab widget
	//Multiple tab widgets are allowed on a page by adding unique string to the ID
	//example: <ul id='framework-tabs-N'> OR <ul id='N-framework-tabs'>
	$js('[id^="framework-tabs"]').each(function(){
		//initialize active tab and tab content
		$js(this).find('.tab-controls li:first-of-type').addClass('active');
		$js(this).find('.tab:first-of-type').addClass('active');
		var parentUL = $js(this); //the parent tab container
		var section = parentUL.find('.section');
		section.css('height', section.innerHeight());
		$js('li a', parentUL).each(function(){
			var index = $js(this).closest('li').index() + 1; //get the index of this tab
			$js(this).on('click', function(e){
				//activate tab, deactivate siblings
				$js(this).closest('li').addClass('active').siblings().removeClass('active');

				$js(parentUL).find('.tab.active').removeClass('active');
				$js(parentUL).find('.tab:nth-of-type('+index+')').fadeIn(400).addClass('active').siblings('.tab').css('display', 'none');
				e.preventDefault();
			});
		});
	});
});

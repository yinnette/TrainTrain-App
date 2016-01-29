$(window).load(
	loadViews(), 
	defineLog()
	
); 

function loadViews() {
	$('.view').each(function(){
		var role = $(this).attr('role'); 
		$(this).load('includes/'+role+'.html', function() {
			var header = $(this).find('.header');
			header.load('includes/header.html', function() {
				profileBKG();
				$('.footer').load('includes/footer.html');
			});
			
		});
		$(this).addClass('view-'+role+'');
		
	});
};
function profileBKG() {
	$('.profile-image').each(function() {
		var profile = $(this).css('background-image'),
		    profilehead = $(this).closest('section');
		$('.app-background').css('background-image', profile);
	});
};
function defineLog() {
	$('.view[role=login], .view[role=register], .view[role=password], .view[role=home]' ).addClass('logged-out'); 
	$('.view').not('.logged-out').addClass('logged-in');
};
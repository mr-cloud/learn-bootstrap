$(document).ready(function() {
	$('#loginLink').click(function(){
		console.log('login triggered');
		$('#loginModal').modal();
	});
	$('#reserveBtn').click(function(){
		$('#reserveModal').modal();
	});
	$('#mycarousel').carousel({interval: 2000});
	$('#carouselButton').click(function () {
		if ($('#carouselButton').children('span').hasClass('fa-pause')) {
			$('#mycarousel').carousel('pause'); // cannot stop it in some mobile device
			$('#carouselButton').children('span').removeClass('fa-pause');
			$('#carouselButton').children('span').addClass('fa-play');
			console.log("paused carousel.")
		}
		else  {
			$('#mycarousel').carousel('cycle');
			$('#carouselButton').children('span').removeClass('fa-play');
			$('#carouselButton').children('span').addClass('fa-pause');
			console.log("cycling carousel.")
		}
	});
});

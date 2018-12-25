$(document).ready(function() {
	$('#loginLink').click(function(){
		console.log('login triggered');
		$('#loginModal').modal();
	});
	$('#reserveBtn').click(function(){
		$('#reserveModal').modal();
	});
});

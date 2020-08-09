// var hello = prompt('何か書いて');

// alert(hello);

// $(document).ready(function () {
// 	$('body').html('<h1>Hello jQuery!!</h1>');
// });

// $(function(){
// 	$('.box').css({'background-color': '#00F', 'height': '100px'});
// 	$('.box').slideDown();
// 	$('.box').slideUp();
// 	$('.box2').show();
// 	$('.box2').mouseover(function(){
// 		$('.box2').addClass('border');
// 	});
// 	$('.box2').mouseout(function(){
// 		$('.box2').removeClass('border');
// 	});
// 	$('.box2').on('click', function(){
// 		$('.box2').css({'background-color': '#f00'});
// 	});

// });

// $(function(){
// 	$('.bg1').on('click', function(){
// 		$('.bg1').slideUp();
// 	});
// 	$('.bg2').on('click', function(){
// 		$('.bg2').slideUp();
// 	});
// 	$('.bg3').on('click', function(){
// 		$('.bg3').slideUp();
// 	});
// 	$('.bg4').on('click', function(){
// 		$('.bg4').slideUp();
// 	});
// });

$(function(){
	$('.box1').on('click', function(){
		$(this).slideUp();
	});
});
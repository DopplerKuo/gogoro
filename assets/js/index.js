$(document).ready(function() {        
	
	// page3 的 slider
	$('.slider').unslider({
		speed: 400,              
		delay: 3000,
	});


	// youtube-box
	$("body").css("overflow-y", "hidden"); //一開始有影片
	$('.page-video-play').click(function() {
		$('.youtube-box').fadeIn(300); 
		$('iframe').fadeIn(0); //兩個影片是疊在一起的，主影片在上面
		$("body").css("overflow-y", "hidden");
		if ($(this).hasClass('bot-v')) {
			$('iframe.main-v').fadeOut(0); //假如 play 是 page4 的，我就把主影片 fadeout
		}
	});
	$('.youtube-box .img-bg-black').click(function() {
		$('.youtube-box').fadeOut(300);
		$("body").css("overflow-y", "scroll");
		//關閉影片廣告才開始reveal
		window.sr = ScrollReveal();
		sr.reveal('.reveal',300);
		sr.reveal('.reveal-400',400);
		sr.reveal('.reveal-450', {
		  duration    : 450,
		  scale       : 0.8,
		});
		sr.reveal('.reveal-500', {
		  duration    : 500,
		  origin      : 'left',
		  scale       : 0.9,
		});
	});
	// youtube-box END
	// 掛上 comingsoon 的 a 都不能點
	$('a.comingsoon').click(function(e) {
		e.preventDefault();
	});
});


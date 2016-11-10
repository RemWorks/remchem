$('.menu div').click(function(){
	$(this).addClass("active");
	$(this).siblings().removeClass("active");
});

$('a[href^="#"]').on('click', function(event) {
	var target = $(this.getAttribute('href'));
	if( target.length ) {
		event.preventDefault();
		$('html, body').stop().animate({
			scrollTop: target.offset().top
		}, 1000);
	}
});





$( window ).scroll(function() {

	var scrollPos = $(window).scrollTop();
	var topWorks = $('.about').offset().top;

	if(scrollPos >=  topWorks) {
		$('header .navbar').addClass('active');
	} else {
		$('header .navbar').removeClass('active');
	}

});





$('.software').hover(function(){
	var soft = $(this).data("software");
	$( ".softTxt" ).text("" + soft );
	$(".choice").toggleClass("hidden");
	$(".softTxt").toggleClass("hidden");
});








$(".popVg").click(function(){
	$(this).addClass("active");
	$(".popWeb").removeClass("active");	
	$(".vg").addClass("hidden");
	$(".web").removeClass("hidden");
});

$(".popWeb").click(function(){
	$(this).addClass("active");
	$(".popVg").removeClass("active");	
	$(".web").addClass("hidden");
	$(".vg").removeClass("hidden");
});
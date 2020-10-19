// Preloader
$(window).on("load", function() {

    $(".loader .inner").fadeOut(500, function() {
        $(".loader").fadeOut(750);
    });

});
$(document).ready(function(){
    $("html, body").animate({ scrollTop: 0 }, 0);
});


$(document).ready(function(){
    
	//superslide plugin
    $('#slides').superslides({
        play: 5000,
        pagination: false,
        animation: 'fade'
    });

    // Typed js plugin
    // Type Pausing
    
	// var typed = new Typed('.typed', {
	//    Waits 1000ms after typing "First"
	//    strings: ['Web Developer', 'Mobile App Developer','Full Stack Web Developer'],
	//    typeSpeed: 50,
	//    loop: true,
	//    showCursor: false,
	//  });

	//Smart Backspacing plugin
	var typed = new Typed('.typed', {
	  	strings: ['Web Developer', 'Mobile App Developer','Full Stack Web Developer'],
		typeSpeed: 50,
		loop: true,
		showCursor: false,
	  	smartBackspace: true // Default value
	});

	// Owl carousel
    $('.owl-carousel').owlCarousel({
        loop:true,
        responsive:{
            // 0 -599 = 1
            0:{
                items:1
            },
            // 600 -999 = 3
            600:{
                items:2
            },
            // 1000 - rest = 5
            1000:{
                items:4
            }
        }
	});
	
	// Easy Pie Chart
    $('.chart').easyPieChart({
        //your options goes here
        easing: 'easeInOut',
        barColor: 'white',
        trackColor : false,
        scaleColor : false,
        lineWidth: 4,
        size : 152,
        onStep: function (from, to, percent) {
            $(this.el).find('.percent').text(Math.round(percent));
		},
		animate:{
            duration: 5000,
            enabled: true,
        }
    });
    //Counter up js plugin
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });

    // Smooth Scroll
    // BOM = Browser object model
    $("#navigation li a").click(function(e) {
        e.preventDefault();

        var targetElement = $(this).attr("href");
        var targetPosition = $(targetElement).offset().top;
        $("html, body").animate({ scrollTop: targetPosition - 50 }, "slow");
    });
    
    // FancyBox For Gallery
    $('[data-fancybox]').fancybox();
    // Sort and filter
    $("#filters a").click(function() {

        $("#filters .current").removeClass("current");
        $(this).addClass("current");

        var selector = $(this).attr("data-filter");

        $(".items").isotope({
            filter: selector,
            animationOptions: {
                duration: 1500,
                easing: 'linear',
                queue: false
            }
        });

        return false;
    });

});
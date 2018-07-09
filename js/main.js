/**
 * Created by BenTfu on 2017/6/23.
 */

/*图片全屏滑动器*/
jQuery(function($){
    $.supersized({
        // Functionality
        slide_interval          :   5000,		// Length between transitions
        transition              :   1, 			// 0-None, 1-Fade, 2-Slide Top, 3-Slide Right, 4-Slide Bottom, 5-Slide Left, 6-Carousel Right, 7-Carousel Left
        transition_speed		:	1000,		// Speed of transition

        // Components
        slide_links				:	'blank',	// Individual links for each slide (Options: false, 'num', 'name', 'blank')
        slides 					:  	[			// Slideshow Images
            {image : 'image/bg.jpg'},
            {image : 'image/bg1.jpg'},
            {image : 'image/bg2.jpg'}
        ]
    });
});
// 首页标题
$(document).ready(function () {
    $('#intro-slider').flexslider({
        animation: "fade",
        controlNav: false,
        DirectionNav: false,
        slideshowSpeed: 4000,
        animationSpeed: 600
    });
});

/*运动导航*/
$(window).scroll(function() {
    if ($(".navbar").offset().top > 150) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
});

$(document).ready(function () {
    $("#navBer .bar_a").click(function () {
        $(".dropdown_menu").slideToggle("fast");
    });
});
/*产品服务导航*/
$(document).ready(function () {
    $(".c2-boxtitle").find("li").hover(function () {
       $(".c2-boxtitle li").removeClass("c2-active");
       $(this).addClass("c2-active");
    })
});

/*wow*/
$(window).ready(function () {
    var wow = new WOW({
        boxClass: 'wow',
        animateClass: 'animated',
        offset: 180,
        mobile: true,
        live: true
    });
    wow.init();
});




if (screen.width <= 800) {
    window.location = "mobile.html";
}
$(document).ready(function(s) {
    var t = 0;
    $("#fullpage").fullpage({
        verticalCentered: !0,
        sectionsColor: ["#000", "#39445e", "#39445e", "#39445e"],
        navigation: !0,
        navigationPosition: "right",
        scrollBar: !1,
        css3: !0,
        fitToSection: !1,
        scrollOverflow: !1,
        scrollingSpeed: 700,
        slidesNavigation: !1,
        autoScrolling: !0,
        afterRender: function() {
            $("video").get(0).play()
        },
        onLeave: function(s, t, a) {
            var e = document.getElementById("myVideo");
            1 == s || "down" == a ? (e.pause(), $(".icons_left").fadeIn()) : 2 == s && "up" == a && (e.play(), $(".icons_left").hide())
        },
        afterLoad: function(s, t) {
        	if(t==1){
        		$("#sld_1").attr("src", "images/VideoPage/1.PNG"); 
            	$("#sld_2").attr("src", "images/VideoPage/2.PNG"); 
            	$("#sld_3").attr("src", "images/VideoPage/3.PNG"); 
            	$("#sld_4").attr("src", "images/VideoPage/4.PNG");
                //section2
                $(".pins").css("animation", ""), 
                $(".pins").css("animation-iteration-count", ""), 
                $('.pinss').css('animation',''),
                $('.pinss').css('animation-iteration-count',''),
                $('.cloud').css('animation',''),
                $('.cloud').css('animation-iteration-count',''),
                $('.cycle').css('animation',''),
                $('.cycle').css('animation-iteration-count',''),
                // section3
                $('#head_top').css('animation',''),
                $('#head_top').css('animation-iteration-count',''),
                $('#head_bottom').css('animation',''),
                $('#head_bottom').css('animation-iteration-count',''),
                $('#head_left').css('animation',''),
                $('#head_left').css('animation-iteration-count',''),
                $('#head_right').css('animation',''),
                $('#head_right').css('animation-iteration-count',''),

                $('#section4 .image_block img:nth-child(n+2)').css('animation',''),
                $('#section4 .image_block img:nth-child(n+2)').css('animation-iteration-count','');
            }
            1 != t ? (
            	$(".icons_left").show(), 
            	$("#section1").css("visibility", "hidden"))
            : (
            	$(".icons_left").hide(), 
            	$("#section1").css("visibility", "visible")
    		)
    		, 
    		2 == t ? (
                $(".icons_left").fadeIn(500),
                $(".pins").css("animation", "poptop ease-in-out 1.5s"), 
                $(".pins").css("animation-iteration-count", "1"),
                $('.pinss').css('animation','animationFrames ease-in-out 14s'),
                $('.pinss').css('animation-iteration-count','infinite'),
                $('.cloud').css('animation','fadeout ease-in-out 5s'),
                $('.cloud').css('animation-iteration-count','infinite'),
                $('.cycle').css('animation','moveandcomeback ease-in-out 14s'),
                $('.cycle').css('animation-iteration-count','infinite'), 
                $("#sld_1").attr("src", "images/PickUpPage/1.png"), 
                $("#sld_2").attr("src", "images/PickUpPage/2.png"), 
                $("#sld_3").attr("src", "images/PickUpPage/3.png"), 
                $("#sld_4").attr("src", "images/PickUpPage/4.png"),


                $('#head_top').css('animation',''),
                $('#head_top').css('animation-iteration-count',''),
                $('#head_bottom').css('animation',''),
                $('#head_bottom').css('animation-iteration-count',''),
                $('#head_left').css('animation',''),
                $('#head_left').css('animation-iteration-count',''),
                $('#head_right').css('animation',''),
                $('#head_right').css('animation-iteration-count',''),

                $('#section4 .image_block img:nth-child(n+2)').css('animation',''),
                $('#section4 .image_block img:nth-child(n+2)').css('animation-iteration-count','')
            )
            : 
            3 == t ? (
                $("#sld_1").attr("src", "images/BuddyUpPage/1.png"), 
                $("#sld_2").attr("src", "images/BuddyUpPage/2.png"), 
                $("#sld_3").attr("src", "images/BuddyUpPage/3.png"), 
                $("#sld_4").attr("src", "images/BuddyUpPage/4.png"),
                $('#head_top').css('animation','bottomanimation linear 4s'),
                $('#head_top').css('animation-iteration-count','infinite'),
                $('#head_bottom').css('animation','topanimation linear 6s'),
                $('#head_bottom').css('animation-iteration-count','infinite'),
                $('#head_left').css('animation','bottomanimation linear 4s'),
                $('#head_left').css('animation-iteration-count','infinite'),
                $('#head_right').css('animation','topanimation linear 6s'),
                $('#head_right').css('animation-iteration-count','infinite'),

                $(".pins").css("animation", ""), 
                $(".pins").css("animation-iteration-count", ""), 
                $('.pinss').css('animation',''),
                $('.pinss').css('animation-iteration-count',''),
                $('.cloud').css('animation',''),
                $('.cloud').css('animation-iteration-count',''),
                $('.cycle').css('animation',''),
                $('.cycle').css('animation-iteration-count',''),

                $('#section4 .image_block img:nth-child(n+2)').css('animation',''),
                $('#section4 .image_block img:nth-child(n+2)').css('animation-iteration-count','')

            ) 
            : 
            4 == t ? (
                $("#medal").css("animation", "fadeDown ease-in-out 0.5s"), 
                $("#medal").css("animation-iteration-count", "1"), 
                $("#sld_1").attr("src", "images/RewardsPage/1.png"), 
                $("#sld_2").attr("src", "images/RewardsPage/2.png"), 
                $("#sld_3").attr("src", "images/RewardsPage/1.png"), 
                $("#sld_4").attr("src", "images/RewardsPage/2.png"),
                $('#section4 .image_block img:nth-child(n+2)').css('animation','tada ease-in-out 2s'),
                $('#section4 .image_block img:nth-child(n+2)').css('animation-iteration-count','infinite'),



                $(".pins").css("animation", ""), 
                $(".pins").css("animation-iteration-count", ""), 
                $('.pinss').css('animation',''),
                $('.pinss').css('animation-iteration-count',''),
                $('.cloud').css('animation',''),
                $('.cloud').css('animation-iteration-count',''),
                $('.cycle').css('animation',''),
                $('.cycle').css('animation-iteration-count',''),


                $('#head_top').css('animation',''),
                $('#head_top').css('animation-iteration-count',''),
                $('#head_bottom').css('animation',''),
                $('#head_bottom').css('animation-iteration-count',''),
                $('#head_left').css('animation',''),
                $('#head_left').css('animation-iteration-count',''),
                $('#head_right').css('animation',''),
                $('#head_right').css('animation-iteration-count','')






            ) : (
                $(".pins").css("animation", ""), 
                $(".pins").css("animation-iteration-count", ""), 
                $("#medal").css("animation", ""), 
                $("#medal").css("animation-iteration-count", "")
            )
        }
    }), $("#fp-nav").css("margin-top", "0px"), $("#fp-nav").css("width", "19px"), $("#fp-nav").css("height", "19px");
    var a = 1;
    $("#bottom_button").click(function() {
        1 == a ? (t = 1, $(this).css("bottom", "11%"), $(this).css("transform", "rotate(180deg)"), $(".footer").css("bottom", "-1%"), a = 2) : (t = 0, $(this).css("bottom", "1%"), $(this).css("transform", "rotate(0deg)"), $(".footer").css("bottom", "-12%"), a = 1)
    }), $(".slider").sss({
        slideShow: !0,
        startOn: 0,
        transition: 300,
        speed: 4e3,
        showNav: !0
    })
});
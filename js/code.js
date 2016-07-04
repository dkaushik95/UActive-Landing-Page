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
        	}
            1 != t ? (
            	$(".icons_left").show(), 
            	$("#section1").css("visibility", "hidden"), 
            	$("#sld_1").attr("src", "images/VideoPage/1.PNG"), 
            	$("#sld_2").attr("src", "images/VideoPage/2.PNG"), 
            	$("#sld_3").attr("src", "images/VideoPage/3.PNG"), 
            	$("#sld_4").attr("src", "images/VideoPage/4.PNG")) 
            : (
            	$(".icons_left").hide(), 
            	$("#section1").css("visibility", "visible")
    		)
    		, 
    		2 == t ? ($(".icons_left").fadeIn(500), $(".pins").css("animation", "poptop ease-in-out 1.5s"), $(".pins").css("animation-iteration-count", "1"), $("#sld_1").attr("src", "images/PickUpPage/1.png"), $("#sld_2").attr("src", "images/PickUpPage/2.png"), $("#sld_3").attr("src", "images/PickUpPage/3.png"), $("#sld_4").attr("src", "images/PickUpPage/4.png")) : 3 == t ? ($("#sld_1").attr("src", "images/BuddyUpPage/1.png"), $("#sld_2").attr("src", "images/BuddyUpPage/2.png"), $("#sld_3").attr("src", "images/BuddyUpPage/3.png"), $("#sld_4").attr("src", "images/BuddyUpPage/2.png")) : 4 == t ? ($("#medal").css("animation", "fadeDown ease-in-out 0.5s"), $("#medal").css("animation-iteration-count", "1"), $("#sld_1").attr("src", "images/RewardsPage/1.png"), $("#sld_2").attr("src", "images/RewardsPage/2.png"), $("#sld_3").attr("src", "images/RewardsPage/1.png"), $("#sld_4").attr("src", "images/RewardsPage/2.png")) : ($(".pins").css("animation", ""), $(".pins").css("animation-iteration-count", ""), $("#medal").css("animation", ""), $("#medal").css("animation-iteration-count", ""))
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
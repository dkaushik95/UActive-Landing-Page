$(document).ready(function(e) {
	var flag_footer=0;
	$('#fullpage').fullpage({
		verticalCentered:true,
		sectionsColor:['#000','#39445e', '#39445e', '#39445e'],
		navigation: true,
		navigationPosition: 'right',
		scrollBar: false,
		css3:true,
		fitToSection:false,
		scrollOverflow: false,
		scrollingSpeed:3000,
		slidesNavigation: false,
		autoScrolling:true,
		afterRender: function(){
			$('video').get(0).play();
		},
		onLeave: function(index, nextIndex, direction){
		  var vid = document.getElementById("myVideo");
		  if(index == 1 || direction =='down'){
				vid.pause();
				$('.icons_left').fadeIn();	
			}
			else if(index == 2 && direction == 'up'){
				vid.play();
				$('.icons_left').hide();
			}
		},
		afterLoad: function(anchor, index){
			if(index!=1){
				$('.icons_left').show();
				$('#section1').css('visibility','hidden');
				$('#sld_1').attr('src','images/VideoPage/1.PNG');
				$('#sld_2').attr('src','images/VideoPage/2.PNG');
				$('#sld_3').attr('src','images/VideoPage/3.PNG');
				$('#sld_4').attr('src','images/VideoPage/4.PNG');
			}
			else{
				$('.icons_left').hide();
				$('#section1').css('visibility','visible');
			}
			if(index==2){
				$('.icons_left').fadeIn(500);
				$('.pins').css('animation','poptop ease-in-out 3s');
				$('.pins').css('animation-iteration-count','1');
				$('#sld_1').attr('src','images/PickUpPage/1.png');
				$('#sld_2').attr('src','images/PickUpPage/2.png');
				$('#sld_3').attr('src','images/PickUpPage/3.png');
				$('#sld_4').attr('src','images/PickUpPage/4.png');
			}
			else if(index==3){
				$('#sld_1').attr('src','images/BuddyUpPage/1.png');
				$('#sld_2').attr('src','images/BuddyUpPage/2.png');
				$('#sld_3').attr('src','images/BuddyUpPage/3.png');
				$('#sld_4').attr('src','');
			}
			else if (index==4) {
				$('#medal').css('animation','fadeDown ease-in-out 0.5s');
				$('#medal').css('animation-iteration-count','1');
				$('#sld_1').attr('src','images/RewardsPage/1.png');
				$('#sld_2').attr('src','');
				$('#sld_3').attr('src','');
				$('#sld_4').attr('src','');
			}
			else{
				$('.pins').css('animation','');
				$('.pins').css('animation-iteration-count','');
				$('#medal').css('animation','');
				$('#medal').css('animation-iteration-count','');
			}
		}
	});

	$('#fp-nav').css('margin-top','0px');
	$('#fp-nav').css('width','19px');
	$('#fp-nav').css('height','19px');
	var x=1;
	$('#bottom_button').click(function() {
			if (x==1) {
				flag_footer=1;
				$(this).css('bottom','9%');
				$(this).css('transform','rotate(180deg)');
				$('.footer').css('bottom','-1%');
				x=2;
			}
			else{
				flag_footer=0;
				$(this).css('bottom','1%');
				$(this).css('transform','rotate(0deg)');
				$('.footer').css('bottom','-12%');
				x=1;
			}
	});
	$('.slider').sss({
		slideShow : true, // Set to false to prevent SSS from automatically animating.
		startOn : 0, // Slide to display first. Uses array notation (0 = first slide).
		transition : 400, // Length (in milliseconds) of the fade transition.
		speed : 3500, // Slideshow speed in milliseconds.
		showNav : false // Set to false to hide navigation arrows.
	});
});
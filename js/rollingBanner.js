$(function(){			
	var eleWidth = $(".vis_frame ul li").innerWidth();					
	var state = false;			
	var playOn = false;		
	var time = 3000;
	num = 0;
	var bannerAuto;	
	for(var i=0; i<$("#banner li").length;i++){
		$("#pos").append("<span></span>");
	}
	$("#pos span:eq(0)").addClass("on");
	function play(){
		if(!playOn){
			playOn = true;
//			bannerAuto = setInterval(function(){				
//				$(".right").click();								
//			},time);					
		}
	}			
	function stop(){
		if(playOn){
			playOn = false;
			clearInterval(bannerAuto);			
		}
	}	
	function left(){		
		stop();		
		num++;
		if(num > $(".vis_frame ul li").length-1){
			num = 0;
		}		
		$(".vis_frame > ul").animate({left:eleWidth*-1},300,"swing",function(){				
			$(this).children("li:first").insertAfter($(this).children("li:last"));
			$(this).css({left:0});
			$("#pos span").removeClass("on");
			$("#pos span").eq(num).addClass("on");
			state = false;
			play();				
		});			
	}			
	function right(){		
		stop();
		num--;
		if(num < 0){
			num = $(".vis_frame ul li").length-1;
		}	
		$(".vis_frame > ul > li:last").insertBefore($(".vis_frame > ul > li:first"));
		$(".vis_frame > ul").css({left:eleWidth*-1});
		$(".vis_frame > ul").animate({left:0},300,"swing",function(){
			$("#pos span").removeClass("on");
			$("#pos span").eq(num).addClass("on");
			state = false;
			play();				
		});					
	}			
	$(".left").click(function(){
		if(!state){					
			state = true;
			right();
		}			
	});			
	$(".right").click(function(){
		if(!state){					
			state = true;
			left();
		}				
	});			
	$(".stop").click(function(){		
		stop();				
	});			
	$(".play").click(function(){
		play();				
	});			
	$(".play").click();
});
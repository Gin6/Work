var main = document.getElementById('main');
main.style.height = $(window).height()-72+"px";
$(document).ready(function (){
	$('.main_content').mouseover(function (){
		$('.main_right_bottom').css({"height": "10%",});
		$('.main_right_top').css({"height": "55%",});
		$('.drop_r').css({"z-index": "-1",});
	});
	$('.main_content').mouseout(function (){
		$('.main_right_bottom').css({"height": "70%",});
		$('.main_right_top').css({"height": "0%",});
		$('.drop_r').css({"z-index": "0",});
	});
});
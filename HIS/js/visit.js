var main = document.getElementById('main');
main.style.height = $(window).height()-72+"px";
$(document).ready(function (){
	$('.td_it').click(function (){
		$('.tr_1').css({"display": "table-row",});
	});
	$('.td_if').click(function (){
		$('.tr_1').css({"display": "none",});
	});
	$('.pre').click(function (){
		$('.main_bar').css({"-webkit-transform": "rotateY(180deg)",});
		$('.main_bar').animate({left: '3%',}, ".5s");
		$('.prescriptions').css({"z-index": "1", "-webkit-transform": "rotateY(180deg)","box-shadow": "rgb(120, 120, 120) 0px 0px 3px"});
		$('.prescriptions').animate({left: '3%',}, ".5s");
	});
	$('.fa-arrow-lef').click(function (){
		$('.prescriptions').css({"left": "120%",});
	});
});
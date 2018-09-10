var main = document.getElementById('main');
main.style.height = $(window).height()-72+"px";
$(document).ready(function (){
	$('.wardnum').attr({"readonly": "readonly",});
	$('.wardgen').attr({"disabled": "disabled",});
	$('.bsp').attr({"readonly": "readonly",});
	$('.plus').click(function (){
		$('.plus').css({"z-index": "-1",});
		$('.fa-plus-square-o').css({"font-size": "0em", "top": "0%", "right": "0%", "width": "0%", "height": "0%", "color": "#0000", "transition": ".3s",});
		$('.return_p').animate({width: '60px', height: '60px',}, ".1s");
		$('.return_p').animate({width: '40px', height: '40px',}, ".2s");
		$('.ngps').animate({width: '100%',}, ".1s");
		$('.np').animate({width: '70%', margin: '8% 10%', padding: '5%',}, ".2s");
		$('.gs').animate({width: '80%', margin: '8% 10%', padding: '5%',}, ".2s");
	});
	$('.return_p').click(function (){
		$('.plus').css({"z-index": "1",});
		$('.fa-plus-square-o').css({"font-size": "6em", "top": "42%", "right": "0%", "width": "100%", "height": "13%", "color": "rgb(74, 74, 74)", "transition-delay": ".7s",});
		$('.return_p').animate({width: '60px', height: '60px',}, ".1s");
		$('.return_p').animate({width: '0px', height: '0px',}, ".2s");
		$('.ngps').animate({width: '100%', margin: '8% 0%', padding: '5% 0%',}, ".1s");
		$('.ngps').animate({width: '0%',}, ".2s");
	});
	$('.idle').mouseover(function (){
		$('.idle').css({"height": "16%",});
		$('.bedmod').css({"height": "25px",});
		$('.bedsave').css({"height": "25px",});
		$('.fa-angle-down').css({"display": "block",});
	});
	$('.idle').mouseleave(function (){
		$('.bsp').attr({"readonly": "readonly",});
		$('.idle').css({"height": "8%",});
		$('.bedmod').css({"height": "0px",});
		$('.bedsave').css({"width": "0%", "left": "50%", "height": "0%",});
		$('.bsp').css({"color": "#fff", "background-color": "#8ac3b3",});
		$('.bed_1').css({"background-color": "#8ac3b3",});
		$('.fa-angle-down').css({"display": "none","color": "#000",});
		$('.idle').css({"margin-bottom": "3%",});
		$('.delete').css({"height": "0px",});
		$('.beddel').css({"height": "0px",});
	});
	$('.occupy').mouseover(function (){
		$('.occupy').css({"height": "16%",});
	});
	$('.occupy').mouseout(function (){
		$('.occupy').css({"height": "8%",});
	});
	$('.bedmod').click(function (){
		$('.bsp').removeAttr('readonly');
		$('.bedsave').css({"width": "90%", "left": "5%",});
		$('.bsp').css({"color": "rgb(120, 120, 120)", "background-color": "#fff",});
		$('.bed_1').css({"background-color": "#fff",});
	});
	$('.ng').dblclick(function (){
		$('.wardnum').removeAttr('readonly');
		$('.wardgen').removeAttr('disabled');
		$('.wardcancel').removeAttr('disabled');
		$('.ng').css({"background-color": "#fff",});
		$('.wardgen').css({"-webkit-appearance": "menulist",});
		$('.cs').css({"width": "15%",});
	});
	$('.wardcancel').mouseover(function (){
		$('.wardcancel').css({"width": "20%",});
	});
	$('.wardcancel').mouseout(function (){
		$('.wardcancel').css({"width": "15%",});
	});
	$('.wardsave').mouseover(function (){
		$('.wardsave').css({"width": "20%",});
	});
	$('.wardsave').mouseout(function (){
		$('.wardsave').css({"width": "15%",});
	});
	$('.wardcancel').click(function (){
		$('.wardnum').attr({"readonly": "readonly",});
		$('.wardgen').attr({"disabled": "disabled",});
		$('.ng').css({"background-color": "#fff0",});
		$('.wardgen').css({"-webkit-appearance": "none",});
		$('.cs').css({"width": "0%",});
		$('.wardcancel').attr({"disabled": "disabled",});
	})
	$('.fa-angle-down').click(function (){
		$('.idle').css({"margin-bottom": "12%",});
		$('.fa-angle-down').css({"color": "#fff0",});
		$('.delete').css({"height": "33px",});
		$('.beddel').css({"height": "25px",});
	});
});
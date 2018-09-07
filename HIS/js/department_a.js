var main = document.getElementById('main');
var del = document.getElementById('del');
main.style.height = $(window).height()-72+"px";
$(document).ready(function (){
	$('.plus').click(function (){
		$('.plus').css({"z-index": "0",});
		$('.fa-plus-square-o').css({"font-size": "0em", "top": "0%", "right": "0%", "width": "0%", "height": "0%", "color": "#0000", "transition": ".3s",});
		$('.return_p').animate({width: '60px', height: '60px',}, ".1s");
		$('.return_p').animate({width: '40px', height: '40px',}, ".2s");
		$('.name_2').animate({width: '60%', padding: '3% 4%',}, ".1s");
		$('.name_2').animate({width: '50%',}, ".2s");
		$('.plusresume').animate({height: '53%', padding: '5px 0px',}, ".1s");
		$('.save').css({"height": "10%", "border-radius": "0%", "width": "90%", "left": "5%", "bottom": "5%",});
	});
	$('.return_p').click(function (){
		$('.plus').css({"z-index": "1",});
		$('.fa-plus-square-o').css({"font-size": "8em", "top": "31%", "right": "0%", "width": "100%", "height": "38%", "color": "rgb(74, 74, 74)", "transition-delay": ".7s",});
		$('.return_p').animate({width: '60px', height: '60px',}, ".1s");
		$('.return_p').animate({width: '0px', height: '0px',}, ".2s");
		$('.name_2').animate({width: '60%',}, ".1s");
		$('.name_2').animate({width: '0%', padding: '3% 0%',}, ".2s");
		$('.plusresume').animate({height: '0%', padding: '0px 0px',}, ".1s");
		$('.save').css({"height": "0%", "border-radius": "50%", "width": "0%", "left": "50%", "bottom": "10%",});
	});
	$('.md').mouseover(function (){
		$('.md').css({"width": "100%", "height": "100%",});
		$('.modif').css({"top": "28%", "right": "65%", "width": "60px", "height": "60px",});
		$('.return').css({"top": "28%", "right": "65%", "width": "60px", "height": "60px",});
		$('.delete').css({"top": "60%", "right": "35%", "width": "60px", "height": "60px",});
		$('.submit').css({"top": "23%", "right": "28%", "width": "60px", "height": "60px",});
		$('.view').css({"top": "23%", "right": "28%", "width": "60px", "height": "60px", "color": "#fff",});
		$('.view').html("查看");
	});
	$('.submit').mouseover(function (){
		$('.md').css({"width": "100%", "height": "100%",});
		$('.return').css({"top": "28%", "right": "65%", "width": "60px", "height": "60px",});
		$('.modif').css({"top": "28%", "right": "65%", "width": "60px", "height": "60px",});
		$('.delete').css({"top": "60%", "right": "35%", "width": "60px", "height": "60px",});
		$('.submit').css({"top": "23%", "right": "28%", "width": "60px", "height": "60px",});
		$('.view').css({"top": "23%", "right": "28%", "width": "60px", "height": "60px", "color": "#fff",});
		$('.view').html("");
	});
	$('.view').mouseover(function (){
		$('.md').css({"width": "100%", "height": "100%",});
		$('.return').css({"top": "28%", "right": "65%", "width": "60px", "height": "60px",});
		$('.modif').css({"top": "28%", "right": "65%", "width": "60px", "height": "60px",});
		$('.delete').css({"top": "60%", "right": "35%", "width": "60px", "height": "60px",});
		$('.submit').css({"top": "23%", "right": "28%", "width": "60px", "height": "60px",});
		$('.view').css({"top": "23%", "right": "28%", "width": "60px", "height": "60px", "color": "#fff",});
		$('.view').html("查看");
	});
	$('.md').mouseout(function (){
		$('.md').css({"width": "10%", "height": "10%",});
		$('.view').html("");
		$('.mds').css({"top": "0%", "right": "0%", "width": "0px", "height": "0px",});
		$('.view').css({"top": "0%", "right": "0%", "width": "0px", "height": "0px", "color": "#fff0",});
	});
	$('.modif').click(function (){
		$('.nt').removeAttr('readonly');
		$('.md').css({"width": "10%", "height": "10%",});
		$('.mds').css({"top": "0%", "right": "0%", "width": "0px", "height": "0px",});
		$('.view').css({"top": "0%", "right": "0%", "width": "0px", "height": "0px", "color": "#fff0",});
		$('.submit').css({"z-index": "2"});
		$('.return').css({"z-index": "2"});
		$('.modif').css({"z-index": "-1"});
		$('.view').html("");
	});
	$('.return').click(function (){
		$('.return').css({"z-index": "-1"});
		$('.modif').css({"z-index": "2"});
		$('.submit').css({"z-index": "-1"});
		$('.view').html("");
		$('.nt').attr({"readonly": "readonly",});
		$('.md').css({"width": "10%", "height": "10%",});
		$('.mds').css({"top": "0%", "right": "0%", "width": "0px", "height": "0px",});
		$('.view').css({"top": "0%", "right": "0%", "width": "0px", "height": "0px", "color": "#fff0",});
	});
	$('.delete').click(function (){
		$('.submit').css({"z-index": "-1"});
		$('.nt').attr({"readonly": "readonly",});
		$('.md').css({"width": "10%", "height": "10%",});
		$('.mds').css({"top": "0%", "right": "0%", "width": "0px", "height": "0px",});
		$('.delete_a').css({"top": "40%", "right": "40%", "width": "60px", "height": "60px",});
		$('.delete_a').html("确定");
		$('#module').css({"background-color": "#a7a3a3",});
		$('.textarea').css({"background-color": "#a7a3a3",});
		$('.return').css({"z-index": "2"});
		$('.view').html("");
		$('.view').css({"top": "0%", "right": "0%", "width": "0px", "height": "0px", "color": "#fff0",});
		$('.return').click(function (){
			$('.delete_a').css({"top": "0%", "right": "0%", "width": "0px", "height": "0px",});
			$('.delete_a').html("");
			$('#module').css({"background-color": "#f5f5f5",});
			$('.textarea').css({"background-color": "#fff",});
		});
	});
});
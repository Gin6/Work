var main = document.getElementById('main');
main.style.height = $(window).height()-72+"px";
$('.module').css('height',($(window).height()-72)*.255+"px");
$(document).ready(function (){
	$('#module_bar').mousedown(function (){
		timeout = setTimeout(function() {
			$('#module').css({"background-color": "#f5c4c4", "user-select": "none",});
			$('.md').css({"z-index": "1",});
		}, 100);
	});
	$('#module_bar').mouseup(function (){
		clearTimeout(timeout);
		$('#module').css({"background-color": "#f5f5f5",});
		$('.md').css({"z-index": "-1",});
	});
	$('#module_bar').mouseout(function (){
		$('#module').css({"background-color": "#f5f5f5",});
		$('.md').css({"z-index": "-1",});
	});
});
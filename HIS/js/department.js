var main = document.getElementById('main');
main.style.height = $(window).height()-72+"px";
$('.module').css('height',($(window).height()-72)*.255+"px");
$(document).ready(function (){
	$('.modif').mousedown(function (){
		timeout = setTimeout(function() {
			$('.modif').css({"background-color": "rgba(0, 0, 0, 0.05)",});
		}, 100);
	});
	$('.delete').mousedown(function (){
		timeout = setTimeout(function() {
			$('.delete').css({"background-color": "rgba(0, 0, 0, 0.05)",});
			setTimeout(function() {
				$('.delete_a')[0].click();
			}, 2000);
		}, 100);
	});
	$('.md').mouseup(function (){
		clearTimeout(timeout);
		$('.md').css({"background-color": "rgba(0, 0, 0, 0)",});	});
	$('.md').mouseout(function (){
		$('.md').css({"background-color": "rgba(0, 0, 0, 0)",});
	});
});
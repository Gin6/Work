function $(id) {
	return document.getElementById(id);
}
function mov() {
	$('submit').style.cssText = "background-color: rgb(208, 71, 61);";
}
function mou() {
	$('submit').style.cssText = "background-color: rgb(230, 89, 78);";
}
(function (){
	var y = null;
	function time(){
	 dt = new Date();
	 var y=dt.getFullYear();
	 var m=dt.getMonth()+1;
	 var d=dt.getDate();
	 var h=dt.getHours();
	 var mm=dt.getMinutes();
	 var s=dt.getSeconds();
	 if(m < 10 && d < 10) {
	 	$("timeShow").innerHTML="0"+m+" - "+"0"+d+" - "+y;
	 }
	 else if(m < 10 && d >= 10) {
	 	$("timeShow").innerHTML="0"+m+" - "+d+" - "+y;
	 }
	 else if(m >= 10 && d < 10) {
	 	$("timeShow").innerHTML=m+" - "+"0"+d+" - "+y;
	 }
	 else {
	 	$("timeShow").innerHTML=m+" - "+d+" - "+y;
	 }
	 if(h < 10 && mm < 10 && s < 10) {
	 	$("timeShow_1").innerHTML="0"+h+" : "+"0"+mm+" : "+"0"+s;
	 }
	 else if(h < 10 && mm < 10 && s >= 10) {
	 	$("timeShow_1").innerHTML="0"+h+" : "+"0"+mm+" : "+s;
	 }
	 else if(h < 10 && mm >= 10 && s < 10) {
	 	$("timeShow_1").innerHTML="0"+h+" : "+mm+" : "+"0"+s;
	 }
	 else if(h >= 10 && mm < 10 && s < 10) {
	 	$("timeShow_1").innerHTML=h+" : "+"0"+mm+" : "+"0"+s;
	 }
	 else if(h < 10 && mm >= 10 && s >= 10) {
	 	$("timeShow_1").innerHTML="0"+h+" : "+mm+" : "+s;
	 }
	 else if(h >= 10 && mm < 10 && s >= 10) {
	 	$("timeShow_1").innerHTML=h+" : "+"0"+mm+" : "+s;
	 }
	 else if(h >= 10 && mm >= 10 && s < 10) {
	 	$("timeShow_1").innerHTML=h+" : "+mm+" : "+"0"+s;
	 }
	 else {
	 	$("timeShow_1").innerHTML=h+" : "+mm+" : "+s;
	 }
	 $("timeShow_1").style.cssText = "right: 30%;";
	 y = setTimeout(time,1000);    
	} 
	window.onload=function(){time()}
})();
	function check() {
		var username = $("username").value;
		var userpwd = $("userpwd").value; 
		if (username.length < 1 && userpwd.length < 1) {
			$("hint_1").innerHTML="用户名不能为空";
			$("hint_2").innerHTML="密码不能为空";
			$("hint_1").style.cssText = "display: inline;";
			$("hint_2").style.cssText = "display: inline;";
			return false;
		}
		else if (username.length < 1 && userpwd.length >= 1) {
			$("hint_1").innerHTML="用户名不能为空";
			$("hint_1").style.cssText = "display: inline;";
			return false;
		}
		else if (username.length >= 1 && userpwd.length < 1) {
			$("hint_2").innerHTML="密码不能为空";
			$("hint_2").style.cssText = "display: inline;";
			return false;
		}
		else
			return true;
	}
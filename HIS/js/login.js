function $(id) {
	return document.getElementById(id);
}
function $A(ca) {
	return document.getElementsByTagName(ca);
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
	 $("timeShow_1").style.cssText = "right: 200px;";
	 y = setTimeout(time,1000);    
	} 
	window.onload=function(){time()}
})();
function check() {
	var username = $("username").value;
	var userpwd = $("userpwd").value;
	if (username.length < 1 || userpwd.length < 1) {
		$("loginbar").style.cssText = "background: rgba(230, 89, 78, 0.80);";
		$("si").style.cssText = "color: rgb(255, 255, 255);";
		$("submit").style.cssText = "background-color: rgba(0, 0, 0, 0.22);";
		$("submit").disabled = true;
	}
	if (username.length < 1 && userpwd.length < 1) {
		$("username").placeholder = "用户名不能为空";
		$("userpwd").placeholder = "密码不能为空";
		return false;
	}
	else if (username.length < 1 && userpwd.length >= 1) {
		$("username").placeholder = "用户名不能为空";
		return false;
	}
	else if (username.length >= 1 && userpwd.length < 1) {
		$("userpwd").placeholder = "密码不能为空";
		return false;
	}
	else
		return true;
}
function ENLanguage() {
	$A("title")[0].innerText = "Sign in";
	$("his").innerHTML = "Hospital Information System";
	$("his").style.cssText = "letter-spacing: initial; right: 0px;";
	$("si").innerHTML = "Sign in";
	$("username").placeholder = "User ID";
	$("userpwd").placeholder = "Password";
	$("submit").value = "Sign In";
}
function ZHLanguage() {
	$A("title")[0].innerText = "登录";
	$("his").innerHTML = "医院信息管理系统";
	$("his").style.cssText = "letter-spacing: 10px; right: -10px; position: relative;";
	$("si").innerHTML = "登录";
	$("username").placeholder = "用户名";
	$("userpwd").placeholder = "密码";
	$("submit").value = "登录";
}
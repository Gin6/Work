function $(id) {
	return document.getElementById(id);
}
function $A(cm) {
	return document.getElementsByClassName(cm);
}
function check() {
	var username = $("username").value;
	var userpwd = $("userpwd").value;
	if ((username.length<3 && userpwd.length<6) || (username.length<3 && userpwd.length>16)) {
		if (username.length<3 && userpwd.length<6) {
			$("hint_2").innerHTML="密码不能小于6个字符";
			$("hint_1").style.display="inline";
			$("hint_2").style.display="inline";
			return false;
		}
		else {
			$("hint_2").innerHTML="密码不能大于16个字符";
			$("hint_1").style.display="inline";
			$("hint_2").style.display="inline";
			return false;
		}
	}
	if (username.length<3) {
		$("hint_1").style.display="inline";
		return false;
	}
	if (userpwd.length<6 || userpwd.length>16) {
		if (userpwd.length<6) {
			$("hint_2").innerHTML="密码不能小于6个字符";
			$("hint_2").style.display="inline";
			return false;
		}
		else
			$("hint_2").innerHTML="密码不能大于16个字符";
			$("hint_2").style.display="inline";
			return false;		
	}
	else
		return true;
}
(function() {
	var checkbox= $("checkbox");
	checkbox.onclick = function() {
		if (checkbox.checked==true) {
			$("sbutton").disabled=false;
			$("sbutton").style.cssText="background:#00b5e5; color:#fff;";
		}		
		else {
			$("sbutton").disabled=true;
			$("sbutton").style.cssText="background:#f9f9f9;";
		}		
	}
})();
(function() {
	var phone = $A("phone")[0];
	var hint_3 = $A("hint_3")[0];
	phone.onkeyup = function () {
		var val = this.value;
		var len = val.length;
		var phreg = /^1[358]\d{9}$/;
		if (len == 11) {
			if (!phreg.test(val))
				hint_3.style.display="block";
			else
				hint_3.style.display="none";
		}
		else if (len > 11)
			hint_3.style.display="block";
		else			
			hint_3.style.display="none";	
	}
})();
(function(){
	var ele_pass = $A("userpwd")[0];
	var a = $A("a")[0];
	var bc0001 = $A("bc0001")[0];
	var bc0002 = $A("bc0002")[0];
	var bc0003 = $A("bc0003")[0];
	var bc0004 = $A("bc0004")[0];
	var bc0005 = $A("bc0005")[0];
	var regxs = [];
	regxs.push(/[^a-zA-Z0-9_-]/g);
	regxs.push(/[a-z]/g);
	regxs.push(/[A-Z]/g);
	regxs.push(/[0-9]/g);
	ele_pass.onkeyup = function () {
		var val = this.value;
		var len = val.length;
		var sec = 0;
		if (len>=6) {
			for (var i = 0; i < regxs.length; i++) {
	    		if (val.match(regxs[i])) {
	        		sec++;
	      		}
	    	}
		}
		var result = (sec / regxs.length) * 100;
		if(result > 0 && result <= 40){
			a.innerHTML="中";
			a.style.color="#ff7f00";
			bc0002.style.display="block";
			bc0003.style.display="none";
			bc0004.style.display="none";
			bc0005.style.display="none";
		}
		else if (result > 40 && result < 60) {
			a.innerHTML="中";
			a.style.color="#f0f028";
			bc0002.style.display="block";
			bc0003.style.display="block";
			bc0004.style.display="none";
			bc0005.style.display="none";
		}
		else if (result > 60 && result < 100) {
			a.innerHTML="高";
			a.style.color="#7ade18";
			bc0002.style.display="block";
			bc0003.style.display="block";
			bc0004.style.display="block";
			bc0005.style.display="none";
		}
		else if (result == 100) {
			a.innerHTML="高";
			a.style.color="#49c519";
			bc0002.style.display="block";
			bc0003.style.display="block";
			bc0004.style.display="block";
			bc0005.style.display="block";
		}
		else {
			a.innerHTML="弱";
			a.style.color="#bc0001";
			bc0002.style.display="none";
			bc0003.style.display="none";
			bc0004.style.display="none";
			bc0005.style.display="none";
		}
	}
})();
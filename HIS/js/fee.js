function $B(id) {
	return document.getElementById(id);
}
function mov_1() {
	$B('auther_head').style.cssText = "width: 29px;top: 10px;right: 95px;";
	$B('username_1').style.cssText = "right: 30px; z-index: 2;";
}
function mou_1() {
	$B('auther_head').style.cssText = "width: 40px;top: 5px;right: 55px;";
	$B('username_1').style.cssText = "right: 75px; z-index: -1;";
}
function pay() {
	$B('paybox').style.cssText = "top: 0%;";
}
function pay_back() {
	$B('paybox').style.cssText = "top: 100%; transition: .3s;";
}
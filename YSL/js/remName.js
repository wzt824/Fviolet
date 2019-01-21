 
function getCookie(name){
	var strCookie = document.cookie;  //读取cookie
    var arrCookie = strCookie.split("; ");  
	for(var i=0; i<arrCookie.length;i++){
		var arr = arrCookie[i].split("=");
		if(arr[0] == name){
			return arr[1];
		}
	}
	return "";
}

var islogin = getCookie("username");

if(islogin!=""){
	$(".login-txt").hide();
	$(".is-logged").show();
//	$(".sucName").html(欢迎您 +)
}else{
	$(".is-logged").show();
    $(".login-txt").hide();
}










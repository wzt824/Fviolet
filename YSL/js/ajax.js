//参数：
//请求方式：
//请求地址：
//请求参数：
//是否异步：
//回调函数：后端相应回来后，前端应该完成的功能

//返回值：无

function ajax(method,url,param,isAsync,func){
	//1.创建对象
	let xhr = new XMLHttpRequest();
	//2.设置请求参数
	if(method.toLowerCase()=="get"){
		xhr.open(method,url+"?"+param,isAsync);
	}else if(method.toLowerCase()=="post"){
		xhr.open(method,url,isAsync);
	}
	
	//3.设置回调函数
	xhr.onreadystatechange = function(){
		if(xhr.readyState ==4 && xhr.status == 200){
			func&&func(xhr.responseText);
		}
	}

	if(method.toLowerCase()=="get"){
		//4.发送请求
		xhr.send();
	}else if(method.toLowerCase()=="post"){
		//4.发送请求
		xhr.setRequestHeader("Content-type","application-x-www-form-urlencoded");
		xhr.send(param);
	}

}

//function ajax(method,url,param,isAsync,func){
//	let xh = new XMLHttpRequest();
//	if(method.toLowerCase()=="get"){
//		xhr.open(method,url+"?"+param,isAsync)
//	}else{
//		xhr.open(method,param,isAsync)
//	}
//	xhr.onreadystatechange = function(){
//		if(xhr.readyState==4&&xhr.status==200){
//			func&&func(xhr.responseText);
//		}
//	}
//	if(method.toLowerCase()=="get"){
//		xhr.send();
//	}else{
//		xhr.setRequestHeader("Content-type","application-x-www-form-urloncoded");
//	}
//}



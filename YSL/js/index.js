



/****************          轮播图                **********************/
//boxDomObj,width,height,imgs,doudouSize,doudouColor,doudouHighColor,isCircle,direction,timeSpace

let s1 = new Slider(
	$("#box1")[0],
	"100%",
	400,
	["img/ban01.jpg","img/ban02.jpg","img/ban03.jpg","img/ban04.jpg"],
	8,
	"#919191",
	"#000",
	true,
	-1,
	2000);





/****************明星产品左右按钮goods-btn-left******************/

$(".goods-btn-left").click(function(){
	$(".goods-block").animate({
		right:"770px"
	})
	$(".goods-none").animate({
		right:"-20px"
	})
})	
$(".goods-btn-right").click(function(){
	$(".goods-block").animate({
		right:"-20px"
	})
	$(".goods-none").animate({
		right:"-770px"
	})
})

/*********************明星产品tab选项卡切换**********************/
$(function(){
	$(".favorites-aside-nav li").click(function(){
		var index = $(this).index();//获得当前点击标题的下标
		$(this).addClass("is-active-one").siblings().removeClass("is-active-one");//给当前选项添加选中，其他移除选中
		$(".favorites-aside-content .goods-tab").eq(index).show().siblings().hide();//对应下标的内容框显示，其他隐藏
	})
})

/*************移入显示购买及详情***************/

//$(function(){
//	$(".swiper-slide .img-box").mouseover(function(){
//		let n = $(this).index();
//		$(this).css({opacity:0.5});
//		$(".img-box .btn-box").eq(n).show();
//	})
//	$(".img-box").mouseout(function(){
//		let n = $(this).index();
//		$(this).css({opacity:1});
//		$(".swiper-slide .img-box .btn-box").eq(n).hide();
//	})
//})

$(function(){
	$(".img-box").mouseover(function(){
		$(this).find("img").css({opacity:0.5});
		$(this).find(".btn-box").show();
	})
	$(".img-box").mouseout(function(){
		$(this).find("img").css({opacity:1});
		$(this).find(".btn-box").hide();
	})
	$(".btn-icon").mouseover(function(){
		$(this).css({"background-color":"white","color":"black"});
		$(this).find(".icon-btn-shopping").css({"background-position":"-17px -337px"});
	})
	$(".btn-icon").mouseout(function(){
		$(this).css({"background-color":"black","color":"white"});
		$(this).find(".icon-btn-shopping").css({"background-position":"0 -337px"});
	})
	$(".btn-see").mouseover(function(){
		$(this).css({"background-color":"black","color":"white"});
	})
	$(".btn-see").mouseout(function(){
		$(this).css({"background-color":"white","color":"black"});
	})
})


//	
//  $(".img-box").onmouseenter = function () {
//      $(".btn-box").style.display = "block";
//  }
//  $(".img-box").onmouseout = function () {
//      $(".btn-box").style.display = "none";
//  }


    


//$(function(){
//	$(".goods-color-btn-right").click(function(){
//		$(".goods-color-ul").animate({left:"-=30px"});
//		$(".goods-color-btn-left").show();
//	})
//	$(".goods-color-btn-left").click(function(){
//		$(".goods-color-ul").animate({left:"+=30px"});
//	})
//})

//$(".goods-color-btn-right").each(function(){
//	$(this).click(function(){
//		let rightul = $(this).siblings(".goods-color-container").children(".goods-color-ul");
//		rightul.animate({left:"-=30px"});
//		var ulLeft = rightul.position().left;
//		var boxWidth = $(".goods-color-container").width();
//		var ulWidth = $(".goods-color-ul").width();
//		var value = boxWidth-ulLeft;
//		console.log(value)
//		if(ulLeft == value){
//			$(this).siblings(".goods-color-btn-left").hide();
//		}
//		$(this).siblings(".goods-color-btn-left").show();
//	})
//})

/******************点击口红变色goods-color********************/
$(".goods-color-btn-right").each(function(){
	$(this).click(function(){
		$(this).siblings(".goods-color-container").children(".goods-color-ul").animate({left:"-=30px"});
		$(this).siblings(".goods-color-btn-left").show();
	})
})

$(".goods-color-btn-left").each(function(){
	$(this).click(function(){
		$(this).siblings(".goods-color-container").children(".goods-color-ul").animate({left:"+=30px"});
	})
})

//$(function(){
//	$(".goods-color-btn-right").click(function(){
//		$(this).prev().animate({left:"-=30px"});
//		$(this).prevUntil(".goods-color-container").children(".goods-color-ul").show();
//	})
//	$(".goods-color-btn-left").click(function(){
//		$(".goods-color-ul").animate({left:"+=30px"});
//	})
//})


/*****************保存用户名*********************/

$(document).ready(function(){
//	if($.cookie("username")==true){
//		$(".success").hide();
//		$(".true-success").show();
//		$(".sucName").html("欢迎您"+username);
//	}else{
//		$(".success").show();
//		$(".true-success").hide();
//	}
	var sucname = getCookie("username");
//	alert(bb)
	if(sucname!=""){
		$(".success").hide();
		$(".true-success").show();
		$(".sucName").html("欢迎您："+sucname);
	}else{
		$(".success").show();
		$(".true-success").hide();
	}
	$(".log-back").click(function(){
		delCookie("username");
		$(".success").show();
		$(".true-success").hide();
	})
})
//读取cookie
function getCookie(name){
	var strCookie = document.cookie;
	var arrCookie = strCookie.split("; ");
	for (var i = 0; i < arrCookie.length; i++) {
		var arr = arrCookie[i].split("=");
		if (arr[0] == name)
			return arr[1];
	}
	return "";
}
//删除cookie
function delCookie(name){
	var exp = new Date(); 
    exp.setTime(exp.getTime() - 1); 
    var cval=getCookie(name); 
    if(cval!=null) 
        document.cookie= name + "="+cval+";expires="+exp.toGMTString(); 
}



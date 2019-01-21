/**************滑过顶部显示登录注册*****************/

	$(".center-left li").mouseover(function(){
		let index = $(this).index();
		$(".center-left .header-sub-menu").eq(index).show();
	})
	$(".center-left li").mouseout(function(){
		let index = $(this).index();
		$(".center-left .header-sub-menu").eq(index).hide();
	})
	$(".center-right li").mouseover(function(){
		let index = $(this).index();
		$(".center-right .header-sub-menu").eq(index).show();
	})
	$(".center-right li").mouseout(function(){
		let index = $(this).index();
		$(".center-right .header-sub-menu").eq(index).hide();
	})
	



/*************             二级菜单             ******************/

//	$(".nav-left ul li a").mouseover(function(){
//		$(this).css({color: "#cb9864"});
//	})
//	
//	$(".nav-left ul li a").mouseout(function(){
//		$(this).css({color: "#000"});
//	})
////	彩妆
//	$(".caizhuang").mouseover(function(){
//		$(".sub-menu-caizhuang").show();
//		$(".look-one").show();
//	});
//	$(".caizhuang").mouseout(function(){
//		$(".sub-menu-caizhuang").hide();
//		$(".look-one").hide();
//	});
//	$(".sub-menu-caizhuang").mouseover(function(){
//		$(".sub-menu-caizhuang").show();
//		$(".look-one").show();
//		$(".caizhuang a").css({color: "#cb9864"});
//	});
//	$(".sub-menu-caizhuang").mouseout(function(){
//		$(".sub-menu-caizhuang").hide();
//		$(".look-one").hide();
//		$(".caizhuang a").css({color: "#000"});
//	})
////	护肤
//	$(".hufu").mouseover(function(){
//		$(".sub-menu-hufu").show();
//		$(".look-two").show();
//	});
//	$(".hufu").mouseout(function(){
//		$(".sub-menu-hufu").hide();
//		$(".look-two").hide();
//	});
//	$(".sub-menu-hufu").mouseover(function(){
//		$(this).show();
//		$(".look-two").show();
//		$(".hufu a").css({color: "#cb9864"});
//	})
//	$(".sub-menu-hufu").mouseout(function(){
//		$(this).hide();
//		$(".look-two").hide();
//		$(".hufu a").css({color: "#000"});
//	})
////	香水
//	$(".xiangshui").mouseover(function(){
//		$(".sub-menu-xiangshui").show();
//		$(".look-three").show();
//	});
//	$(".xiangshui").mouseout(function(){
//		$(".sub-menu-xiangshui").hide();
//		$(".look-three").hide();
//	});
//	$(".sub-menu-xiangshui").mouseover(function(){
//		$(".sub-menu-xiangshui").show();
//		$(".look-three").show();
//		$(".xiangshui a").css({color: "#cb9864"});
//	});
//	$(".sub-menu-xiangshui").mouseout(function(){
//		$(".sub-menu-xiangshui").hide();
//		$(".look-three").hide();
//		$(".xiangshui a").css({color: "#000"});
//	})

$(function(){
	$(".nav-left li").mouseover(function(){
		let index = $(this).index();
		$(".nav-left li a:first-child").eq(index).css({color: "#cb9864"});
		$(".nav .sub-menu-2").eq(index).show();
	})
	$(".nav-left li").mouseout(function(){
		let index = $(this).index();
		$(".nav-left li a:first-child").eq(index).css({color: "#000"});
		$(".nav .sub-menu-2").eq(index).hide();
	})
	$(".nav .sub-menu-2").mouseover(function(){
		$(this).show();
		let index = $(this).index();
		$(".nav-left li a:first-child").eq(index-1).css({color: "#cb9864"});
		
	})
	$(".nav .sub-menu-2").mouseout(function(){
		$(this).hide();
		let index = $(this).index();
		$(".nav-left li a:first-child").eq(index-1).css({color: "#000"});
	})
})



/***********            返回顶部                  ****************/

/*当滚动条的垂直位置大于500时，回到顶部按钮就显示 */
/*
$(window).on("scroll",function(){
	if($(window).scrollTop()>660){
		$(".back-box").fadeIn();
	}else{
		$(".back-box").fadeOut();
	}
});
*/
/*
function backToTop(){
	$("html.body").animate({
		scrollTop:0
	},600);
}
$(".back-top").on("click",backToTop);
*/
$(window).scroll(function(){
	if($(window).scrollTop()>660){   //当滚动条的垂直位置大于500时，回到顶部按钮就显示
		$(".back-box").fadeIn();
	}else{
		$(".back-box").fadeOut();
	}
	if($(window).scrollTop()>160){    //当滚动条的垂直位置大于160时，导航栏固定
		$(".header-bottom").css({
			"position":"fixed",
			"left":0,
			"top":0
		})
	}else{
		$(".header-bottom").css({
			"position":"static"
		})
	}
});

$(".back-top").click(function(){
	$("html.body").animate({
		scrollTop:0
	},600);
});

//触发滚动事件，避免刷新的时候显示回到顶部按钮
$(window).trigger("scroll");


$(".icon-close").click(function(){
	$(this).parents(".header-close").hide();
})

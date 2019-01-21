

/***********返回顶部****************/

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
	if($(window).scrollTop()>660){
		$(".back-box").fadeIn();
	}else{
		$(".back-box").fadeOut();
	}
});

$(".back-top").click(function(){
	$("html.body").animate({
		scrollTop:0
	},600);
});

//触发滚动事件，避免刷新的时候显示回到顶部按钮
$(window).trigger("scroll");
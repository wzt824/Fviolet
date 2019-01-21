
//项目中有哪些类：轮播图
function Slider(
				boxDomObj,width,height,imgs,
				doudouSize,doudouColor,doudouHighColor,
				isCircle,direction,timeSpace){
	this.boxDomObj = boxDomObj;//轮播图的容器
	this.imgDoms = [];//存储所有的img标签,DOM对象
	this.liDoms = [];//存储所有的li标签,DOM对象
	this.pointDivDoms = []; //存储所有的按钮
	this.iDoms = [];  //按钮图标
	this.width = width;
	this.height = height;
	this.imgs = imgs;//图片数组
	this.doudouSize = doudouSize;
	this.doudouColor = doudouColor;
	this.doudouHighColor = doudouHighColor;//高亮颜色
	this.isCircle = isCircle;
	this.direction = direction;//左还是右
	this.timeSpace = timeSpace;//每张图片直接的间隔,大于1000
	this.currOrd = 0;
	this.myTimer = null;
	this.PointerCount = 0;
	
	this.createUI();
	this.addEvent();
	this.changeImg();
}

Slider.prototype.createUI= function(){
	this.boxDomObj.style.position = "relative";
	this.boxDomObj.style.overflow = "hidden";	
	//1、创建所有的图片
	for(let i=0;i<this.imgs.length;i++){
		let imgDom = document.createElement("img");
		imgDom.src = this.imgs[i];
		imgDom.style.cssText = "position:absolute;top:0px;";
		imgDom.style.width = this.width;
		imgDom.style.height = this.height+"px";
		if(i==0){
			imgDom.style.left = "0px";		
		}else{
			imgDom.style.left = this.width;
		}
		this.boxDomObj.appendChild(imgDom);
		this.imgDoms.push(imgDom);//把创建的图片标签放入数组中
	}
	//2、创建所有的豆豆
	//1)、豆豆的容器
	let ulDom = document.createElement("ul");
	ulDom.style.cssText = "position:absolute;right:700px;bottom:10px;list-style:none;z-index:2;";
	this.boxDomObj.appendChild(ulDom);
	//2)、豆豆
	for(let i=0;i<this.imgs.length;i++){
		let liDom = document.createElement("li");
		liDom.style.cssText = "float:left;margin-left:20px;";
		liDom.style.width = this.doudouSize+"px";
		liDom.style.height = this.doudouSize+"px";
		if(i==0){
			liDom.style.backgroundColor = this.doudouHighColor;
		}else{
			liDom.style.backgroundColor = this.doudouColor;
		}
		if(this.isCircle){
			liDom.style.borderRadius = "50%";
		}
		ulDom.appendChild(liDom);
		this.liDoms.push(liDom);
	}
	

		//3.创建所有的按钮
		for(let i=0;i<2;i++){
			//按钮的容器
			let pointDivDom = document.createElement("div");
			pointDivDom.style.cssText = "position:absolute ;top:50%;width: 40px;height: 64px;";
			this.boxDomObj.appendChild(pointDivDom);  //将按钮添加到轮播图盒子里
			this.pointDivDoms.push(pointDivDom);  //把创建的按钮放入按钮盒子数组中
			
			//按钮
			let iDom = document.createElement("i");
			iDom.style.cssText = "background-position:0 -89px;width: 40px;height: 64px;";
			$(iDom).addClass("icon");
			pointDivDom.appendChild(iDom); //将按钮图标追加到按钮盒子中
			this.iDoms.push(iDom); //把创建的图标放入按钮图标的数组里
		}
			this.pointDivDoms[0].style.left = "50px";  //每个按钮的位置
			this.pointDivDoms[1].style.right = "50px";
			
//			$(this.boxDomObj).hover(()=>{	//箭头函数 不转移this	
//				this.PointerCount++;
//				if(this.PointerCount>1){
//					$(this.pointDivDoms[0]).stop();			//防止鼠标移出后多次触发之前没有发生完事件
//					$(this.pointDivDoms[1]).stop();
//				}
//				$(this.pointDivDoms[0]).fadeToggle(200);	//显示盒子显示按钮
//				$(this.pointDivDoms[1]).fadeToggle(200);
//			})
}

Slider.prototype.showImg = function(inOrd,outOrd){
	
	if(inOrd==outOrd){
		return;
	}
	
	//1)、滑入滑出前的准备工作
	this.imgDoms[inOrd].style.left=this.width;
	
	//2）、滑入滑出效果
	moveObj(this.imgDoms[inOrd],"left",0,300);
	moveObj(this.imgDoms[outOrd],"left",-1*1423,300);
//	$(this.imgDoms[outOrd]).fadeOut(300);
//	$(this.imgDoms[inOrd]).fadeIn(300);
}


Slider.prototype.showLi=function(){
	//    B、改豆豆		
	for(let i=0;i<this.liDoms.length;i++){
		this.liDoms[i].style.backgroundColor = this.doudouColor;
	}
	this.liDoms[this.currOrd].style.backgroundColor = this.doudouHighColor;
}

//1、自动播放图片
Slider.prototype.changeImg=function(){
	
	this.myTimer = setInterval(()=>{
		//1）、数据：改变图片的当前序号（加加），并考虑边界
		//currOrd = ++currOrd>4?0:currOrd;
		let outOrd = this.currOrd;
		this.currOrd++;
		if(this.currOrd>this.imgs.length-1){
			this.currOrd=0;
		}
		
		//2）、外观：
		//A、改图片
		this.showImg(this.currOrd,outOrd);
		//B、改豆豆
		this.showLi();

	},this.timeSpace);
}

//2、停止播放
Slider.prototype.stopChange=function(){
	//停止定时器
	window.clearInterval(this.myTimer);
}

//4、跳转到指定的图片
Slider.prototype.goImg=function(transOrd){//1
	//1）、数据：把transOrd赋给当前图片序号
	let outOrd = this.currOrd;
	this.currOrd = transOrd;
	
	//2）、外观：
	//A、改图片
	this.showImg(this.currOrd,outOrd);
	//B、改豆豆
	this.showLi();
}

Slider.prototype.addEvent = function(){	
	let obj = this;//this是Slider的对象
	this.boxDomObj.onmouseover = function(){
		obj.stopChange();
	}
	this.boxDomObj.onmouseout = function(){
		obj.changeImg();
	}
	
	for(let i=0;i<this.liDoms.length;i++){
//		this.liDoms[i].onclick = ()=>{
//			this.goImg(i);
//		}
		$(this.liDoms[i]).click(()=>{
			this.goImg(i);
		})
	}
	
	$(this.pointDivDoms[0]).click(()=>{
		this.goImg(this.currOrd-1);
	})
	$(this.pointDivDoms[1]).click(()=>{
		this.goImg(this.currOrd+1);
	})
}

/*
参数：
domObj：要运动物体（dom元素）
attr:样式属性
endValue:结束值
timeLong:时长
*/

//让某个dom元素花多长时间到达目的地

function moveObj(domObj,attr,endValue,timeLong){
	
	let currValue = parseFloat(getStyle(domObj,attr));//parseFloat(domObj.style[attr]);
	let direction = endValue>currValue?1:-1;
	let timeSpace = 16;
	let step = Math.abs(endValue-currValue)/timeLong*timeSpace;//  路程/时间表示的是一毫秒走多少像素*16；
	
	let myTimer = setInterval(function(){
		//1、改变数据
		currValue = currValue+direction*step;
		//2、处理边界
		if(Math.abs(currValue-endValue)<=step){
			currValue = endValue;
			clearInterval(myTimer);
		}		
		//3、改变外观
		let temp = currValue;
		
		if(attr!="opacity"){
			temp = temp+"px";
		}
		domObj.style[attr] = temp;		
	},timeSpace);
}
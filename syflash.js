(function($){
 $.fn.resizeimage = function(){
  var imgLoad = function (url, callback) {
   var img = new Image();
   img.src = url;
   if (img.complete) {
    callback(img.width, img.height);
   } else {
    img.onload = function () {
     callback(img.width, img.height);
     img.onload = null;
    };
   };
  };
  var original = {
   width:$(window).width()
  };
  return this.each(function(i,dom){
   var image = $(this);
   imgLoad(image.attr('src'),function(){
    var img = {
     width:image.width(),
     height:image.height()
    },percentage=1;
    if(img.width<original.width){
     percentage = 1;
    }else{
     percentage = (original.width)/img.width;
    }
    image.width(img.w=img.width*percentage-30).height(img.h=img.height*percentage);
    $(window).resize(function(){
     var w = $(this).width();
     percentage = w/img.width>1?1:w/img.width;
     var newWidth = img.width*percentage-30;
     var newHeight = img.height*percentage;
     image.width(newWidth).height(newHeight);
    });
   });
  });
 };
})(jQuery);




var ss;
//window.onload=function()
//{
var w=document.documentElement.clientWidth ;//可见区域宽度
var h=document.documentElement.clientHeight;//可见区域高度
ss=document.getElementById('pic1');
//alert(h);
ss.style.width=w+"px";
ss.style.height=h+"px";

ss=document.getElementById('pic2');
ss.style.width=w+"px";
ss.style.height=h+"px";

ss=document.getElementById('pic3');
ss.style.width=w+"px";
ss.style.height=h+"px";

ss=document.getElementById('pic4');
ss.style.width=w+"px";
ss.style.height=h+"px";

ss=document.getElementById('pic5');
ss.style.width=w+"px";
ss.style.height=h+"px";


//}


window.onload=function(){  
                 changeDivHeight();  
            }  
            //当浏览器窗口大小改变时，设置显示内容的高度  
            window.onresize=function(){  
                 changeDivHeight();  
            }  
            function changeDivHeight(){   
		       	var w=document.documentElement.clientWidth ;//可见区域宽度            
                var h = document.documentElement.clientHeight;//获取页面可见高度  
			 aa=document.getElementById('pic1');
//alert(h);
aa.style.width=w+"px";
aa.style.height=h+"px";

bb=document.getElementById('pic2');
bb.style.width=w+"px";
bb.style.height=h+"px";

cc=document.getElementById('pic3');
cc.style.width=w+"px";
cc.style.height=h+"px";

dd=document.getElementById('pic4');
dd.style.width=w+"px";
dd.style.height=h+"px";

ee=document.getElementById('pic5');
ee.style.width=w+"px";
ee.style.height=h+"px";
			
}




$(document).keyup(function(event){

 switch(event.keyCode) {
 case 38:
// alert("up");

document.getElementById("prev").click(); 
 break;
 case 40:
// alert("down");
document.getElementById("next").click(); 
  break;
 }
});




$(document).ready(function(){
var height = $(window).height();
var width = $(window).width();
var body;
if(navigator.userAgent.indexOf("Firefox")>0 || navigator.userAgent.indexOf("MSIE")>0){
body = document.documentElement;

}else{
body = document.body;
}
var isFinish = true;
var scrollFunc = function(e){
if(isFinish){
var scrollTop = body.scrollTop;
e = e || window.event;
if((e.wheelDelta<0|| e.detail>0) && scrollTop>=0 && scrollTop<height-20){ 
//alert("down");
document.getElementById("next").click(); 
scroll(height);
//}else if((e.wheelDelta>0 || e.detail<0) && scrollTop>=height && scrollTop<=height+20){
	}else {
	//alert("up");
	document.getElementById("prev").click(); 
scroll(0);

}
}
 
};
var scroll = function(height){
isFinish = false;
$(body).animate({scrollTop:height},"fast","linear",function(){
isFinish = true;
});
};
if(navigator.userAgent.indexOf("Firefox")>0){

if(document.addEventListener){
document.addEventListener('DOMMouseScroll',scrollFunc,false);
}
}else{

document.onmousewheel = scrollFunc;
}
});
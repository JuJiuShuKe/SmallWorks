var json = [{"src":"imges/im1.jpg"},{"src":"imges/im2.jpg"},{"src":"imges/im3.jpg"},{"src":"imges/im4.jpg"}];
var Img_w = 520;    //盒子宽度


//  显示图片
var innHtml='' ;
for (var i = 0; i < json.length ; i++) {
    if(i==0){innHtml += '<li><a href="JavaScript:;"><img src="'+ json[json.length-1].src +'" ></a></li>';}
	innHtml += '<li><a href="JavaScript:;"><img src="'+ json[i].src +'" ></a></li>';
    if(i==json.length-1){innHtml += '<li><a href="JavaScript:;"><img src="'+ json[0].src +'" ></a></li>';}
}
$('ul').append(innHtml);
$('ul').css('left',-Img_w + 'px');



$('section>a:last-child').on('click',function(){
    nextPage();
});
$('section>a:first-child').on('click',function(){
    upPage();
});

var T = setInterval(nextPage,3000);

$("section").hover(function(){
    clearInterval(T)
},function(){
    T = setInterval(nextPage,3000);
});







function nextPage(){
    if($('ul').css('left') == -(Img_w*4) + 'px'){$('ul').css('left',0 + 'px')}
    if(!$('ul').is(":animated")){
        $('ul').animate({'left': parseInt( $('ul').css('left').split('px')[0]) - Img_w + 'px'},300);
    }
}
function upPage(){
    if($('ul').css('left') == '0px'){$('ul').css('left',-Img_w*json.length + 'px')}
    if(!$('ul').is(":animated")){
        $('ul').animate({'left': parseInt( $('ul').css('left').split('px')[0]) + Img_w + 'px'},300);
    }
}





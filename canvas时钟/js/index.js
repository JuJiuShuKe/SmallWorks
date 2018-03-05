
var my = document.getElementById('can');
var ctx = my.getContext('2d');
var width=ctx.canvas.width;  //获取当前canvas的宽
var r=width/2;  //获取钟表半径
ctx.lineCap="round";
ctx.lineJoin="round";
ctx.translate(width/2,width/2);  //改变中心位置到canvas中间

draw();
setInterval(draw,1000);
function draw(){
    ctx.clearRect(-width/2,-width/2,width,width); //每秒清除一次矩形
    var date=new Date();
    var h=date.getHours();
    var m=date.getMinutes();
    var s=date.getSeconds();

    drawBg(10);   //表盘（线宽）
    drawScale(10);        //刻度
    drawSec(s);      //秒钟
    drawMin(m);         //分针
    drawHour(h);        //时针
    drawDot();          //中心
}


function drawBg(lineWid){
    ctx.beginPath();
    //ctx.translate(width/2,width/2);  //改变中心位置到canvas中间
    ctx.lineWidth=lineWid;
    ctx.strokeStyle="#000";  //边框颜色
    ctx.arc(0,0,r - lineWid/2 ,0,2*Math.PI);  //画圆
    ctx.stroke();
}
function drawScale(lineWid){
    for(var i=0;i<60;i++){
        ctx.beginPath();
        if(i%5==0){
            ctx.strokeStyle="#443f3f";
            ctx.lineWidth=4;
            ctx.lineTo((r-30)*Math.cos(2*Math.PI/60*i),(r-30)*Math.sin(2*Math.PI/60*i));
        }else {
            ctx.strokeStyle="#bdabab";
            ctx.lineWidth=4;
            ctx.lineTo((r-20)*Math.cos(2*Math.PI/60*i),(r-20)*Math.sin(2*Math.PI/60*i));
        }
        ctx.lineTo((r-lineWid)*Math.cos(2*Math.PI/60*i),(r-lineWid)*Math.sin(2*Math.PI/60*i));
        ctx.stroke();
    }
}

//画秒针
function drawSec(s){
    ctx.beginPath();
    ctx.strokeStyle="#888";
    ctx.lineWidth=3;
    ctx.lineTo((r-50)*-Math.cos(2*Math.PI/60*(15+s)),(r-50)*-Math.sin(2*Math.PI/60*(15+s)));
    ctx.lineTo((r-300)*-Math.cos(2*Math.PI/60*(15+s)),(r-300)*-Math.sin(2*Math.PI/60*(15+s)));
    ctx.stroke();
}
//画分针
function drawMin(m){
    ctx.beginPath();
    ctx.strokeStyle="#666";
    ctx.lineWidth=5;
    ctx.lineTo((r-100)*-Math.cos(2*Math.PI/60*(15+m)),(r-100)*-Math.sin(2*Math.PI/60*(15+m)));
    ctx.lineTo((r-280)*-Math.cos(2*Math.PI/60*(15+m)),(r-280)*-Math.sin(2*Math.PI/60*(15+m)));
    ctx.stroke();
}
//画时针
function drawHour(h){
    ctx.beginPath();
    ctx.strokeStyle="#000";
    ctx.lineWidth=7;
    ctx.lineTo((r-150)*-Math.cos(2*Math.PI/60*(15+h)),(r-150)*-Math.sin(2*Math.PI/60*(15+h)));
    ctx.lineTo((r-260)*-Math.cos(2*Math.PI/60*(15+h)),(r-260)*-Math.sin(2*Math.PI/60*(15+h)));
    ctx.stroke();
}

//画中心点
function drawDot(){
    ctx.beginPath();
    ctx.fillStyle="#fff";
    ctx.arc(0,0,2,0,2*Math.PI);
    ctx.fill();
}
var sectionDom = document.getElementsByTagName('section')[0];
var h1 = document.getElementsByTagName('h1')[0];
var spanDom = document.getElementsByTagName('span');
var Checkpoint = 1;

addDom(2,0,1);



function addDom(num,opacity,forIndex){
    var bgNum1 = Math.floor(Math.random()*220),
        bgNum2 = Math.floor(Math.random()*220),
        bgNum3 = Math.floor(Math.random()*220),
        unique = Math.floor(Math.random()*num*num + 1);
        hWidth = Math.round(1 / num * 10000) / 100.00 - 0.01 + "%" ;
    for(var i=0;i<num*num;i++){
        var newSpan = document.createElement('span');
        newSpan.style.height = hWidth;
        newSpan.style.width = hWidth;
        newSpan.style.backgroundColor = 'rgb('+ bgNum1 +','+ bgNum2 +','+ bgNum3 +')';
        sectionDom.appendChild(newSpan);
    }
    Checkpoint = forIndex ;
    opacity>0.8 ? opacity += 0.02  : opacity += 0.1 ;
    num ++ ;
    forIndex ++ ;

    spanDom[unique-1].style.opacity = opacity;
    spanDom[unique-1].onclick = function(){
        sectionDom.innerHTML = '';
        addDom(num,opacity,forIndex);
    };
    h1.innerHTML = '第'+ Checkpoint +'关' ;
}




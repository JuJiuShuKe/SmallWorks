var asDom = document.getElementById('box').getElementsByTagName('a');


for(var i =0;i<asDom.length;i++){
    lick(asDom[i]);
}

function lick(nowDom){
    nowDom.addEventListener('mouseenter',function(){
        for(i =0;i<asDom.length;i++){
            asDom[i].style.width =  '50px';
        }
        this.style.width = '750px';
    })
}


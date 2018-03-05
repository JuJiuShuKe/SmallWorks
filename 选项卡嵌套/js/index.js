
var json = [
    [
        {"src": "imges/a31.png"},
        {"src": "imges/a02.png"},
        {"src": "imges/a03.png"},
        {"src": "imges/a04.png"},
        {"src": "imges/a05.png"}
    ],
    [
        {"src": "imges/a06.png"},
        {"src": "imges/a07.png"},
        {"src": "imges/a08.png"},
        {"src": "imges/a09.png"}
    ],
    [
        {"src": "imges/a10.png"},
        {"src": "imges/a11.png"},
        {"src": "imges/a12.png"},
        {"src": "imges/a13.png"},
        {"src": "imges/a14.png"},
        {"src": "imges/a15.png"},
        {"src": "imges/a16.png"},
        {"src": "imges/a17.png"}
    ],
    [
        {"src": "imges/a18.png"},
        {"src": "imges/a19.png"},
        {"src": "imges/a20.png"},
        {"src": "imges/a21.png"},
        {"src": "imges/a22.png"},
        {"src": "imges/a23.png"}
    ]
];


//首次加载第一个
$('section > .right img').attr('src',json[0][0].src);
$.each(json[0],function(ind,val){
    $('section > .right p').append('<span src="'+ val.src +'">'+ parseInt(ind+1)+'</span>')
});
$('section > .right p>span:first-child').attr('class','aside');



$('section > .left div').on('click',function(){
    $('section > .left div').removeClass("aside");
    $(this).attr('class','aside');

    $.each($('section > .left div'),function(i,v){
        if( $(v).attr('class') && $(v).attr('class') == 'aside'){
            switch(i){
                case 0:
                    $('section > .right p').empty();
                    $.each(json[i],function(ind,val){
                        $('section > .right p').append('<span src="'+ val.src +'">'+ parseInt(ind+1)+'</span>')
                    });
                    break;
                case 1:
                    $('section > .right p').empty();
                    $.each(json[i],function(ind,val){
                        $('section > .right p').append('<span src="'+ val.src +'">'+ parseInt(ind+1)+'</span>')
                    });
                    break;
                case 2:
                    $('section > .right p').empty();
                    $.each(json[i],function(ind,val){
                        $('section > .right p').append('<span src="'+ val.src +'">'+ parseInt(ind+1)+'</span>')
                    });
                    break;
                case 3:
                    $('section > .right p').empty();
                    $.each(json[i],function(ind,val){
                        $('section > .right p').append('<span src="'+ val.src +'">'+ parseInt(ind+1)+'</span>')
                    });
                    break;
            }
            $('section > .right p>span:first-child').attr('class','aside');
            $('section > .right img').attr('src',$('section > .right p>span:first-child').attr('src'));
        }
    });
});


//选择页码
$(document).on('click','section > .right span',function(){
    $('section > .right span').removeClass("aside");
    $(this).attr('class','aside');
    $('section > .right img').attr('src',$(this).attr('src'));
});

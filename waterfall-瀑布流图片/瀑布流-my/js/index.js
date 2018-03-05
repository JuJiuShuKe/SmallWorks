$(function() {
    var json = [
        {"src": "imges/a01.png"},
        {"src": "imges/a02.png"},
        {"src": "imges/a03.png"},
        {"src": "imges/a04.png"},
        {"src": "imges/a05.png"},
        {"src": "imges/a06.png"},
        {"src": "imges/a07.png"},
        {"src": "imges/a08.png"},
        {"src": "imges/a09.png"},
        {"src": "imges/a10.png"},
        {"src": "imges/a11.png"},
        {"src": "imges/a12.png"},
        {"src": "imges/a13.png"},
        {"src": "imges/a14.png"},
        {"src": "imges/a15.png"},
        {"src": "imges/a16.png"},
        {"src": "imges/a17.png"},
        {"src": "imges/a18.png"},
        {"src": "imges/a19.png"},
        {"src": "imges/a20.png"},
        {"src": "imges/a21.png"},
        {"src": "imges/a22.png"},
        {"src": "imges/a23.png"},
        {"src": "imges/a24.png"},
        {"src": "imges/a25.png"},
        {"src": "imges/a26.png"},
        {"src": "imges/a27.png"},
        {"src": "imges/a28.png"},
        {"src": "imges/a29.png"},
        {"src": "imges/a30.png"},
        {"src": "imges/a31.png"},
        {"src": "imges/a32.png"}
    ];
    var num = 0;

    var pageNum = 4 ;     //列数
    for(var n=0;n<pageNum;n++){
        $('section').append('<div class="div'+ parseInt(n+1) +'" style="width: '+ 100/pageNum + '%' +'"></div>');
    }

    newImg();

    function newImg() {
        if (num < pageNum) {        //第一列
            $('section div:nth-child(' + parseInt(num + 1) + ')').append('<img src="' + json[num].src + '" alt="">');
            num++;
            newImg();
        } else {
            var arry = [];
            var minPage = 0;

            setTimeout(function () {
                for( var nn=1 ; nn <= pageNum ; nn++){
                    arry.push($('.div'+ nn +'').height())
                }

                for (var j = 0; j < arry.length; j++) {
                    if (arry[j] == Math.min.apply(null, arry)) {
                        minPage = parseInt(j + 1);
                    }
                }
                $('section div:nth-child(' + minPage + ')').append('<img src="' + json[num].src + '" alt="">');

                if (num != json.length - 1) {
                    num++;
                    newImg();
                }

            }, 20)
        }
    }
});


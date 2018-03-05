
$("#div1").waterfall({
    itemClass: ".box",
    minColCount: 2,
    spacingHeight: 10,
    resizeable: true,
    ajaxCallback: function(success, end) {
        var data = {"data": [
            {"src":"imges/a01.png"},
            {"src":"imges/a02.png"},
            {"src":"imges/a03.png"},
            {"src":"imges/a04.png"},
            {"src":"imges/a05.png"},
            {"src":"imges/a06.png"},
            {"src":"imges/a07.png"},
            {"src":"imges/a08.png"},
            {"src":"imges/a09.png"},
            {"src":"imges/a10.png"},
            {"src":"imges/a11.png"},
            {"src":"imges/a12.png"},
            {"src":"imges/a13.png"},
            {"src":"imges/a14.png"},
            {"src":"imges/a15.png"},
            {"src":"imges/a16.png"},
            {"src":"imges/a17.png"},
            {"src":"imges/a18.png"},
            {"src":"imges/a19.png"},
            {"src":"imges/a20.png"},
            {"src":"imges/a21.png"},
            {"src":"imges/a22.png"},
            {"src":"imges/a23.png"},
            {"src":"imges/a24.png"},
            {"src":"imges/a25.png"},
            {"src":"imges/a26.png"},
            {"src":"imges/a27.png"},
            {"src":"imges/a28.png"},
            {"src":"imges/a29.png"},
            {"src":"imges/a30.png"},
            {"src":"imges/a31.png"},
            {"src":"imges/a32.png"}
        ]};
        var str = "";
        var templ = '<div class="box" style="opacity:0;filter:alpha(opacity=0);"><div class="pic"><img src="{{src}}" /></div></div>'

        for(var i = 0; i < data.data.length; i++) {
            str += templ.replace("{{src}}", data.data[i].src);
        }
        $(str).appendTo($("#div1"));
        success();
        end();
    }
});
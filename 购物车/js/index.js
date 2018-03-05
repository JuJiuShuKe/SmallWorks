//var jsonArr =[
//    {
//        "id": 1,
//        "dpName": "旗舰店",
//        "shopD": [
//            {
//                "src": "../imges/im0.jpg",
//                "briefIntroduction": "魅蓝note6钢化膜e2pro7魅族note5note3手机mx6/5s5全屏x防摔6plus  ",
//                "kucun": "100",
//                "unit_price": 6
//            },
//            {
//                "src": "../imges/im0.jpg",
//                "briefIntroduction": "魅蓝note6钢化膜e2pro7魅族note5note3手机mx6/5s5全屏x防摔6plus  ",
//                "kucun": "100",
//                "unit_price": 6
//            }
//        ]
//    },
//    {
//        "id": 2,
//        "dpName": "旗舰店",
//        "shopD": {
//            "src": "../imges/im0.jpg",
//            "briefIntroduction": "魅蓝note6钢化膜e2pro7魅族note5note3手机mx6/5s5全屏x防摔6plus  ",
//            "kucun": "100",
//            "unit_price": 6
//        }
//    }
//];
//var boxHtml = '';
//
//$.each(jsonArr,function(i,v) {
//    boxHtml +=
//        '<div class="shops_' + v.id + ' shops">' +
//        '<div class="shopName">' +
//        '<h1>' +
//        '     <input type="checkbox" class="dpAll" id="dp1">' +
//        '     <label for="dp1">店铺：</label>' +
//        ' 	<a href="JavaScript:;">' + v.dpName + '</a>' +
//        '     </h1>' +
//        '     </div>';
//
//    for (var ii = 0; ii < v.length; ii++) {
//        boxHtml +=
//            '     <div class="shopDetails">' +
//            '     <ul>' +
//            '     <li><input class="commoditySelection" type="checkbox"></li>' +
//            '     <li><img src=' + v.shopD[ii].src + ' alt="im0"></li>' +
//            '     <li><span>' + v.shopD[ii].briefIntroduction + '</span></li>' +
//            ' 	<li class="kucun">' + v.shopD[ii].kucun + '</li>' +
//            '     <li class="unit_price">￥<i>' + v.shopD[ii].unit_price + '</i></li>' +
//            '     <li>' +
//            '     <div class="gw_num">' +
//            '     <em class="jian">-</em>' +
//            '     <input type="number" value="1" class="num">' +
//            '     <em class="add">+</em>' +
//            '     </div>' +
//            '     </li>' +
//            '     <li class="amount_money">￥<i>' + v.shopD[ii].unit_price + '</i></li>' +
//            '     <li class="liDel">删除</li>' +
//            '     </ul>' +
//            '     </div>';
//        if ((ii + 1) == v.length) {
//            boxHtml += '</div>';
//        }
//    }
//});
//
//
//
//$('.box .shopHeader').after( boxHtml );


//$("img").load(function() {
///
//
//
//商品数量加
    $(".add").click(function () {
        var n = $(this).prev().val();
        var num = parseInt(n) + 1;
        if (num == 0) {
            return;
        }
        $(this).prev().val(num);
        quantitativeTest($(this).prev())
    });
//商品数量减
    $(".jian").click(function () {
        var n = $(this).next().val();
        var num = parseInt(n) - 1;
        if (num <= 0) {
            return
        }
        $(this).next().val(num);
        quantitativeTest($(this).next())
    });
//商品数量改变
    $('.num').on('keyup', function () {
        quantitativeTest($(this))
    });

    /**
     * 判断商品数量大于0 小于等于库存
     * @param thiss     当前input
     */
    function quantitativeTest(thiss) {
        var this_number = parseInt(thiss.val());     //商品数量
        var this_money = thiss.parents('ul').find('.unit_price').find('i').text();     //商品单价
        var all_money = returnFloat(this_number * this_money);     //商品总价
        if (thiss.val() <= 0) {
            thiss.val(1);
        } else {
            var now_kucun = parseInt(thiss.parents('ul').find('.kucun').text());
            if (parseInt(thiss.val()) > now_kucun) {
                thiss.val(now_kucun);
                thiss.parents('ul').find('.amount_money').find('i').text(returnFloat(this_money * now_kucun));
            } else {
                thiss.val(parseInt(thiss.val()));
                thiss.parents('ul').find('.amount_money').find('i').text(all_money);
            }
        }
        isCheckBg();
    }

//------------------------------------------------------------全选不选
//最大全选
    $('#all , #allSelect').on('change', function () {
        checkAll($(this), $('article').find($(":checkbox:not('#all , #allSelect')")));
        $("#all , #allSelect").prop("checked", isCheckAll($(".commoditySelection")));
        isCheckBg();
    });

//  最大全选内子选项
    $(":checkbox:not('#all')").on('change', function () {
        $("#all , #allSelect").prop("checked", isCheckAll($(".commoditySelection")));
    });

//每个小的全选
    $('.dpAll').on('change', function () {
        checkAll($(this), $(this).parents(".shops").find($(":checkbox:not('.dpAll')")));
        $("#all , #allSelect").prop("checked", isCheckAll($(".commoditySelection")));
    });
//每个小的全选内子选项
    $('.dpAll').parents(".shops").find($(":checkbox")).on('change', function () {
        $(this).parents(".shops").find('.dpAll').prop("checked", isCheckAll($(this).parents(".shops").find(".commoditySelection")));
        $("#all , #allSelect").prop("checked", isCheckAll($(".commoditySelection")));
        isCheckBg();
    });

//返回全选状态
    function isCheckAll(thiss) {
        var falg = true;
        for (var i = 0; i < thiss.length; i++) {
            var tempGlag = thiss.eq(i).is(":checked");
            if (!tempGlag) {
                falg = false;
                break;
            }
        }
        if(thiss.length == 0){
            falg = false;
        }
        return falg;
    }


    /**
     * 点击全选按钮
     */
    function checkAll(thiss, nextAllCh) {
        if (thiss.is(':checked')) {
            nextAllCh.prop({checked: true})
        } else {
            nextAllCh.prop({checked: false})
        }
    }

//------------------------------------------------------------全选不选

//删除当前商品
    $('.liDel').on('click', function(){     DelThis($(this))    });

//多选删除
    $('.del').on('click', function () {
        $('input:checkbox[class=commoditySelection]:checked').each(function (i, v) {
            $(v).parents('.shopDetails').find('.liDel').on('click',DelThis($(this))) ;
        });

        $('.dpAll').prop("checked", isCheckAll($('.dpAll').find(".commoditySelection")));
        $("#all , #allSelect").prop("checked", isCheckAll($(".commoditySelection")));
        isCheckBg();
    });
//删除函数
function DelThis(thiss) {
    var thisLens = thiss.parents('.shops').children('.shopDetails').length;
    var nowThis = thiss.parents(".shops");
    if (thisLens == 1) {
        thiss.parents('.shops').remove();
    } else {
        thiss.parents('.shopDetails').remove();
    }

    nowThis.find('.dpAll').prop("checked", isCheckAll(nowThis.find(".commoditySelection")));
    $("#all , #allSelect").prop("checked", isCheckAll($(".commoditySelection")));
    isCheckBg();
}


//获取选中商品
    function isCheckBg() {
        $(":checkbox").parents('.shopDetails').css('background', '#ffffff');
        $('.bottom > a:last-child').css('background-color', '#B0B0B0');
        var AllMoney = 0.00;
        $('input:checkbox[class=commoditySelection]:checked').each(function (i, v) {
            $(v).parents('.shopDetails').css('background', '#fff8e1');
            //console.log(v)
            AllMoney += parseFloat($(v).parents('.shopDetails').find('.amount_money').find('i').text());
        });
        $('.AllMoneys').find('i').text(returnFloat(AllMoney))
        $('.bottNum').find('i').text( $("input[class='commoditySelection']:checked").length )
        if (parseFloat($('.AllMoneys').find('i').text()) > 0) {
            $('.bottom > a:last-child').css('background-color', '#ff4400')
        }
    }


//保留两位小数
    function returnFloat(values) {
        var values = Math.round(parseFloat(values) * 100) / 100;
        var xsd = values.toString().split(".");
        if (xsd.length == 1) {
            values = values.toString() + ".00";
            return values;
        }
        if (xsd.length > 1) {
            if (xsd[1].length < 2) {
                values = values.toString() + "0";
            }
            return values;
        }
    }
//
//
//});

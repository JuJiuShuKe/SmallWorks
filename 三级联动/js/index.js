
$.each(json.data,function(inde,valu){
    $('.selet1').append('<option value="'+ valu.name +'">'+ valu.name +'</option>')
})

$('.selet1').on('change',function(){
    if($(this).val() != '省份'){

        $('.selet2').empty();
        $('.selet2').append('<option value="城市">城市</option>');
        $('.selet3').empty();
        $('.selet3').append('<option value="地区">地区</option>');

        $.each(json.data,function(ind,val){
            if(val.name == $('.selet1').val()){
                var newArr = val.city;
                $.each(newArr,function(i,v){
                    $('.selet2').append('<option value="'+ v.name +'">'+ v.name +'</option>');
                })
            }
        })
    }
})


$('.selet2').on('change',function() {
    if ($(this).val() != '城市') {

        $('.selet3').empty();
        $('.selet3').append('<option value="地区">地区</option>');

        $.each(json.data, function (ind, val) {
            $.each(val.city, function (i, v) {
                if (val.name == $('.selet1').val()) {
                    if (v.name == $('.selet2').val()) {
                        var newArr2 = v.area;
                        $.each(newArr2, function (i, v) {
                            $('.selet3').append('<option value="' + v + '">' + v + '</option>');
                        })
                    }
                }
            })
        })
    }
})

$('select').change(function(){
    $('input').val('');
    if($('.selet3').val() != '地区' ){
        $('input').val($('.selet1').val()+$('.selet2').val()+$('.selet3').val())
    }
})







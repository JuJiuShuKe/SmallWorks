

$(document).scroll(function() {
    var boxTop = $('.box').offset().top - $(document).scrollTop();

    if(boxTop > 0){
        $('.box div:first-child').css({
            'position': 'relative'
        })
    }
    if( boxTop <= 0){
        $('.box div:first-child').css({
            'position': 'fixed',
            'top': '0'
        })
    }

    var boxBottom = $('section>div:last-child').offset().top - 20 - $('.box div:first-child').outerHeight() ;
    var docTop = $(document).scrollTop();

    if( docTop >= boxBottom){
        $('.box div:first-child').css({
            'position': 'fixed',
            'top': -(docTop - boxBottom) + 'px'
        })
    }

});

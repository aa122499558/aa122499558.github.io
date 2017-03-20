$(function(){
    (function(){
        var ohead = $('.minor_h');
        var h = ohead.height();
        var w = $('#wrap').width();
        var num = 0;
        $('.Carousel').eq(0).carousel({
            move:true
        });
        $('.Carousel').eq(1).carousel({
            WHauto:true
        });

        ohead.css({
            top:-h,
            width:w
        });
        $(document).scroll(function(){
            if($(document).scrollTop()>parseInt(h)){
                num = 0;
            }else{
                num = -h;
            }
            ohead.stop().animate({
                top:num
            },500);
        })
    })();
    (function(){
    })()
});
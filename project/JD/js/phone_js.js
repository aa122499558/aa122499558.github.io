$(function(){
    (function(){
        /*var oCarousel = $('.Carousel');
        var aLi_1 = oCarousel.eq(0).children('ul').children('li');
        var oUl = oCarousel.find('ul');
        var oOli = oCarousel.find('ol');
        var aLi = oCarousel.find('ul').children('li');
        var aLi_2 = oCarousel.eq(1).children('ul').children('li');
        var w = $(window).width();
        var c2_H = parseInt( oCarousel.eq(1).find('ul').find('li').eq(0).outerHeight(true) + oCarousel.eq(1).find('ol').outerHeight(true) + oCarousel.eq(1).find('.title').outerHeight(true) ) + 'px';
        //var _2H = parseInt( oCarousel.eq(1).find('ul').outerHeight(true) + oCarousel.eq(1).find('ol').outerHeight(true) + oCarousel.eq(1).find('.title').outerHeight(true));
        aLi.css('width',w);
        aLi_1.closest('ul').css('width',aLi_1.length*aLi_1.width() + (aLi_1.eq(0).width() * 2) );
        aLi_2.closest('ul').css('width',aLi_2.length*aLi_2.width() + (aLi_2.eq(0).width() * 2));
        oOli.css('left',(w/2)-(oOli.width()/2) );
        heightInit(oCarousel.eq(0),oCarousel.eq(0).find('img').height() );
        heightInit(oCarousel.eq(1),c2_H );
        function heightInit(parent,sub){
            parent.css('height',sub );
        }
        oCarousel.each(function(i,elem){
            clon( $(this) );
        });
        function clon(parent){
            var nowLi = parent.find('ul').find('li');
            nowLi.eq(0).clone(true).attr('clone','yes').appendTo(parent.eq(0).find('ul') );
            nowLi.eq(nowLi.length-1).clone(true).attr('clone','yes').prependTo(parent.eq(0).find('ul') );
            parent.find('ul').css('left',-nowLi.eq(0).width() );
        }*/
        var ohead = $('.minor_h');
        var h = ohead.height();
        var num = 0;
        var n = 0;
        var noOff = true;
        var oWrap = $('#wrap');
        var oUl = $('.pbl').find('ul');
        $('.Carousel').eq(0).carousel({
            move:true
        });
        $('.Carousel').eq(1).carousel({
            WHauto:true,
            one:true
        });
        ohead.css({
            top:-h,
            width:oWrap.width()
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
        });
        function getload(){
            $.ajax({
                url:'data/1.get.php',
                type:'get',
                success:function(data){
                    var data = JSON.parse( data );
                    for( var i = 0; i<data.length; i++){
                        var aLi = $('<li></li>');
                        var oA = $('<a href="#"></a>');
                        oA.appendTo( aLi );
                        aLi.appendTo( oUl );
                        var oImg = $('<img>');
                        oImg.attr('src',data[i].img);
                        oImg.appendTo( oA );
                        var oP = $('<p></p>');
                        oP.html( data[i].title );
                        oP.appendTo( oA );
                        var oPrice = $('<div></div>');
                        var oSpan = $('<span></span>');
                        var btn = $('<a href="#"></a>');
                        btn.html('similarity ');
                        oSpan.html(data[i].price).appendTo(oPrice);
                        btn.appendTo(oPrice);
                        oPrice.addClass('price').appendTo(aLi);
                    }
                    noOff = true;
                    n++;
                }
            });
        }
        $(window).on('scroll',function(){
            if( $(document).scrollTop()+$(window).height() > $('#footer').offset().top ){
                if( noOff ){
                    if( n >= 2){
                        return
                    }
                    noOff = false;
                    getload();
                }
            }
        });
        $('#load').click(function(){
            getload();
        })
    })();
});
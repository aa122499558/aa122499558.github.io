(function($){

    $.fn.carousel = function(opt){
        var $elms = $(this);
        console.log(this);
        var setting = {
            name:'1',
            age:18
        };
        $.extend(setting,opt);
        $elms.each(function(){
            var oUl = $(this).find('ul');
            var oLi = $(this).find('ol');
            var oLli = oLi.find('li');
            var aLi = oUl.find('li');
            oUl.height( aLi.height() );
            var len = aLi.length;
            var w = aLi.eq(0).width();
            var thisw = $(this).width();
            var downLeft = null;
            var downX = null;
            var downY = null;
            var moveLeft = null;
            var moveX = null;
            var moveY = null;
            var endLeft = null;
            var endX = null;
            var endY = null;
            var noOff = true;
            var iNow = 0;
            var timer = null;
            var downTimer = 0;
            /*克隆*/
            if(!setting.one){
                aLi.eq(0).clone(true).attr('clone','yes').appendTo( $(this).find('ul') );
                aLi.eq( aLi.length-1).clone(true).attr('clone','yes').prependTo($(this).find('ul') );
            }
            aLi = oUl.find('li');
            len = aLi.length;
            /*初始化宽高*/
            oUl.css('width',w*len );
            aLi.css('width',parseInt( oUl.width() )/ (len) + 'px' );
            oUl.css('left',-w);
            oLi.css('left',parseInt( (w/2) - (oLi.width()/2) ) + 'px' );
            if(setting.WHauto){
                var sub = $(this).children();
                var num = 0;
                sub.each(function(i,elem){
                    //sub = $(elem).children().eq(i);
                    num += parseInt( $(elem).outerHeight(true) );
                });
                $(this).height( num + 'px' );
            }else if(!setting.WHauto){
                $elms.height( oUl.height() );
            }
            function getOl(){
                if( iNow == -1 ){
                    oUl.css( 'left',parseInt( -w* ( len-2)  ) + 'px');
                    iNow = len-3;
                }else if( iNow>len-3 ){
                    oUl.css('left',-w);
                    iNow = 0;
                }
                oLli.eq(iNow).addClass('active').siblings().removeClass('active');
            }
            oUl.on('touchstart',function(ev){
                if(noOff == true){
                    if(setting.move){
                        clearInterval( timer );
                    }
                    noOff = false;
                    downX = ev.originalEvent.targetTouches[0].pageX;
                    downY = ev.originalEvent.targetTouches[0].pageY;
                    downLeft = $(this).position().left;
                    $(document).on('touchstart',function(ev){
                        ev.preventDefault();
                    });
                    oUl.on('touchmove',function(ev){
                        moveX = ev.originalEvent.targetTouches[0].pageX;
                        moveY = ev.originalEvent.targetTouches[0].pageY;
                        $(this).css('left',moveX-downX + downLeft );
                    });
                    oUl.one('touchend',function(ev){
                        $(this).unbind('touchmove');
                        $(this).unbind('touchend');
                        $(document).unbind('touchstart');
                        endX = ev.originalEvent.changedTouches[0].pageX;
                        if( downX>endX && (endX-downX)<( parseInt( -w/3 ) ) ){
                            iNow++;
                        }else if( downX<endX && (downX-endX)<( parseInt( -w/3 ) ) ){
                            iNow--;
                        }
                        /*if( downX > endX && (endX-downX) < parseInt( -$(this).find('li').eq(0).width())/3 ){
                         iNow++;
                         }else if( downX < endX && (downX - endX) < parseInt( -$(this).find('li').eq(0).width())/3 ){
                         iNow--;
                         } */
                        $(this).animate({
                            left:-w*iNow + -w
                        },500,function(){
                            getOl();
                            noOff = true;
                            if(setting.move){
                                getmove();
                            }
                        })
                    });
                }
            });
            function move(){
                if( setting.move ){
                    noOff = false;
                    oUl.animate({
                        left:( -w*iNow )+-w
                    },500,function(){
                        if( iNow == -1 ){
                            oUl.css( 'left',parseInt( -w* ( len-2)  ) + 'px');
                            iNow = len-3;
                        }else if( iNow>len-3 ){
                            oUl.css('left',-w);
                            iNow = 0;
                        }
                        getOl();
                        noOff = true;
                    });
                }
            }
            getmove();
            function getmove(){
                if(setting.move){
                    timer = setInterval(function(){
                        iNow++;
                        move();
                    },2000)
                }
            }
        });
    }

})(jQuery);
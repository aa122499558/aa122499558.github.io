/**
 * Created by Administrator on 2015/12/3.
 */
$(function(){
    (function(){
        var $icon_list = $('#focus .sd_c .serve .s_li');
        var $icon = $('#focus .s_li .icon_hover');
        var $tab = $('#focus .tab');
        var $close = $('.tab .close');
        var timer = null;
        var $top = null;
        $icon.hover(function(){
            timer = setTimeout(function(){
                $tab.animate({top:0},500);
                setTimeout(function(){
                    $icon_list.animate({top:-66},200)
                },200)
            },100);
        },function(){
            clearInterval( timer )
        });
        function _hide(){
            $top = parseInt( $tab.css('top') );
            if($top >= 1 ){
                return;
            }
            $(function(){
                $tab.animate({top:66},300);
                $icon_list.animate({top:0},300);
            });
            setTimeout(function(){
                $tab.animate({top:208},300)
            },310)
        };
        $(document).click( _hide );
        $close.click( _hide );
        $tab.click(function(ev){
            ev.stopPropagation()
        })
    })();//侧边栏选项卡的延迟滚动运动
    (function(){
        var $icon = $('#focus .s_li .icon_hover');
        var $aLi = $('.tab ').children('ol').find('li');
        var $aUl = $('.tab ').children('ul').children('li');
        var timer = null;
        _show($aLi,$aLi,$aUl);
        _show($icon,$aLi,$aUl);
        $('.tab .sub').each(function(){
            var $wrap = $(this);
            var _$aLi = $wrap.children('ol').find('li[class!=close]');
            var _$aUl = $wrap.children('ul').find('li');
            _show(_$aLi,_$aLi,_$aUl);
        });
        $('.shop').each(function(){
            var _$this = $(this);
            var _$aLi = _$this.find('.tab_t').children('li');
            var _$aUl = _$this.find('.con_r').children('li');
            _show(_$aLi,_$aLi,_$aUl);
        });
        function _show(now,li,ul){
            now.hover(function(){
                var _index = $(this).index();
                li.removeClass('active');
                li.eq(_index).addClass('active');
                ul.hide();
                ul.eq(_index).show();
            });
        }
    })();//选项卡切换
    (function(){
        var $aLi = $('#focus .menu').children('li');
        var $aUl = $('#focus .unfold').children('li');
        var timer = null;
        $aLi.hover(function(){
            clearInterval( timer );
            $aLi.removeClass('active');
            $(this).addClass('active');
            var _index = $(this).index();
            $aUl.hide();
            $aUl.eq(_index).show();
        },function(){
            timer = setTimeout(function(){$aUl.hide();$aLi.removeClass('active');},500)
        });
        $aUl.hover(function(){
            clearInterval( timer );
        },function(){
            $aUl.hide();
            $aLi.removeClass('active');
        });
    })();//菜单切换
    (function(){
        var $wrap = $(".Carousel_g");
        var $uli = $('#focus .Carousel_g ul').children('li');
        var $oli = $('#focus .Carousel_g ol').children('li');
        var $dir = $('#focus .Carousel_g .dir');
        var $prev = $('#focus .Carousel_g .dir .prev');
        var $next = $('#focus .Carousel_g .dir .next');
        var timer = null ;
        var now = 0;
        function fn(){
            $uli.each(function(i){
                if( i != now){
                    $uli.eq(i).fadeOut();
                    $oli.eq(i).removeClass('active');
                }else if( i == now ){
                    $uli.eq(i).fadeIn();
                    $oli.eq(i).addClass('active');
                }
            });
        }
        function move(){
            timer = setInterval(function(){
                now ++ ;
                now %= $uli.length;
                fn();
            },2000);
        }
        move();
        $wrap.hover(function(){
            clearInterval( timer );
            $dir.show();
        },function(){
            move();
            $dir.hide();
        });
        $oli.hover(function(){
            now = $(this).index();
            fn();
        });
        $prev.click(function(){
            now -- ;
            if( now <= 0){
                now = $uli.length-1;
            }
            fn();
        });
        $next.click(function(){
            now ++ ;
            now%=$uli.length;
            fn();
        });
    })();//渐变轮播图
    (function(){
        var $text = $('.search input');
        var $arrval = $text.val();
        $text.focus(function(){
            if( $(this).val() == $arrval ){
                $(this).val('');
            }
        }).blur(function(){
            if( $(this).val() == '' ){
                $(this).val($arrval);
            }
        });
    })();//搜索栏中的获取光标/失去光标事件
    (function(){
        $('.Carousel').each(function(){
            var $wrap = $(this);
            var $day = $(this).children('ul');
            var $aUl = $day.children('li');
            var $width = $wrap.find($aUl).width();
            var $dir = $wrap.find($('.dir'));
            var $prev = $wrap.find($('.dir .prev'));
            var $next = $wrap.find($('.dir .next'));
            var $oli = $wrap.find($('ol li'));

            fn($wrap,$day,$aUl,$width,$prev,$next,$oli,$dir);
        });
        function fn( wrap,main,aUl,width,prev,next,oli,dir){
            var now = 1;
            var nowli = 0;
            var timer = null;
            var b = true;

            $(aUl.eq(0)).clone(true).appendTo(main);
            $(aUl.eq(aUl.length-1)).clone(true).prependTo(main);
            function move(){
                oli.removeClass('active');
                oli.eq(nowli).addClass('active');
                if( now >= aUl.length+2 ){
                    main.css('left',-width );
                    now = 2;
                }
                main.stop().animate({
                    left:-width*now
                },500,function(){
                    b = true;
                    if( now <= 0 ){
                        now = aUl.length;
                        main.css('left',-width*now);
                    }
                });
            }
            function go(){
                dir.hide();
                timer = setInterval(function(){
                    nowli++;
                    nowli%=oli.length;
                    now ++ ;
                    move();
                },2000);
            }
            go();
            wrap.hover(function(){
                dir.show();
                clearInterval( timer );
            },go);
            prev.click(function(){
                if( b ){
                    nowli--;
                    nowli%=oli.length;
                    now--;
                    move();
                    b = false;
                }
            });
            next.click(function(){
                if( b ){
                    nowli++;
                    nowli%=oli.length;
                    now++;
                    move();
                    b = false;
                }
            });
            oli.hover(function(){
                nowli = $(this).index();
                now = $(this).index()+1;
                move();
            });
        }
    })();//无缝轮播
    (function(){
        var $pic = $('.ray');
        var $ray = null;
        var $nooff = true;
        $pic.hover(function(){
            if($nooff){
                $nooff = false;
                $ray = $(this).find('b');
                $ray.animate({
                    left:350
                },1000,function(){
                    $ray.css('left','-120px');
                    $nooff = true;
                });
            }
        },function(){
            return;
        });
    })();//移入图片的光线
    (function(){
        var $oUl = $('#main .f12 .review ul');
        var $aLi = $('#main .f12 .review ul li');
        var num = 0;
        var timer = null;

        $($aLi.eq(0)).clone(true).appendTo($oUl);
        $($aLi.eq(1)).clone(true).appendTo($oUl);
        $($aLi.eq($aLi.length-1)).clone(true).prependTo($oUl);
        $($aLi.eq($aLi.length-2)).clone(true).prependTo($oUl);
        function fn(){
            num++;
            if(num == $aLi.length+1){
                num = 1;
                $oUl.css('top','-720px');
            }
            $oUl.animate({
                top:-720 - ( -120*num )
            },500);
        }
        function move(){ timer = setInterval(fn,2000);}
        move();
        $aLi.hover(function(){
            clearInterval( timer ) ;
        },function(){
            move();
        });
    })();//上下轮播
    (function(){
        $('.sale').each(function(){
            var $wrap = $(this);
            var $sub = $wrap.find('ul li');
            var $big = $('#main .f12 .sale .big');
            fn($sub);
            fn($big);
            function fn(wrap){
                wrap.hover(function(){
                    $(this).find('img').stop().animate({left:-10},200);
                },function(){
                    $(this).find('img').stop().animate({left:0},200);
                });
            }
        });
    })();//移入图片偏移
    (function(){
        $('#user_side ul').each(function(){
            var $wrap = $(this);
            var $aUl = $wrap.find('li');
            fn($wrap,$aUl);
        });
        function fn($wrap,$Ul){
            var $a = $wrap.find('a');
            var $aLi = $wrap.find('span');
            $Ul.hover(function(){
                var _this = $(this).index();
                $a.eq(_this).addClass('active');
                $aLi.eq(_this).css('background','#c81623');
                $aLi.eq(_this).stop().animate({
                    right:32
                },200)
            },function(){
                $a.removeClass('active');
                $aLi.css('background','#7a6e6e');
                $aLi.stop().animate({
                    right:-62
                },200)
            });
        }
    })();//右边的用户工具栏
    (function(){

        var aa = {
            main:$('#main'),
            F1:$('#F1'),
            getHeight:function(){
                return this.F1.height();
            },
            getLeft:function(){
                return this.F1.offset().left;
            },
            getTop:function(){
                return this.main.offset().top;
            },
            elevator:$('#elevator'),
            elevChidren:function(){
                return this.elevator.find('li');
            },
            getShop:function(){
                return this.main.children('.shop:not(.f12)');
            },
            floor:[],
            noOff:true
        };
        aa.getShop().each(function(){
            var iTop = $(this).offset().top;
            aa.floor.push({top:iTop,iTop:iTop+$(this).height()})
        });

        console.log(aa.floor );

        var elevator = function(){};
        elevator.prototype = {

            position:function(){
                aa.elevator.css('left',aa.getLeft()-50 );
                return this
            },
            roll:function(){
                if( $(document).scrollTop() + ( $(window).height() / 2 ) > aa.getTop() && $(document).scrollTop() + $(window).height() < aa.getTop() + aa.main.height() ){
                    aa.elevator.show();
                }else{
                    aa.elevator.hide();
                }
                aa.getShop().each(function(i,elem){
                    if( aa.noOff ){
                        if( $(document).scrollTop() > aa.floor[i].top && $(document).scrollTop()< aa.floor[i].iTop ){
                            aa.elevChidren().eq(i).addClass('active').siblings().removeClass('active');
                        }
                    }
                });
                return this
            }
        };
        var a = new elevator();
        a.position();
        $(window).on('resize',function(){
            a.position();
        });
        $(window).scroll(a.roll);
        a.roll();
        aa.elevator.delegate('li','click',function(){
            var _index = $(this).index();
            aa.noOff = false;
            $('html,body').animate({scrollTop: aa.floor[_index].top }, 400,function(){ aa.noOff = true });
            $(this).addClass('active').siblings().removeClass('active');
            return false
        })
    })();//电梯&&改变窗口大小事件
});
/**
 * Created by Administrator on 2015/11/28.
 */
$(function(){
    (function(){
        var $Text = $('#search').find('input');
        var _$Text = $('#search_roll').find('input');
        var $Now = '输入商品或品牌进行搜索';
        var _$Now = '感恩购物狂欢节';
        fn($Text,$Now);
        fn(_$Text,_$Now);
        function fn(text,now){
            text.focus( function(){
                if($(this).val() == now){
                    $(this).val('');
                }
            }).blur(function(){
                if($(this).val()==''){
                    $(this).val(now);
                }
            });
        };
    })();//点击搜索栏事件//
    (function(){
        var $Nav = $('#nav ul li').eq(0);
        var $Menu = $('#nav .menu');
        var $Li = $('#nav .menu ul li');
        var $Icon = $('#nav .menu ul li a');
        var $open = $('.open_menu').children('ul').children('li');
        var timer = null;
        var timer_open = null;
        var timer_x = null;
        var Above = 0;

        function _show(){$Nav.addClass('menu_active');clearInterval(timer);}
        function mob(NowIndex){
            var num = 410 + NowIndex * 41;
            $Icon.eq(NowIndex).stop().animate({
                left:-5
            },200);
            $Icon.eq(NowIndex).css('color','#1d75d9');
            $Icon.eq(NowIndex).css('background-position','0 -'+ num + 'px');
            $open.eq(NowIndex).css('display','block').css('z-index','50');
            $Li.eq(NowIndex).css('background','#ededed');
        };
        function back(_NowIndex){
            num = _NowIndex * 41 ;
            $Icon.eq(_NowIndex).stop().animate({
                left:0
            },200);
            $Icon.eq(_NowIndex).css('color','#fff');
            $Icon.eq(_NowIndex).css('background-position','0 -'+ num + 'px');
            $Li.eq(_NowIndex).css('background','rgba(0,0,0,0.8)');
            timer_open = setTimeout( function(){
                $open.eq(_NowIndex).hide();
            },1000);
            $open.eq(_NowIndex).css('z-index','0');
            $open.hide();
        };
        function Disappear(){
            timer = setTimeout(function(){
                $Nav.removeClass('menu_active');
                $open.css('display','none');
                $Menu.slideUp();
            },1000)
        };
        $Nav.hover(function(){
            _show();
            $Menu.slideDown(200);
        },function(){
            Disappear();
        });
        $Menu.hover(function(){_show()},function(){Disappear();});

        $Li.hover(function(){
            clearInterval(timer_x);
            clearInterval( timer_open );
            var $index = $(this).index();
            var Li_a = $(this).eq('a');
            mob( $index );
        },function(){
            var _$index = $(this).index();
            //timer_open = setTimeout(function(){$open.eq(_$index).hide()},100)
            back(_$index);
        });
        $open.hover(function(){
            clearInterval( timer_open );
            clearInterval( timer );
            mob($(this).index());
        },function(){
            //clearInterval( timer_open );
            Disappear();
            back($(this).index());
        });
    })();//移入导航nav下拉弹出menu
    (function(){
        var _$aLi = $('#Carousel').children('ul').children('li');
        var _$oLi = $('#Carousel').children('ol').children('li');
        var $shop = $('.Shopping');
        _move( _$aLi,_$oLi,3000);  //首页区域的轮播
        $('.Shopping').each(function(){
            var $wrap = $(this);
            var $aLi =  $wrap.find('.shopping_side .Carousel ul li');
            var $oLi =  $wrap.find('.shopping_side .Carousel ol li');
            var _$aLi =  $wrap.find('.shopping_side .shop_Switch .pic_b');
            var _$oLi =  $wrap.find('.shopping_side .shop_Switch .title ol li');
            _move($aLi,$oLi,3000);
            _move(_$aLi,_$oLi,3000);
        });
        function _move(_aLi,_oLi,time) {
            var $aLi = _aLi;
            var $oLi = _oLi;
            var $oWrap = $('#Carousel');
            var $prev = $('#Carousel .prev');
            var $next = $('#Carousel .next');
            var $iNow = 0;
            var timer = null;
            fnFade();
            $oLi.hover(function () {
                clearInterval(timer);
                $iNow = $(this).index();
                fnFade();
                setTimeout(move, 3000);
            });
            $aLi.hover(function () {
                clearInterval(timer);
            }, function () {
                setTimeout(move, 3000);
            });
            function fnFade() {
                $aLi.each(function (i) {
                    if (i != $iNow) {
                        $aLi.eq(i).fadeOut().css('z-index', '1');
                        $oLi.eq(i).removeClass('active');
                    } else {
                        $aLi.eq(i).fadeIn().css('z-index', '2');
                        $oLi.eq(i).addClass('active');
                    }
                });
            };
            function move() {
                clearInterval(timer);
                timer = setInterval(function () {
                    $iNow++;
                    $iNow %= $aLi.length;
                    fnFade();
                }, time)
            };
            $oWrap.hover(function () {
                $prev.show();
                $next.show();
            }, function () {
                $prev.hide();
                $next.hide();
            });
            function _show(_this) {
                _this.css('opacity', '0.5');
            };
            function _hide(_this) {
                _this.css('opacity', '0.1');
            };
            $prev.hover(function () {
                _show($prev)
            }, function () {
                _hide($prev)
            });
            $next.hover(function () {
                _show($next)
            }, function () {
                _hide($next)
            });
            $prev.click(function () {
                if ($iNow == 0) {
                    $iNow = $aLi.length;
                }
                $iNow--;
                fnFade();
            });
            $next.click(function () {
                $iNow++;
                $iNow %= $aLi.length;
                fnFade();
            });
            move()
        };
    })();//轮播图
    (function(){
        var $aLi = $('.time_Shopping ul li');
        var $aText = $('.time_Shopping ul li .text');
        var TextArr = [
            '799元荣耀4X增强版现货开售！',
            '【 美的果汁节，热销型号买一送一http://u.yixun.com/e9323c】三档速度调节',
            '终于盼到啦！逆袭大降价10点开枪，仅有300台！外星人的小伙伴 全高清屏幕 15.6英寸大尺寸，火红战队点燃每一个感官！',
            '全新大吸力侧吸，17m3/min强排进吸，触控按键超静音。搭配主火中置灶具，劲火精控，安全省气',
            '小泰克（little tikes） 627354MX2 三合一推行三轮车红色',
            '三星（SAMSUNG）S22C130N 21.5英寸LED背光液晶显示器'
        ];
        var numArr = ['￥5000','￥300.99','￥800.9','￥909','￥44.56','￥87.22'];
        $aLi.hover(function(){
            var _index = $(this).index();
            $(this).prepend('<div class="wrap"><a href="#"><div class="Details">'+ TextArr[_index] +'</div></a><div class="Price"><span>'+ numArr[_index] +'</span><a href="#">抢购</a></div></div>')
            $aText.eq( _index ).hide();
        },function(){
            _index = $(this).index();
            $(this).find('.wrap').remove();
            $aText.eq( _index ).show();
        });
    })();//移入商品出现黑色透明遮罩效果
    (function(){
        var $oDiv = $('.Report').children('div');;
        var $oUl = $('#Countdown .Report>ul');
        var timer = null;
        function Switch(Me,He){
            Me.hide();
            He.show();
        }
        $oDiv.hover(function(){
            Switch($(this),$oUl)
        });
        $oUl.hover(function(){},function(){timer = setTimeout(function(){Switch($oUl,$oDiv)},500);});

    })();//移入【公告】展开的小菜单
    (function(){
        var $Carousel = $('.F1 .shopping_side .Carousel');
        var $Ul = $('.F1 .shopping_side .Carousel ul');
        var $Height = $Ul.height()+'px';
        var $Width = $Ul.width()+'px';
        $Carousel.css('width',$Width);
        $Carousel.css('height',$Height);

        var $Carousel2 = $('.F2 .shopping_side .Carousel');
        var $Ul2 = $('.F2 .shopping_side .Carousel ul');
        var $Height2 = $Ul2.height()+'px';
        var $Width2 = $Ul2.width()+'px';
        $Carousel2.css('width',$Width2);
        $Carousel2.css('height',$Height2);
    })();//用于处理父级无法撑开带absolute定位的子级的问题
    (function(){
        $('.Shopping').each(function(){
            var $wrap = $(this);
            var $fa = $wrap.find('.shopping_side .pic_t li');
            var $sub = $wrap.find('.shopping_side .pic_t li img');

            $fa.hover(function(){
                $sub.eq($(this).index()).stop().animate({left:-5},200)
            },function(){
                $sub.eq($(this).index()).stop().animate({left:0},200)
            });
        });
    })();//购物区移入图片发生左-5px的小运动
    (function(){
        var $aLi = $('#Shopping .F2 .shopping_side .shop_main .pic_r ul li');
        var $aImg = $('#Shopping .F2 .shopping_side .shop_main .pic_r a');
        //#Shopping .F2 .shopping_side .shop_main .pic_r ul .active span
        var _$this = null;
        var timer = null;
        $aLi.hover(function(){
            if($(this).attr('Now')== 1){  //如果自定义属性NOW为1（既是已经有active属性的）就让他直接跳出不执行
                return;
            };
            clearInterval( timer );
            _$this = $(this).index();
            timer = setTimeout( function(){
                $aLi.removeClass('active',500).attr('Now',0).find('span').remove();
                $aImg.fadeOut();
                $aImg.eq(_$this).fadeIn();
                $aLi.eq(_$this).addClass('active',500,function(){
                    $aLi.eq(_$this).append('<span>></span>');
                }).attr('Now',1);
            },200);
        });
    })();//购物区2F右边的淡入淡出交互
    (function(){
        var $oUl = $('#Shopping .shop_end .Rcm_end .elt .top_roll li');
        var $aLi = $('#Shopping .shop_end .Rcm_end .elt .top_roll_wrap').children('div');
        var $height = $aLi.outerHeight();
        var timer = null;
        $($aLi.eq(0)).clone(true).appendTo($oUl);
        $($aLi.eq(1)).clone(true).appendTo($oUl);
        var num = 1;
        function move(){
            if( num == $aLi.length+2-1){
                num = 1;
                $oUl.css('top','0');
            };
            $oUl.animate({
                top:-$height*num
            },500);
            num++;
            console.log(num)
        }
        setInterval( move,5000);
    })();//底部评论区的无缝滚动轮播
    (function(){
        var $search = $('#search_roll');
        function toChangge(){
            var $height = $(window).height();
            var $roll = $(document).scrollTop();
            if( $roll >= $height){
                $search.animate({
                    top:0
                },1000)
            }else if( $roll<=$height ){
                $search.animate({
                    top:-45
                },1000)
            }
        };
        setInterval( toChangge,1000 )
        //$(window).scroll(toChangge);
    })();//当滚动区超出当前可视区的高度之时发生的事情
});
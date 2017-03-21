/**
 * Created by Fate on 2016/4/28.
 */
var int = function(){};
int.prototype = {
    text:function( inp,main ){
        inp.val( main );
        inp.on('focus',function(){
            if( $(this).val()== main ){
                $(this).val('');
            }
        });
        inp.blur('blur',function(){
            if( $(this).val()==main || $(this).val()== '' ){
                $(this).val(main);
            }
        })
    },
    rollTop:function(obj){
        $(function(){
            var n =  ((($(document).width()) - ($('.main').width())) / 2) + $('.main').width() + 36;
            var roll = $('.rolltop');
            roll.css('opacity',0.4);
            roll.hide();
            roll.click(function(){
                $(document).scrollTop(0);
            });
            roll.css({
                left:n,
                top:250
            });
            $(window).on('resize',function(){
                n =  ((($(document).width()) - ($('.main').width())) / 2) + $('.main').width() + 36;
                roll.css({
                    left:n,
                    top:250
                });
            });
            $(window).scroll(function(){
                if( $(document).scrollTop() > $(window).height() / 2){
                    roll.show();
                }else{
                    roll.hide();
                }
            });
            roll.hover(function(){
                $(this).animate({
                    opacity:0.6
                },200)
            },function(){
                $(this).animate({
                    opacity:0.4
                },200)
            })
        });
    },
    slider:function( obj,date,e){
        var slider = obj;
        var con = slider.find('ul');
        var pic = slider.find('ul li');
        var btn = slider.find('ol li');
        var ol = slider.find('ol');
        var w = pic.width();
        var len = pic.length;
        var num = 0;
        var timer = null;
        var time = null;
        var noOff = true;
        var prev = slider.find ($('.prev'));
        var next = slider.find( $('.next'));

        prev.css("opacity",0.4);
        next.css("opacity",0.4);
        obj.find('p').css("opacity",0.8);

        ol.css('left',w/2 - ol.width()/2 );
        function roll(){
            btn.eq(num).addClass('active').siblings().removeClass('active');
            con.stop().animate({
                left:num*-w
            },function(){
                noOff = true;
            })
        }
        function judge(){
            if( num >= len ){
                num = 0;
            }else if( num < 0 ){
                num = len-1;
            }
        }
        function go(){
            timer = setInterval(function(){
                num++;
                judge();
                roll();
            },date)
        }
        go();
        ol.delegate('li',e,function(){
            num = $(this).index();
            roll();
        });
        slider.hover(function(){
            prev.fadeIn(200);
            next.fadeIn(200);
            clearTimeout( timer );
        },function(){
            prev.fadeToggle(200);
            next.fadeToggle(200);
            timer = setTimeout( go,2000);
        });
        prev.click(function(){
            if( noOff ){
                noOff = false;
                num ++;
                judge();
                roll()
            }
        });
        next.click(function(){
            if( noOff ){
                noOff = false;
                num --;
                judge();
                roll()
            }
        });
        obj.delegate("span","mouseover mouseout",function(e){
            if(e.type == "mouseover"){
                $(this).animate({
                    opacity:0.6
                },200)
            }else{
                $(this).animate({
                    opacity:0.4
                },200)
            }
        });
    },
    chaList:function(obj,data){
        $(function(){
            var aLi = obj.find('li');
            var iLen =aLi.length;
            for( var i = 0; i<data.length; i++ ){
                var _index = getShort();
                var oDiv = $('<div>');
                var oWrap = $('<a>').attr('href',data[i].link).addClass('wrap');
                var oImg = $('<img width="260"/>').attr('src',data[i].pic)
                oWrap.append( oImg );
                var date = $('<span>').html(data[i].date);
                var oTitle = $('<h4>').html(data[i].title);
                var oDetailed = $('<a>').attr('href',data[i].link).html("[详细]").addClass('detailed');
                var oP = $('<p>').html(data[i].main + "<a href="+ data[i].link +">[详细]</a>" );
                //var oDetailed = $('<a>').attr('href',data[i].link).html("[详细]").addClass('detailed');
                oDiv.append(oWrap).append(oTitle).append(oP).append( date );
                aLi.eq(_index).append(oDiv);
            }
            function getShort(){
                var index = 0;
                var ih = aLi[index].offsetHeight;
                for( var i = 1;i<iLen;i++){
                    if( aLi[i].offsetHeight < ih ){
                        index = i;
                        ih = aLi[i].offsetHeight;
                    }
                }
                return index;
            }
        })
    },
    textmouse:function(){
        $(function(){
            $('.info-t').find('dl').hover(function(){
                $(this).find('dt').css("color","#006EC0");
                $(this).find('dd').css("color","#000")
            },function(){
                $(this).find('dt').css("color","#000");
                $(this).find('dd').css("color","#747474")
            });
            $('.article-l li').hover(function(){
                $(this).find('h5').css("color","#006EC0");
                $(this).find('p').css("color","#000");
            },function(){
                $(this).find('h5').css("color","#000");
                $(this).find('p').css("color","#5c5c5c");
            })
        })
    }
};
var init = new int();
init.textmouse();

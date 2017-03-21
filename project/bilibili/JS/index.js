var of = false;
var ff = null;
$(function(){
    (function(){
        var aLi = $('.nav ul>li');
        var oLi = $('.nav ol li');
        var timer = null;
        var This = null;
        var n = true;
        var index = null;
        var nav = $('.nav');
        var sub_nav = $('.sub_nav');
        var b =  $('.nav ul>li:gt(0)');
        var off = $('.off');

        //setTimeout(function(){ $('#main').css('opacity', '1'); },100);

        off.click(function(){

        });

        nav.delegate('ol li','click',function(){
            var i = $(this).index();
            var f = $(this).closest('.f').index();
            sub_nav.find('ul').eq(f-1).find('li').eq(i+1).addClass('active').siblings().removeClass('active');
        });
        //setTimeout(function(){ b =  $('.nav ul>li:gt(0)');alert(b.length );},2000);
        $('.home').click(function(){

            sub_nav.hide();
            $(this).addClass('s2').siblings().removeClass('s2');
        });
        nav.delegate('.on:gt(0)','click',function(e){
            var ind = $(this).index()-1;
            sub_nav.show();
            sub_nav.find('ul').eq(ind).show().siblings().hide();
            $(this).addClass('s2').siblings().removeClass('s2');
        });


        aLi.hover(function(){
            //$(this).find('h5').css('color','#07a4d7');
            n = true;
            $(this).find('ol').slideDown(100);
        },function(){
            This = $(this);
            This.find('ol').slideUp(100);
            /*if( n && This.index() != index ){
                $(this).find('h5').css('color','#000');
            }*/
            /*if( $(this).siblings().attr('sz') == "false" ){
                $(this).find('h5').css('color','#000');
            }*/
        });
        oLi.hover(function(){
            $(this).find('.r').animate({
                left:0
            },200)
        },function(){
            $(this).find('.r').animate({
                left:100
            },200)
        });
        $('.on').click(function(){
            if( $(this).attr('class') == 'off' ){
                alert("施工中!");

            }
            //index = $(this).index();
            n = false;
            //$(this).attr('cz',true).siblings().attr('sz',false);
            $(this).addClass('click').siblings().removeClass('click');

        });

        aLi.find('h5').click(function(event){

            $('.sub_nav').find('ul').eq( $(this).closest('li').index()-1 ).find('li').eq(0).trigger("click");

        });

        nav.delegate(' ul li','mouseover mouseout',function(e){
            if(e.type == "mouseover"){
                n = true;
                index = $(this).index();
                $(this).find('ol').stop().slideDown(100);
                $(this).addClass('active');

            }else if(e.type == "mouseout"){
                This = $(this);
                This.find('ol').stop().slideUp(100);
                $(this).removeClass('active');
            }
        });
        nav.delegate(' ol li','mouseover mouseout',function(e){
            if(e.type == "mouseover"){
                $(this).find('.r').stop().animate({
                    left:0
                },200)
            }else if(e.type == "mouseout"){
                $(this).find('.r').stop().animate({
                    left:100
                },200)
            }
        });

        sub_nav.delegate('ul li','click',function(){
            $(this).closest('ul').find('a').closest('li').removeClass('active');
            $(this).find('a').closest('li').addClass('active');
        });

        /*var navData = {
            cover:{f:sub_nav},
            vocaloid:$('.sub_nav').find('li').eq(0)
        };
        for( d in navData ){
            alert(navData[d].html());
        }*/


    })();//nav导航栏下拉菜单
    (function(){
        var ac = $('.my-home');
        var chat = $('.chat');
        setInterval(function(){

            ac.animate({
                left:-64
            },1000,function(){
                chat.fadeToggle(1000);
                setTimeout(function(){
                    ac.animate({
                        left:-80
                    })
                },2000)
            })
        },9000)
    })();//ac娘
    (function(){
        function cen(obj){
            var w = parseInt( $(document).width() );
            var iw = parseInt( obj.width() );
            obj.css('left', (w/2) - (iw /2) );
        }
        function h(obj){
            var h = parseInt( $(window).height() );
            var ih = parseInt( obj.height() );
            obj.css('top', (h/2) - (ih /2) );
        }
        cen( $('.loding') );
        cen( $('.Popup') );
        h( $('.Popup') );

        $(window).resize(function(){
            cen( $('.loding') );
            cen( $('.Popup') );
            h( $('.Popup') );
        });

        $('.off').find('a').click(function(){
            $('.p-w').fadeIn();
            return false;
        });
        $('.btn').click(function(){
            $('.p-w').fadeOut();
        });


    })();//杂项
}); //DOM操作部分

//angular部分;
var m1 = angular.module('myApp',['ngRoute']);
var N = false;
var u = true;
//一些公用的数据
m1.controller('public',['$scope','$rootScope','$timeout','animate','nav','home','public','animate','music','newAnimate',
    function($scope,$rootScope,$timeout,animate,nav,home,public,animate,music,newAnimate){


        $scope.home = home;
        $scope.animate = animate;
        $scope.music = music;
        $scope.public = public;
        $scope.newAnimate = newAnimate;



            home.ajaxData(function(){

                setTimeout(function(){

                    var name = '#' + $('#main').attr('myname');
                    var nav = $('.nav').find('a');
                    nav.each(function(){
                        if( $(this).attr('href') == name ){

                            $(this).trigger("click");
                            $(this).closest('.f').addClass('click');

                        }
                    });
                },100);

            });

        animate.ajaxData(function(){




        });
        $scope.nav = nav;

        var timer = null;

           $scope.renderFinish = function(){
               //alert( $('.slider').html() );
               //alert( $('#main').attr('myname') );
           };

}]);//一些公用的数据


m1.controller('home',['$scope',function($scope){

}]);


angular.module('myApp').config( [
    '$compileProvider',
    function( $compileProvider )
    {
        $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|javascript:void(0)|mailto|tel|file|sms):/);
        // Angular v1.2 之前使用 $compileProvider.urlSanitizationWhitelist(...)
    }
]);


/*m1.controller('homeCallback',['$scope',function($scope){
    var aLi = $('.floor');
    var oLi = $('.floorR');
    var aliIndex = null;
    var arr = [];
    var n = null;

    oLi.click(function(){
        getArray();
    });

    function getArray(){

        //aLi.eq(3).after(aLi.eq(0));
        //aLi.eq(0+1).before(aLi.eq(3));
        oLi.each(function(){
            var i = $(this).index();
            n = $(this).index();
            var This = $(this);

            alert( aLi.eq(0).index() );
            aLi.each(function(i,elem){
                if( $(this).eq(i).attr('floor') == This.attr('floor') && i != $(this).eq(i).index() ){
                    alert(1)
                }
            });
        })
    }

}]);*/

//下面用来定义自定义标签/指令

m1.config(['$routeProvider',function($routeProvider){
    $routeProvider.when('/home',{
        templateUrl:'Page/Home/home.html',
        resolve:{
            out:function(){

            }
        }
    }).when('/music',{
        templateUrl:'Page/Music/music.html'
    }).when('/animate',{
        templateUrl:'Page/Animate/animate.html'
    }).when('/cover',{
        templateUrl:'Page/Music/music-cover.html'
    }).when('/vocaloid',{
        templateUrl:'Page/Music/music-vocaloid.html'
    }).when('/MAD',{
        templateUrl:'Page/animate/animate-MAD.html'
    }).when('/MMD',{
        templateUrl:'Page/animate/animate-MMD.html'
    }).when('/newAnimate',{
        templateUrl:'Page/newAnimate/newAnimate.html'
    }).when('/end',{
        templateUrl:'Page/newAnimate/end.html'
    }).when('/continuity',{
        templateUrl:'Page/newAnimate/continuity.html'
    }).otherwise({
        redirectTo:'/home'
    })
}]); // 单页面切换.

var m = false;

m1.directive('repeatFinish',function(){
    return {
        link: function(scope,element,attr){

            if(scope.$last == true  ){

                //scope.$eval( attr.repeatFinish );
                setTimeout(function(){
                    var num = 1;
                    var timer = null;
                    var oUl = element.closest('.slider').find('ul');
                    var aLi = element.closest('.slider').find('ul>li');
                    var o = element.closest('.slider').find('ol');
                    var oLi = element.closest('.slider').find('ol li');
                    var time = null;
                    var w = aLi.width();
                    var noOff = true;
                    var nAnimate = $('.newAnimate');
                    var title = element.closest('.slider').find('.t');



                    if( oLi.closest('#main').attr('myname') == 'newAnimate' ){

                        oLi = element.closest('.slider').find('ol').eq(1).find('li');
                        o = element.closest('.slider').find('ol').eq(1);
                        var ow = oLi.length * oLi.outerWidth(true);
                        o.css('width',ow );
                        title.css('left',ow+20);
                        element.closest('.slider').delegate("ol li", "mouseover mouseout", function (e) {
                            clearInterval( timer );
                            num = $(this).index();
                            roll();
                            timer = setTimeout(go,2000)
                        });
                    }else{
                        e();
                    }



                    go();
                    function roll() {
                        title.eq(num).addClass('ac').siblings().removeClass('ac');
                        oLi.eq(num).addClass('active').siblings().removeClass('active');
                        oUl.stop().animate({
                            left: num * -w
                        }, 200,function(){
                            noOff = true;
                        })
                    }

                    function go(){
                        clearInterval( timer );
                        timer = setInterval(function () {
                            noOff = false;
                            if (num >= aLi.length) {
                                num = 0;
                                oUl.stop().animate({
                                    left: 0
                                }, 200)
                            }
                            roll();
                            num++;
                        }, 2000);
                    }

                    function e(){
                        element.closest('.slider').delegate("ol li", "click mouseover mouseout", function (e) {
                            if (e.type == "click") {
                                if(noOff == true){
                                    noOff = false;
                                    clearInterval( timer );
                                    num = $(this).index();
                                    roll();
                                    timer = setTimeout(go,2000)
                                }
                            } else if (e.type == "mouseover") {
                                if ($(this).attr('class') != 'active') {
                                    $(this).addClass('hover');
                                }
                            } else if (e.type == "mouseout") {
                                if ($(this).attr('class') != 'active') {
                                    $(this).removeClass('hover');
                                }
                            }
                        });
                    }
                },100)
            }
        }
    }
});



m1.directive('slider',function(){
    return{
        restrict:'E',
        replace:true,
        scope:{
            myData:'=myData',
            myClass:'@'
        },
        controller:['$scope',function($scope){
            //这里用来存放所有轮播图之间公用的一些数据;
        }],
        templateUrl:'common/directive/slider.html',
        link:function(scope,element,attr){
            var t = null;
        }
    }
}); // 自定义指令之轮播图

m1.directive('homeList',function(){
    return{
        restrict:'E',
        replace:true,
        scope:{
            myData:'=myData',
            myClass:'@'
        },
        controller:['$scope',function($scope){
            //这里用来存放所有轮播图之间公用的一些数据;
        }],
        templateUrl:'common/directive/partition.html',
        link:function(scope,element,attr){

        }
    }
});

m1.directive('partition',function(){
    return{
        restrict:'E',
        replace:true,
        scope:{
            myData:'=myData',
            myClass:'@'
        },
        controller:['$scope',function($scope){
            //这里用来存放所有轮播图之间公用的一些数据;
        }],
        templateUrl:'common/directive/partition.html',
        link:function(scope,element,attr){
            element.delegate("li","mouseover mouseout",function(e){
                if(e.type == "mouseover"){
                    $(this).find('p').stop().animate({
                        height:34
                    },200)
                }else if(e.type == "mouseout"){
                    $(this).find('p').stop().animate({
                        height:16
                    },200)
                }
            });

        }
    }
});

m1.directive('ranking',function(){
    return{
        restrict:'E',
        replace:true,
        scope:{
            myData:'=myData',
            myClass:'@'
        },
        controller:['$scope',function($scope){
            //这里用来存放所有轮播图之间公用的一些数据;
        }],
        templateUrl:'common/directive/ranking.html',
        link:function(scope,element,attr){
            /*element.delegate('li',"mouseover mouseout",function(e){
                if(e.type == "mouseover"){
                    $(this).addClass('first').siblings().removeClass('first');
                }else if(e.type=="mouseout"){

                }
            })*/
        }
    }
});

m1.directive('newAnimate',function(){
    return{
        restrict:'E',
        replace:true,
        scope:{
            myData:'=myData',
            myClass:'@'
        },
        controller:['$scope',function($scope){
            //这里用来存放所有轮播图之间公用的一些数据;
        }],
        templateUrl:'common/directive/newAnimate.html',
        link:function(scope,element,attr){
            element.find('ol').delegate('li','click',function(){
                element.find('.tab>li').eq( $(this).index()).show().siblings().hide();
                $(this).addClass('active').siblings().removeClass('active');
            });
            element.find('.btn').click(function(){
                if( $(this).html() == "全部" ){
                    var h = element.find('.week').eq(0).height();
                    element.find('.tab').height(h);
                    element.height(h+50+21);
                    $(this).html("收起");
                }else{
                    element.find('.tab').height("300");
                    $(this).html("全部");
                    element.height(300+50+21);
                }
            });

            /*$(window).resize(function(){
                element.find('.btn').trigger('click');
            });*/
        }
    }
});

m1.directive('week',function($timeout){
    return{
        restrict:'A',
        replace:false,
        scope:{
            myData:'=myData',
            myClass:'@'
        },
        controller:['$scope',function($scope){
            //这里用来存放所有轮播图之间公用的一些数据;
        }],
        templateUrl:'common/directive/week.html',
        link:function(scope,element,attr){

        }
    }
});

m1.directive('animateR',function($timeout){
    return{
        restrict:'E',
        replace:true,
        scope:{
            myData:'=',
            myClass:'@',
            two:'='
        },
        controller:['$scope',function($scope){
            //这里用来存放所有轮播图之间公用的一些数据;
        }],
        templateUrl:'common/directive/animateR.html',
        link:function(scope,element,attr){

        }
    }
});

m1.directive('hot',function($timeout){
    return{
        restrict:'E',
        replace:true,
        scope:{
            myData:'=',
            myClass:'@'
        },
        controller:['$scope',function($scope){
            //这里用来存放所有轮播图之间公用的一些数据;
        }],
        templateUrl:'common/directive/hot.html',
        link:function(scope,element,attr){

            /*setTimeout(function(){
                $('.hot-list li').hover(function(){
                    $(this).find('.title').fadeOut();
                    $(this).find('.info').fadeIn();
                },function(){
                    $(this).find('.title').fadeIn();
                    $(this).find('.info').fadeOut();
                })
            },500);*/
            if( element.closest('#main').attr('myname') != "newAnimate" ){
                element.delegate('li','mouseover mouseout',function(e){
                    if(e.type == "mouseover"){
                        $(this).find('.info').stop().animate({
                            opacity:1
                        }).show();
                        $(this).find('.title').stop().animate({
                            opacity:0
                        }).show();
                    }else if(e.type == "mouseout"){
                        $(this).find('.info').stop().animate({
                            opacity:0
                        });
                        $(this).find('.title').stop().animate({
                            opacity:1
                        }).show();
                    }
                })
            }
        }
    }
});

m1.directive('partitionList',function($timeout){
    return{
        restrict:'E',
        replace:true,
        scope:{
            myData:'=',
            myClass:'@',
            myName:'@'
        },
        controller:['$scope',function($scope){
            //这里用来存放所有轮播图之间公用的一些数据;
        }],
        templateUrl:'common/directive/partition-list.html',
        link:function(scope,element,attr){
            var open = element.find('.open');
            var label = element.find('.label ul');
            var btn = open.find('.btn');

            open.on('click',function(){
                if( btn.html() == "展开"){
                    btn.html("收起");
                    label.stop().animate({
                        maxHeight:999
                    });
                }else{
                    label.stop().animate({
                        maxHeight:68
                    },function(){
                        btn.html("展开");
                    });
                }
            });
            /*open.timer = setInterval(function(){
                if( element.attr('myname') != "{{myName}}"){
                    //alert( element.attr('myname') );
                    var name = element.attr('myname');
                    var subNav = $('.sub_nav');
                    var navName = {
                        home:$('.nav>ul li').eq(0),
                        cover:$('.nav>ul li').eq(1)
                    };
                    for( d in navName ){
                        if( d == name ){
                            subNav.find('ul').eq(1).show();
                        }
                    }
                    clearTimeout( open.timer );
                }
            },100)*/
        }
    }
});

m1.directive('list',function($timeout){
    return{
        restrict:'E',
        replace:true,
        scope:{
            myData:'=',
            myClass:'@'
        },
        controller:['$scope',function($scope){
            //这里用来存放所有轮播图之间公用的一些数据;
        }],
        templateUrl:'common/directive/list.html',
        link:function(scope,element,attr){

        }
    }
});
var wrap = null;
setTimeout(function(){
    wrap = $('#main');
},500);
m1.directive('ngsButterbar', ['$rootScope',
        function ($rootScope) {
            return {
                link: function (scope, element) { //attrs

                    element.hide();
                    //alert(123);
                    $rootScope.$on('$routeChangeStart', function () {
                        element.fadeIn();

                        //$('div[ng-view]').css('opacity', '0.6');
                        setTimeout(function(){ $('#main').css('opacity', '0'); },100);
                    });

                    $rootScope.$on('$routeChangeSuccess', function () {
                        element.fadeOut(100);
                        setTimeout(function(){ $('#main').css('opacity', '1'); },200);
                        //$('div[ng-view]').css('opacity', '0.1');
                    });
                }
            };
        }]
);









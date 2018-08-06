/**
 * 新手引导控制对象
 * 主要负责异步请求认证检测及红包弹窗公用方法
 * 
 * @author liupoyang
 * @since 2013-12-17
 * 
 */
var noviceManager = function() {
	/**
	 * 弹出窗体HTML
	 */
	var _popupHtml =
		'<style type="text/css">' +
		'.popup_new{ width:502px; position:relative; border:3px solid #ea5a42; padding:30px 50px; background:#f9f1e4; color:#626262; display:none}' +
		'.popup_new a{color:#ea5a42; text-decoration:underline;}' +
		'.ico_pop{ background:url(' + environment.basePath + '/v2/local/img/event/jiang/ico_pop.png) no-repeat; position:absolute; width:88px; height:112px; left:50px; top:42px}' +
		'.popup_new .ico1{ background-position:0 0}' +
		'.popup_new .ico2{ background-position:0 -117px}' +
		'.popup_new .ico3{ background-position:-92px 0}' +
		'.popup_new .ico4{ background-position:-92px -117px}' +
		'.pop_rt{margin-left:116px;}' +
		'.pop_tp{ margin-top:50px}' +
		'.pop_rt .ft16{ font-size:16px; margin-bottom:26px}' +
		'.pop_rt .ft16_red{ font-size:16px; color:#ea5a42}' +
		'.pop_rt b{ font-size:24px; color:#ea5a42}' +
		'.pop_rt a.text_rt{ font-size:16px; margin-left:30px}' +
		'.pop_rt .ico_pop{width:164px; height:48px; line-height:48px; position:relative; display:inline-block; text-align:center; text-decoration:none; font-size:24px; top:-11px; left:0}' +
		'.pop_rt a.btn1{background-position:0 -239px}' +
		'.pop_rt a:hover.btn1{background-position:0 -293px; color:#fff}' +
		'.pop_rt a.btn2{background-position:0 -347px; width:180px; font-size:16px}' +
		'.pop_rt a:hover.btn2{background-position:0 -402px; color:#fff}' +
		'.pop_prompt{position:relative; border-top:1px solid #c9caca; margin-top:30px}' +
		'.pop_prompt h3{position:absolute; top:-12px; left:0; font-size:14px; background:#f9f1e4}' +
		'.pop_prompt p{font-size:12px; padding-top:15px}' +
		'.close{position:absolute; right:15px; top:15px; z-index:5}' +
		'.close a{background:url(' + environment.basePath + '/v2/local/img/event/jiang/10x10.png) no-repeat; width:10px; height:10px; display:block; font-size:0;}' +
		'</style>' +
		'<div id="newsDialog" class="dialog-main" style="width:608px">' +
		'    <div class="close"><a href="javascript:;" class="closeModal r3"><i>关闭</i></a></div>' +
		'    <div id="newsEntry" style="position:relative; z-index:3">' +     
		'        <div class="popup_new">' +
		'            <i class="ico_pop ico1"></i>' +
		'            <div class="pop_rt">' +
		'               <p class="ft16">恭喜你已完成新手任务1，获得<b>10元</b>新手专享红包！立刻投资新手专享项目还能再得新手特权红包！</p>' +
		'               <a href="/novice/" class="ico_pop btn1">立刻投资</a><a href="/couponCenter.session.action" class="text_rt">先去看看我的红包</a>' +
		'            </div>' +
		'            <div class="pop_prompt">' +
		'               <h3>温馨提示：</h3>' +
		'               <p>新手专享红包只能在新手专区投资新手专享项目时使用，每个用户最多只有一次投资新手专享项目资格。<a href="' + environment.basePath + '/event/novice/#A1" target="_blank">查看《新手专享红包使用规则》</a></p>' +
		'            </div>' +
		'         </div>' +
		'         <div class="popup_new">' +      
		'            <i class="ico_pop ico2"></i>' +
		//---没有绑定信息展示----
		'            <div class="pop_rt" style="display:none;" id="popTaskInvest4NotBindDiv">' +
		'               <p class="ft16">恭喜你已完成任务2，获得<b>新手特权</b>红包！完善用户信息还能再得5元成功进阶红包！</p>' +
		'               <a href="' + environment.basePath + '/event/novice/#A3" target="_blank" class="ico_pop btn2">看看需要完善哪些</a><a href="javascript:;" class="text_rt closeModal">以后再完善</a>' +
		'            </div>' + 
		//---/没有绑定信息展示----
		//---绑定信息展示----
		'            <div class="pop_rt" style="display:none;" id="popTaskInvest4BindedDiv">' +
		'               <p class="ft16">恭喜你已完成任务2，获得<b>新手特权</b>红包！</p>' +
		'               <a href="/couponCenter.session.action" class="ico_pop btn2" style="margin-left:80px;">看看我的红包</a>' +
		'            </div>' + 
		//---/绑定信息展示----
		'            <div class="pop_prompt">' +
		'               <h3>温馨提示：</h3>' +
		'               <p>新手特权红包仅适用于赎回新手专享项目，抵扣赎回手续费和0.5%的折让费，具体金额取决于赎回新手专享项目时的具体情况。<a href="' + environment.basePath + '/event/novice/#A2" target="_blank">查看《新手特权红包使用规则》</a></p>' +
		'            </div>' +
		'         </div>' +
		'         <div class="popup_new">' +      
		'            <i class="ico_pop ico3"></i>' +
		'            <div class="pop_rt">' +
		'               <p class="ft16">恭喜你已完成任务3，获得<b>5元</b>成功进阶红包！投资月息通定存宝通用不限额！</p>' +
		'               <a href="/invest/" class="ico_pop btn1">立刻投资</a><a href="javascript:;" class="text_rt closeModal">以后再说</a>' +
		'            </div>' +  
		'            <div class="pop_prompt">' +
		'               <h3>温馨提示：</h3>' +
		'               <p>成功进阶红包使用不限额，投资月息通、定存宝均可使用。<a href="' + environment.basePath + '/event/novice/#A3" target="_blank">查看《成功进阶红包使用规则》</a></p>' +
		'            </div>' +
		'         </div>' +
		'         <div class="popup_new">' +      
		'            <i class="ico_pop ico4"></i>' +
		'            <div class="pop_rt pop_tp">' +
		'               <p class="ft16_red">你的新手特权红包已生效！</p>' +
		'               <p class="ft16">抵扣金额会在赎回交易正式完成时计算，并以现金方式自动存入你的账户可用余额，请注意查收！</p>' +
		'            </div>' +  
		'         </div>' +
		'    </div>' +
		'</div>';
	
	 
	/**
	 * 异步请求检测
	 * @param url
	 * @param fun
	 */
	var _doCheck = function(url, fun){
		$.ajax({
			dataType: 'json',
			url: url,
			type: 'POST',
			beforeSend: function() {
			},
			success: function(data) {
				fun&fun(data);
			},
			error: function() {
			}
		});
	};
	
	return {
		/**
		 * 检测认证信息，页面上做认证标记提示
		 * 
		 */
		checkBindInfo4Mark: function(){
			_doCheck(environment.basePath + "/rest/user/checkNoviceBind", function(data){
				//错误等信息提示
				if(data.code < 0){
					return false;
				}
				
				//对已认证的项打勾
				if(data.code == 1 || data.code == 2){
					//绑定实名与否
					if(data.isBindName){
						$("#bindNameBtn2").removeClass("btn2");
						$("#bindNameBtn2").addClass("btn2_active");
					}
					//绑定手机与否
					if(data.isBindMobile){
						$("#bindMobileBtn1").removeClass("btn1");
						$("#bindMobileBtn1").addClass("btn1_active");
					}
					//绑定邮箱与否
					if(data.isBindEmail){
						$("#bindEmailBtn4").removeClass("btn4");
						$("#bindEmailBtn4").addClass("btn4_active");
						//更改链接地址
						$("#bindEmailBtn4").attr("href", environment.basePath + "/secure/changeRegisterEmail.session.action");
					}
					//绑定银行卡与否
					if(data.isBindBankCard){
						$("#bindBankCardBtn3").removeClass("btn3");
						$("#bindBankCardBtn3").addClass("btn3_active");
					}
				}
				
				//如果全部认证完就弹出浮动窗提示用户已发放红包
				if(data.code == 2){
					//弹窗
					noviceManager.popup(true, false, false, true);
				}
				
			});
		},
		
		/**
		 * 检测认证信息，若全认证完毕，则弹窗提示发放红包
		 * 
		 */
		check4Popup: function(){
			_doCheck(environment.basePath + "/rest/user/checkNoviceBind", function(data){
				//错误等信息提示
				if(data.code < 0){
					return false;
				}
				
				//如果全部认证完就弹出浮动窗提示用户已发放红包
				if(data.code == 2){
					//弹窗
					noviceManager.popup(true, false, false, true);
				}
			});
		},
		
		/**
		 * 弹出窗体，抽象成公用方法。
		 * 调用示例：popup(isBindedInfo, true) 表示弹出10元红包 或 popup(isBindedInfo, true, false) 表示弹出10元红包 或　popup(isBindedInfo, true, false, true) 表示弹出10元红包、不弹出新手特权红包、弹出5元红包
		 * 其中　isBindedInfo 表示是否已绑定过信息标识 true 已绑定，　false　未绑定
		 * 弹窗内容有：
		 * 		1、10元红包
		 * 		2、新手特权红包
		 * 		3、5元红包
		 * 		4、新手特权红包已生效
		 */
		popup: function(){
			if(arguments.length == 0){
				return false;
			}
			
			if($("#newsDialog").length == 0){
				$(document.body).append(_popupHtml);
			}
			
			//绑定信息是否完成
			var isBindedInfo = arguments[0];
			
			//处理投资任务弹窗信息特殊展示
			if(isBindedInfo){
				$("#popTaskInvest4NotBindDiv").hide();
				$("#popTaskInvest4BindedDiv").show();
			}else{
				$("#popTaskInvest4NotBindDiv").show();
				$("#popTaskInvest4BindedDiv").hide();
			}
			
			//是否弹窗标识
			var isPopup = false;
			//参数变量
			var argItem = false;
			for (var i = 1, len = arguments.length; i < len; i++) {
				argItem = arguments[i];
				$("#newsEntry .popup_new").each(function(j, item){
					if(i == (j+1) && argItem){
						$(this).show();
						isPopup = true;
						return;
					}
				});
			}
			
			if(isPopup){
				//弹窗
				Util.jDialog.Modal('newsDialog','newsEntry');
			}
		},
		
		/**
		 * 检测是否充值投资，页面上做标记提示
		 */
		checkChargeInvest4Mark: function(){
			_doCheck(environment.basePath + "/rest/user/checkNoviceChargeInvest", function(data){
				//错误等信息提示
				if(data.code < 0){
					//console.log(data.msg);
					return false;
				}
				
				//对已充值投资的项打勾
				if(data.code == 1){
					//充值与否
					if(data.isCharge){
						$("#isChargeBtn5").removeClass("btn5");
						$("#isChargeBtn5").addClass("btn5_active");
					}
					//投资与否
					if(data.isInvest){
						$("#isInvestBtn6").removeClass("btn6");
						$("#isInvestBtn6").addClass("btn6_active");
					}
				}
				
			});
		}
	};//End...return
} ();//End...var noviceManager

$(function(){
	Util.CustomCheckbox($('.yCheckbox'));
	$('#selectBank').click(function(){
		Util.jDialog.Modal('BankSelectDialog','BankSelectEntry');
	});
	
	var bankName = $('#BankCheck');
	var bankCity = $('#BankCity');
	var houseName = $('#HouseBankName');
	var cardNum = $('#BankCardNumber');
	var addBankOpts = $('#addBankOpts');
	var bankDialog = $('#BankSelectDialog');
	var affirm = bankDialog.find('.dialog-foot .bank-bind');
	var addsList = $('.adds-bankcard');
	var mdir = addsList.find('.banks-dir');
	mdir.append('<i class="icons" style="display:none"></i>');
	
	var addBtn = addsList.find('.adds-card');
	var targetClass = function(a,b){
		a.addClass('selected').siblings().removeClass('selected');
		b.find('.icons').hide();
		a.find('.icons').show();
	};
	mdir.click(function(){
		var tar = $(this);
		if(!tar.hasClass("selected")){
			bindCard(tar,mdir);
		}
	});
	cardNum.val('请输入银行卡号')
	cardNum.focus(function(){
		if($(this).val() == "请输入银行卡号"){
		    $(this).val('');
        }
	}).blur(function(){
		if(Util.checkVal($(this).val()) || $(this).val() == '请输入银行卡号'){
			$(this).val('请输入银行卡号');
		}
		cardNoCheck($("#BankCardNumber").val());
	});
	//选择银行确认
	affirm.click(function(){
		var radio = $('input:radio[name="bankRadio"]:checked');
		var error = bankDialog.find('.mError');
		if(radio.length > 0){
			var bankcode = null;
			var strs = $.trim(radio.val().slice(0,-4));
			var code = $.trim(radio.val().slice(-3));
			mdir.each(function() {
                var bcode = $(this).attr('data-bankcode');
				if(bcode == code){
					bankcode = code
				}
            });
	
			$("#bankId").val(code);
			bankName.val(strs).css('color', '#333');
			bankName.attr('data-bankcode',code);
			bankDialog.hide();
			error.hide();
			$('#overlayModal').remove();

		} else {
			error.html('请选择银行').show();
		}
	});

	$("#HouseBankName").focus(function(){
        if($("#bankId").val() == ""){
            $('#BankNameTip').html("请先选择银行").show();
        }
    });

	$('#cancelAddBankCard').click(function(){
		addBankOpts.animate({height:0,opacity:0}).hide()
		addBtn.removeClass('adds-current');
	});
	addBtn.click(function(){
		if($("#realnameFlag").val() == "0"){
            Util.jDialog.Modal('dialogRealName','dialogRealNameCont');
            return;
        }
		addBankOpts.animate({height:310,opacity:1},100).show();
		addBtn.addClass('adds-current');
	});

	$('#addBankCard').click(function(){
		var numTip = $('#BankCardNumberTip');
		var nameTip = $('#BankNameTip');
		var cityTip = $('#BankCityTip');
		var houseTip = $('#HouseBankNameTip');
		var cred = '<i class="icons reg-error"></i>';
		numTip.hide();
		nameTip.hide();
		cityTip.hide();
		houseTip.hide();
		if(Util.checkVal(cardNum.val()) || cardNum.val() == '请输入银行卡号'){
			numTip.html(cred+'请输入银行卡号').show();
		} else if(Util.checkVal(bankName.val()) || bankName.val() == '未选择银行'){
			nameTip.html(cred+'请选择银行').show();
		} else if(Util.checkVal(bankCity.val()) || bankCity.val() == '中文/拼音'){
			cityTip.html(cred+'请选择城市名').show();
		} else if(Util.checkVal(houseName.val()) || houseName.val() == '中文/拼音'){
			houseTip.html(cred+'请选择开户行').show();
		} else {
			addnewcard();
		}
	});

	$(".gbtn").click(function(e){
		Util.stopBubble(e);
		if($("#realnameFlag").val() == "0"){
            Util.jDialog.Modal('dialogRealName','dialogRealNameCont');
            return;
        }
		if($("#msg").val() == 'noBindCard'){
			//console.log($("#addCard"));
	        Util.arrowPrompt($("#addCard"),'请先绑定一张银行卡', 'err');
	        return;
	    }
		if(checkWithdrawCash()){
			var form = $("#withdrawForm");
			form.submit();
		}
	});

    function bindCard(obj,mdir){
    	var option = {
            text: '您确定要绑定这张银行卡?',
            confirmCallback: function(){
               	var form = $(obj).find("form");
        		form.attr("method","post");
        		form.attr("action","bindCard.session.action");
        		form.submit();
        		targetClass(obj,mdir);
            },
            cancelCallback: function(){}
        };
        Util.jDialog.Prompt(option);
    }

    function addnewcard(){
    	if($("#bind span").hasClass("selected") || $("#bind span").hasClass("disabled2")){
    		$("#isbind").val("1");
    	}else{
    		$("#isbind").val("0");
    	}
        if(cardNoCheck($("#BankCardNumber").val())){
        	$.ajax({
	            dataType: 'json',
	            url: environment.basePath+"/checkBankCardExist.session.action",
	            data: {
	                "cardNo" : $.trim($("#BankCardNumber").val()),
	                "accountBankName" : $.trim($("#HouseBankName").val())
	            },
	            type: 'POST',
	            beforeSend: function() {
	      			
	            },
	            success: function(data) {
	                if(data.result == 0){
	                	$('#BankCardNumberTip').html('<i class="icons reg-error"></i>您已经绑定过该银行卡了').show();
	                }else{
	                    $("#BankCardNumberTip").html("").hide();
	                    var form = $("#addNewCardForm");
            			form.submit();
	                }
	            },
	            error: function() {
	          
	            }
	        });      
        }
    }

    function cardNoCheck(bankno){
        var lastNum=bankno.substr(bankno.length-1,1);
   
        var first15Num=bankno.substr(0,bankno.length-1);
        var newArr=new Array();
        for(var i=first15Num.length-1;i>-1;i--){  
            newArr.push(first15Num.substr(i,1));
        }
        var arrJiShu=new Array();  
        var arrJiShu2=new Array();
       
        var arrOuShu=new Array(); 
        for(var j=0;j<newArr.length;j++){
            if((j+1)%2==1){
                if(parseInt(newArr[j])*2<9)
                arrJiShu.push(parseInt(newArr[j])*2);
                else
                arrJiShu2.push(parseInt(newArr[j])*2);
            }
            else
            arrOuShu.push(newArr[j]);
        }
       
        var jishu_child1=new Array();
        var jishu_child2=new Array();
        for(var h=0;h<arrJiShu2.length;h++){
            jishu_child1.push(parseInt(arrJiShu2[h])%10);
            jishu_child2.push(parseInt(arrJiShu2[h])/10);
        }       
       
        var sumJiShu=0; 
        var sumOuShu=0; 
        var sumJiShuChild1=0;
        var sumJiShuChild2=0;
        var sumTotal=0;
        for(var m=0;m<arrJiShu.length;m++){
            sumJiShu=sumJiShu+parseInt(arrJiShu[m]);
        }
       
        for(var n=0;n<arrOuShu.length;n++){
            sumOuShu=sumOuShu+parseInt(arrOuShu[n]);
        }
       
        for(var p=0;p<jishu_child1.length;p++){
            sumJiShuChild1=sumJiShuChild1+parseInt(jishu_child1[p]);
            sumJiShuChild2=sumJiShuChild2+parseInt(jishu_child2[p]);
        }     
        sumTotal=parseInt(sumJiShu)+parseInt(sumOuShu)+parseInt(sumJiShuChild1)+parseInt(sumJiShuChild2);
       
        var k= parseInt(sumTotal)%10==0?10:parseInt(sumTotal)%10;       
        var luhm= 10-k;
       
        if(lastNum==luhm){
            $('#BankCardNumberTip').hide();
            return true;
        }
        else{
            $('#BankCardNumberTip').html("*卡号输入不正确，请检查").show();
            return false;
        }       
    }

    function checkWithdrawCash() {
		var balance = Number(environment.userCash);
		var withdrawCash = Number($("#withdrawMoney").val());
		if(withdrawCash == "" || withdrawCash == null){
			$("#withdrawCashErr").html('<i class="icons reg-error"></i>输入取款金额').show();
			return false;			
		}else if (withdrawCash != "" && withdrawCash != null) {
			var reg =/^[0-9]+([.]\d{1,2})?$/;
			if (!reg.test(withdrawCash)) {
				$("#withdrawCashErr").html('<i class="icons reg-error"></i>输入金额有误').show();
				return false;
			} else {
				if ((withdrawCash-balance)>0) {
					$("#withdrawCashErr").html('<i class="icons reg-error"></i>余额不足').show();
					return false;
				}else if(withdrawCash==0){
					$("#withdrawCashErr").html('<i class="icons reg-error"></i>输入金额有误').show();
					return false;
				}else{
					$("#withdrawCashErr").html("").hide();;
					return true;					
				}
			}
		}
	}

	function checkBankCardExist(){
    	$.ajax({
            dataType: 'json',
            url: environment.basePath+"/checkBankCardExist.session.action",
            data: {
                "cardNo" : $("#BankCardNumber").val(),
                "accountBankName" : $.trim($("#HouseBankName").val())
            },
            type: 'POST',
            beforeSend: function() {
      
            },
            success: function(data) {
                if(data.result == 0){
                	$(".Error").html("*您已经绑定过该银行卡了").show();
                }else{
                    $(".Error").html("").hide();
                }
            },
            error: function() {
          
            }
        });      
    }
});
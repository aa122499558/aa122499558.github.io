$(function(){
	BankSelectAction();
	var cardNum = $('#BankCardNumber');
	cardNum.val('请输入银行卡号');
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
});
/*
*Name:选择银行信息及交互
*/
(function() {
	//添加银行信息显示选项
	function BankSelectAction(){
		var bankCard = $('#AddBankCardCont');
		var addBlank = $('.bank-add-button');
		var showBlank = $('.bank-card-opt');
		addBlank.find('a').click(function(){
            if($("#realnameFlag").val() == "0"){
                Util.jDialog.Modal('dialogRealName','dialogRealNameCont');
                return;
            }
			addBlank.hide();
			showBlank.show();
		});
		$('#cancelBank').click(function(){
			addBlank.show();
			showBlank.hide();
		});
		//银行信息列表
		var bsd = $('#BankSelectDialog');
		var affirm = bsd.find('.dialog-foot .bank-bind');
		var BankSelect = $('#BankSelect');
		BankSelect.click(function(){
			Util.jDialog.Modal('BankSelectDialog','BankSelectEntry');
		});
		//选择银行确认
		affirm.click(function(){
			var radio = $('input:radio[name="bankRadio"]:checked');
			var error = bsd.find('.mError');
			if(radio.length > 0){
				var strs = $.trim(radio.val().slice(0,-4));
				var code = $.trim(radio.val().slice(-3));
				var bankval = $('#BankCheck');
				bankval.val(strs);
				$("#bankId").val(code);
				bankval.attr('data-bankcode',code);
				bsd.hide();
				error.hide();
				$('#overlayModal').remove();
			} else {
				error.html('请选择银行').show();
			}
		});

        $("#HouseBankName").focus(function(){
            if($("#bankId").val() == ""){
                $(".Error").html("请先选择银行").show();
            }
        });
	};
	window.BankSelectAction = BankSelectAction;
})();

    function deleteUnbindCard(obj){
        var option = {
            text: '确定要删除这张银行卡?',
            confirmCallback: function(){
                var form = $(obj).prev();
                form.attr("method","post");
                form.attr("action","deleteUnbindCard.session.action");
                form.submit();
            },
            cancelCallback: function(){}
        };
        Util.jDialog.Prompt(option);
    }

    function bindCard(obj){
        var form = $(obj).prev().prev();
        form.attr("method","post");
        form.attr("action","bindCard.session.action");
        form.submit();
    }

    function addnewcard(){
        $("#AddBankCardButton").attr("href","javascript:;")
        if(addNewCardCheck()){
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
                        $(".Error").html("*您已经绑定过该银行卡了").show();
                        $("#AddBankCardButton").attr("href","javascript:addnewcard();")
                    }else{
                        $(".Error").html("").hide();
                        var form = $("#addNewCardForm");
                        form.submit();
                    }
                },
                error: function() {
                    $("#AddBankCardButton").attr("href","javascript:addnewcard();")
                }
            });     
        }else{
            $("#AddBankCardButton").attr("href","javascript:addnewcard();")
        }
    }

    function addNewCardCheck(){
        if(cardNoCheck($("#BankCardNumber").val()) == false){
            return false;
        }

        if($("#BankCheck").val()=="未选择银行"){
            $(".Error").html("请选择银行").show();
            return false;
        }else{
            $(".Error").hide();
        }

        if($("#BankCity").val()=="" || $("#BankCity").val() == "中文/拼音"){
            $(".Error").html("请输入开户城市").show();
            return false;
        }else{
            $(".Error").hide();
        }

        if($("#HouseBankName").val() == "" || $("#HouseBankName").val() == "中文/拼音"){
            $(".Error").html("请输入开户行名称").show();
            return false;
        }else{
            $(".Error").hide();
        }
        return true;
    }

    function cardNoCheck(bankno){
        if(bankno==""||bankno==null){
            $(".Error").html("*卡号输入不正确，请检查").show();
            return false;     
        }
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
        
        if(parseInt(sumJiShu)+parseInt(sumOuShu) == 0){
            $(".Error").html("*卡号输入不正确，请检查").show();
            return false;
        }

        if(lastNum==luhm){
            $(".Error").hide();
            return true;
        }
        else{
            $(".Error").html("*卡号输入不正确，请检查").show();
            return false;
        }       
    }

    function checkBankCardExist(){
    	$.ajax({
            dataType: 'json',
            url: environment.basePath+"/checkBankCardExist.session.action",
            data: {
                "cardNo" : $("#BankCardNumber").val()
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
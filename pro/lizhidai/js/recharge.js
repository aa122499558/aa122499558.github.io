$(function(){
	Util.CustomCheckbox($('.yCheckbox'));
	Util.jTab('#rechTabs','#rechPanel','click');
	$('#rechargeSubmitBtn').click(function(){
		if($("#realnameFlag").val() == "0"){
            Util.jDialog.Modal('dialogRealName','dialogRealNameCont');
            return;
        }
		$("#rechargeForm").submit();
	});
	var bankDialog = $('#BankSelectDialog');
	var affirm = bankDialog.find('.dialog-foot .bank-bind');
	//添加金额
	var mput = $('#chargeSum');
	var merr = $('#chargeSumErr');
	mput.blur(function(){
		var charge = $.trim(mput.val());
		if(isNaN(charge*1) || charge*1 <= 0) {
			merr.html('请输入正确的充值金额').show();
			mput.addClass('inputErr');
			mput.val('');
			mput.focus();
			return false;
		}else {
			var douhao = new RegExp(",","g");
			var n = ((parseFloat($('#curBalance').html().replace(douhao,"")) || 0)*1 + mput.val()*1).toFixed(2);
			var re = /(\d{1,3})(?=(\d{3})+(?:$|\.))/g;
			$('#sumBalance').html(n.replace(re,'$1,'));
			mput.removeClass('inputErr');
			merr.html('').hide();
			return true;
		}
	});
	var rech = $('.rech-items');
	rech.find('.banks-dir').append('<i class="icons" style="display:none"></i>')
	var mode = rech.find('.rech-mode');//充值方式
	var mdir = mode.find('.banks-dir');
	var bank = rech.find('.select-bank');//选择银行
	var bdir = bank.find('.banks-dir');
	var addBtn = bank.find('.add-bank');
	var moreBank = bank.find('.other-banks')
	var targetClass = function(a,b){
		a.addClass('selected').siblings().removeClass('selected');
		b.find('.icons').hide();
		a.find('.icons').show();
	};
	mdir.click(function(){
		var tar = $(this);
		targetClass(tar,mdir);
		if(tar.hasClass('netBank')){
			$('#selectBanks').show();
			var selected_bank = $(".select-bank .selected");
		} else {
			$('#selectBanks').hide();
		}
	});
	bdir.click(function(){
		var tar = $(this);
		targetClass(tar,bdir);
		getBanksDesc($(this).attr('data-bankcode'));
	});
	
	if(bdir.length){
		
	};
	bank.find('li:lt(5)').show();
	
	$('#selectOtherBanks').click(function(){
		bdir.show();
		moreBank.hide();
	});
	if(bdir.hasClass('selected')){
		getBanksDesc(bdir.filter('.selected').attr('data-bankcode'))
	};
	
	function getBanksDesc(code){
		var desc = $('.bank-desc');
		$.ajax({
			url: 'v2/local/static/banks/index.html',
			type: "POST",
			dataType: "json",
			beforeSend: function() {},
			success: function(data) {
				if(!data[code]){
					desc.hide()
				} else {
					desc.html(data[code]).fadeIn(300)
				}
			},
			error: function(){
				desc.html('<p style="padding:30px 0;">文件加载失败！</p>').show();
			}
		});
	};
});


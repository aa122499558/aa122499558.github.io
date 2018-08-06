// JavaScript Document
var regu = "^[ ]+$";
var re = new RegExp(regu);
//验证是否为空
function checkIsNull(objvalue){
	if(objvalue==null||objvalue==""||objvalue.length==0||re.test(objvalue)){
		return true;
	}else{
		return false;
	}
}

/**
 * 重填
 */
function backBegin(){
	if(confirm("确定重新填写信息吗？")){
		location.href="/ticket!selectForWap.ph";
	}
}

//验证入园日期
function check_intoTime(){
	var intoTime=document.getElementById("intoTime").value;
	if(checkIsNull(intoTime)){
		alert("请选择入园日期！");
		return false;
	}else{
		return true;
	}
}

//验证游客姓名
function check_checkInPeople(){
	var checkInPeople=document.getElementById("checkInPeople").value;
	if(checkIsNull(checkInPeople)){
		alert("请输入游客姓名！");
		return false;
	}else{
		return true;
	}
}

//验证联系人
function check_linkMan(){
	var linkMan=document.getElementById("linkMan").value;
	if(checkIsNull(linkMan)){
		alert("请输入联系人姓名！");
		return false;
	}else{
		return true;
	}
}
//验证手机号码
function check_phone(){
	var phone = document.getElementById("phone").value;
	var phonereg=/^(13[0-9]|15[0-9]|18[0-9]|16[0-9])\d{8}$/;
	if(checkIsNull(phone)){
		alert("请输入手机号码！");
		return false;
	}else if(!phonereg.test(phone)){
		alert("请输入正确的手机号码！");
		return false;
	}else{
		return true;
	}
}
//电子邮件
function check_email(){
	var email = document.getElementById("email").value;	
	var patrn = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
	if(checkIsNull(email)){
		alert("请输入电子邮件");
		return false;
	}else if(!patrn.test(email)){
		alert("电子邮件格式不正确！");
		return false;
	}else{
		return true;
	}
}
function priceTotal(){
	Total();
	document.getElementById("plus").addEventListener("click",function(){
		if(parseInt(document.getElementById("input-amount1").value) < 10){
			if(parseInt(document.getElementById("input-amount1").value) == 9){
				removeClass(document.getElementById("plus"),"active");
			}
			var a = parseInt(document.getElementById("input-amount1").value);
			document.getElementById("input-amount1").value = a + 1;
		}
	  	addClass(document.getElementById("minus"),"active");
		subTotal("Subtotal1","unitPrice1","input-amount1");
		Total();
	})
	document.getElementById("minus").addEventListener("click",function(){
		if(parseInt(document.getElementById("input-amount1").value) > 1){
			if(parseInt(document.getElementById("input-amount1").value) == 2){
				removeClass(document.getElementById("minus"),"active");
			}
			var a = parseInt(document.getElementById("input-amount1").value);
			document.getElementById("input-amount1").value = a - 1;
		}
	  	addClass(document.getElementById("plus"),"active");
		subTotal("Subtotal1","unitPrice1","input-amount1");
		Total();
	})
  	
	
	document.getElementById("plus2").addEventListener("click",function(){
		if(parseInt(document.getElementById("input-amount2").value) < 10){
			if(parseInt(document.getElementById("input-amount2").value) == 9){
				removeClass(document.getElementById("plus2"),"active");
			}
			var a = parseInt(document.getElementById("input-amount2").value);
			document.getElementById("input-amount2").value = a + 1;
		}
	  	addClass(document.getElementById("minus2"),"active");
		subTotal("Subtotal2","unitPrice2","input-amount2");
		Total();
	})
	document.getElementById("minus2").addEventListener("click",function(){
		if(parseInt(document.getElementById("input-amount2").value) > 1){
			if(parseInt(document.getElementById("input-amount2").value) == 2){
				removeClass(document.getElementById("minus2"),"active");
			}
			var a = parseInt(document.getElementById("input-amount2").value);
			document.getElementById("input-amount2").value = a - 1;
		}
	  	addClass(document.getElementById("plus2"),"active");
		subTotal("Subtotal2","unitPrice2","input-amount2");
		Total();
	})
}
function subTotal(forElm,fromElm1,fromElm2){
	document.getElementById(forElm).innerHTML = parseInt(document.getElementById(fromElm1).innerText) * parseInt(document.getElementById(fromElm2).value);
}
function Total(){
	document.getElementById("totalPrice").innerHTML = parseInt(document.getElementById("Subtotal1").innerText) + parseInt(document.getElementById("Subtotal2").innerText);
}
function hasClass(obj, cls) {  
    return obj.className.match(new RegExp('(\\s|^)' + cls + '(\\s|$)'));  
	}
function addClass(obj, cls) {  
	if (!this.hasClass(obj, cls)) obj.className += " " + cls;  
}  
function removeClass(obj, cls) {  
	if (hasClass(obj, cls)) {  
		var reg = new RegExp('(\\s|^)' + cls + '(\\s|$)');  
		obj.className = obj.className.replace(reg, ' ');  
	}  
} 
function sub_orderTicketFrom(){
	if(check_intoTime()&&check_checkInPeople()&&check_linkMan()&&check_phone()&&check_email()){
		document.ticketOrderItemForm.submit();
	}
}
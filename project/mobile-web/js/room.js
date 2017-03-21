// JavaScript Document
//提交房间信息
var getRoomId=null;
function getRoomIds(){
	if(selectid.length==0){
		alert("请选择房间！");
	}else{
		selectid+="0";
		document.getElementById("getRoomId").value=selectid;
		document.bookForm.submit();
	}
}
//单个房间预定
function getOneRoomId(roomId){
	document.getElementById("getRoomId").value=roomId;
	document.bookForm.submit();
}
//根据时间查询每日价格
function getPriceByDate(roomId){
	var beginTime = document.getElementById("beginTime"+roomId).value;
	var endTime = document.getElementById("endTime"+roomId).value;
	var roomCount =document.getElementById("roomCount"+roomId).value;
	if(beginTime!=null&&beginTime!=""&&beginTime.length>0&&endTime!=null&&endTime!=""&&endTime.length>0){
		if(!compareDate(beginTime,endTime)){
			alert("离开时间不能小于入住时间");
		}else{
			var timstamp = (new Date()).valueOf();
			var url = "/price!selectForWap.ph?roomId="+roomId+"&beginTime="+beginTime+"&endTime="+endTime+"&roomCount="+roomCount;
			 url = url + "&t=" + timstamp;
			//getRoomId=roomId;
			document.getElementById("jqueryAjax").value=1;
			loadXMLDoc(url,function returnGetPriceByDate(strchar){
				if(strchar!="网络繁忙，请稍后重试！"){
					var str=strchar.split("-FYW-");
					document.getElementById("priceList"+roomId).innerHTML=str[0];
					document.getElementById("totalPrice"+roomId).value=str[1];
					getTotalPrice();
					var totalObj=document.getElementById("tp");
					if(totalObj!=null)
						totalObj.innerHTML=document.getElementById("totalPrice").value;
				}else{
					document.getElementById("priceList"+roomId).innerHTML=strchar;
				}
			});
		}
	}
}


/**
 * 提交表单
 **/
var regu = "^[ ]+$";
var re = new RegExp(regu);
//验证信息
function $$$(id){
	return document.getElementById(id);
}
//验证是否为空
function checkIsNull(objvalue){
	if(objvalue==null||objvalue==""||objvalue.length==0||re.test(objvalue)){
		return true;
	}else{
		return false;
	}
}

//比较两个时间的大小
function compareDate(beginTime,endTime){
	//比较两个时间的大小 如果开始时间大于结束时间返回false 否则返回true;时间格式：yyyy-MM-dd
	var d1=beginTime.split("-");
	var d2=endTime.split("-");
	//比较年份
	if(parseInt(d1[0],10)>parseInt(d2[0],10)){
		return false;
	}else if(parseInt(d1[0],10)==parseInt(d2[0],10)){
		//比较月份
		if(parseInt(d1[1],10)>parseInt(d2[1],10)){
			return false;
		}else if(parseInt(d1[1],10)==parseInt(d2[1],10)){
			//比较日期
			if(parseInt(d1[2],10)>parseInt(d2[2],10)){
				return false;
			}else{
				return true;
			}
		}else{
			return true;
		}
	}else{
		return true;
	}
	
}


//得到总价钱
function getTotalPrice(){
	document.getElementById("totalPrice").value=0;
	var roomIds = $$$("roomIds").value;
	var roomId = roomIds.split(",");
	var totalPrice=0;
	for(var i =0;i<roomId.length;i++){
		var onePrice=document.getElementById("totalPrice"+roomId[i]).value;
		totalPrice=parseFloat(totalPrice)+parseFloat(onePrice);
	}
	document.getElementById("totalPrice").value=totalPrice;
	var totalObj=document.getElementById("tp");
	if(totalObj!=null)
		totalObj.innerHTML=document.getElementById("totalPrice").value;
}

//验证入住人
function check_checkInPeople(){
	var checkInPeople=$$$("checkInPeople").value;
	if(checkIsNull(checkInPeople)){
		alert("请输入入住人姓名！");
		return false;
	}else{
		return true;
	}
}
//验证入住人数
function check_peopleCount(){
	var peopleCount=$$$("peopleCount").value;
	var rn=/^[1-9]\d*$/;
	if(checkIsNull(peopleCount)){
		alert("请输入入住人数");
		return false;
	}else if(!rn.test(peopleCount)){
		alert("入住人数必须为正整数");
		return false;
	}else{
		return true;
	}
}
//验证联系人
function check_linkMan(){
	var linkMan=$$$("linkMan").value;
	if(checkIsNull(linkMan)){
		alert("请输入联系人姓名！");
		return false;
	}else{
		return true;
	}
}
//验证手机号码
function check_phone(){
	var phone = $$$("phone").value;
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
	var email = $$$("email").value;	
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

//验证所选房间信息
function checkRoomInfo(){
	var roomIds = $$$("roomIds").value;
	var roomNames=$$$("rmNames").value;
	var roomId = roomIds.split(",");
	var roomName = roomNames.split(",");
	for(var i=0;i<roomId.length-1;i++){
		var beginTime = $$$("beginTime"+roomId[i]).value;
		var endTime = $$$("endTime"+roomId[i]).value;
		if(checkIsNull(beginTime)||checkIsNull(endTime)){
			alert("必须选择所有房间的入住时间和离开时间！");
			return false;
		}else{
			if(!compareDate(beginTime,endTime)){ 
			  alert(roomName[i]+"离开时间必须大于开始时间！");
			  return false;
			}else{
				return true;
			}
		}
	}
	return false;
}
/**
 * 重填
 */
function backBegin(){
	if(confirm("确定重新填写信息吗？")){
		location.href="/room!selectformem.ph";
	}
}
/**
 * 下单
 */
function sub_bookRoomForm(){
	var roomIds=document.getElementById("roomIds").value;
	var roomId = roomIds.split(",");
	var totalCount=0;
	for(var i = 0 ; i<roomId.length-1;i++){
		var oncCount=document.getElementById("roomCount"+roomId[i]).value;
		totalCount+=parseInt(oncCount,10);
	}
	var peopleCount = document.getElementById("peopleCount").value;
	if(parseInt(peopleCount,10)>(parseInt(totalCount,10)*2)){
		if(confirm("入住人数（"+peopleCount+"）多余门票数量（"+(totalCount*2)+"（房间赠送（"+totalCount*2+"））\n\n是否继续该操作，点击取消完善信息")){
			if(checkRoomInfo()&&check_checkInPeople()&&check_peopleCount()&&check_linkMan()&&check_phone()&&check_email()){
				getTotalPrice();
				document.bookRoomForm.submit();
			}
		}
	}else{
		if(checkRoomInfo()&&check_checkInPeople()&&check_peopleCount()&&check_linkMan()&&check_phone()&&check_email()){
			getTotalPrice();
			document.bookRoomForm.submit();
		}
	}
}
//验证客人数量和房间数量是否要预定门票
function check_peoCount(){
	var roomIds=document.getElementById("roomIds").value;
	var roomId = roomIds.split(",");
	var totalCount=0;
	for(var i = 0 ; i<roomId.length-1;i++){
		var oncCount=document.getElementById("roomCount"+roomId[i]).value;
		totalCount+=parseInt(oncCount,10);
	}
	var peopleCount = document.getElementById("peopleCount").value;
	var rn=/^[1-9]\d*$/;
	if(checkIsNull(peopleCount)){
		alert("请输入入住人数！");
	}else if(!rn.test(peopleCount)){
		alert("入住人数必须为正整数");
	}else if(parseInt(peopleCount,10)>(parseInt(totalCount,10)*2)){
		alert(("每个房间赠送2张门票，您现在的入住人数（"+peopleCount+"）大于赠送门票（"+(parseInt(totalCount,10)*2)+"）的数量，需要重新预定最少（"+(parseInt(peopleCount,10)-(parseInt(totalCount,10)*2))+"）张门票。\n\n如果您已预定门票，则无需预定。"));
	}
}
/**
 * 给房间数量赋值
 */
function getRoomCount(id,count){
	document.getElementById("roomCount"+id).value=count;
}

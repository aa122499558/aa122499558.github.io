function loadXMLDoc(urls,returnMethod){
   $.ajax({
			type : "POST",
			url : urls,			
			dataType : "html",
			success : returnMethod
  });	 
}
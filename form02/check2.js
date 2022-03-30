	function check2(){
		var ht=f.HT.value;
		var dc=f.DC.value;
		var em=f.EM.value;
		var dt=f.DT.value;
		
		var emRegExp=/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
		//var dtRegExp
		
		
		//document.write.getElementsByName("TDN").value
		//document.write.getElementsByName("MK").value
		if(ht==''){
		alert("Nhập tên vô đi bà");
		return false;
		}
		
		if(dc==''){
		alert("Bà ở đâu he ");
		return false;
		}
		
		if(!emRegExp.test(email))
    		{
        	alert('Email không hợp lệ');
        	return false
    		}
		
		if(dt==''){
		alert("Điện thoại không được bỏ trống ");
		return false;
		}
		
		return true;
		}

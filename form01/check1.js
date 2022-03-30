
		function check1(){
		var tdn=f.TenDangNhap.value;
		var mk=f.MatKhau.value;
		//document.write.getElementsByName("TDN").value
		//document.write.getElementsByName("MK").value
		if(tdn==''){
		alert("Không nhập tên sao được");
		return false;
		}
		
		if(mk==''){
		alert("Nhập mật khẩu vô đii bà ");
		return false;
		}
		
		return true;
		}
	
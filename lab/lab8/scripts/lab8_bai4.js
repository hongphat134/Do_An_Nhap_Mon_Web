// JavaScript Document
alert("Hồng Thuận Phát - D16_TH10 - DH51603902");
function kiemtrathongtin()
{
	s="";
	if(document.getElementById('idUserName').value.length==0)
		s+="Tên đăng nhập không được để trống.\n ";
	else
	{
		ten=document.getElementById('idUserName').value;
		if(ten.length<6)
			s+="Tên đăng nhập phải tối thiểu 6 ký tự.\n ";
		if(ten.indexOf(" ")>=0)
			s+="Tên đăng nhập không được có khoảng trắng.\n ";
	}
	if(document.getElementById('idPassword').value.length==0)
		s+="Mật khẩu không được để trống.\n ";
	else
	{
		mk=document.getElementById('idPassword').value;
		so=0;
		for(i=0;i<mk.length;i++)
			if(!isNaN(mk[i]))
				so++;
		if(so==0)
			s+="Mật khẩu phải chứa số.\n ";
		else if(so==mk.length)
			s+="Mật khẩu phải chứa chữ.\n ";
	}
	if(document.getElementById('idFullName').value.length==0)
		s+="Họ tên không được để trống.\n ";
	if(document.getElementById('idBirthDate').value.length==0)
		s+="Ngày sinh không được để trống.\n ";
	else
	{
		var dateValue = new Date(document.getElementById('idBirthDate').value);
		var now= new Date(Date.now());
		if(parseFloat(now.getYear())-parseFloat(dateValue.getYear())<10)
		s+="Tuổi phải từ 10 tuổi trở lên. \n";
	}
	
	if(document.getElementById('idFile').value.length==0)
		s+="Phải có hình đại diện.\n ";
	if(document.getElementById('idQuestion').value!="")
		if(document.getElementById('idAnswer').value.length==0)
			s+="Phải có câu trả lời.\n";
	if(s=="")
		return true;
	else
	{
		alert(s);
		return false;
	}
}
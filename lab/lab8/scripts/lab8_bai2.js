// JavaScript Document
alert("Hồng Thuận Phát - D16_TH10 - DH51603902");
var s="HTML & JAVASCRIPT";
var a=new Array();
for(i=0;i<s.length;i++) //duyet qua tung ky tu trong mang
{
	
	if(s.charAt(i)!=" "){
		var j=0;
		while(j<a.length)
		{
			if(a[j]==s.charAt(i)) //neu ky tu dang xet da co trong mang a
				break;
			j++;
		}
		if(j==a.length) //neu mang a không có chứa ký tự đang xét
			a.push(s.charAt(i));
	}
}
alert("Số ký tự khác nhau là " + a.length + " : " + a.toString());
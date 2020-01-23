// JavaScript Document
alert("Hồng Thuận Phát - D16_TH10 - DH51603902");
var index=1;
var t;
function hinh(i)
{
	index=i;	
	document.getElementById("hinh_banner").src="images/layout/banner"+i+".png";
}

function chay()
{
	index++;
	if(index>3)
		index=1;
	hinh(index);
	t=setTimeout("chay()",1000);
}
function dung()
{
	clearTimeout(t);
}
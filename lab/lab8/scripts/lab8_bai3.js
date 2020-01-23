// JavaScript Document
alert("Hồng Thuận Phát - D16_TH10 - DH51603902");
function sinhso()
{
	document.getElementById('txt1').value=Math.floor(Math.random()*100);
	document.getElementById('txt2').value=Math.floor(Math.random()*100);
}

function kiemtra()
{
	
	var a= parseFloat(document.getElementById('txt1').value)+parseFloat(document.getElementById('txt2').value);
	if((document.getElementById('txt1').value).length==0||(document.getElementById('txt2').value).length==0)
	{ 
	document.getElementById('lbl').innerHTML="Chưa cập nhập !";
	document.getElementById('lbl').style.backgroundColor='yellow';
	}
	else if(document.getElementById('txtKQ').value==a)
	{
		document.getElementById('lbl').innerHTML="Đúng !";
		document.getElementById('lbl').style.backgroundColor='green';
		
	}
	else
	{
		document.getElementById('lbl').innerHTML="Sai !" ;
		document.getElementById('lbl').style.backgroundColor='red';
		
	}
}
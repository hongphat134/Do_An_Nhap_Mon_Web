// JavaScript Document
alert("Hồng Thuận Phát - D16_TH10 - DH51603902");
var a=new Array(10);
var s=0;
document.write("Các phần tử trong mảng gồm có: ");
for(i=0;i<a.length;i++)
{
	a[i]=Math.floor(Math.random()*10);
	s=s+a[i];
	document.write(a[i]+ " ");
}
document.write("<br/>");
document.write("Tổng các phẩn tử trong mảng là " + s);
s=0;

a.reverse();
document.write("<br/>");
document.write("Các phần tử đảo ngược gồm có: ");
for(i=0;i<a.length;i++)
{
	s=s+a[i];
	document.write(a[i]+ " ");
}
document.write("<br/>");
document.write("Tổng các phẩn tử trong mảng là " + s);
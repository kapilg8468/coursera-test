// function chk(a,b)
// {
// 	console.log("hi buddy ");
// 	if(a>b)
// 	console.log("a>b ");
// else
// 	console.log("a<b ");
// }
// x="Hi Kapil"
// chk(4,5);
// for(x=0;x<10;x++){
// 	console.log("Buudy "+(x+1)+"\n");
// }
function chk(){
var name ,greeting ,currentdate,hr,kp;
var mon=["Jan","Feb","Mar","Apr","May","June","July","Aug","Sep","Oct","Nov","Dec"];
currentdate = new Date();
hr=currentdate.getHours();
if(hr<12)
greeting="Good Morning ";
else if(hr>=12&&hr<17)
greeting="Good Afternoon ";
else if(hr>=17&&hr<20)
greeting="Good Evening ";
else
greeting="Have a great night ";
if(hr<12)
kp="AM";
else
{kp="PM";hr-=12;}
var datetime = ", Today is " + currentdate.getDate() + " " + mon[currentdate.getMonth()] 
+ " " + currentdate.getFullYear() + "   " 
+ hr + ":" 
+ currentdate.getMinutes() + " "+ kp;

name=" <h1> "+greeting +document.getElementById("name").value +  " "+datetime +" </h1>";
document.getElementById("content").innerHTML=name;
}
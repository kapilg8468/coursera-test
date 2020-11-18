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
var mx=2000,cur=2000;
function chk2(){
        const xhr = new XMLHttpRequest();
        xhr.open('POST','https://codeforces.com/api/user.info?handles=buddy_1',false);
        // console.log('hi kapil');
        xhr.onload= function() {
            // console.log(this.responseText);
            let a1=JSON.parse(this.responseText);
            for (key in a1){
                if(key=== "result"){
                    //  mx=a1[key][0].maxRating;
                    // console.log(mx);
                    let o2=a1[key];
                    for(key in a1[key]){
                    mx=o2[key].maxRating;
                    cur=o2[key].rating;     
                    }
                }
            }
            
        }
        xhr.send();
       
}
chk2();
var str="max rating  "+mx;
var str2="cur rating "+cur; 
document.getElementById("maxRatin").innerHTML=str;
document.getElementById("Ratin").innerHTML=str2;



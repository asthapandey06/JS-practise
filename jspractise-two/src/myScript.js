function converter(){
var hrs = parseInt(document.getElementById("time").value);
var min;
var sec;
if(document.getElementById('hrtomin').checked==true){
    min= hrs*60;
    document.getElementById("result").innerHTML =min;
}
else if(document.getElementById('hrtosec').checked==true){
sec =hrs*3600;
document.getElementById("result").innerHTML ="  "+sec;
}
}
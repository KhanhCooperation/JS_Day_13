function trungbinh(){
    var so1=document.getElementById("num1").value*1
    var so2=document.getElementById("num2").value*1
    var so3=document.getElementById("num3").value*1
    var so4=document.getElementById("num4").value*1
    var so5=document.getElementById("num5").value*1
    var average= (so1+so2+so3+so4+so5)/5;
    document.getElementById("result").innerText=`${average}`;
}
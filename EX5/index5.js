function sum() {
    var num1=Math.floor((document.getElementById("number").value*1)/10);
    var num2=(document.getElementById("number").value*1)%10;
    var sum=num1+num2;
    document.getElementById("result").innerText=`${sum}`;

}
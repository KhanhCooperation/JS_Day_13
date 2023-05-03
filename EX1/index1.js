function tienLuong(){
    var saPeDay = document.getElementById("salaryPerDay").value*1;
    var woDay = document.getElementById("workingDay").value*1;
    var money = saPeDay * woDay;
    document.getElementById("result").innerText=`${money}`;
    
}
function quyDoi(){
    var quydoitienviet =23500;
    var tienUSD=document.getElementById("moneyUSD").value*1;
    var quydoi=tienUSD*23500;
    document.getElementById("result").innerText=`${quydoi}`;
}
function dienTich(){
    var cdai= document.getElementById("chieuDai").value*1;
    var crong = document.getElementById("chieuRong").value*1;
    var area = cdai * crong;
    var chuVi= (cdai+crong)*2;
    document.getElementById("result").innerText=`Dien Tich: ${area}, Chu vi: ${chuVi}`;
}
var btn = document.getElementById('btn');
var lbl = document.getElementById('lbl');

btn.onclick = function(){
    var uk = parseFloat(document.getElementById('uzunkenar').value);
    var kk = parseFloat(document.getElementById('kısakenar').value);
    var sonuc = uk * kk;
    var sonuc2 = (uk + kk)*2;
    lbl.innerText = "alan :" + sonuc +" " + "çevre :" + sonuc2;
}
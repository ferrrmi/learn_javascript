//document.getElementById("div1").style.visibility="hidden";
//document.querySelector(".header#juara").style.color="red";

function tambah(){
    document.getElementById('hasil_tambah').value=(parseInt(document.getElementById('angka_1').value) + parseInt(document.getElementById('angka_2').value));
}

function kurang(){
    document.getElementById('hasil_kurang').value=(parseInt(document.getElementById('angka_3').value) - parseInt(document.getElementById('angka_4').value));
}

function kali(){
    document.getElementById('hasil_kali').value=(parseInt(document.getElementById('angka_5').value) * parseInt(document.getElementById('angka_6').value));
}

function bagi(){
    document.getElementById('hasil_bagi').value=(parseInt(document.getElementById('angka_7').value) / parseInt(document.getElementById('angka_8').value));
}

function modulus(){
    document.getElementById('hasil_modulus').value=(parseInt(document.getElementById('angka_9').value) % parseInt(document.getElementById('angka_10').value));
}
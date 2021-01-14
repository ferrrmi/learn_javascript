let namavariable = 10;
{
    namavariable++;
    console.log(namavariable);
}
{
    let namavariable = 5;
    namavariable++;
    console.log(namavariable);
}
console.log(namavariable);

let nama = "Ferdy"
let namaLengkap = `Halo nama saya ${nama} Muhammad Iqbal`; //template literal pake ``
console.log(namaLengkap);

//destructuring array--------------
//let buah = ["mangga","pepaya","pisang","jambu"];
function ambilBuah(){
    return ["mangga","pepaya","pisang","jambu"]
}
let [buahManis, buahAsam] = ambilBuah();
console.log(buahManis)
console.log(buahAsam)

//hoisting-----------
namaSayur = "kangkung";
//const namaSayur; //will error cause hoisting
//let namaSayur; //will cause error cause let is hoisting
var namaSayur; //will execute
console.log(namaSayur);

//spread operator and rest-----------
let namaMuridKelas1 = ["sidik","jarwo","amin"];
let namaMuridKelas2 = ["denin","dedi",...namaMuridKelas1];
let namaMuridKelas3 = ["gisel","tono"]
namaMuridKelas3.push(...namaMuridKelas2);
console.log(namaMuridKelas3)

let nilaiKelas = [10,9,8]
console.log(Math.max(nilaiKelas)) //max is rest

function tambah(...nilai){
    let hasil = 0;
    for (i=0;i<nilai.length;i++){
        hasil = hasil + nilai[i]
    }
    return hasil;
}
let nilaix = [1,2,3,4]
console.log(tambah(...nilaix))

const manusia =  {
    mata : "bulat",
    rambut : "panjang",
    gigi : "putih",
    nama : "Ferdy",
    gitar : "listrik",
    kekasih : ["lia","cantik"],
    pekerjaan : {namaPerusahaan:"BukaToko",alamat:"jakarta"},
}

const {mata,rambut,pekerjaan} = manusia;
console.log(pekerjaan.namaPerusahaan);

const {gitar = "akustik"} = manusia;
const {gitar:guitar} = manusia;
console.log(gitar);
console.log(guitar);
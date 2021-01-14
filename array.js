var buah = ["mangga","pisang","nangka","semangka","duren"];
var sayur = ["timun","wortel","tomat","kangkung","sawi"];

/*console.log(buah);
console.log(sayur);*/

//for(var i=0;i<5;i++){
   //console.log(i);
//}
/*var x = 0;
while(x<5){
    x++;
    console.log(x);
    if (x==5){
        console.log("break point");
    }
}*/

/*var y = 0;
do{
    if(y==0){
        console.log("break point");
    }
    y++;
    console.log(y);
}while(y<5);*/

CreateListBuah();
function CreateListBuah(){
    var listBuah = "";
    for(var i=0;i<buah.length;i++){
        listBuah = listBuah + "<li>" + buah[i] + "</li>";
    }
    document.getElementById("buah").innerHTML = listBuah;
}

CreateListSayur();
function CreateListSayur(){
    var listSayur = "";
    var x = 0;
    while(x<sayur.length){
        listSayur = listSayur + "<li>" + sayur[x] +  "</li>";
        x++;
    }document.getElementById("sayur").innerHTML = listSayur;
}

function tambahBuah(namaBuah){
    /*if (buah.length >= 10){
        alert("maaf jumlah maksimal buah hanya 10")
    }else{
        var cekIsi = cekBuah(namaBuah);
        console.log(cekIsi);
        if(cekIsi !== undefined){
            alert("maaf buah sudah ada")
        }else{
            buah.push(namaBuah);
            CreateListBuah();
            listNamaBuah();
        }
    }*/

    if (buah.length >= 10){
        alert("maaf jumlah maksimal buah hanya 10")
    }else{
        if(cekIsiBuah(namaBuah)){
            alert("maaf buah sudah ada")
        }else if(namaBuah === ''){
            alert("input nama buah!")
        }else{
            buah.push(namaBuah);
            CreateListBuah();
            listNamaBuah();
        }
    }

    //buah.push(namaBuah);
    //CreateListBuah();
    //listNamaBuah();

    //buah.length >= 10 ? alert("maaf jumlah maksimal buah hanya 10") : buah.push(namaBuah); CreateListBuah();

    /*if (buah.length >= 10 && namaBuah === "Naga"){
        alert("maaf jumlah maksimal buah hanya 10")
    }else{    
        buah.push(namaBuah);
        CreateListBuah();
        listNamaBuah();
    }*/
    /*if (buah.length >= 10){
        alert("maaf jumlah maksimal buah hanya 10")
    }else if(namaBuah.toLowerCase() !== "Naga"){    
        buah.push(namaBuah);
        CreateListBuah();
        listNamaBuah();
    }*/
}

/*var globalNamaBuah = "";
function cekBuah(namaBuah){
    globalNamaBuah = namaBuah;
    var jumlahnamabuah = buah.find(cekNamaBuah)
    return jumlahnamabuah;
}

function cekNamaBuah(a){
    return a === globalNamaBuah;
}*/

//cek duplikat sayur
function cekIsiBuah(namaBuah){
    for (i=0;i<buah.length;i++){
        if (buah[i]===namaBuah.toLowerCase()){
            return true;
        }
    }return false;
}

function tambahSayur(namaSayur){
    if (sayur.length >= 10){
        alert("maaf jumlah maksimal sayur hanya 10")
    }else{
        if(cekIsiSayur(namaSayur)){
            alert("maaf sayur sudah ada")
        }else if(namaSayur === ''){
            alert("input nama sayur!")
        }else{
            sayur.push(namaSayur);
            CreateListSayur();
            listNamaSayur();
        }
    }
}
//cek duplikat sayur
function cekIsiSayur(namaSayur){
    for (i=0;i<sayur.length;i++){
        if (sayur[i]===namaSayur.toLowerCase()){
            return true;
        }
    }return false;
}

function tampilList(){
    console.log(buah);
    console.log(sayur);
}

function listNamaBuah(){
    for (i=0;i<buah.length;i++){
        console.log(buah[i]);
    }console.log("console log of this array...");
}

function listNamaSayur(){
    for (i=0;i<sayur.length;i++){
        console.log(sayur[i]);
    }console.log("console log of this array...");
}

//ini function buat submit button tanpa click button, tapi justru ketik enter aja
enterWithEventListener();
function enterWithEventListener(){
    // Get the input field
    var input_1 = document.getElementById("txtBuah");

    // Execute a function when the user releases a key on the keyboard
    input_1.addEventListener("keyup", function(event) {
    // Number 13 is the "Enter" key on the keyboard
    if (event.keyCode === 13) {
    // Cancel the default action, if needed
        event.preventDefault();
    // Trigger the button element with a click
        document.getElementById("btnAddBuah").click();
        }
    });

    var input_2 = document.getElementById("txtSayur");

    // Execute a function when the user releases a key on the keyboard
    input_2.addEventListener("keyup", function(event) {
    // Number 13 is the "Enter" key on the keyboard
    if (event.keyCode === 13) {
    // Cancel the default action, if needed
        event.preventDefault();
    // Trigger the button element with a click
        document.getElementById("btnAddSayur").click();
        }
    });

    var input_3 = document.getElementById("txtItem");

    // Execute a function when the user releases a key on the keyboard
    input_3.addEventListener("keyup", function(event) {
    // Number 13 is the "Enter" key on the keyboard
    if (event.keyCode === 13) {
    // Cancel the default action, if needed
        event.preventDefault();
    // Trigger the button element with a click
        document.getElementById("btnAddItem").click();
        }
    });
}

function saveBuah(){
    var links = buah;
  
    var linksArray = [];
    // Loop through all links
    for (var i = 0; i < links.length; i++) {
      
      // Store links in variable
      linksArray.push(links[i]);
      
      // Works fine in console
      console.log(linksArray);
    }
      
      
        // Create text document — only saves 1st link in text doc
    var textDoc = document.createElement('a');
      
    textDoc.href = 'data:attachment/text,' + encodeURI(linksArray.join('\n'));
    textDoc.target = '_blank';
    textDoc.download = 'buah.txt';
    textDoc.click();
}

function saveSayur(){
    var links = sayur;
  
    var linksArray = [];
    // Loop through all links
    for (var i = 0; i < links.length; i++) {
  
      // Store links in variable
      linksArray.push(links[i]);
  
      // Works fine in console
      console.log(linksArray);
    }
  
  
    // Create text document — only saves 1st link in text doc
    var textDoc = document.createElement('a');
  
    textDoc.href = 'data:attachment/text,' + encodeURI(linksArray.join('\n'));
    textDoc.target = '_blank';
    textDoc.download = 'sayur.txt';
    textDoc.click();
}

function tambahItem(namaItem,jenisItem){
    switch(jenisItem){
        case "buah" :
            tambahBuah(namaItem);
            break; //harus tambah break, jika tidak nanti case yang bawa akan ikut ter eksekusi
        case "sayur" :
            tambahSayur(namaItem);
            break;
        case "null" :
            alert("Pilih antara Buah atau Sayur!");
            break;
    }
}
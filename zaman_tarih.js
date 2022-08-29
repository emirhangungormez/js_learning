let simdi = new Date(); // (tarih objesi)


// Get metodlari:
sonuc = simdi;
sonuc = simdi.getDate(); // gun
sonuc = simdi.getDay(); // pazar: 0, pazartesi: 1 ...
sonuc = simdi.getFullYear(); // yil
sonuc = simdi.getHours(); // saat
sonuc = simdi.getTime(); // milisaniye saat

// Set metodlari:
simdi.setFullYear(2022);
simdi.setMonth(10);
simdi.setDate(23);

sonuc = simdi;

let dogumTarihi = new Date(2001, 10, 23);

sonuc = simdi.getFullYear() - dogumTarihi.getFullYear();

let milisaniye = simdi - dogumTarihi;
let saniye = milisaniye / 1000; 
let dakika = saniye / 60;
let saat = dakika / 60;
let gun = saat / 60;

sonuc = gun;

console.log(sonuc);
console.log(typeof sonuc);
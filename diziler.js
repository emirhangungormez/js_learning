// let urun1 = "iphone 12";
// let urun2 = "iphone 13";
// let urun3 = "iphone 13 pro";

let urunler = ["iphone 12", "iphone 13", "iphone 13 pro"];
let fiyatlar = [9000, 12000, 20000];
let renkler = ["gold", "siyah", "beyaz"];

let urun1 = ["iphone 12", 9000, "gold"];
let urun2 = ["iphone 13", 12000, "siyah"];
let urun3 = ["iphone 13 pro", 20000, "beyaz"];

// console.log(urunler[0]);
// console.log(urunler[1]);
//  console.log(urunler[2]);

console.log(`${urunler[0]}-${fiyatlar[0]}-${renkler[0]}`);
console.log(`${urunler[1]}-${fiyatlar[1]}-${renkler[1]}`);
console.log(`${urunler[2]}-${fiyatlar[2]}-${renkler[2]}`);

let kursAdi = "Komple Web Gelistirme Egitimi"
console.log(kursAdi[5]); // index
console.log(kursAdi.split(" ")[3]); // dizide yer alan 4. kelime
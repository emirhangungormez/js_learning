let ogrenciler = ["cinar", "yigit", "kagan", "emir", "han", "merve"];

sonuc = ogrenciler.length;

// array to string
sonuc = ogrenciler.toString();
sonuc = ogrenciler.join("-");

// eleman silme

/*
sonuc = ogrenciler.pop(); // son eleman silinir ve silinen eleman geri dondurulur.
sonuc = ogrenciler.shift(); // ilk eleman silinir.
*/

// eleman ekleme

/*
sonuc = ogrenciler.push("cagla"); // dizinin sonuna elemani ekler.
sonuc = ogrenciler.unshift("yaren"); // dizinin basina elemani ekler.
*/

let markalar1 = ["mazda", "toyota"];
let markalar2 = ["opel", "citroen"];
let markalar3 = ["mercedes"];

// sonuc = markalar1.concat(markalar2, markalar3); // dizileri birlestirir.
// sonuc = markalar1.splice(0,0,markalar2); // dizinin kendisine diziyi ekler.

console.log(sonuc);
console.log(markalar1);
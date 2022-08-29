let sonuc;

sonuc = 10;
sonuc = "10";
sonuc = Number("10"); // tip donusumu.
sonuc = parseInt("10.3"); // tip donusumu.

sonuc = parseInt("10a"); // (number)
sonuc = parseInt("a10"); // (NaN)

// sonuc = isNaN("a10"); (true)

let sayi = 15.1453;

sonuc = sayi.toPrecision(5); // basamak degeri belirler ve yuvarlar.
sonuc = sayi.toFixed(5); // noktadan sonra basamak degeri belirler ve yuvarlar.

sonuc = Math.round(2.4); // yuvarlar.
sonuc = Math.floor(2.6); // asagiya yuvarlar.
sonuc = Math.ceil(2.4); // yukariya yuvarlar.

sonuc = Math.sqrt(25); // karekok islemi.
sonuc = Math.pow(2,3); // (2.2.2) us islemi.
sonuc = Math.abs(-10); // mutlak deger fonksiyonu.
sonuc = Math.min(2,4,6,8,10,12); // min sayiyi bulur.
sonuc = Math.max(2,4,6,8,10,12); // min sayiyi bulur.
sonuc = Math.random(); // 0 ile 1 arasında bir sayi olusturur.

console.log(typeof sonuc);
console.log(sonuc);
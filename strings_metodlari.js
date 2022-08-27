let kursAdi = "Komple Uygulamali Web Gelistirme Egitimi";

let sonuc;

sonuc = kursAdi.toLocaleLowerCase(); // tum harfleri kucuk harfe cevirir.
sonuc = kursAdi.toLocaleUpperCase(); // tum harfleri buyuk harfe cevirir.
sonuc = kursAdi.length; // karakter sayisini bulur.
sonuc = kursAdi.slice(0,6); // 0 dahil, 6 dahil değil (indeks).
sonuc = kursAdi.substring(0, 6); // slice ile ayni isi yapar.
sonuc = kursAdi.replace("Egitimi", "Kursu"); // "Egitimi" kelimesi yerine "Kursu" kelimesi kullanilir.
sonuc = kursAdi.trim(); // ifadenin saginda ve solunda yer alan bosluk karakterleri siler.
sonuc = kursAdi.trimEnd(); // sondaki bosluk ifadeleri sil.
sonuc = kursAdi.trimStart(); // bastaki bosluk ifadelerini sil.
sonuc = kursAdi.indexOf("Web"); // kelimenin indeksini bulur.
sonuc = kursAdi.split(" "); // elemanlari ayirir.
sonuc = kursAdi.split(" ")[3]; // 3. elemani ayirir.

console.log(sonuc);
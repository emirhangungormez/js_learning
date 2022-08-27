let ad = "Emir";
let soyad = "Han";
let yas = 21;
let sehir = "Bursa";

let mesaj = "İsmim " + ad + ' ve soyadim ' + soyad + ', ' + sehir + '\'de yasiyorum. ' + 'Emeklilige ' + (65 - yas) + ' yilim kaldi.';

// backtick
mesaj =`İsmim ${ad} ve soyadim ${soyad}, ${sehir}'de yasiyorum. Emeklilige ${65 - yas} yilim kaldi.`;

// ternary operators
let emeklilik = (65 - yas > 0) ? "Emeklilige " + (65 - yas) + " yil kaldi." : "Emeklisiniz."
mesaj =`İsmim ${ad} ve soyadim ${soyad}, ${sehir}'de yasiyorum. ${emeklilik}`;

console.log(mesaj);
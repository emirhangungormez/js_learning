// scopes = kapsam

var isim = "Han"; // global scope (kapsam)
const adres = "Bursa"; // const ile sabit degisken yaratilir, degiskeni degistirmeye kalkmak hata yaratacaktir.

function yazdir() {
    var isim = "Emir"; // yerel scope (kapsam)
    var yas = 21; // yerel scope (kapsam)
    console.log("function scope: ", isim, yas);
}

if(true) {
    var isim = "Merve"; // bloklarda (if,else,for,which..) var ile tanimlanan kapsamlar global scope'tur.
    console.log(isim);
}


if(true) {
    let cinsiyet = "Kadin";
    let isim = "Cagla"; // let ile tanimlanan kapsamlar yerel scope'tur.
    console.log(isim);
}

// console.log(cinsiyet); // hata verir, yerel blokta let ile tanimlanan kapsamlar global'de ulasilamaz.

yazdir();
console.log(isim);
// console.log(yas); // hata verir, yerel kapsamda degisken olusturulmustur.

// fonksiyonlar kendi scope alanlarini olusturur.
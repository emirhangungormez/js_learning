function selamlama(msg) {
    console.log(msg)
}

selamlama("selam");
selamlama("merhaba");
selamlama("nasilsin?");
selamlama("iyi gunler!");

function yasHesapla(dogumYili) {
    if(dogumYili < new Date().getFullYear()) {
        return new Date().getFullYear() - dogumYili;
    }
}

yasHesapla(2001);

function emekliligeKacYilKaldi(dogumYili, isim) {
    let yas = yasHesapla(dogumYili);
    let kalan_yil = 65 - yas;

    if (dogumYili > 0 && kalan_yil > 0) {
        console.log(`${isim}, emekli olmaniza ${kalan_yil} yil kaldi.`);
    }
    else if (yasHesapla(dogumYili) > 0) {
        console.log("Zaten emekli oldunuz.");
    }
}

emekliligeKacYilKaldi(2001, "emir");
emekliligeKacYilKaldi(2004, "eren");

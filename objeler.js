// dict, json
let kullaniciA = {
    "ad": "Emir",
    "soyad": "Han",
    "yas": "21",
    "adres": {
        "sehir": "Bursa",
        "ilce": "Yildirim",
        "posta": "1600"
    },
    "hobiler": ["Sinema", "Spor"]
}

let kullaniciB = {
   "ad": "Yigit",
   "soyad": "Kagan",
   "yas": "2"
}

let sonuc;

// sonuc = kullaniciA.ad;
// sonuc = kullaniciA.soyad;
// sonuc = kullaniciA.yas;
sonuc = kullaniciA.adres.sehir; // obje belirlemesi
sonuc = kullaniciA.hobiler[0]; // dizi belirlemesi

let kullanicilar = [ // dizi-obje gösterimi
    kullaniciA,
    kullaniciB
];

sonuc = kullanicilar[1].ad; 

let urunler = [ // obje-dizi gösterimi
    {
        "urun_ad": "samsung s22",
        "urun_fiyat": 13000
    },

    {
        "urun_ad": "samsung s23",
        "urun_fiyat": 15000
    }
]

sonuc = urunler[0].urun_ad;

console.log(sonuc)
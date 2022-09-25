/* let toplam = 0;

for(let i = 0; i < 10; i++) {
    toplam += i;
}

console.log(toplam); */

let sayilar = [1,4,55,8,4,3,12,45];
let toplam = 0;

// yontem 1
// for(let i = 0; i < sayilar.length ; i++){ // yontem 1
//     toplam += sayilar[i];
// }

// yontem 2
// for(let i in sayilar) {
//     toplam += sayilar[i];
// }

// yontem 3
// for(let sayi of sayilar){
//     toplam += sayi;
// }

// console.log(toplam);

let user = {
    "name": "Emir",
    "username": "emiremir",
    "pass": "12345",
    "email": "info@emir.com"
};

for (let key in user) {
    console.log(user[key]);
}
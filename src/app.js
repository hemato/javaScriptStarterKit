console.log("Merhaba Kodlama.io")

// JS TYPE SAFE DEĞİLDİR
let dolarBugun = 9.30

let dolarDun = 9.20
dolarDun = "9.15"
{
    let dolarDun = 9.10 
}

console.log(dolarDun)

//sabit değişken ataması tek seferlik
const euroDun = 11.2
//--euroDun = 11

//euroDun is read only hatası aldık
console.log(euroDun)

//array
//camelCasing
let konutKredileri = ["Konuk Kredisi", "Emlak Konut Kredisi", "Kamu Konut Kredisi"]

console.log("<ul>")
for(let i = 0;i<konutKredileri.length;i++){
    console.log("<li>"+konutKredileri[i]+"</li>")
}
console.log("</ul>")

console.log(konutKredileri)
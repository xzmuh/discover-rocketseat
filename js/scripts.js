
/*
true / false
undefined / null
typeof

Temos 9 tipos de dados organizados em 4 categorias: Primitive, Primitive Value, Structural e Structural Primitive. Os primitivos são: String, Number, Boolean, Undefined, Symbol, BigInt.
Os estruturais são: Object e Function. Além destes, temos o primitivo estrutural que consiste apenas no dado null
*/
console.log("Vou apanhar com isso!")

console.log(`Essa é melhor pq da pra usar expressões. 78 + 52 = ${78 + 52}`)

console.log({
    name: "Kinwa",
    age: 23,
    power: "Elemental",
    fly: function() {
        console.log(fly)
    }
});

console.log([
    "A",
    "B",
    "C",
    "D",
    "E"
]);

// Variáveis //

const sempre = "Não muda"
var clima = "Frio"
let pedra = "Obsidian"

console.log(`Método 1 - Achamos na rua uma ` + pedra + `, e o clima ficou mais `+ clima +``)
console.log(`Método 2 - Achamos na rua uma ${pedra}, e o clima ficou mais ${clima}`)

// ------------------------------------------ //

const classe = {
    name: "Lunarys",
    power: "Light of moon",
    weapon: "Alma Ade",
    mana: 1270
}

console.log(`Class: ${classe.name} - Weapon: ${classe.weapon}`)

// ------------------------------------------ //

const cars = [
    "Supra",
    "180SX",
    {
        name: "Skyline",
        model: "R38",
        age: 1998
    }
]

console.log(cars[2])

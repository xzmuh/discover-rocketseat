// Else if
let temperatura = Math.random(45) * 45
let temperaturaBaixa = 15
let temperaturaMedia = 25
let temperaturaAlta = 32
console.log("Temperatura atual: ",temperatura.toFixed(0))

if (temperatura < 6) {
    console.log("Neve!!")
} else if (temperatura <= temperaturaBaixa) {
    console.log("Friozin")
} else if (temperatura <= temperaturaMedia) {
    console.log("Suave")
} else if (temperatura <= temperaturaAlta) {
    console.log("Fervo")
} else if (temperatura > temperaturaAlta) {
    console.log("Saara!!")
}

// Switch
function calculator(num1, operator, num2) {
    let result
    switch (operator) {
        case '+':
            result = num1 + num2
            break
        case '-':
            result = num1 - num2
            break
        case '*':
            result = num1 * num2
            break
        case '/':
            result = num1 / num2
            break
        default:
            console.log("Não implementado")
            break
    }
    return result
}

console.log(calculator(12, '*', 4))

// tratamento de erros
function sayMyName(name = '') {
    if (name === '') {
        throw 'Nome é obrigatório!'
    }
}

try {
    sayMyName()
} catch(e) {
    console.log(e)
}

// for
for(let i = 1; i <= 10; i++) {
    console.log(i)
}

// while
let i = 0;
while(i < 10) {
    console.log("chupeta")
    i++
}

// for of
let names = ["Tryker", "Kinwa", "LzN"]
for(let name of names) {
    console.log(name)
}
console.log("---------------------------------")
// for in
let person = {
    name: 'Jeejs',
    age: 23,
    weight: 88.6
}
for(let property in person) {
    console.log(property)
    console.log(person[property])
}
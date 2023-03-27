// Criar objeto com New
let name = new String('Kinwa')
name.surName = "Hiayko"
let age = new Number(19)
console.log(name,age)

// Operadores unários
let number = 32
console.log(typeof(number))

const person = {
    name: "Rodriguez",
    nationality: "ARG",
    age: 25
}
delete person.age
console.log(person)

// Operadores aritiméticos:
// mutiplicação * 
// divisão /
// soma + 
// subtração -
// resto da divisão remainder
// incremento ++
// decremento --
// exponencial **

// comparação
let one = 1
let two = 2
console.log("2 é igual a 1?",two == 1)
console.log("2 é igual a 2?",two == 2)
console.log("2 é diferente de 1?",two != 1)
console.log("2 é diferente de 2?",two != 2)
console.log("1 é maior que 2?",one > 2)
console.log("1 é menor que 2?",one < 2)
console.log("2 é maior ou igual a 1?",two >= 1)
console.log("2 é menor ou igual a 1?",two <= 1)
// usamos === ou !== quando precisamos ver se é igual e o tipo também

// Operadores lógicos
// AND &&
// OR ||
// NOT !

// Operador de condição
let idade = 17
const canDrive = age>= 18 ? "Não pode dirigir" : "Pode dirigir"
console.log(canDrive)

// De cima para baixo, do mais importante ao menos importante.
// grouping                      ( )
// negação e incremento          ! ++ --
// multiplicação e divisão       * /
// adição e subtração            + -
// relacional                    < <= > >=
// igualdade                     == != === !==
// AND                           && 
// OR                            ||
// condicional                   ?:
// assignment (atribuição)       = += -= *= %= 
// Transformção de números pra string e vice versa
let string = "123"
console.log(Number(string))
let number = 123
console.log(String(number))

// Contando o comprimento
let text = "Timetracker"
console.log(text.length)
let number2 = 284
console.log(String(number).length)

// Organizar casas decimais e replace
let numberDec = 12.9933
console.log(numberDec.toFixed(2).replace(".",","))

// UPPER e LOWER
let upper = "Transformando para maiúscula"
console.log(upper.toUpperCase())
let lower = "TRANSFORMANDO PARA MINPUSCULA"
console.log(lower.toLowerCase())

// Separando Strings
let phrase = "GitKraken de graça para o povo!"
let array = phrase.split(" ")
console.log(array)
let phraseJunta = array.join("_")
console.log(phraseJunta)

// Encontrando palavras
let find = "Tem o CIFRÃO? Encontre-o: Has763$D78y3@¨&!d3287f6"
console.log(find.includes("$"))
console.log(find.indexOf("$"))

// Transformando em array
let word = "Tonyboy"
console.log(Array.from(word))

// Maniplando arrays
let tecnologias = ["html", "JS", "Vue"]
// Adicionar no fim
tecnologias.push("NodeJS")
// Adicionar no começo
tecnologias.unshift("SQL")
// Remover final
tecnologias.pop()
// Remover começo
tecnologias.shift()
// Pegar alguns elementos do array
// console.log(tecnologias.slice(1,2))
// Removendo mais de um elemente
// tecnologias.splice(1,2)
console.log(tecnologias)
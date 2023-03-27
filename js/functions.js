function repete() {
    console.log("Repetido!")
}

repete()
repete()
repete()

let total = 0

const sum = function(num1, num2) {
    let total = num1 + num2
    return total
}

let num1 = 98
let num2 = 134

console.log(`A soma é ${sum(num1,num2)}`)
console.log(total)

// contrutora

function Person (name) {
    this.name = name
    this.playing = function() {
        if (this.name == "Kinwa") {
            return this.name + " está jogando Call of Duty: Modern Warfare 2"
        } else {
            return this.name + " está jogando Overwatch"
        }
    }
}

const kinwa = new Person("Kinwa")
const tryker = new Person("Tryker")
console.log(kinwa.playing())
console.log(tryker.playing())

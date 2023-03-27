/*
Crie um algoritmo que transforme as notas do sistema
numérico para sistema de notas em caracteres tipo A B C

* de 90 para cima -   A
* entre 80 - 89   -   B
* entre 70 - 79   -   C
* entre 60 - 69   -   D
* menor que 60    -   F
*/

let notas = Math.random(100) * 100
console.log("A nota do aluno foi: " + notas.toFixed())
let notaFinal;

if(notas >= 90 && notas <= 100) {
    notaFinal = "A"
    console.log("O aluno tirou nota " + notaFinal + " no exame")
} else if (notas >=80) {
    notaFinal = "B"
    console.log("O aluno tirou nota " + notaFinal + " no exame")
} else if (notas >=70) {
    notaFinal = "C"
    console.log("O aluno tirou nota " + notaFinal + " no exame")
} else if (notas >=60) {
    notaFinal = "D"
    console.log("O aluno tirou nota " + notaFinal + " no exame")
} else if (notas < 60 && notas >= 0) {
    notaFinal = "E"
    console.log("O aluno tirou nota " + notaFinal + " no exame")
} else {
    console.log("Reprovado!")
}
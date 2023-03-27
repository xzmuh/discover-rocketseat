let familia = {
    ganhos: [2750, 4800, 2900],
    despesas: [1250, 820, 650, 500, 670, 1350]
}
//array com os valores

function sum(array) {
    let total = 0

    for(let ganho of array) {
        total += ganho
    }
    //somar cada valor do array
    return total
}

function calcularGastos() {
    const calcularGanhos = sum(familia.ganhos)
    const calcularDespesas = sum(familia.despesas)
    //variavel pra armazenar as somas das listas dos arrays

    const total = calcularGanhos - calcularDespesas

    const lOk = total >= 0 

    let text = "Seu saldo é de R$" + total + " negativo!"

    if (lOk) {
        text = "Seu saldo é de R$" + total + " positivo!"
    }
    console.log(text)
}

calcularGastos()
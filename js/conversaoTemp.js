/*

Crie uma função que receba uma string em celsius ou fahrenheit
e faça a transformação de uma unidade para outra 

    C = (F - 32) * 5/9 
    F = C * 9/5 + 32

*/

function converterTemp() {
    var num = parseInt(document.getElementById("num").value)
    var resp = document.getElementById("resposta")
    //pega o elemento pelo id insirido do input

    if(document.getElementById("Ctof").checked == true)
    resp.innerHTML = ctof(num)
    if(document.getElementById("Ftoc").checked == true)
    resp.innerHTML = ftoc(num)
    //check se o radio foi selecionado e retorna qual deles foi

    if (resp.value == null) {
        resp.innerHTML = "Nenhum valor insirido!"
    }
    //tratar valor vazio
}



function ctof(x) {
    return (1.8*x + 32).toFixed(1) + "F"
}

function ftoc(x) {
    return ( (x-32)*5/9 ).toFixed(1) + "C"
}
 
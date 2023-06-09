const menuLateral = document.querySelector('.menu-lateral')
const aulas       = document.querySelector('.aulas')
const js          = document.querySelector('.js')
const anotacoes   = document.querySelector('.anotacoes')
const fechaMenu   = document.querySelector('.btnFecha')
const abreMenu    = document.querySelector('.btnAbre')

abreMenu.addEventListener('click',() => {
    menuLateral.classList.toggle('mostra')
    menuLateral.classList.remove('fecha')
})

fechaMenu.addEventListener('click',() => {
    menuLateral.classList.toggle('fecha')
    menuLateral.classList.remove('mostra')
})

aulas.addEventListener('click',() => {
    const itensAulas = document.querySelector('.itens-aulas')
    const seta = document.querySelector('.fa-caret-right')
    itensAulas.classList.toggle('mostra')
    seta.classList.toggle('seta1')
})

anotacoes.addEventListener('click',() => {
    const itensAnotacoes = document.querySelector('.itens-anotacoes')
    const seta2 = document.querySelector('.fa-caret-right')
    itensAnotacoes.classList.toggle('mostra')
    seta2.classList.toggle('seta2')
})

js.addEventListener('click',() => {
    const itensJs = document.querySelector('.itens-js')
    const seta3 = document.querySelector('.fa-caret-right')
    itensJs.classList.toggle('mostra')
    seta3.classList.toggle('seta3')
})

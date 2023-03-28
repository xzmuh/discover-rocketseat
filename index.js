const menuLateral = document.querySelector('.menu-lateral')
const aulas = document.querySelector('.aulas')
const fechaMenu = document.querySelector('.btnFecha')
const abreMenu  = document.querySelector('.btnAbre')

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
    seta.classList.toggle('seta')
})
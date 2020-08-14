var cursos = document.querySelector('.js-cursos') 
var tempo = document.querySelector('.js-totaisDeHoras')

var contadorDeCursos = 0
var contadorDeHoras = 0

function evento(elemento) {
    if(elemento.checked) {
        contadorDeCursos = contadorDeCursos + 1
        contadorDeHoras = contadorDeHoras + parseInt(elemento.value)
    } else{
        contadorDeCursos = contadorDeCursos - 1
        contadorDeHoras = contadorDeHoras - parseInt(elemento.value)
    }   
    cursos.innerHTML = contadorDeCursos + ' curso(s)'
    tempo.innerHTML = contadorDeHoras + ' h'
}
var confirmar = document.querySelector('.js-confirmar')

function confirm() {
    if(contadorDeCursos == 0){
       alert('Nenhum curso selecionado !')
    } 
    if(contadorDeCursos == 1){
        alert('Você está matriculado em '+ contadorDeCursos + ' curso')
    } 
    if(contadorDeCursos > 1){
        alert('Você está matriculado em '+ contadorDeCursos + ' cursos')
    }

}

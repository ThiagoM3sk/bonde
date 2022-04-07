import Countdown from "./countdown.js"

const tempoForEnd = new Countdown("30 May 2022 00:00:00 GMT-0300")
const tempos = document.querySelectorAll("[data-time]")

function mostrarTempo(){
    tempos.forEach((tempo, index) =>{
    tempo.innerHTML = tempoForEnd.total[index]
})
}
mostrarTempo()
setInterval(mostrarTempo, 1000)

/*
let data = new Date()
let ano = data.getFullYear()
let min = new Date()
let dia = min.getDate()
let month = new Date()
let mes = month.getMonth()
let diaS = new Date()
let diaSem = diaS.getDay()
let tempo = document.getElementById('data')

switch(mes){
    case 0:
        mes = '01'
        break
    case 1:
        mes = '02'
        break
    case 2:
        mes = '03'
        break
    case 3:
        mes = '04'
        break
    case 4:
        mes = '05'
        break
    case 5:
        mes = '06'
        break
    case 6:
        mes = '07'
        break
    case 7:
        mes = '08'
        break
    case 8:
        mes = '09'
        break
    case 9:
        mes = '10'
        break
    case 10:
        mes = '11'
        break
    case 11:
        mes = '12'
        break
}
switch(diaSem){
    case 0:
        diaSem = 'Domingo'
        break
    case 1:
        diaSem = 'Segunda-Feira'
        break
    case 2:
        diaSem = 'Terça-Feira'
        break
    case 3:
        diaSem = 'Quarta-Feira'
        break
    case 4:
        diaSem = 'Quinta-Feira'
        break
    case 5:
        diaSem = 'Sexta-Feira'
        break
    case 6:
        diaSem = 'Sábado'
        break
}


tempo.innerHTML = `Visitado em ${diaSem}, ${dia}/${mes}/${ano}`
*/
/*
let sim = window.prompt('Concordas que o Eye chupa pica?'z)
if(sim != 'sim'){
    window.alert('Então quem chupa pica é tu')
}else{
    window.alert('Obrigado')
}

function sure(){
    window.alert('Tu ta querendo muito é pica e não ta sabendo pedir')
}
if (window.confirm("Você realmente quer sair?")) {
    window.open("sair.html", "Obrigado pela visita!");
  }*/
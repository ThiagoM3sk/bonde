let data = new Date()
let hora = data.getHours()
let min = new Date()
let minuto = min.getMinutes()
let tempo = document.getElementById('data')

tempo.innerHTML = `À(s) ${hora}h${minuto}`




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
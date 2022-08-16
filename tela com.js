function carregar() {
    var divtitulo = document.getElementById('divt')
    var diveH = document.getElementById('divhora')
    var divI = document.getElementById('diveimage')
    var hora = new Date()
    var horario = hora.getHours()
    var min = new Date()
    var minutos = min.getMinutes()

    
    
    if (horario>0 && horario <=12) {
        divI.src = './imagemdia.svg'
        divtitulo.innerHTML= `A hora certa é: ${horario}:${minutos}`
        document.body.style.background = 'lightyellow'

    }else if (horario>12 && horario <=18) {
        divI.src = './novaimtarde.svg'
        divtitulo.innerHTML= `A hora certa é: ${horario}:${minutos}`
        document.body.style.background = 'lightyellow'
    }else{
        divI.src = './imagemnoite.svg'
        divtitulo.innerHTML= `A hora certa é: ${horario}:${minutos}`
        document.body.style.background = 'lightyellow'
    }
}
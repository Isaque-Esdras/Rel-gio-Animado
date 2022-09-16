clicou = () =>{

  document.getElementById('horaDev').innerHTML 

  tempo = setInterval(() => {
    
  hora = new
  Date().toLocaleTimeString()

  parseInt(hora) + 1
  document.getElementById('horaDev').innerHTML = hora
 
  }, 1000);
  
  
}

mudarBackground = () =>{

    
    let momento = new Date()
    let momentaneo = momento.getHours()
    

    let img = document.getElementById('imagem')

    if (momentaneo>5 && momentaneo<=12) {
        img.src = './azul.svg'
        document.body.style.background = 'lightskyblue'
    }if (momentaneo>12 && momentaneo<=18) {
        img.src = './tarde.svg'
        document.body.style.background = ' rgb(152, 130, 241)'
    }else if (momentaneo>18 && momentaneo<5) {
        img.src = './vermelho.svg'
    }

    
  }
  
  mudarBackground()
  
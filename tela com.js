clicou = () =>{

  document.getElementById('horaDev').innerHTML 

  tempo = setInterval(() => {
    
  hora = new
  Date().toLocaleTimeString()

  parseInt(hora) + 1
  document.getElementById('horaDev').innerHTML = hora

 trocarManha()
  
  }, 1000);
  
  hora = 9

  let img = document.getElementById('imagem')

    if (hora>5 && hora<=12) {
        img.src = './azul.svg'
        document.body.style.background = 'lightskyblue'
    }if (hora>12 && hora<=18) {
        img.src = './tarde.svg'
        document.body.style.background = ' rgb(152, 130, 241)'
    }else if (hora>18 && hora<5) {
        img.src = './vermelho.svg'
    }

}

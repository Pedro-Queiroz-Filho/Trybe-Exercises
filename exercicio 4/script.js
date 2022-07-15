 // Variaveis
 
 const contador = document.getElementById('contador')
 const botao = document.getElementById('botao')
 let clickCount = 0

 // Escutadores

 botao.addEventListener('click', () => contador.innerText = clickCount += 1)
function createDaysOfTheWeek() {
  const weekDays = [
    "Domingo",
    "Segunda",
    "Terça",
    "Quarta",
    "Quinta",
    "Sexta",
    "Sábado",
  ];
  const weekDaysList = document.querySelector(".week-days");

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement("li");
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  }
}

createDaysOfTheWeek();

// Escreva seu código abaixo.

// Array Dias
let decemberDaysList = [
  29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
];
// Criando tag ul
const cor1 = false
const container = document.getElementsByClassName("buttons-container")[0];
const lista = document.createElement('ul');
lista.id = "days";
document.body.appendChild(lista)

// Criando li
for(let index = 0;index < decemberDaysList.length; index += 1){

const numero = document.createElement('li');
numero.innerText = decemberDaysList[index];
numero.classList.add('day');

if(decemberDaysList[index] == 24 || decemberDaysList[index] == 25 || decemberDaysList[index] == 31){
  numero.classList.add('holiday')
}

if(decemberDaysList[index] == 4 || decemberDaysList[index] == 11 || decemberDaysList[index] == 18 || decemberDaysList[index] == 25){
  numero.classList.add('friday')
}


lista.appendChild(numero)
}
// função

function botaoFeriados(texto){
  const botao = document.createElement('botton')
  botao.id = 'btn-holiday'
  botao.innerText = texto
  container.appendChild(botao)
}

botaoFeriados('Feriados')

const clickFeriado = document.getElementsByClassName("buttons-container")[0].firstElementChild;

function mudaCor(){
  const diasFeriado = lista.getElementsByClassName("holiday")
  for(key in diasFeriado){
    diasFeriado[key].classList.add('corDeFundo')
  }
   cor1 == true
}

function mudaCor2(){
  const diasFeriado = lista.getElementsByClassName("holiday")
  for(key in diasFeriado){
    diasFeriado[key].classList.add('corDeFundo2')
  }
   cor1 == false
}






if(cor1 == false){
clickFeriado.addEventListener('click',mudaCor)
}


if(cor1 == true){
clickFeriado.addEventListener('click',mudaCor2)
}




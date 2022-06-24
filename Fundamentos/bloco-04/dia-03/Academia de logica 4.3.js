/*
_______________________________________________________________________________________________________________
1. Encontre o index através do valor de um elemento
Escreva uma algoritmo que recebe 2 parâmetros:
 - Um array contendo um conjunto de números
 - O valor de um desses elementos
Procure esse elemento dentro do array, e imprima no terminal a posição index em que o elemento encontra-se.
Caso não o encontre, imprima:
-----------------------------------
"Elemento não encontrado no array"
-----------------------------------
_______________________________________________________________________________________________________________
2. Retorne os números ímpares
A Dora aventureira gostaria de ter uma lista com todos o números ímpares entre 1 e 50.
Escreva um algoritmo que imprima no terminal uma string com todos os números inteiros ímpares desse intervalo.
Use a seguinte estrutura na impressão:
----------------
"x, y, z, ...n"
----------------
_______________________________________________________________________________________________________________
3. Números divisíveis por 3
Escreva um algoritmo que cria uma sequência numérica de inteiros com intervalo de 1 entre eles. O algoritmo
deve receber antes de criar essa sequência, o valor inicial e final.
Conte os números divisíveis por 3 da sequência e imprima no terminal condicionando:
Se houver 50 ou mais:
---------------------------------------
"Há 50 ou mais números diviseis por 3"
---------------------------------------
Caso o contrário:
--------------------------
"Sequência muito pequena."
--------------------------
_______________________________________________________________________________________________________________
*/

//1

let numeros = [5, 3, 19, 29, 100, 90, 80, 76];
let valor = 2;
let verificação;
let teste = 0;

for (let index = 0; index < numeros.length; index += 1) {
  if (numeros[index] === valor) {
    console.log(valor);
    teste = 1;
    verificação = false;
  } else if (teste < 1) {
    verificação = true;
  }
}

if (verificação === true) {
  console.log("Elemento não encontrado no array");
}

//2
let numeros1 = "";

for (let index = 1; index < 51; index += 2) {
  numeros1 = numeros1 + index;
  numeros1 = numeros1 + ",  ";
}

console.log(numeros1);

//3

const valorFinal = 100;
let valorInicial = 0;
let divisiveisPor3 = [];

for (valorInicial; valorInicial <= valorFinal; valorInicial += 1) {
  if (valorInicial % 3 === 0 && valorInicial != 0) {
    divisiveisPor3.push(valorInicial);
  }
}

console.log(divisiveisPor3);

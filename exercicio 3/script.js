const numero = 10;
let numeroFatorado = numero;

function fatorial(num) {
  for (let index = num; index > 1; index -= 1) {
    numeroFatorado = numeroFatorado * (index - 1);
  }
  return numeroFatorado;
}

console.log(fatorial(numero));

const frase = "Antônio foi no banheiro e não sabemos o que aconteceu";

function maiorPalavra(texto) {
  let arrayPalavras = texto.split(" ");

  return arrayPalavras.sort((a, b) => b.length - a.length)[0];
}

console.log(maiorPalavra(frase));

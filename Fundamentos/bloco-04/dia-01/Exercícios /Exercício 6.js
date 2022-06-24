const primeiroNumero = 0;
const segundoNumero = 4;
const terceiroNumero = 15

console.log("Adição =",primeiroNumero + segundoNumero);
console.log("Subtração =",primeiroNumero - segundoNumero);
console.log("Multiplicação =",primeiroNumero * segundoNumero);
console.log("Divisão =",primeiroNumero / segundoNumero);
console.log("Módulo =",primeiroNumero % segundoNumero);

if(primeiroNumero > segundoNumero) {
    console.log("Maior de dois números =",primeiroNumero);
} else if(segundoNumero > primeiroNumero) {
    console.log("Maior de dois números =",segundoNumero);
}

if(primeiroNumero > segundoNumero && primeiroNumero > terceiroNumero) {
    console.log("Maiorde tres números =",primeiroNumero);
} else if (segundoNumero > primeiroNumero && segundoNumero > terceiroNumero) {
    console.log("Maior de tres números =",segundoNumero)
} else if (terceiroNumero > primeiroNumero && terceiroNumero > segundoNumero) {
    console.log("Maior de tres número =",terceiroNumero);
}

if(primeiroNumero > 0) {
    console.log("O numero",primeiroNumero,"È positivo",);
} else {
    console.log("O numero",primeiroNumero,"È negativo",);
}
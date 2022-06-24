// 1
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;
let somaMedia =0;

for(index = 0;index < numbers.length;index += 1) {
    console.log(numbers[index]);
}

for(index = 0;index < numbers.length; index += 1) {
    soma = soma + numbers[index];
    
}





console.log("Resultado da soma =",soma);
console.log("A média é de:",soma/numbers.length);

if((soma/numbers.length) > 20 ) {
    console.log("Valor media é maior que vinte");
} else {
    console.log("Valor media é menor que vinte");
}

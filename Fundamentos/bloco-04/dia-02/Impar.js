let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 4, 88, 35, 27];
let impares = []

for(index = 0; index <numbers.length;index += 1) {
   if((numbers[index] % 2) == 1) {
    impares.push(numbers[index])
   }
}

console.log("Numeros Impares =",impares);
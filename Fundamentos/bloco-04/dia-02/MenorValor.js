let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let menorNumero = "none";

for (index = 0; index < numbers.length; index += 1) {
  for (index2 = 0; index2 < numbers.length; index2 += 1) {
    if (numbers[index] < numbers[index2]) {
        menorNumero = numbers[index]
      if (index2 == numbers.lenght - 1) {
        
      }
    }
  }
}

console.log(menorNumero);

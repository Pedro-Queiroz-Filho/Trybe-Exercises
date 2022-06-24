let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27, 120, 500];
let quantoFoiMaior = 0;
let maiorNumero = 0;

for (index = 0; index < numbers.length; index += 1) {
  for (index2 = 0; index2 < numbers.length; index2 += 1) {
    if (numbers[index] > numbers[index2]) {
      quantoFoiMaior += 1;
    }
    if (quantoFoiMaior == numbers.length - 1) {
      maiorNumero = numbers[index];
    } else if (index2 == numbers.length - 1) {
      quantoFoiMaior = 0;
    }
  }
}

console.log(maiorNumero);

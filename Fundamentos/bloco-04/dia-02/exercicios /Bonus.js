let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let numbersOrg =[];
let foimenor =0;

for (index = 0; index < numbers.length; index += 1) {
  for (index2 = 0; index2 < numbers.length; index2 += 1) {
    if (numbers[index] < numbers[index2]) {
        let menorNumero = numbers[index]
      numbers.splice(index,1)
      numbers.unshift(menorNumero)
    }
    
  }
}

console.log(numbersOrg);

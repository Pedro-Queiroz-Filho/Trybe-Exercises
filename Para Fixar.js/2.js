// 1

const numbers = [19, 21, 15, 30, 3, 45, 22, 15];

const findDivisibleBy3And5 = (number) => {
  // Adiciona seu código aqui
  return number % 3 === 0 && number % 5 === 0;
}

console.log(numbers.find(findDivisibleBy3And5))

// 2

const names = ['João', 'Irene', 'Fernando', 'Maria'];

const findNameWithFiveLetters = (nome) => {
  // Adicione seu código aqui:
  return nome.length === 5;
}

console.log(names.find(findNameWithFiveLetters));
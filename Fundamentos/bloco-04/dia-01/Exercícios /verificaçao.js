const numero1 = 1
const numero2 = 3
const numero3 = 1

const numero4 = 1
const numero5 = 3
const numero6 = 1

const verif1 = numero1 % 2 == 0
const verif2 = numero2 % 2 == 0
const verif3 = numero3 % 2 == 0

let eImpar;
let epar;

if(verif1 == true || verif2 == true || verif3 == true) {
    epar = true
} else {
    epar = false
}

if(verif1 == false || verif2 == false || verif3 == false) {
    eImpar = true
} else {
    eImpar = false
}

console.log("tem numero par nas 3 primeiras verificaçoes?",epar);
console.log("tem numero impar nas ultimas 3 verificaçoes?",eImpar);
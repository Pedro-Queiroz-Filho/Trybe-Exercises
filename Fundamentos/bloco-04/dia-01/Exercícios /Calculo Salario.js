const salario = 3000
let valorInss;
let valorIR;

//INSS
if (salario <= 1556.94) {
    valorInss = salario * 0.08
} else if (salario >= 1556.95 && salario < 2594.92) {
    valorInss = salario * 0.09
} else if (salario >= 2594.92 && salario < 5189.82) {
    valorInss = salario * 0.11
} else {
    valorInss = 570.88
};

const salarioComInss = salario - valorInss




//IR
if (salarioComInss <= 1903.98) {
    valorIR = 0
} else if (salarioComInss > 1903.98 && salarioComInss <= 2826.65) {
    
    valorIR = (salarioComInss * 0.075) - 142.80
} else if (salarioComInss > 2825.65 && salarioComInss <= 3751.0) {
    valorIR = (salarioComInss * 0.15) - 354.80
} else if (salarioComInss > 3751.0 && salarioComInss <= 4664.68) {
    valorIR = (salarioComInss * 22.5) - 636.13
} else {
    valorIR = (salarioComInss * 27.5) - 869.36
};

console.log("Salario com os impostos debitados =",salarioComInss - valorIR);


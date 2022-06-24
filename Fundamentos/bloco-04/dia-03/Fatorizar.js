let numeroParaFatorizar = 9
let soma = numeroParaFatorizar;
let soma2 = numeroParaFatorizar



for(index = numeroParaFatorizar;index > 1; index -= 1) {
    if(soma2 > 0){
    soma2 -= 1
    soma = soma * (soma2)
    }
}
console.log(soma);
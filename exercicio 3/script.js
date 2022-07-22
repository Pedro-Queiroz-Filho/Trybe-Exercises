const gabarito = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const respostasEstudantes = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];


const resultado = (arrayGab,arrayResposta,callBack) => {
    return callBack(arrayGab,arrayResposta)
}

const correçao = (arrayGab,arrayResposta) => {
    let pontuaçao = 0;
 for (let index = 0; index < arrayGab.length; index += 1) {
       if(arrayGab[index] === arrayResposta[index]) {
        pontuaçao += 1;
       }
 }
 return pontuaçao
}

console.log(resultado(gabarito,respostasEstudantes,correçao));


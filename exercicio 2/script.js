const sorteio = (numAposta,callBack) => {
const numSorteado = Math.round( Math.random() * 5);
return (verif(numAposta,numSorteado))
}

const verif = (numAposta,numSorteado) => {
    console.log(numAposta);
    console.log(numSorteado);
    if (numAposta === numSorteado) {
       return "Parabéns você ganhou"
    }

    return "Tente novamente"
}

console.log(sorteio(4,verif));
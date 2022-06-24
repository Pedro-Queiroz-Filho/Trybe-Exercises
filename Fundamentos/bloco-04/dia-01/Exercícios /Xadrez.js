const peca = "Rei";



switch (peca.toLowerCase()) {
    case "peão":
        console.log("come em diagonal");
        break;

    case "rainha":
        console.log("come em todas as direçoes");
        break;

    case "rei":
        console.log("come em todas as direçoes mas apenas uma casa");
        break;

    default:
        console.log("peça nao existente");
        break;


}

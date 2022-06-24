const custoDoProduto = 12
const valorDeVenda = 99
const imposto = 12 * 0.20
const custoComImposto = custoDoProduto + imposto
const lucroVedas1k = (valorDeVenda - custoComImposto) * 1000

if(custoDoProduto > 0 && valorDeVenda > 0) {
    console.log("Lucro Da venda de 1000 produtos =",lucroVedas1k);
} else {
    console.log("ERRO por favor coloque um valor para os produtos");
}

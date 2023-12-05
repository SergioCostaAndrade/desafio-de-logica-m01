//const precos = [150, 50];
//const precos = [100, 100, 100];
const precos = [200, 150, 50, 100];
function solucao(precos) {
  //seu codigo aqui
  let valorFinal = precos.reduce(function (acumulador, valorAtual) {
    return acumulador + valorAtual;
  });
  if (precos.length >= 3) {
    // nao tem desconto
    precos.sort((a, b) => {
      return a - b;
    });
    valorFinal -= precos[0] * 0.5;
  }
  console.log(valorFinal);
}
solucao(precos);

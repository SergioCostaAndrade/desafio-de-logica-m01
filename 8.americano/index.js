const numeros = [1, 3, 2, 1];
//const numeros = [1, 1, 1];
function solucao(numeros) {
  // seu codigo aqui
  const soma = numeros.reduce(function (acumulador, valorAtual) {
    return acumulador + valorAtual;
  });
  if (soma <= numeros.length) {
    console.log(soma);
  } else {
    let posicaoGoleiro = soma;
    while (posicaoGoleiro > numeros.length) {
      posicaoGoleiro -= numeros.length;
    }
    console.log(posicaoGoleiro);
  }
}
solucao(numeros);

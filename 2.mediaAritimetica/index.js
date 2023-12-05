const lista = [2, 3, 4];
function solucao(lista) {
  //seu codigo aqui
  const mediaAritmetica = lista.reduce((acumulador, valorAtual) => {
    return acumulador + valorAtual;
  }, 0);
  console.log(mediaAritmetica / lista.length);
}
solucao(lista);

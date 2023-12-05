const lista = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function solucao(lista) {
  //seu codigo aqui
  let soma = 0;
  for (let numero of lista) {
    soma += numero;
  }
  console.log(soma);
}
solucao(lista);

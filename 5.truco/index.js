function solucao(carta) {
  //seu codigo aqui
  const CartaViradaParaCima = ["Q", "J", "K", "A", "2", "3"];
  const manilha = ["J", "K", "A", "2", "3", "Q"];
  console.log(manilha[CartaViradaParaCima.indexOf(carta)]);
}
solucao("Q");

const jogadores = [
  {
    nome: "Herman",
    jogada: 1,
  },
  {
    nome: "Rhodes",
    jogada: 1,
  },
  {
    nome: "Beach",
    jogada: 1,
  },
  {
    nome: "Laurel",
    jogada: 1,
  },
  {
    nome: "Beatrice",
    jogada: 1,
  },
  {
    nome: "Alison",
    jogada: 1,
  },
  {
    nome: "Saundra",
    jogada: 0,
  },
  {
    nome: "Klein",
    jogada: 1,
  },
];
function solucao(jogadores) {
  let soma = 0;
  for (jogador of jogadores) {
    soma += jogador.jogada;
  }
  if (soma === 1) {
    for (jogador of jogadores) {
      if (jogador.jogada === 1) {
        console.log(jogador.nome);
      }
    }
  } else if (soma === jogadores.length - 1) {
    for (jogador of jogadores) {
      if (jogador.jogada === 0) {
        console.log(jogador.nome);
      }
    }
  } else {
    console.log("NINGUEM");
  }
}
solucao(jogadores);

const texto = // "Um texto qualquer";
  "  Cuidado, pois     usuarios as vezes deixam espacos vazios no fim do texto sem     querer ";
function solucao(texto) {
  // Seu codigo aqui
  const textoSemEspacosEmBrancoInicioEFim = texto.trim();
  const palavras = textoSemEspacosEmBrancoInicioEFim.split(" ");
  const arrayDePalavras = [];
  for (palavra of palavras) {
    if (palavra !== "" && palavra !== " ") {
      arrayDePalavras.push(palavra);
    }
  }
  console.log(arrayDePalavras.length);
}
solucao(texto);

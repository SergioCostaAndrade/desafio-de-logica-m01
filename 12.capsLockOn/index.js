const input = "caps";
function processData(input) {
  //Enter your code here
  let palavraTesteParaTodaUpper = "";
  let primeiraLetraDaPalavra = "";
  let restoDaPalavra = "";
  let primeiraLetraDaPAlavraMinuscula = "";
  let restoDaPalavraMaiuscula = "";
  let palavraFinal = "";

  palavraTexteParaTodaUpper = input.toUpperCase();
  //
  primeiraLetraDaPalavra = input.slice(0, 1);
  primeiraLetraDaPAlavraMinuscula = primeiraLetraDaPalavra.toLowerCase();
  //
  restoDaPalavra = input.slice(1);
  restoDaPalavraMaiuscula = restoDaPalavra.toUpperCase();
  if (input === palavraTexteParaTodaUpper) {
    palavraFinal = input.toLowerCase();
  } else if (
    primeiraLetraDaPalavra === primeiraLetraDaPAlavraMinuscula &&
    restoDaPalavra === restoDaPalavraMaiuscula
  ) {
    palavraFinal =
      primeiraLetraDaPalavra.toLocaleUpperCase() + restoDaPalavra.toLowerCase();
  } else {
    palavraFinal = input;
  }

  console.log(palavraFinal);
}
processData(input);

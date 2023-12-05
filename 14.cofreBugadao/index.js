const input = "cubos\ncuggbyodd";
function processData(input) {
  //Enter your code here
  const linhas = input.trim().split("\n");
  const senhaOriginal = linhas[0];
  const senhaTEntativa = linhas[1];
  let senhaEncontrada = "";
  const arraySenhaOriginal = [];
  const arraySenhaTEntativa = [];
  const arraySenhaEncontrada = [];
  let indiceAux = 0;
  let indiceArraySenhaEncontrada = 0;
  for (letra of senhaOriginal) {
    arraySenhaOriginal.push(letra);
  }
  for (letra of senhaTEntativa) {
    arraySenhaTEntativa.push(letra);
  }
  for (i = 0; i <= arraySenhaOriginal.length; i++) {
    for (j = indiceAux; j <= arraySenhaTEntativa.length; j++) {
      if (arraySenhaOriginal[i] === arraySenhaTEntativa[j]) {
        arraySenhaEncontrada[indiceArraySenhaEncontrada] =
          arraySenhaOriginal[i];
        indiceArraySenhaEncontrada++;
        indiceAux = j + 1;
        break;
      }
    }
  }
  arraySenhaEncontrada.pop();
  //
  senhaEncontrada = arraySenhaEncontrada.join("");
  //
  if (senhaEncontrada === senhaOriginal) {
    console.log("SIM");
  } else {
    console.log("NAO");
  }
}
processData(input);

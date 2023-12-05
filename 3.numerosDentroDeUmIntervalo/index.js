const numero = 10;
const limiteInferior = 5;
const limiteSuperior = 20;
function solucao(numero, limiteInferior, limiteSuperior) {
  if (numero >= limiteInferior && numero <= limiteSuperior) {
    console.log("PERTENCE");
  } else {
    console.log("NAO PERTENCE");
  }
}
solucao(numero, limiteInferior, limiteSuperior);

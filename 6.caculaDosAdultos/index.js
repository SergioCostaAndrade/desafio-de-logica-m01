const lista = [12, 11, 2, 100, 60, 70, 35];
function solucao(lista) {
  // seu codigo aqui
  lista.sort((a, b) => {
    return a - b;
  });
  lista.reverse();
  let menorIdadeDentreOsMaioresDe18 = 0;
  for (idade of lista) {
    if (idade >= 18) {
      menorIdadeDentreOsMaioresDe18 = idade;
    }
  }
  if (menorIdadeDentreOsMaioresDe18) {
    console.log(menorIdadeDentreOsMaioresDe18);
  } else {
    console.log("CRESCA E APARECA");
  }
}
solucao(lista);

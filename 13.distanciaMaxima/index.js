//const input = "3\n0 0\n0 3\n4 0";
const input = "5\n3.56 17\n-5.1 36.3\n0.0002 -2\n5 5\n-9.01 -17.7";
function processData(input) {
  //Enter your code here
  const linhas = input.trim().split("\n");
  const coordenadas = [];
  const totalFuncionarios = parseInt(linhas[0]);
  let maiorDistancia = 0;
  //
  for (let i = 1; i <= totalFuncionarios; i++) {
    const [x, y] = linhas[i].split(" ").map(Number);
    coordenadas.push([x, y]);
  }
  for (let IndExt = 0; IndExt < totalFuncionarios; IndExt++) {
    for (let IndInt = IndExt + 1; IndInt < totalFuncionarios; IndInt++) {
      let [ax, ay] = coordenadas[IndExt];
      let [bx, by] = coordenadas[IndInt];
      const distanciaEntreDoisPontos = Math.sqrt(
        Math.pow(bx - ax, 2) + Math.pow(by - ay, 2)
      );

      if (maiorDistancia < distanciaEntreDoisPontos) {
        maiorDistancia = distanciaEntreDoisPontos;
      }
    }
  }
  console.log(maiorDistancia.toFixed(6));
}

processData(input);

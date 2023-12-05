const min = 10;
km = 5;
function solucao(min, km) {
  //console.log(min,km)
  let tarifa = 0;
  let tempoAcimaDeVinteMinutos = 0;
  let kmAcimaDeDezKm = 0;
  if (min > 20) {
    tempoAcimaDeVinteMinutos = min - 20;
    min = 20;
  }
  if (km > 10) {
    kmAcimaDeDezKm = km - 10;
    km = 10;
  }
  tarifa =
    min * 50 + tempoAcimaDeVinteMinutos * 30 + km * 70 + kmAcimaDeDezKm * 50;
  console.log(tarifa);
}
solucao(min, km);

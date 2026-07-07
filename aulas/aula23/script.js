// Parâmetros rest em funções

function somar(...valores) {
  let resultado = 0;
  for (i in valores) {
    resultado += valores[i]
  }
  return resultado
}

console.log(somar(5,5,5,5));
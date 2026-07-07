// Funções parâmetrizadas

let valorInicial = 0;

function somar(valor) {
 let media = valorInicial += valor;
 return media
}
 for (let i = valorInicial; i <= 10; i++) {
  console.log(somar(100))
 }

const valorPadrão = 0;

function média(n1 = valorPadrão, n2 = valorPadrão) {
  let res = (n1 + n2) / 2;
  return res
}

let resultadoMédia = média(10);
//console.log(resultadoMédia)
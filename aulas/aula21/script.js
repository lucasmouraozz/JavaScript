// Funções com retorno

function canal() {
  let n1 = 10;
  let n2 = 20;
  let soma = n1 + n2;
  let res = soma;
  if (res % 2 == 0) {
    return 'Par';
  } else {
    return 'Impar';
  }
}

let sm = canal();
console.log(sm);
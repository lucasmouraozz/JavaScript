// Estruturas condicionais (if e else);

let aluno = 'João Lucas'
let notaUm = 8;
let notaDois = 9;

const calcularMédia = (notaUm + notaDois) / 2;
const média = calcularMédia;

if (média >= 7) {
  console.log(`Olá, ${aluno}! Sua nota foi ${média}`);
} else if (média > 5 && média < 7) {
  console.log(`Olá, ${aluno}! Sua nota foi ${média}`);
} else {
  console.log(`Olá, ${aluno}! Sua nota foi ${média}`);
}

console.log('Fim do programa')
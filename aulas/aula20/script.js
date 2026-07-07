// Funções

function calcularMédia() {
  const nome = 'João Lucas Mourão Borges'
  const notaUm = 7;
  const notaDois = 7;
  const notaTrês = 7;
  const notaQuatro = 10;
  let somaDasNotas = (notaUm + notaDois + notaTrês + notaQuatro) / 4;
  let média = somaDasNotas;
  
  if (média >= 7) {
    console.log(`Parabéns, ${nome}! Sua média foi ${média}. Você passou!!`);
  } else if (média >= 5 && media < 7) {
    console.log(`Olá, ${nome}! Sua média foi ${média}. Você está de recuperação!!`);
  } else {
    console.log(`Olá, ${nome}! Sua média foi ${média}. Você está reprovado :/`);
  }
}

calcularMédia();
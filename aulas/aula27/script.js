// Funções Geradoras

function* login() {
  const nome = yield "Qual o seu nome?";
  const esporte = yield "Qual o seu esporte favorito?";
  return `Olá, ${nome}! O seu esporte favorito é o ${esporte}`;
}

const itc = login();
console.log(itc.next().value)
console.log(itc.next('João').value);
console.log(itc.next('Vôlei').value);



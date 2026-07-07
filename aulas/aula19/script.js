//Break e continue

let n = 0;
let max = 1000;
let pares = 0;
let impares = 0;

for (let i = n; i < max; i +=1 ) {
  if (i % 2 == 0) {
    continue
  }
  impares++
  if (i % 2 == 0) { 
  }
  pares++;
}
console.log(`Quantidade de números ímpares: ${impares}`);
console.log(`Quantidade de números pares: ${pares}`);
console.log('Fim do programa');



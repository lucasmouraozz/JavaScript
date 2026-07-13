// Função dentro de função
const somar = (val) => {
    let res = 0;
    for (let i = 0; i < val.length; i++) 
      res += val[i];
    return res
  }

const soma = (...valores) => {
  
  return somar(valores);
}
sm1 = [10,20,30]
//console.log(soma(...sm1))
//console.log(soma(50,50))


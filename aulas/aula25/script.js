// Arrow Function

const soma = (v1,v2) => {
  return v1 + v2
}

const nome = (n) => {
  return n
}

const add = (n) => {
return n+10;
}

let somar = (...valores) => {
  let res = 0;
  for (i of valores) {
    res += i
  }
  return res
}


//console.log(soma(10,5));
//console.log(nome('Lucas'));
//console.log(add(90));
console.log(somar(10,6));

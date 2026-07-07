// Funções anônimas

 const f = function(v1,v2) {
  let res = v1 **= v2;
  if (res % 2 == 0) {
    return 'Par';
  } else {
    return 'Impar';
  }
  return res;
} 
console.log(f(10,5)) ;


//Função construtura anônima

const f = new Function('v1,v2', 'return (v1+v2) / 2');
console.log(f(100,200));

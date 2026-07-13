//Manipulando o DOM pelo querySelector

const divTodas = [...document.getElementsByTagName('div')];
const cursoTodos = [...document.getElementsByClassName('curso')];


const quey_divToda = [...window.document.querySelectorAll('div > p')];
const query_cursosTodos = [...window.document.querySelectorAll('.curso')];
const cursosC1 = [...window.document.querySelectorAll('.c1, p')];
const cursosC2 = [...window.document.querySelectorAll('.c2')];
const cursoespecial = window.document.querySelectorAll('#c1');

//console.log(quey_divToda);
//console.log(query_cursosTodos);
//console.log(cursosC1);
//console.log(cursosC2);
console.log(quey_divToda)


//console.log(divTodas)
//console.log(cursoTodos)
//console.log(cursosC1)
//console.log(cursosC2)
//console.log(cursoespecial)

//todosCursosC2.map((el) => {
 // el.classList.add('destaque')
//})


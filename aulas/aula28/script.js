// Método map

//const cursos = ['HTML', 'CSS', 'JavaScript', 'React'];
//let c = cursos.map((el, i) => {
 // return `<div> ${el}</div>`
//})
//console.log(c)

//let el = window.document.getElementsByTagName('div');
//el = [...el]
//console.log(el)
//el.map((e, i) => {
 //e.innerHTML = 'Cursos'
//})

//const el = window.document.getElementsByTagName('div');
//const val = Array.prototype.map.call(el,({innerHTML}) => innerHTML)
//console.log(val)

const converter = (e) => parseInt(e)
const dobrar = (e) => e * 2;
let num = ['1', '2', '3', '4', '5'].map(dobrar);
console.log(num);



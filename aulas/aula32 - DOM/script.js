//Manipulando o DOM pela classe

const todosCursos = [...document.getElementsByClassName('curso')]
const todosCursosC1 = [...document.getElementsByClassName('c1')]
const todosCursosC2 = [...document.getElementsByClassName('c2')]
const curso = [...document.getElementsByClassName('curso')] [0]
console.log(todosCursos)
console.log(todosCursosC1)
console.log(todosCursosC2)
console.log(curso)

todosCursosC2.map((el) => {
  el.classList.add('destaque')

})


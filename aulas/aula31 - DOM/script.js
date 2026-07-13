//Manipulando o DOM pela tagname

const dc1 = window.document.getElementById('c1')
const dc2 = window.document.getElementById('c2')
const dc3 = window.document.getElementById('c3')
const dc4 = window.document.getElementById('c4')
const dc5 = window.document.getElementById('c5')
const dc6 = window.document.getElementById('c6')

const cursos = [dc1, dc2, dc3, dc4, dc5, dc6];

const html = [...window.document.getElementsByTagName('div')]
html.map((e) => {
  console.log(e)
})


console.log(html)


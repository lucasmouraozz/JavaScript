const caixaUm = window.document.querySelector('#caixa1');
const btn_c1 = window.document.querySelector('#c1');
const cursos = [...window.document.querySelectorAll('.curso')]

caixaUm.addEventListener('click', (event) => {
  console.log('clicou!')
  console.log(event)
})

cursos.forEach((el) => {
  el.addEventListener('click', (event) => {
    event.stopPropagation()
  })
})
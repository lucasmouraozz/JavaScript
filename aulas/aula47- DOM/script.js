const p_array = window.document.querySelector('#array')
const txt_pesquisar = window.document.querySelector('#txt_pesquisar')
const btnPesquisar = window.document.querySelector('#btnPesquisar')
const resultado = window.document.querySelector('#resultado')

const elementos_array = ['HTML', 'CSS', 'JavaScript']
p_array.innerHTML = elementos_array

btnPesquisar.addEventListener('click', (evt) => {
  resultado.innerHTML = 'Valor não encontrado'
  
  const ret = elementos_array.find((el, i) => {
    if (el.toUpperCase() == txt_pesquisar.value.toUpperCase()) {
      resultado.innerHTML = `Valor encontrado: ${el} - Na posição ${i}`
    }
  })
  console.log(ret)
})




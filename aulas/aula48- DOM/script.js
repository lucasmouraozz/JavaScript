const p_array = window.document.querySelector('#array')
const btnVerificar = window.document.querySelector('#btnPesquisar')
const resultado = window.document.querySelector('#resultado')

const elementos_array = [21,25,19,20,18,18,22]
p_array.innerHTML = elementos_array

btnVerificar.addEventListener('click', (evt) => {
  
  const ret = elementos_array.every((el, i) => { 
    if (el < 18) {
      resultado.innerHTML = `Array não conforme na posição ${i}`
    }
     return el >= 18
  })
  if (ret) {
    resultado.innerHTML = 'OK'
  }
  // console.log(ret)
})


// Eventos DOM

const cursos = [...window.document.querySelectorAll('.curso')]

cursos.map((el) => {
  el.addEventListener('click', (evt) => {
    const el = evt.target;
    el.classList.add('destaque')
    console.log(el.innerText + ' Você cliclou em mim!')
  })
})  
  



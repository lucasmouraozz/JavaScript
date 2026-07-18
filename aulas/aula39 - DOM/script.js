const caixaUm = window.document.querySelector('#caixa1');

const cursos = ['HTML', 'JavaScript', 'PHP', 'React', 'MySQL', 'ReactNative'];
cursos.map((el, i) => {
  const novoElemento = window.document.createElement('div');
  novoElemento.setAttribute('id', 'c' + i);
  novoElemento.setAttribute('class', 'curso c1');
  novoElemento.innerHTML = el
  caixaUm.appendChild(novoElemento);
})




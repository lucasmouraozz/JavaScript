const caixaCurso = window.document.querySelector('#caixaCursos');
const btn_c = [...window.document.querySelectorAll('.curso')];
const c1_2 = window.document.querySelector('#c1_2');
const cursos = ['HTML','CSS', 'JavaScript', 'PHP', 'React', 'MySQL', 'ReactNative'];
const btnCursoSelecionado = window.document.getElementById('btnCursoSelecionado');
const btnRemoverCursoSelecionado = window.document.getElementById('btnRemoverCurso');
const btnAdicionarNovoCursoAntes = window.document.getElementById('btnAdicionarNovoCursoAntes')
const btnAdicionarNovoCursoDepois = window.document.getElementById('btnAdicionarNovoCursoDepois');
const nomeCurso = window.document.getElementById('nomeCurso')

let indice = 0;

const removerSeleção = () => {
  const cursosSelecionados = [...window.document.querySelectorAll('.selecionado')]
  cursosSelecionados.map((el) => {
    el.classList.remove('selecionado')
  })
}

const criarNovoCurso = (curso) => {
  const novoElemento = document.createElement('div')
  novoElemento.setAttribute('id', 'c' + indice)
  novoElemento.setAttribute('class', 'curso c1')
  novoElemento.innerHTML = curso;
  novoElemento.addEventListener('click', (evt) => {
    removerSeleção()
    evt.target.classList.toggle('selecionado')
  })
  return novoElemento
}

cursos.forEach((el, chave) => {
  const novoElemento = criarNovoCurso(el)
  caixaCurso.appendChild(novoElemento)
  indice++
})

const cursoSelecionado = () => {
  const cursosSelecionados = [...window.document.querySelectorAll('.selecionado')]
  return cursosSelecionados[0]
}

btnCursoSelecionado.addEventListener('click', (evt) => {
  try {
     window.alert(Curso selecionado: ${cursoSelecionado().innerHTML})
  } catch (Exception) {
     window.alert('Error: selecione um curso.')
  }
})

btnRemoverCursoSelecionado.addEventListener('click', (evt) => {
  const cs = cursoSelecionado()
  if (cs != undefined){
    cs.remove() 
  } else {
    window.alert('Error: selecione um curso')
  }
})

btnAdicionarNovoCursoAntes.addEventListener('click', (evt) => {
  try {
    if (nomeCurso.value != '') {
      const novoCurso = criarNovoCurso(nomeCurso.value)
      caixaCurso.insertBefore(novoCurso, cursoSelecionado())
    } else {
      window.alert('Digite um curso.')
    }
  } catch (Exception) {
    window.alert('Error: adicione um curso.')
  }
})

btnAdicionarNovoCursoDepois.addEventListener('click', (evt) => {
  try {
    if (nomeCurso.value != '') {
      const novoCurso = criarNovoCurso(nomeCurso.value)
      caixaCurso.insertBefore(novoCurso, cursoSelecionado().nextSibling)
    } else {
      window.alert('Error: digite um curso.')
    }
  } catch (Exception) {
    window.alert('Error: adicione um curso.')
  }
})
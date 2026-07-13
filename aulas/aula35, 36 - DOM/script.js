const caixa1 = document.getElementById('caixa1');
const caixa2 = document.getElementById('caixa2');
const btn = document.getElementById('btn_copiar');
const todosCursos = [...document.querySelectorAll('.curso')];

todosCursos.forEach((el) => {
  el.addEventListener('click', (evt) => {
    evt.target.classList.toggle('selecionado');
  });
});

btn.addEventListener('click', () => {
  const cursosSelec = [...document.querySelectorAll('.selecionado')];

  cursosSelec.forEach((el) => {
    if (el.parentElement === caixa1) {
      caixa2.appendChild(el);
    } else {
      caixa1.appendChild(el);
    }

    el.classList.remove('selecionado');
  });
});
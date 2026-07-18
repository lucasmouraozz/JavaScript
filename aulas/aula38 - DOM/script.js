const caixaUm = window.document.querySelector('#caixa1');
const btn_c1 = [...window.document.querySelectorAll('.curso')];
const c1_2 = window.document.querySelector('#c1_2')

console.log(c1_2.parentNode.parentNode.children[4])

console.log(caixaUm.hasChildNodes())
console.log(btn_c1[0].hasChildNodes())
console.log(btn_c1[0].childNodes)

console.log(btn_c1[0].children.length > 0 ? 'Possui filhos' : 'Nâo possui filhos')

console.log(caixaUm.firstElementChild.innerHTML = 'text')
console.log(caixaUm.children[1].innerHTML = 'Lucas')

console.log(caixaUm.firstElementChild)
console.log(caixaUm.lastElementChild)
console.log(caixaUm.children)
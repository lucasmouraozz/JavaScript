// Operador this

function aluno(nome,nota) {
  this.nome = nome;
  this.nota = nota;

  this.arrow = function() {
    setTimeout(() => {
      console.log(this.nome)
      console.log(this.nota)
    })
  }

}

const all = new aluno('Lucas', 100)
all.arrow()